import axios from 'axios';
import { HBP_BASE_URL, API_BASE_URL } from '../utils/config';
import { storage } from '../utils/storage';

export interface LoginResponse {
  jwt_token?: string;
  jwt_expires_in?: number;
  refresh_token?: string;
  user?: {
    id: string;
    email: string;
    display_name: string;
    account: {
      default_role: string;
    };
  };
  mfa?: {
    ticket: string;
  };
}

export interface TrustedDeviceToken {
  token: string;
  user_id: string;
  email: string;
  expires_at: string;
}

const hbpClient = axios.create({ baseURL: HBP_BASE_URL });
const apiClient = axios.create({ baseURL: API_BASE_URL });

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const res = await hbpClient.post<LoginResponse>('/auth/login', { email, password });
    return res.data;
  },

  async verifyTotp(ticket: string, code: string): Promise<LoginResponse> {
    const res = await hbpClient.post<LoginResponse>('/auth/mfa/totp/verify', {
      ticket,
      code,
    });
    return res.data;
  },

  async refreshToken(refreshToken: string): Promise<LoginResponse> {
    const res = await hbpClient.post<LoginResponse>('/auth/token/refresh', {
      refresh_token: refreshToken,
    });
    return res.data;
  },

  async logout(refreshToken: string): Promise<void> {
    await hbpClient.post('/auth/logout', { refresh_token: refreshToken }).catch(() => {});
  },

  async validateTrustedDevice(
    token: string,
    userId: string,
  ): Promise<{ valid: boolean; refresh_token?: string; new_token?: string; expires_at?: string }> {
    const res = await apiClient.post('/auth/trusted-device/validate', { token, user_id: userId });
    return res.data;
  },

  async registerTrustedDevice(
    jwtToken: string,
    userId: string,
    email: string,
  ): Promise<TrustedDeviceToken> {
    const res = await apiClient.post(
      '/auth/trusted-device/register',
      { user_id: userId, email },
      { headers: { Authorization: `Bearer ${jwtToken}` } },
    );
    return res.data;
  },

  decodeJwt(token: string): Record<string, unknown> | null {
    try {
      const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join(''),
      );
      return JSON.parse(json);
    } catch {
      return null;
    }
  },

  getRoleFromToken(token: string): string | null {
    const payload = authService.decodeJwt(token);
    if (!payload) return null;
    const claims = payload['https://hasura.io/jwt/claims'] as Record<string, unknown> | undefined;
    return (claims?.['x-hasura-default-role'] as string) ?? null;
  },

  getUserIdFromToken(token: string): string | null {
    const payload = authService.decodeJwt(token);
    if (!payload) return null;
    const claims = payload['https://hasura.io/jwt/claims'] as Record<string, unknown> | undefined;
    return (claims?.['x-hasura-user-id'] as string) ?? null;
  },

  isTokenExpired(token: string): boolean {
    const payload = authService.decodeJwt(token);
    if (!payload?.exp) return true;
    return (payload.exp as number) * 1000 < Date.now();
  },

  async persistSession(data: LoginResponse): Promise<void> {
    if (data.jwt_token) await storage.set(storage.keys.JWT_TOKEN, data.jwt_token);
    if (data.refresh_token) await storage.set(storage.keys.REFRESH_TOKEN, data.refresh_token);
    if (data.user) await storage.setJson(storage.keys.USER_DATA, data.user);
  },

  async clearSession(): Promise<void> {
    await storage.clear();
  },
};
