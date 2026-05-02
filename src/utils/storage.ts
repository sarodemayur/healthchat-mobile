import * as SecureStore from 'expo-secure-store';

const KEYS = {
  JWT_TOKEN: 'hc_jwt_token',
  REFRESH_TOKEN: 'hc_refresh_token',
  TRUSTED_DEVICE: 'hc_td_token',
  USER_DATA: 'hc_user_data',
} as const;

export const storage = {
  keys: KEYS,

  async set(key: string, value: string): Promise<void> {
    await SecureStore.setItemAsync(key, value);
  },

  async get(key: string): Promise<string | null> {
    return SecureStore.getItemAsync(key);
  },

  async remove(key: string): Promise<void> {
    await SecureStore.deleteItemAsync(key);
  },

  async setJson<T>(key: string, value: T): Promise<void> {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  },

  async getJson<T>(key: string): Promise<T | null> {
    const raw = await SecureStore.getItemAsync(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  },

  async clear(): Promise<void> {
    await Promise.all(Object.values(KEYS).map((k) => SecureStore.deleteItemAsync(k)));
  },
};
