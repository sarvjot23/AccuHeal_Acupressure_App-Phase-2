import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser,
  UserCredential,
} from 'firebase/auth';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';

// Google Sign-In
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Apple Sign-In (iOS/Web only)
import * as AppleAuthentication from 'expo-apple-authentication';

import app from './firebase';

class AuthService {
  private auth = getAuth(app);

  constructor() {
    this.initializeGoogleSignIn();
  }

  // Initialize Google Sign-In configuration
  private initializeGoogleSignIn() {
    // Only configure for mobile platforms
    if (Platform.OS !== 'web') {
      try {
        GoogleSignin.configure({
          webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || '436063371001-bdh8viqpuu7kcj33u8ka3iho9d8n16vi.apps.googleusercontent.com',
          offlineAccess: true,
        });
      } catch (error) {
        console.warn('Failed to configure Google Sign-In:', error);
      }
    }
  }

  // Firebase Auth state observer
  onAuthStateChanged(callback: (user: FirebaseUser | null) => void) {
    return onAuthStateChanged(this.auth, callback);
  }

  // Get current user
  getCurrentUser(): FirebaseUser | null {
    return this.auth.currentUser;
  }

  // Email/Password Sign In
  async signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential;
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Email/Password Sign Up
  async createUserWithEmailAndPassword(
    email: string, 
    password: string, 
    displayName: string
  ): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      
      // Update profile with display name
      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName });
      }
      
      return userCredential;
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Google Sign-In
  async signInWithGoogle(): Promise<UserCredential | null> {
    try {
      if (Platform.OS === 'web') {
        // Web platform: Use Firebase Auth GoogleAuthProvider popup
        const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
        const provider = new GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        
        const userCredential = await signInWithPopup(this.auth, provider);
        return userCredential;
      } else {
        // Mobile platforms: Use react-native-google-signin
        try {
          // Check if device supports Google Play Services
          await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
          
          // Get user info from Google
          const googleUser = await GoogleSignin.signIn();
          
          if (!googleUser.idToken) {
            throw new Error('No ID token received from Google');
          }
          
          // Create Firebase credential with the token
          const { GoogleAuthProvider, signInWithCredential } = await import('firebase/auth');
          const googleCredential = GoogleAuthProvider.credential(googleUser.idToken);
          
          // Sign in with Firebase
          const userCredential = await signInWithCredential(this.auth, googleCredential);
          return userCredential;
        } catch (googleError: any) {
          // If Google Sign-In is not properly configured, fall back to web-style auth
          if (googleError.code === 'DEVELOPER_ERROR' || googleError.message?.includes('DEVELOPER_ERROR')) {
            console.warn('Google Sign-In not properly configured, falling back to web auth');
            const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
            const provider = new GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            
            const userCredential = await signInWithPopup(this.auth, provider);
            return userCredential;
          }
          throw googleError;
        }
      }
    } catch (error: any) {
      if (error.code === 'SIGN_IN_CANCELLED' || error.code === 'auth/popup-closed-by-user') {
        throw new Error('Google sign-in was cancelled');
      }
      if (error.code === 'DEVELOPER_ERROR') {
        throw new Error('Google Sign-In configuration error. Please contact support.');
      }
      throw this.handleAuthError(error);
    }
  }

  // Apple Sign-In (iOS/Web only)
  async signInWithApple(): Promise<UserCredential | null> {
    try {
      if (Platform.OS === 'web') {
        // Web platform: Use Firebase Auth OAuthProvider for Apple
        const { OAuthProvider, signInWithPopup } = await import('firebase/auth');
        const provider = new OAuthProvider('apple.com');
        provider.addScope('email');
        provider.addScope('name');
        
        const userCredential = await signInWithPopup(this.auth, provider);
        return userCredential;
      } else if (Platform.OS === 'ios') {
        // iOS platform: Use expo-apple-authentication
        
        // Check if Apple Sign-In is available
        const isAvailable = await AppleAuthentication.isAvailableAsync();
        if (!isAvailable) {
          throw new Error('Apple Sign-In is not available on this device');
        }

        // Request Apple Sign-In
        const credential = await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
        });

        if (!credential.identityToken) {
          throw new Error('Apple Sign-In failed - no identity token received');
        }

        // Create Firebase credential
        const { OAuthProvider, signInWithCredential } = await import('firebase/auth');
        const provider = new OAuthProvider('apple.com');
        const appleCredential = provider.credential({
          idToken: credential.identityToken,
          rawNonce: credential.realUserStatus === AppleAuthentication.AppleAuthenticationUserDetectionStatus.REAL ? 'nonce' : undefined,
        });

        // Sign in with Firebase
        const userCredential = await signInWithCredential(this.auth, appleCredential);
        
        // Update profile if we have name info from Apple
        if (credential.fullName && userCredential.user && !userCredential.user.displayName) {
          const displayName = `${credential.fullName.givenName || ''} ${credential.fullName.familyName || ''}`.trim();
          if (displayName) {
            await updateProfile(userCredential.user, { displayName });
          }
        }

        return userCredential;
      } else {
        throw new Error('Apple Sign-In is only available on iOS and Web');
      }
    } catch (error: any) {
      if (error.code === 'ERR_REQUEST_CANCELED' || error.code === 'auth/popup-closed-by-user') {
        throw new Error('Apple sign-in was cancelled');
      }
      throw this.handleAuthError(error);
    }
  }

  // Biometric Sign-In
  async signInWithBiometric(): Promise<void> {
    try {
      if (Platform.OS === 'web') {
        throw new Error('Biometric authentication is not available on web');
      }

      // Check if biometric hardware is available
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        throw new Error('Biometric hardware not available');
      }

      // Check if biometrics are enrolled
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        throw new Error('No biometric credentials enrolled');
      }

      // Get stored credentials
      const storedCredentials = await SecureStore.getItemAsync('biometric_credentials');
      if (!storedCredentials) {
        throw new Error('No biometric credentials stored. Please login with email/password first.');
      }

      // Authenticate with biometrics
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with biometrics to access AccuHeal',
        fallbackLabel: 'Use passcode',
        disableDeviceFallback: false,
      });

      if (!result.success) {
        throw new Error('Biometric authentication failed');
      }

      // Parse stored credentials and sign in
      const { email, password } = JSON.parse(storedCredentials);
      await this.signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Store credentials for biometric login
  async storeBiometricCredentials(email: string, password: string): Promise<void> {
    try {
      if (Platform.OS === 'web') return; // Skip on web

      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      
      if (hasHardware && isEnrolled) {
        const credentials = JSON.stringify({ email, password });
        await SecureStore.setItemAsync('biometric_credentials', credentials);
      }
    } catch (error) {
      console.warn('Failed to store biometric credentials:', error);
    }
  }

  // Admin Sign-In (special handling)
  async signInAsAdmin(email: string, password: string): Promise<UserCredential> {
    try {
      // Validate admin email format
      if (!email.includes('@accuheal.com')) {
        throw new Error('Invalid admin email domain');
      }

      const userCredential = await this.signInWithEmailAndPassword(email, password);
      
      // Mark as admin session
      await AsyncStorage.setItem('isAdminSession', 'true');
      
      return userCredential;
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Sign Out
  async signOut(): Promise<void> {
    try {
      console.log('authService: Starting sign out process');
      
      // Sign out from Firebase
      console.log('authService: Signing out from Firebase');
      await firebaseSignOut(this.auth);
      console.log('authService: Firebase sign out completed');
      
      // Sign out from Google if signed in
      try {
        console.log('authService: Attempting Google sign out');
        await GoogleSignin.signOut();
        console.log('authService: Google sign out completed');
      } catch (error) {
        console.log('authService: Google sign out error (ignoring):', error);
      }
      
      // Clear stored data
      console.log('authService: Clearing stored data');
      await AsyncStorage.multiRemove(['user', 'isAdminSession']);
      console.log('authService: AsyncStorage cleared');
      
      try {
        await SecureStore.deleteItemAsync('biometric_credentials');
        console.log('authService: SecureStore cleared');
      } catch (error) {
        console.log('authService: SecureStore clear error (ignoring):', error);
      }
      
      console.log('authService: Sign out process completed successfully');
    } catch (error: any) {
      console.error('authService: Sign out error:', error);
      throw this.handleAuthError(error);
    }
  }

  // Check if current session is admin
  async isAdminSession(): Promise<boolean> {
    try {
      const isAdmin = await AsyncStorage.getItem('isAdminSession');
      return isAdmin === 'true';
    } catch (error) {
      return false;
    }
  }

  // Handle authentication errors
  private handleAuthError(error: any): Error {
    const errorCode = error.code || error.message;
    console.error('Auth Error:', error);
    
    switch (errorCode) {
      case 'auth/user-not-found':
        return new Error('No account found with this email address');
      case 'auth/wrong-password':
        return new Error('Incorrect password');
      case 'auth/email-already-in-use':
        return new Error('An account with this email already exists');
      case 'auth/weak-password':
        return new Error('Password should be at least 6 characters');
      case 'auth/invalid-email':
        return new Error('Invalid email address');
      case 'auth/too-many-requests':
        return new Error('Too many failed attempts. Please try again later');
      case 'auth/network-request-failed':
        return new Error('Network error. Please check your connection');
      case 'auth/popup-blocked':
        return new Error('Popup was blocked by browser. Please allow popups and try again.');
      case 'auth/unauthorized-domain':
        return new Error('This domain is not authorized. Please contact support.');
      case 'auth/configuration-not-found':
        return new Error('Google Sign-In is not configured for this app. Please use email sign-up instead.');
      case 'auth/invalid-api-key':
        return new Error('Firebase configuration error. Please contact support.');
      default:
        return new Error(error.message || 'Authentication failed');
    }
  }

  // Reset password
  async resetPassword(email: string): Promise<void> {
    try {
      const { sendPasswordResetEmail } = await import('firebase/auth');
      await sendPasswordResetEmail(this.auth, email);
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Update user profile
  async updateUserProfile(updates: { displayName?: string; photoURL?: string }): Promise<void> {
    try {
      const user = this.getCurrentUser();
      if (!user) throw new Error('No user logged in');
      
      await updateProfile(user, updates);
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }
}

export const authService = new AuthService();
export default authService;