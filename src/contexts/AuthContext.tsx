import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { authService } from '@services/authService';

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
  
  // Authentication methods
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, displayName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signInWithBiometric: () => Promise<void>;
  signOut: () => Promise<void>;
  
  // Admin methods
  signInAsAdmin: (email: string, password: string) => Promise<void>;
  
  // Profile methods
  updateProfile: (updates: Partial<User>) => Promise<void>;
  
  // Preference methods
  setStaySignedIn: (value: boolean) => Promise<void>;
  
  // Utility methods
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [staySignedIn, setStaySignedInState] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      setIsLoading(true);
      
      // Load 'stay signed in' preference
      const staySignedInPref = await AsyncStorage.getItem('staySignedIn');
      const shouldStaySignedIn = staySignedInPref !== null ? JSON.parse(staySignedInPref) : true;
      setStaySignedInState(shouldStaySignedIn);
      
      // Check for stored auth state only if user prefers to stay signed in
      if (shouldStaySignedIn) {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }
      
      // Set up Firebase auth state listener
      const unsubscribe = authService.onAuthStateChanged(async (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          const userData = await createUserFromFirebaseUser(firebaseUser);
          setUser(userData);
          
          // Only store user data if stay signed in is enabled
          if (staySignedIn) {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
          }
        } else {
          setUser(null);
          await AsyncStorage.removeItem('user');
        }
      });

      return unsubscribe;
    } catch (error) {
      console.error('Auth initialization error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createUserFromFirebaseUser = async (firebaseUser: FirebaseUser): Promise<User> => {
    // Check if user is admin (you can customize this logic)
    const isAdmin = firebaseUser.email === 'admin@accuheal.com';
    
    // Get stored language preference or default to 'en'
    const storedLanguage = await AsyncStorage.getItem('preferredLanguage');
    
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      isAdmin,
      preferredLanguage: (storedLanguage as 'en' | 'hi') || 'en',
      createdAt: new Date(firebaseUser.metadata.creationTime || Date.now()),
    };
  };

  const signInWithEmail = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.signInWithEmailAndPassword(email, password);
      // User state will be updated via onAuthStateChanged
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUpWithEmail = async (email: string, password: string, displayName: string): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.createUserWithEmailAndPassword(email, password, displayName);
      // User state will be updated via onAuthStateChanged
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.signInWithGoogle();
      // User state will be updated via onAuthStateChanged
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithApple = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.signInWithApple();
      // User state will be updated via onAuthStateChanged
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithBiometric = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.signInWithBiometric();
      // User state will be updated via onAuthStateChanged
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signInAsAdmin = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      await authService.signInAsAdmin(email, password);
      // User state will be updated via onAuthStateChanged
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      console.log('AuthContext: Starting sign out process');
      setIsLoading(true);
      console.log('AuthContext: Calling authService.signOut()');
      await authService.signOut();
      console.log('AuthContext: authService.signOut() completed');
      console.log('AuthContext: Setting user to null');
      setUser(null);
      console.log('AuthContext: Removing user from AsyncStorage');
      await AsyncStorage.removeItem('user');
      
      // If user doesn't want to stay signed in, clear the preference
      if (!staySignedIn) {
        console.log('AuthContext: Removing staySignedIn preference');
        await AsyncStorage.removeItem('staySignedIn');
      }
      console.log('AuthContext: Sign out process completed successfully');
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
      
      // If turning off stay signed in and user is authenticated, clear stored data
      if (!value && user) {
        await AsyncStorage.removeItem('user');
      }
      
      // If turning on stay signed in and user is authenticated, store user data
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
      
      // Update language preference separately
      if (updates.preferredLanguage) {
        await AsyncStorage.setItem('preferredLanguage', updates.preferredLanguage);
      }
    } catch (error) {
      throw error;
    }
  };

  const refreshUser = async (): Promise<void> => {
    try {
      const currentUser = authService.getCurrentUser();
      if (currentUser) {
        const userData = await createUserFromFirebaseUser(currentUser);
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Error refreshing user:', error);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    staySignedIn,
    signInWithEmail,
    signUpWithEmail,
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