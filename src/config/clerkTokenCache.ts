import * as SecureStore from 'expo-secure-store';

interface TokenCache {
  getToken: (key: string) => Promise<string | null>;
  saveToken: (key: string, token: string) => Promise<void>;
  clearToken?: (key: string) => Promise<void>;
}

const createTokenCache = (): TokenCache => {
  return {
    async getToken(key: string) {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`Clerk: Retrieved token for key "${key}"`);
        } else {
          console.log(`Clerk: No token found for key "${key}"`);
        }
        return item;
      } catch (error) {
        console.error('Clerk: Error retrieving token:', error);
        return null;
      }
    },
    async saveToken(key: string, token: string) {
      try {
        await SecureStore.setItemAsync(key, token);
        console.log(`Clerk: Saved token for key "${key}"`);
      } catch (error) {
        console.error('Clerk: Error saving token:', error);
      }
    },
    async clearToken(key: string) {
      try {
        await SecureStore.deleteItemAsync(key);
        console.log(`Clerk: Cleared token for key "${key}"`);
      } catch (error) {
        console.error('Clerk: Error clearing token:', error);
      }
    },
  };
};

export const tokenCache = createTokenCache();
