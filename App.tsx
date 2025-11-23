import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Platform } from 'react-native';
import { ClerkProvider } from '@clerk/clerk-expo';

import './src/localization/i18n';
import MainNavigator from './src/navigation/MainNavigator';
import { LanguageProvider } from './src/contexts/LanguageContext';
import { AuthProvider } from './src/contexts/AuthContext';
import { SubscriptionProvider } from './src/contexts/SubscriptionContext';
import { FavoritesProvider } from './src/contexts/FavoritesContext';
import { SessionHistoryProvider } from './src/contexts/SessionHistoryContext';
import { TypesenseTest } from './src/components/TypesenseTest';
import { tokenCache } from './src/config/clerkTokenCache';

// Import web-specific styles
if (Platform.OS === 'web') {
  require('./web/index.css');
}

const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!clerkPublishableKey) {
  throw new Error(
    'Missing Clerk Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file'
  );
}

export default function App() {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider>
          <AuthProvider>
            <SubscriptionProvider>
              <FavoritesProvider>
                <SessionHistoryProvider>
                  <LanguageProvider>
                    <NavigationContainer>
                      <MainNavigator />
                      <StatusBar style="auto" />
                    </NavigationContainer>
                  </LanguageProvider>
                </SessionHistoryProvider>
              </FavoritesProvider>
            </SubscriptionProvider>
          </AuthProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
