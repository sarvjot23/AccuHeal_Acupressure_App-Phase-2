import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './Card';
import { Button } from './Button';
import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { AcupressurePoint } from '@types';
import { useLanguage } from '@contexts/LanguageContext';

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
  
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';
  const isPremium = variant === 'premium';
  const primaryBenefit = point.symptoms?.[0] || point.conditions?.[0] || 'Healing';
  
  return (
    <Card 
      variant={isPremium ? "glass" : isFeatured ? "gradient" : "elevated"} 
      padding="lg" 
      style={[styles.modernCard, isFeatured && styles.featuredCard, isPremium && styles.premiumCard]} 
      onPress={onPress}
    >
      <View style={styles.cardContent}>
        {/* Icon/Image Section */}
        <View style={styles.iconContainer}>
          {point.images && point.images.length > 0 ? (
            <Image
              source={point.images[0].startsWith('@assets') 
                ? require(`../../assets/acupressure_points/${point.images[0].split('/').pop()}`)
                : { uri: point.images[0] }
              }
              style={styles.pointImage}
              contentFit="cover"
            />
          ) : (
            <View style={styles.defaultIconContainer}>
              <Ionicons 
                name="radio-button-on" 
                size={24} 
                color={Colors.primary[600]} 
              />
            </View>
          )}
        </View>
        
        {/* Content Section */}
        <View style={styles.textContent}>
          <Text style={styles.pointName} numberOfLines={1}>
            {point.name[currentLanguage]}
          </Text>
          <Text style={styles.pointCode}>
            {point.code}
          </Text>
          <Text style={styles.primaryBenefit} numberOfLines={1}>
            {primaryBenefit}
          </Text>
        </View>
        
        {/* Action Button */}
        <Button
          title={isCompact ? "Details" : "View Details"}
          onPress={onPress}
          size="sm"
          variant={isPremium ? "gradient" : isFeatured ? "gradient" : "primary"}
          style={styles.actionButton}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  modernCard: {
    marginBottom: Spacing.md,
    backgroundColor: Colors.background.primary,
    borderRadius: BorderRadius.xl,
  } as ViewStyle,

  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
  } as ViewStyle,

  iconContainer: {
    marginRight: Spacing.md,
  } as ViewStyle,

  pointImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary[50],
  } as ImageStyle,

  defaultIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  textContent: {
    flex: 1,
    marginRight: Spacing.md,
  } as ViewStyle,

  pointName: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginBottom: 2,
  } as TextStyle,

  pointCode: {
    ...Typography.caption,
    color: Colors.primary[600],
    fontWeight: '600',
    marginBottom: 4,
  } as TextStyle,

  primaryBenefit: {
    ...Typography.body2,
    color: Colors.text.secondary,
  } as TextStyle,

  actionButton: {
    minWidth: 80,
    paddingHorizontal: Spacing.md,
  } as ViewStyle,

  featuredCard: {
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.2)',
    shadowColor: Colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  } as ViewStyle,

  premiumCard: {
    borderWidth: 2,
    borderColor: 'rgba(34, 197, 94, 0.3)',
    shadowColor: Colors.primary[400],
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  } as ViewStyle,
});