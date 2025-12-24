/**
 * HeroSection Component
 *
 * Animated hero section for HomeScreen (Headspace-inspired).
 * Features:
 * - Gradient background (green shades)
 * - Time-based greeting (Good morning/afternoon/evening)
 * - Wellness score ring with animation
 * - Quick start CTA button
 * - Clean, welcoming design
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import {
  Colors,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
  AnimationPresets,
} from '@constants';
import { Button } from './Button';

export interface HeroSectionProps {
  /** User's display name (optional) */
  userName?: string;

  /** Wellness score 0-100 (based on session history) */
  wellnessScore?: number;

  /** Callback when quick start button is pressed */
  onQuickStartPress: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  userName,
  wellnessScore = 0,
  onQuickStartPress,
}) => {
  const { t } = useTranslation();
  const scoreProgress = useSharedValue(0);

  // Animate wellness score on mount
  useEffect(() => {
    scoreProgress.value = withTiming(wellnessScore / 100, {
      duration: 1500,
      easing: Easing.out(Easing.cubic),
    });
  }, [wellnessScore]);

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t('home.goodMorning');
    if (hour < 18) return t('home.goodAfternoon');
    return t('home.goodEvening');
  };

  // Animated style for wellness score ring
  const animatedRingStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scoreProgress.value > 0 ? 1 : 0.8) }],
      opacity: scoreProgress.value,
    };
  });

  return (
    <LinearGradient
      colors={[Colors.primary[500], Colors.primary[600], Colors.primary[700]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Decorative circles */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />

      {/* Content */}
      <View style={styles.content}>
        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Ionicons name="sunny" size={24} color={Colors.text.inverse} style={styles.greetingIcon} />
          <Text style={styles.greeting}>{getGreeting()}</Text>
        </View>

        {userName && (
          <Text style={styles.userName}>{userName}!</Text>
        )}

        <Text style={styles.tagline}>
          {t('home.tagline')}
        </Text>

        {/* Wellness Score Ring */}
        {wellnessScore > 0 && (
          <Animated.View style={[styles.wellnessContainer, animatedRingStyle]}>
            <View style={styles.wellnessRing}>
              <View style={styles.wellnessInner}>
                <Text style={styles.wellnessScore}>{Math.round(wellnessScore)}%</Text>
                <Text style={styles.wellnessLabel}>Wellness</Text>
              </View>
            </View>
            {/* Progress arc would go here - simplified for now */}
          </Animated.View>
        )}

        {/* Quick Start Button */}
        <Button
          title={t('home.startYourPractice')}
          onPress={onQuickStartPress}
          variant="outline"
          size="lg"
          fullWidth
          style={styles.quickStartButton}
          textStyle={styles.quickStartButtonText}
          icon={<Ionicons name="play-circle-outline" size={20} color="#FFFFFF" />}
        />

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Ionicons name="finger-print-outline" size={20} color={Colors.text.inverse} />
            <Text style={styles.statText}>{t('home.points89')}</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Ionicons name="language-outline" size={20} color={Colors.text.inverse} />
            <Text style={styles.statText}>{t('home.bilingual')}</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Ionicons name="book-outline" size={20} color={Colors.text.inverse} />
            <Text style={styles.statText}>{t('home.tcmBased')}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius['2xl'],
    padding: Spacing.xl,
    marginBottom: Spacing.xl,
    ...Shadows.lg,
    overflow: 'hidden',
    position: 'relative',
  } as ViewStyle,

  decorativeCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    top: -50,
    right: -50,
  } as ViewStyle,

  decorativeCircle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    bottom: -30,
    left: -30,
  } as ViewStyle,

  content: {
    zIndex: 1,
    alignItems: 'center',
  } as ViewStyle,

  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  } as ViewStyle,

  greetingIcon: {
    marginRight: Spacing.xs,
  } as ViewStyle,

  greeting: {
    ...Typography.h3,
    color: Colors.text.inverse,
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.9,
  } as TextStyle,

  userName: {
    ...Typography.h1,
    color: Colors.text.inverse,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: Spacing.sm,
    textAlign: 'center',
  } as TextStyle,

  tagline: {
    ...Typography.body1,
    color: Colors.text.inverse,
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.85,
    marginBottom: Spacing.xl,
    maxWidth: 280,
    lineHeight: 22,
  } as TextStyle,

  wellnessContainer: {
    marginBottom: Spacing.xl,
  } as ViewStyle,

  wellnessRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  } as ViewStyle,

  wellnessInner: {
    alignItems: 'center',
  } as ViewStyle,

  wellnessScore: {
    ...Typography.display,
    fontSize: 36,
    fontWeight: '700',
    color: Colors.text.inverse,
  } as TextStyle,

  wellnessLabel: {
    ...Typography.caption,
    color: Colors.text.inverse,
    fontSize: 12,
    opacity: 0.9,
    marginTop: 4,
  } as TextStyle,

  quickStartButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 2,
    marginBottom: Spacing.lg,
  } as ViewStyle,

  quickStartButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  } as TextStyle,

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  } as ViewStyle,

  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  } as ViewStyle,

  statText: {
    ...Typography.caption,
    color: Colors.text.inverse,
    fontSize: 12,
    opacity: 0.9,
  } as TextStyle,

  statDivider: {
    width: 1,
    height: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: Spacing.md,
  } as ViewStyle,
});

export default HeroSection;
