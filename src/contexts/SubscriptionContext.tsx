import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { doc, getDoc, setDoc, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '@services/firebase';
import { User } from '@types';
import { useAuth } from './AuthContext';

interface SubscriptionContextType {
  isPremium: boolean;
  isLoading: boolean;
  subscriptionStatus: 'active' | 'canceled' | 'past_due' | 'trialing' | 'none';
  subscriptionExpiresAt: Date | null;
  checkSubscription: () => Promise<void>;
  upgradeToPremium: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within SubscriptionProvider');
  }
  return context;
};

interface SubscriptionProviderProps {
  children: ReactNode;
}

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({ children }) => {
  const { user: clerkUser, isAuthenticated } = useAuth();
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'active' | 'canceled' | 'past_due' | 'trialing' | 'none'>('none');
  const [subscriptionExpiresAt, setSubscriptionExpiresAt] = useState<Date | null>(null);

  // Single effect that handles auth changes, doc creation, and snapshot subscription
  useEffect(() => {
    let unsubscribe: (() => void) | null = null;
    let isCancelled = false; // Guard against stale updates after unmount/user change

    const setupSubscription = async () => {
      // Not authenticated: reset to free tier
      if (!isAuthenticated || !clerkUser) {
        setIsPremium(false);
        setSubscriptionStatus('none');
        setSubscriptionExpiresAt(null);
        setIsLoading(false);
        return;
      }

      // Ensure user document exists before subscribing
      const success = await ensureUserDocument(clerkUser.uid);
      
      // Check if component unmounted or user changed during ensureUserDocument
      if (isCancelled) return;

      if (!success) {
        // Document creation failed; default to free tier
        console.error('⚠️ Failed to ensure user document; defaulting to free tier');
        setIsPremium(false);
        setSubscriptionStatus('none');
        setIsLoading(false);
        return;
      }

      // Document ensured; now attach real-time listener
      const userDocRef = doc(db, 'users', clerkUser.uid);
      unsubscribe = onSnapshot(
        userDocRef,
        (doc) => {
          if (isCancelled) return; // Ignore updates if effect was cancelled
          
          if (doc.exists()) {
            const userData = doc.data() as User;
            updateSubscriptionState(userData);
          } else {
            // Doc doesn't exist (edge case); set free tier defaults
            console.warn('⚠️ User document missing in snapshot');
            setIsPremium(false);
            setSubscriptionStatus('none');
          }
          setIsLoading(false);
        },
        (error) => {
          if (isCancelled) return;
          
          console.error('❌ Subscription snapshot error:', error);
          // On error, default to free tier and stop loading
          setIsPremium(false);
          setSubscriptionStatus('none');
          setIsLoading(false);
        }
      );
    };

    setupSubscription();

    // Cleanup: unsubscribe from snapshot and mark as cancelled
    return () => {
      isCancelled = true;
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [isAuthenticated, clerkUser]);

  const updateSubscriptionState = (userData: User) => {
    const premium = userData.isPremium || false;
    const status = userData.subscriptionStatus || 'none';
    
    // Handle Firestore Timestamp conversion properly
    let expiresAt: Date | null = null;
    if (userData.subscriptionExpiresAt) {
      if (userData.subscriptionExpiresAt instanceof Timestamp) {
        expiresAt = userData.subscriptionExpiresAt.toDate();
      } else if (userData.subscriptionExpiresAt instanceof Date) {
        expiresAt = userData.subscriptionExpiresAt;
      } else if (typeof userData.subscriptionExpiresAt === 'object' && 'seconds' in userData.subscriptionExpiresAt) {
        // Handle plain object with seconds field (from Firestore serialization)
        expiresAt = new Date((userData.subscriptionExpiresAt as any).seconds * 1000);
      }
    }

    setIsPremium(premium);
    setSubscriptionStatus(status);
    setSubscriptionExpiresAt(expiresAt);

    // Check if subscription has expired
    if (expiresAt && expiresAt < new Date() && status === 'active') {
      setIsPremium(false);
      setSubscriptionStatus('canceled');
    }
  };

  // Ensure user document exists in Firestore (create if missing)
  // Returns true on success, false on failure
  const ensureUserDocument = async (userId: string): Promise<boolean> => {
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Create user profile if it doesn't exist (use Firestore Timestamp for consistency)
        const newUser: Partial<User> = {
          id: userId,
          preferredLanguage: 'en',
          completedSessions: [],
          favorites: [],
          createdAt: Timestamp.now(),
          isPremium: false,
          subscriptionStatus: 'none',
        };
        await setDoc(userDocRef, newUser);
        console.log('✅ Created new user document for Clerk user:', userId);
      }
      
      // User doc now guaranteed to exist
      return true;
    } catch (error) {
      console.error('❌ Error ensuring user document:', error);
      // Note: Transient failures leave user on free tier until reload
      // Future enhancement: Add retry logic with exponential backoff
      return false;
    }
  };

  const checkSubscription = async () => {
    if (!clerkUser) {
      setIsLoading(false);
      return;
    }

    const success = await ensureUserDocument(clerkUser.uid);
    if (!success) {
      // Document creation failed; default to free tier
      setIsPremium(false);
      setSubscriptionStatus('none');
      setIsLoading(false);
    }
  };

  const upgradeToPremium = () => {
    // This will be implemented with Stripe integration
    // For now, navigate to subscription screen
    console.log('Navigate to subscription screen');
  };

  const value: SubscriptionContextType = {
    isPremium,
    isLoading,
    subscriptionStatus,
    subscriptionExpiresAt,
    checkSubscription,
    upgradeToPremium,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};
