/**
 * SubscriptionScreen - Premium upgrade and subscription management
 * 
 * IMPLEMENTATION STATUS:
 * ✅ UI/UX design complete with professional pricing card
 * ✅ Subscription context and state management via Firebase
 * ✅ Content gating system (15 free points, 74 premium points)
 * ✅ Real-time subscription status monitoring
 * ⚠️  Stripe payment integration - REQUIRES BACKEND SETUP
 * 
 * TO COMPLETE STRIPE INTEGRATION:
 * 1. Create Stripe account at https://stripe.com
 * 2. Get API keys and create Price ID for $5/month subscription
 * 3. Add environment secrets: STRIPE_SECRET_KEY, VITE_STRIPE_PUBLIC_KEY, STRIPE_PRICE_ID
 * 4. Implement backend webhook endpoint (Firebase Cloud Functions recommended) to handle:
 *    - checkout.session.completed → Set user.isPremium = true in Firestore
 *    - customer.subscription.updated → Update subscription status
 *    - customer.subscription.deleted → Set user.isPremium = false
 * 5. Replace handleSubscribe() below with Stripe Checkout Session creation
 * 
 * CURRENT BEHAVIOR:
 * - Shows placeholder alert when "Upgrade to Premium" is clicked
 * - For testing, premium status can be manually set in Firebase Console
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { useSubscription } from '@contexts/SubscriptionContext';
import { Button } from '@components';

export const SubscriptionScreen = () => {
  const navigation = useNavigation();
  const { isPremium, subscriptionStatus } = useSubscription();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = async () => {
    setIsProcessing(true);
    
    // TODO: Implement Stripe Checkout integration
    // For now, show alert that this feature is coming soon
    Alert.alert(
      'Coming Soon',
      'Stripe payment integration will be added before deployment. For testing, premium access can be manually granted in Firebase.',
      [{ text: 'OK', onPress: () => setIsProcessing(false) }]
    );
  };

  if (isPremium) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <LinearGradient
          colors={[Colors.primary[500], Colors.primary[700]]}
          style={styles.premiumBanner}
        >
          <Ionicons name="checkmark-circle" size={64} color={Colors.text.inverse} />
          <Text style={styles.bannerTitle}>You're Premium!</Text>
          <Text style={styles.bannerSubtitle}>Thank you for your support</Text>
        </LinearGradient>

        <View style={styles.statusCard}>
          <Text style={styles.sectionTitle}>Subscription Status</Text>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Status:</Text>
            <Text style={[styles.statusValue, { color: Colors.success }]}>
              {subscriptionStatus.toUpperCase()}
            </Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Plan:</Text>
            <Text style={styles.statusValue}>Premium Monthly</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Price:</Text>
            <Text style={styles.statusValue}>$5.00/month</Text>
          </View>
        </View>

        <View style={styles.benefitsCard}>
          <Text style={styles.sectionTitle}>Your Premium Benefits</Text>
          {premiumFeatures.map((feature, index) => (
            <View key={index} style={styles.benefitRow}>
              <Ionicons name="checkmark-circle" size={24} color={Colors.primary[500]} />
              <Text style={styles.benefitText}>{feature}</Text>
            </View>
          ))}
        </View>

        <Button
          title="Manage Subscription"
          variant="outline"
          onPress={() => {
            Alert.alert('Manage Subscription', 'Stripe Customer Portal integration coming soon');
          }}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <LinearGradient
        colors={[Colors.primary[50], Colors.primary[100]]}
        style={styles.header}
      >
        <Ionicons name="sparkles" size={64} color={Colors.primary[600]} />
        <Text style={styles.headerTitle}>Upgrade to Premium</Text>
        <Text style={styles.headerSubtitle}>
          Unlock the full power of acupressure healing
        </Text>
      </LinearGradient>

      <View style={styles.pricingCard}>
        <View style={styles.priceHeader}>
          <Text style={styles.priceAmount}>$5</Text>
          <Text style={styles.pricePeriod}>/month</Text>
        </View>
        <Text style={styles.priceDescription}>Cancel anytime • No commitments</Text>

        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={handleSubscribe}
          disabled={isProcessing}
        >
          <LinearGradient
            colors={[Colors.primary[500], Colors.primary[700]]}
            style={styles.subscribeGradient}
          >
            <Text style={styles.subscribeText}>
              {isProcessing ? 'Processing...' : 'Start Free Trial'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.trialNote}>7 days free, then $5/month</Text>
      </View>

      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>What's Included</Text>
        {premiumFeatures.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <View style={styles.featureIcon}>
              <Ionicons name="checkmark" size={20} color={Colors.text.inverse} />
            </View>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <View style={styles.comparisonSection}>
        <Text style={styles.sectionTitle}>Free vs Premium</Text>
        <View style={styles.comparisonTable}>
          <View style={styles.comparisonRow}>
            <Text style={styles.comparisonFeature}>Acupressure Points</Text>
            <Text style={styles.comparisonFree}>15 points</Text>
            <Text style={styles.comparisonPremium}>89 points</Text>
          </View>
          <View style={styles.comparisonRow}>
            <Text style={styles.comparisonFeature}>Search & Filter</Text>
            <Text style={styles.comparisonFree}>Basic</Text>
            <Text style={styles.comparisonPremium}>Advanced</Text>
          </View>
          <View style={styles.comparisonRow}>
            <Text style={styles.comparisonFeature}>Recommendations</Text>
            <Text style={styles.comparisonFree}>—</Text>
            <Text style={styles.comparisonPremium}>✓</Text>
          </View>
          <View style={styles.comparisonRow}>
            <Text style={styles.comparisonFeature}>Offline Access</Text>
            <Text style={styles.comparisonFree}>—</Text>
            <Text style={styles.comparisonPremium}>✓</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const premiumFeatures = [
  'Access to all 89 classical TCM acupressure points',
  'Detailed anatomical illustrations and guidance',
  'Advanced search by symptoms, body parts & meridians',
  'Personalized treatment recommendations',
  'Favorites and session history tracking',
  'Offline access to all content',
  'No ads, ever',
  'Priority customer support',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafb',
  },
  content: {
    padding: Spacing.lg,
    paddingBottom: 90,
  },
  premiumBanner: {
    padding: Spacing.xl,
    borderRadius: BorderRadius['2xl'],
    alignItems: 'center',
    marginBottom: Spacing.xl,
    ...Shadows.lg,
  },
  bannerTitle: {
    ...Typography.h2,
    color: Colors.text.inverse,
    marginTop: Spacing.md,
  },
  bannerSubtitle: {
    ...Typography.body1,
    color: Colors.text.inverse,
    marginTop: Spacing.sm,
    opacity: 0.9,
  },
  header: {
    padding: Spacing.xl,
    borderRadius: BorderRadius['2xl'],
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  headerTitle: {
    ...Typography.h2,
    color: Colors.primary[700],
    marginTop: Spacing.md,
    textAlign: 'center',
  },
  headerSubtitle: {
    ...Typography.body1,
    color: Colors.primary[600],
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
  pricingCard: {
    backgroundColor: Colors.background.primary,
    padding: Spacing.xl,
    borderRadius: BorderRadius['2xl'],
    ...Shadows.md,
    marginBottom: Spacing.xl,
    alignItems: 'center',
  },
  priceHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: Spacing.sm,
  },
  priceAmount: {
    ...Typography.display,
    fontSize: 56,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  pricePeriod: {
    ...Typography.h4,
    color: Colors.text.secondary,
    marginLeft: Spacing.sm,
  },
  priceDescription: {
    ...Typography.body2,
    color: Colors.text.tertiary,
    marginBottom: Spacing.xl,
  },
  subscribeButton: {
    width: '100%',
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
    ...Shadows.md,
    marginBottom: Spacing.sm,
  },
  subscribeGradient: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  subscribeText: {
    ...Typography.button,
    color: Colors.text.inverse,
    fontSize: 18,
  },
  trialNote: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    textAlign: 'center',
  },
  statusCard: {
    backgroundColor: Colors.background.primary,
    padding: Spacing.lg,
    borderRadius: BorderRadius.xl,
    ...Shadows.sm,
    marginBottom: Spacing.lg,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  statusLabel: {
    ...Typography.body2,
    color: Colors.text.secondary,
  },
  statusValue: {
    ...Typography.body1,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  benefitsCard: {
    backgroundColor: Colors.background.primary,
    padding: Spacing.lg,
    borderRadius: BorderRadius.xl,
    ...Shadows.sm,
    marginBottom: Spacing.lg,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  benefitText: {
    ...Typography.body2,
    color: Colors.text.primary,
    flex: 1,
  },
  featuresSection: {
    backgroundColor: Colors.background.primary,
    padding: Spacing.lg,
    borderRadius: BorderRadius.xl,
    ...Shadows.sm,
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.h4,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  featureIcon: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    ...Typography.body2,
    color: Colors.text.primary,
    flex: 1,
  },
  comparisonSection: {
    backgroundColor: Colors.background.primary,
    padding: Spacing.lg,
    borderRadius: BorderRadius.xl,
    ...Shadows.sm,
  },
  comparisonTable: {
    gap: Spacing.sm,
  },
  comparisonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  comparisonFeature: {
    ...Typography.body2,
    color: Colors.text.primary,
    flex: 1,
  },
  comparisonFree: {
    ...Typography.body2,
    color: Colors.text.tertiary,
    width: 80,
    textAlign: 'center',
  },
  comparisonPremium: {
    ...Typography.body2,
    color: Colors.primary[600],
    fontWeight: '600',
    width: 80,
    textAlign: 'center',
  },
});

export default SubscriptionScreen;
