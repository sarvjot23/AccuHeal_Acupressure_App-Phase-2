import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, ImageStyle, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { AcupressurePoint } from '@types';
import { useLanguage } from '@contexts/LanguageContext';
import { getPointImage } from '../assets/imageMapping';

interface PointCardProps {
  point: AcupressurePoint;
  onPress: () => void;
  variant?: 'default' | 'compact' | 'featured' | 'premium';
}

export const PointCard: React.FC<PointCardProps> = ({
  point,
  onPress,
  variant = 'default',
}) => {
  const { currentLanguage } = useLanguage();
  const scale = useSharedValue(1);

  // Debug logging
  if (!point || !point.name || !point.meridian) {
    console.error('Invalid point data:', JSON.stringify(point));
    return null;
  }

  const isFeatured = variant === 'featured';
  const isPremium = variant === 'premium';
  const primaryBenefit = point.symptoms?.[0] || point.conditions?.[0] || 'Healing';
  
  // Difficulty color mapping
  const difficultyColors = {
    'Beginner': { bg: Colors.success, text: Colors.success },
    'Intermediate': { bg: Colors.warning, text: Colors.warning },
    'Advanced': { bg: Colors.error, text: Colors.error },
  };
  
  const difficultyColor = difficultyColors[point.difficulty as keyof typeof difficultyColors] || difficultyColors.Beginner;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        style={({ pressed, hovered }: any) => [
          styles.card,
          isFeatured && styles.featuredCard,
          isPremium && styles.premiumCard,
          hovered && styles.cardHovered,
          pressed && styles.cardPressed,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
      {/* Card Header - Badge and Rating */}
      <View style={styles.cardHeader}>
        <View style={styles.badgeContainer}>
          <View style={[styles.badge, { backgroundColor: Colors.primary[50] }]}>
            <Ionicons name="medical" size={12} color={Colors.primary[600]} />
            <Text style={styles.badgeText}>TCM Point</Text>
          </View>
        </View>
        
        <View style={styles.difficultyBadge}>
          <Ionicons name="star" size={14} color={difficultyColor.text} />
          <Text style={[styles.difficultyText, { color: difficultyColor.text }]}>
            {point.difficulty === 'Beginner' ? '5' : point.difficulty === 'Intermediate' ? '4' : '3'}
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Point Image - Circular with border */}
        <View style={styles.imageWrapper}>
          {getPointImage(point.id) ? (
            <Image
              source={getPointImage(point.id)}
              style={styles.pointImage}
              contentFit="cover"
            />
          ) : (
            <View style={styles.placeholderImage}>
              <Ionicons 
                name="radio-button-on" 
                size={32} 
                color={Colors.primary[400]} 
              />
            </View>
          )}
        </View>
        
        {/* Text Content */}
        <View style={styles.textContent}>
          <Text style={styles.pointName} numberOfLines={1}>
            {String(point.name?.[currentLanguage] || point.name?.en || point.code || 'Unknown')}
          </Text>
          <Text style={styles.meridianText} numberOfLines={1}>
            {String(point.meridian?.name?.[currentLanguage] || point.meridian?.name?.en || point.code || 'Unknown Meridian')}
          </Text>
        </View>
      </View>

      {/* Action Button */}
      <View style={styles.footer}>
        <Pressable 
          style={({ pressed, hovered }: any) => [
            styles.infoButton,
            hovered && styles.infoButtonHovered,
            pressed && styles.infoButtonPressed,
          ]}
          onPress={onPress}
        >
          <Text style={styles.infoButtonText}>Info</Text>
        </Pressable>
        
        <View style={styles.actionIcons}>
          <Pressable 
            style={({ pressed, hovered }: any) => [
              styles.iconButton,
              hovered && styles.iconButtonHovered,
            ]}
          >
            <Ionicons name="calendar-outline" size={18} color={Colors.primary[600]} />
          </Pressable>
          
          <Pressable 
            style={({ pressed, hovered }: any) => [
              styles.iconButton,
              hovered && styles.iconButtonHovered,
            ]}
          >
            <Ionicons name="information-circle-outline" size={18} color={Colors.primary[600]} />
          </Pressable>
          
          <Pressable 
            style={({ pressed, hovered }: any) => [
              styles.iconButton,
              hovered && styles.iconButtonHovered,
            ]}
          >
            <Ionicons name="heart-outline" size={18} color={Colors.primary[600]} />
          </Pressable>
        </View>
      </View>
    </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary[50],
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    ...Shadows.md,
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.1)',
  } as ViewStyle,

  cardHovered: {
    backgroundColor: Colors.card.hover,
    ...Shadows.lg,
    borderColor: Colors.primary[200],
  } as ViewStyle,

  cardPressed: {
    opacity: 0.95,
  } as ViewStyle,

  featuredCard: {
    backgroundColor: Colors.primary[100],
    borderColor: Colors.primary[200],
    ...Shadows.lg,
  } as ViewStyle,

  premiumCard: {
    backgroundColor: '#ffffff',
    borderColor: Colors.primary[300],
    ...Shadows.xl,
  } as ViewStyle,

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  } as ViewStyle,

  badgeContainer: {
    flexDirection: 'row',
  } as ViewStyle,

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    gap: 4,
  } as ViewStyle,

  badgeText: {
    ...Typography.caption,
    color: Colors.primary[700],
    fontWeight: '600',
    fontSize: 11,
  } as TextStyle,

  difficultyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  } as ViewStyle,

  difficultyText: {
    ...Typography.body2,
    fontWeight: '600',
    fontSize: 13,
  } as TextStyle,

  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  } as ViewStyle,

  imageWrapper: {
    marginRight: Spacing.md,
  } as ViewStyle,

  pointImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.background.primary,
    borderWidth: 3,
    borderColor: '#ffffff',
  } as ImageStyle,

  placeholderImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.background.primary,
    borderWidth: 3,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  textContent: {
    flex: 1,
  } as ViewStyle,

  pointName: {
    ...Typography.h3,
    color: Colors.primary[900],
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,

  meridianText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    fontSize: 13,
  } as TextStyle,

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  infoButton: {
    backgroundColor: Colors.info,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    minWidth: 80,
    alignItems: 'center',
  } as ViewStyle,

  infoButtonHovered: {
    backgroundColor: '#2563eb',
    ...Shadows.md,
  } as ViewStyle,

  infoButtonPressed: {
    opacity: 0.9,
  } as ViewStyle,

  infoButtonText: {
    ...Typography.body2,
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  } as TextStyle,

  actionIcons: {
    flexDirection: 'row',
    gap: Spacing.xs,
  } as ViewStyle,

  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border.light,
  } as ViewStyle,

  iconButtonHovered: {
    backgroundColor: Colors.primary[50],
    borderColor: Colors.primary[300],
  } as ViewStyle,
});