import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Image } from 'expo-image';
import { Card } from './Card';
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
  
  return (
    <Card onPress={onPress} padding={isCompact ? 'sm' : 'md'}>
      <View style={[styles.container, isCompact && styles.compactContainer]}>
        {point.images && point.images.length > 0 && (
          <View style={[styles.imageContainer, isCompact && styles.compactImageContainer]}>
            <Image
              source={{ uri: point.images[0] }}
              style={[styles.image, isCompact && styles.compactImage]}
              contentFit="cover"
            />
          </View>
        )}
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.title, isCompact && styles.compactTitle]} numberOfLines={2}>
              {point.name[currentLanguage]}
            </Text>
            <View style={styles.codeContainer}>
              <Text style={styles.code}>{point.code}</Text>
            </View>
          </View>
          
          <Text style={[styles.location, isCompact && styles.compactLocation]} numberOfLines={2}>
            {point.location[currentLanguage]}
          </Text>
          
          {!isCompact && (
            <View style={styles.conditionsContainer}>
              <Text style={styles.conditionsLabel}>Helps with:</Text>
              <Text style={styles.conditions} numberOfLines={2}>
                {/* Use new symptoms array first, fallback to legacy conditions */}
                {point.symptoms 
                  ? point.symptoms.slice(0, 3).join(', ') + (point.symptoms.length > 3 ? '...' : '')
                  : point.conditions 
                    ? point.conditions.slice(0, 3).join(', ') + (point.conditions.length > 3 ? '...' : '')
                    : 'Various conditions'
                }
              </Text>
            </View>
          )}
          
          <View style={styles.metadata}>
            <View style={styles.metadataItem}>
              <Text style={styles.metadataLabel}>Duration:</Text>
              <Text style={styles.metadataValue}>
                {/* Handle both new string format and legacy number format */}
                {typeof point.duration === 'string' 
                  ? point.duration 
                  : `${point.duration} min`
                }
              </Text>
            </View>
            <View style={styles.metadataItem}>
              <Text style={styles.metadataLabel}>Pressure:</Text>
              <Text style={styles.metadataValue}>{point.pressure}</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  } as ViewStyle,

  compactContainer: {
    alignItems: 'center',
  } as ViewStyle,

  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    marginRight: Spacing.md,
  } as ViewStyle,

  compactImageContainer: {
    width: 50,
    height: 50,
    marginRight: Spacing.sm,
  } as ViewStyle,

  image: {
    width: '100%',
    height: '100%',
  } as ViewStyle,

  compactImage: {
    width: 50,
    height: 50,
  } as ViewStyle,

  content: {
    flex: 1,
    minWidth: 0, // Prevents text overflow
  } as ViewStyle,

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.xs,
    width: '100%',
  } as ViewStyle,

  title: {
    ...Typography.h5,
    color: Colors.text.primary,
    flex: 1,
    marginRight: Spacing.sm,
    flexWrap: 'wrap',
  } as TextStyle,

  compactTitle: {
    ...Typography.body1,
    fontWeight: '600',
  } as TextStyle,

  codeContainer: {
    backgroundColor: Colors.primary[100],
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
    flexShrink: 0, // Prevents shrinking of code container
  } as ViewStyle,

  code: {
    ...Typography.caption,
    color: Colors.primary[700],
    fontWeight: '600',
  } as TextStyle,

  location: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginBottom: Spacing.sm,
    flexWrap: 'wrap',
  } as TextStyle,

  compactLocation: {
    fontSize: 12,
    marginBottom: Spacing.xs,
  } as TextStyle,

  conditionsContainer: {
    marginBottom: Spacing.sm,
  } as ViewStyle,

  conditionsLabel: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    marginBottom: Spacing.xs,
  } as TextStyle,

  conditions: {
    ...Typography.body2,
    color: Colors.text.secondary,
    flexWrap: 'wrap',
  } as TextStyle,

  metadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  } as ViewStyle,

  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  } as ViewStyle,

  metadataLabel: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    marginRight: Spacing.xs,
  } as TextStyle,

  metadataValue: {
    ...Typography.caption,
    color: Colors.primary[600],
    fontWeight: '600',
  } as TextStyle,
});