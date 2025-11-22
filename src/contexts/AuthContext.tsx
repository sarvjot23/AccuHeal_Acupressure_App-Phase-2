import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth as useClerkAuth, useUser, useSignIn, useSignUp, useOAuth } from '@clerk/clerk-expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { Platform } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isAdmin: boolean;
  preferredLanguage: 'en' | 'hi';
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  staySignedIn: boolean;
  pendingVerification: boolean;
  pendingVerificationEmail: string | null;
  
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, displayName: string) => Promise<void>;
  verifyEmail: (code: string) => Promise<void>;
  resendVerificationEmail: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signInWithBiometric: () => Promise<void>;
  signOut: () => Promise<void>;
  
  signInAsAdmin: (email: string, password: string) => Promise<void>;
  
  updateProfile: (updates: Partial<User>) => Promise<void>;
  
  setStaySignedIn: (value: boolean) => Promise<void>;
  
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { isLoaded: clerkLoaded, userId, isSignedIn, signOut: clerkSignOut } = useClerkAuth();
  const { user: clerkUser } = useUser();
  const { signIn, setActive: setActiveSignIn } = useSignIn();
  const { signUp, setActive: setActiveSignUp } = useSignUp();
  const { startOAuthFlow: startGoogleOAuth } = useOAuth({ strategy: 'oauth_google' });
  const { startOAuthFlow: startAppleOAuth } = useOAuth({ strategy: 'oauth_apple' });
  
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [staySignedIn, setStaySignedInState] = useState(true);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [pendingVerificationEmail, setPendingVerificationEmail] = useState<string | null>(null);

  const isAuthenticated = !!user && isSignedIn;

  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  useEffect(() => {
    initializeAuth();
  }, []);

  useEffect(() => {
    if (clerkLoaded) {
      syncClerkUser();
    }
  }, [clerkLoaded, isSignedIn, clerkUser]);

  const initializeAuth = async () => {
    try {
      const staySignedInPref = await AsyncStorage.getItem('staySignedIn');
      const shouldStaySignedIn = staySignedInPref !== null ? JSON.parse(staySignedInPref) : true;
      setStaySignedInState(shouldStaySignedIn);
      
      if (shouldStaySignedIn) {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const syncClerkUser = async () => {
    try {
      if (isSignedIn && clerkUser) {
        const userData = await createUserFromClerkUser();
        setUser(userData);
        
        if (staySignedIn) {
          await AsyncStorage.setItem('user', JSON.stringify(userData));
        }
      } else {
        setUser(null);
        await AsyncStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error syncing Clerk user:', error);
    }
  };

  const createUserFromClerkUser = async (): Promise<User> => {
    if (!clerkUser) {
      throw new Error('No Clerk user available');
    }

    const email = clerkUser.primaryEmailAddress?.emailAddress || null;
    const isAdmin = email === 'admin@accuheal.com';
    
    const storedLanguage = await AsyncStorage.getItem('preferredLanguage');
    
    return {
      uid: clerkUser.id,
      email,
      displayName: clerkUser.fullName || clerkUser.firstName || email?.split('@')[0] || 'User',
      photoURL: clerkUser.imageUrl || null,
      isAdmin,
      preferredLanguage: (storedLanguage as 'en' | 'hi') || 'en',
      createdAt: new Date(clerkUser.createdAt || Date.now()),
    };
  };

  const signInWithEmail = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      
      if (!signIn) {
        throw new Error('Sign in not ready');
      }

      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        await setActiveSignIn({ session: result.createdSessionId });
        await syncClerkUser();
      } else {
        throw new Error('Sign in incomplete. Please try again.');
      }
    } catch (error: any) {
      console.error('Email sign in error:', error);
      throw new Error(error.errors?.[0]?.message || 'Failed to sign in. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const signUpWithEmail = async (email: string, password: string, displayName: string): Promise<void> => {
    try {
      setIsLoading(true);
      
      if (!signUp) {
        throw new Error('Sign up not ready');
      }

      const [firstName, ...lastNameParts] = displayName.split(' ');
      const lastName = lastNameParts.join(' ');

      const result = await signUp.create({
        emailAddress: email,
        password,
        firstName: firstName || displayName,
        lastName: lastName || undefined,
      });

      if (result.status === 'complete') {
        await setActiveSignUp({ session: result.createdSessionId });
        await syncClerkUser();
        setPendingVerification(false);
        setPendingVerificationEmail(null);
      } else if (result.status === 'missing_requirements') {
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        setPendingVerification(true);
        setPendingVerificationEmail(email);
      }
    } catch (error: any) {
      console.error('Email sign up error:', error);
      throw new Error(error.errors?.[0]?.message || 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (code: string): Promise<void> => {
    try {
      setIsLoading(true);
      
      if (!signUp) {
        throw new Error('Sign up not ready');
      }

      if (!pendingVerification) {
        throw new Error('No pending email verification');
      }

      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === 'complete') {
        await setActiveSignUp({ session: result.createdSessionId });
        await syncClerkUser();
        setPendingVerification(false);
        setPendingVerificationEmail(null);
      } else {
        throw new Error('Verification incomplete. Please check the code and try again.');
      }
    } catch (error: any) {
      console.error('Email verification error:', error);
      throw new Error(error.errors?.[0]?.message || 'Failed to verify email. Please check the code.');
    } finally {
      setIsLoading(false);
    }
  };

  const resendVerificationEmail = async (): Promise<void> => {
    try {
      setIsLoading(true);
      
      if (!signUp) {
        throw new Error('Sign up not ready');
      }

      if (!pendingVerification) {
        throw new Error('No pending email verification');
      }

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
    } catch (error: any) {
      console.error('Resend verification error:', error);
      throw new Error(error.errors?.[0]?.message || 'Failed to resend verification email.');
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async (): Promise<void> => {
    try {
      setIsLoading(true);
      
      const redirectUrl = Linking.createURL('/', { scheme: 'accuheal' });
      
      const { createdSessionId, setActive } = await startGoogleOAuth({
        redirectUrl,
      });
      
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        await syncClerkUser();
      } else {
        throw new Error('Google sign in was cancelled or incomplete');
      }
    } catch (error: any) {
      console.error('Google sign in error:', error);
      
      if (error.code === 'ERR_CANCELED' || error.code === 'ERR_REQUEST_CANCELED') {
        throw new Error('Google sign in was cancelled');
      }
      
      throw new Error(error.errors?.[0]?.message || error.message || 'Failed to sign in with Google');
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithApple = async (): Promise<void> => {
    try {
      setIsLoading(true);

      if (Platform.OS !== 'ios') {
        throw new Error('Apple Sign-In is only available on iOS');
      }

      const redirectUrl = Linking.createURL('/', { scheme: 'accuheal' });
      
      const { createdSessionId, setActive } = await startAppleOAuth({
        redirectUrl,
      });
      
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        await syncClerkUser();
      } else {
        throw new Error('Apple sign in was cancelled or incomplete');
      }
    } catch (error: any) {
      console.error('Apple sign in error:', error);
      
      if (error.code === 'ERR_CANCELED' || error.code === 'ERR_REQUEST_CANCELED') {
        throw new Error('Apple sign in was cancelled');
      }
      
      throw new Error(error.errors?.[0]?.message || error.message || 'Failed to sign in with Apple');
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithBiometric = async (): Promise<void> => {
    throw new Error('Biometric authentication not yet implemented with Clerk');
  };

  const signInAsAdmin = async (email: string, password: string): Promise<void> => {
    await signInWithEmail(email, password);
    
    if (email !== 'admin@accuheal.com') {
      await signOut();
      throw new Error('Unauthorized: Admin access only');
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      console.log('AuthContext: Starting sign out process');
      setIsLoading(true);
      
      if (clerkSignOut) {
        await clerkSignOut();
      }
      
      setUser(null);
      setPendingVerification(false);
      setPendingVerificationEmail(null);
      await AsyncStorage.removeItem('user');
      
      if (!staySignedIn) {
        await AsyncStorage.removeItem('staySignedIn');
      }
      
      console.log('AuthContext: Sign out completed successfully');
    } catch (error) {
      console.error('AuthContext: Sign out error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const setStaySignedIn = async (value: boolean): Promise<void> => {
    try {
      setStaySignedInState(value);
      await AsyncStorage.setItem('staySignedIn', JSON.stringify(value));
      
      if (!value && user) {
        await AsyncStorage.removeItem('user');
      }
      
      if (value && user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
      }
    } catch (error) {
      console.error('Error setting stay signed in preference:', error);
    }
  };

  const updateProfile = async (updates: Partial<User>): Promise<void> => {
    try {
      if (!user) throw new Error('No user logged in');
      
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      
      if (updates.preferredLanguage) {
        await AsyncStorage.setItem('preferredLanguage', updates.preferredLanguage);
      }

      if (clerkUser && (updates.displayName || updates.photoURL)) {
        await clerkUser.update({
          firstName: updates.displayName?.split(' ')[0],
          lastName: updates.displayName?.split(' ').slice(1).join(' '),
        });
      }
    } catch (error) {
      throw error;
    }
  };

  const refreshUser = async (): Promise<void> => {
    try {
      if (clerkUser) {
        const userData = await createUserFromClerkUser();
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Error refreshing user:', error);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading: isLoading || !clerkLoaded,
    isAuthenticated: !!isAuthenticated,
    staySignedIn,
    pendingVerification,
    pendingVerificationEmail,
    signInWithEmail,
    signUpWithEmail,
    verifyEmail,
    resendVerificationEmail,
    signInWithGoogle,
    signInWithApple,
    signInWithBiometric,
    signInAsAdmin,
    signOut,
    updateProfile,
    setStaySignedIn,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
