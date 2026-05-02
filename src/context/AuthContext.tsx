import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { authService, TrustedDeviceToken } from '../services/authService';
import { storage } from '../utils/storage';
import { UserRole } from '../types';
import { HASURA_GRAPHQL_ENDPOINT } from '../utils/config';

interface AuthUser {
  id: string;
  roleId: string | null;
  email: string;
  display_name: string;
  role: UserRole;
}

interface AuthContextValue {
  user: AuthUser | null;
  jwtToken: string | null;
  signedIn: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<LoginResult>;
  verifyTotp: (ticket: string, code: string) => Promise<void>;
  logout: () => Promise<void>;
  registerTrustedDevice: () => Promise<void>;
}

export interface LoginResult {
  success: boolean;
  mfaTicket?: string;
  error?: string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    try {
      const token = await storage.get(storage.keys.JWT_TOKEN);
      const refreshToken = await storage.get(storage.keys.REFRESH_TOKEN);

      if (!token && !refreshToken) {
        setLoading(false);
        return;
      }

      if (token && !authService.isTokenExpired(token)) {
        await hydrateFromToken(token);
        setLoading(false);
        return;
      }

      if (refreshToken) {
        const data = await authService.refreshToken(refreshToken);
        if (data.jwt_token) {
          await authService.persistSession(data);
          await hydrateFromToken(data.jwt_token);
        }
      }
    } catch {
      await authService.clearSession();
    } finally {
      setLoading(false);
    }
  }

  async function hydrateFromToken(token: string) {
    const role = authService.getRoleFromToken(token);
    const userId = authService.getUserIdFromToken(token);
    const userData = await storage.getJson<{ email: string; display_name: string }>(
      storage.keys.USER_DATA,
    );
    if (role && userId) {
      setJwtToken(token);
      setUser({
        id: userId,
        roleId: null,
        email: userData?.email ?? '',
        display_name: userData?.display_name ?? '',
        role: role as UserRole,
      });
      fetchRoleId(token, userId, role as UserRole);
    }
  }

  async function fetchRoleId(token: string, userId: string, role: UserRole) {
    const table = role === 'doctor' ? 'doctors' : role === 'nurse' || role === 'admin-nurse' ? 'nurses' : null;
    if (!table) return;
    try {
      const res = await axios.post(
        HASURA_GRAPHQL_ENDPOINT,
        { query: `{ ${table}(where: { user_id: { _eq: "${userId}" } }) { id } }` },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const roleId = res.data?.data?.[table]?.[0]?.id ?? null;
      setUser((prev) => prev ? { ...prev, roleId } : prev);
    } catch {
      // roleId stays null; appointments screen will pause query
    }
  }

  const login = useCallback(async (email: string, password: string): Promise<LoginResult> => {
    try {
      const res = await authService.login(email, password);

      if (res.mfa?.ticket) {
        // Check for trusted device before prompting 2FA
        const tdRaw = await storage.getJson<TrustedDeviceToken>(storage.keys.TRUSTED_DEVICE);
        if (tdRaw) {
          const { token, user_id, email: storedEmail, expires_at } = tdRaw;
          const isExpired = new Date(expires_at) < new Date();
          if (!isExpired && storedEmail === email) {
            try {
              const validate = await authService.validateTrustedDevice(token, user_id);
              if (validate.valid && validate.refresh_token) {
                const refreshed = await authService.refreshToken(validate.refresh_token);
                if (validate.new_token) {
                  await storage.setJson(storage.keys.TRUSTED_DEVICE, {
                    ...tdRaw,
                    token: validate.new_token,
                    expires_at: validate.expires_at,
                  });
                }
                await authService.persistSession(refreshed);
                if (refreshed.jwt_token) await hydrateFromToken(refreshed.jwt_token);
                return { success: true };
              }
            } catch {
              await storage.remove(storage.keys.TRUSTED_DEVICE);
            }
          } else {
            await storage.remove(storage.keys.TRUSTED_DEVICE);
          }
        }
        return { success: false, mfaTicket: res.mfa.ticket };
      }

      await authService.persistSession(res);
      if (res.jwt_token) await hydrateFromToken(res.jwt_token);
      return { success: true };
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Login failed. Please check your credentials.';
      return { success: false, error: message };
    }
  }, []);

  const verifyTotp = useCallback(async (ticket: string, code: string) => {
    const res = await authService.verifyTotp(ticket, code);
    await authService.persistSession(res);
    if (res.jwt_token) await hydrateFromToken(res.jwt_token);
  }, []);

  const logout = useCallback(async () => {
    const refreshToken = await storage.get(storage.keys.REFRESH_TOKEN);
    if (refreshToken) await authService.logout(refreshToken);
    await authService.clearSession();
    setUser(null);
    setJwtToken(null);
  }, []);

  const registerTrustedDevice = useCallback(async () => {
    if (!jwtToken || !user) return;
    const td = await authService.registerTrustedDevice(jwtToken, user.id, user.email);
    await storage.setJson(storage.keys.TRUSTED_DEVICE, td);
  }, [jwtToken, user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        jwtToken,
        signedIn: !!user,
        loading,
        login,
        verifyTotp,
        logout,
        registerTrustedDevice,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
