import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@services/firebase';
import { User } from '@types';

interface SubscriptionContextType {
  isPremium: boolean;
  isLoading: boolean;
  subscriptionStatus: 'active' | 'canceled' | 'past_due' | 'trialing' | 'none';
  subscriptionExpiresAt: Date | null;
  checkSubscription: (user?: FirebaseUser | null) => Promise<void>;
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
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'active' | 'canceled' | 'past_due' | 'trialing' | 'none'>('none');
  const [subscriptionExpiresAt, setSubscriptionExpiresAt] = useState<Date | null>(null);
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        // Ensure user document exists before setting up snapshot listener
        await ensureUserDocument(user);
      } else {
        setIsPremium(false);
        setSubscriptionStatus('none');
        setSubscriptionExpiresAt(null);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Listen to subscription changes in real-time
  useEffect(() => {
    if (!currentUser) return;

    const userDocRef = doc(db, 'users', currentUser.uid);
    const unsubscribe = onSnapshot(
      userDocRef, 
      (doc) => {
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
        console.error('❌ Subscription snapshot error:', error);
        // On error, default to free tier and stop loading
        setIsPremium(false);
        setSubscriptionStatus('none');
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  const updateSubscriptionState = (userData: User) => {
    const premium = userData.isPremium || false;
    const status = userData.subscriptionStatus || 'none';
    const expiresAt = userData.subscriptionExpiresAt 
      ? new Date(userData.subscriptionExpiresAt as any)
      : null;

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
  const ensureUserDocument = async (user: FirebaseUser) => {
    setIsLoading(true);
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Create user profile if it doesn't exist
        const newUser: Partial<User> = {
          id: user.uid,
          preferredLanguage: 'en',
          completedSessions: [],
          favorites: [],
          createdAt: new Date(),
          isPremium: false,
          subscriptionStatus: 'none',
        };
        await setDoc(userDocRef, newUser);
        console.log('✅ Created new user document for', user.uid);
      }
      
      // User doc now guaranteed to exist; onSnapshot will trigger
    } catch (error) {
      console.error('❌ Error ensuring user document:', error);
      // Fallback: set default free tier state
      setIsPremium(false);
      setSubscriptionStatus('none');
      setIsLoading(false);
    }
  };

  const checkSubscription = async (user?: FirebaseUser | null) => {
    const userToCheck = user || currentUser;
    if (!userToCheck) {
      setIsLoading(false);
      return;
    }

    await ensureUserDocument(userToCheck);
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
