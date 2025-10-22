import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { useSubscription } from '@contexts/SubscriptionContext';
import { RootStackParamList } from '@types';

interface PremiumGateProps {
  children: ReactNode;
  isFree?: boolean;
  showPreview?: boolean;
  previewMessage?: string;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const PremiumGate: React.FC<PremiumGateProps> = ({
  children,
  isFree = false,
  showPreview = false,
  previewMessage = 'Upgrade to Premium to unlock this content',
}) => {
  const { isPremium, isLoading } = useSubscription();
  const navigation = useNavigation<NavigationProp>();

  // Show content if user is premium or content is free
  if (isPremium || isFree) {
    return <>{children}</>;
  }

  // Show loading state
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Checking subscription...</Text>
      </View>
    );
  }

  // Show premium gate
  return (
    <View style={styles.container}>
      {showPreview && (
        <View style={styles.previewContainer}>
          <View style={styles.blurOverlay}>
            {children}
          </View>
        </View>
      )}
      
      <LinearGradient
        colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.98)']}
        style={styles.gateCard}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="lock-closed" size={48} color={Colors.primary[500]} />
        </View>
        
        <Text style={styles.title}>Premium Content</Text>
        <Text style={styles.message}>{previewMessage}</Text>
        
        <TouchableOpacity
          style={styles.upgradeButton}
          onPress={() => navigation.navigate('Subscription' as any)}
        >
          <LinearGradient
            colors={[Colors.primary[400], Colors.primary[600]]}
            style={styles.buttonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="sparkles" size={20} color={Colors.text.inverse} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Upgrade to Premium</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.featuresContainer}>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color={Colors.primary[500]} />
            <Text style={styles.featureText}>Access all 89 acupressure points</Text>
          </View>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color={Colors.primary[500]} />
            <Text style={styles.featureText}>Advanced search and filtering</Text>
          </View>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color={Colors.primary[500]} />
            <Text style={styles.featureText}>Personalized recommendations</Text>
          </View>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={20} color={Colors.primary[500]} />
            <Text style={styles.featureText}>Only $5/month</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  loadingText: {
    ...Typography.body1,
    color: Colors.text.secondary,
  },
  previewContainer: {
    width: '100%',
    marginBottom: Spacing.xl,
  },
  blurOverlay: {
    opacity: 0.3,
  },
  gateCard: {
    width: '100%',
    maxWidth: 400,
    padding: Spacing.xl,
    borderRadius: BorderRadius['2xl'],
    ...Shadows.lg,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  title: {
    ...Typography.h3,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  message: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  upgradeButton: {
    width: '100%',
    marginBottom: Spacing.xl,
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
    ...Shadows.md,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },
  buttonIcon: {
    marginRight: Spacing.sm,
  },
  buttonText: {
    ...Typography.button,
    color: Colors.text.inverse,
    fontSize: 16,
  },
  featuresContainer: {
    width: '100%',
    gap: Spacing.md,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  featureText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    flex: 1,
  },
});
