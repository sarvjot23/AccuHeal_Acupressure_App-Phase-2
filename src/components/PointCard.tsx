import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
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
  variant?: 'default' | 'compact';
}

export const PointCard: React.FC<PointCardProps> = ({
  point,
  onPress,
  variant = 'default',
}) => {
  const { currentLanguage } = useLanguage();
  
  const isCompact = variant === 'compact';
  const primaryBenefit = point.symptoms?.[0] || point.conditions?.[0] || 'Healing';
  
  return (
    <Card variant="elevated" padding="lg" style={styles.modernCard} onPress={onPress}>
      <View style={styles.cardContent}>
        {/* Icon/Image Section */}
        <View style={styles.iconContainer}>
          {point.images && point.images.length > 0 ? (
            <Image
              source={{ uri: point.images[0] }}
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
  } as ViewStyle,

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
});