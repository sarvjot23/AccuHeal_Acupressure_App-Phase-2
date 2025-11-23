import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { supabaseService } from '@services/supabaseService';
import type { UserRow } from '@services/supabase';
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

      try {
        // Ensure user document exists in Supabase
        const existingUser = await supabaseService.getUserByClerkId(clerkUser.uid);
        
        if (isCancelled) return;

        if (!existingUser) {
          // Create user if doesn't exist
          await supabaseService.upsertUser({
            clerk_user_id: clerkUser.uid,
            email: clerkUser.emailAddresses?.[0]?.emailAddress,
            is_premium: false,
            subscription_status: 'none',
          });
        }

        // Subscribe to real-time changes
        unsubscribe = supabaseService.subscribeToUserChanges(clerkUser.uid, (userData) => {
          if (isCancelled) return;
          
          if (userData) {
            updateSubscriptionState(userData);
          } else {
            setIsPremium(false);
            setSubscriptionStatus('none');
          }
          setIsLoading(false);
        });
      } catch (error) {
        if (isCancelled) return;
        
        console.error('❌ Subscription setup error:', error);
        setIsPremium(false);
        setSubscriptionStatus('none');
        setIsLoading(false);
      }
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

  const updateSubscriptionState = (userData: UserRow) => {
    const premium = userData.is_premium || false;
    const status = userData.subscription_status || 'none';
    
    let expiresAt: Date | null = null;
    if (userData.subscription_expires_at) {
      expiresAt = new Date(userData.subscription_expires_at);
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


  const checkSubscription = async () => {
    if (!clerkUser) {
      setIsLoading(false);
      return;
    }

    try {
      const user = await supabaseService.getUserByClerkId(clerkUser.uid);
      if (user) {
        updateSubscriptionState(user);
      }
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
    setIsLoading(false);
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
