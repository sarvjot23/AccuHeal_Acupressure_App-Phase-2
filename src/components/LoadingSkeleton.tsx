import React, { useEffect } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, BorderRadius } from '@constants';

interface LoadingSkeletonProps {
  width?: number | string;
  height?: number;
  borderRadius?: number;
  variant?: 'rect' | 'circle' | 'text';
  style?: ViewStyle;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  width = '100%',
  height = 20,
  borderRadius = BorderRadius.md,
  variant = 'rect',
  style,
}) => {
  const shimmerX = useSharedValue(-1);

  useEffect(() => {
    shimmerX.value = withRepeat(
      withTiming(1, {
        duration: 1500,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      shimmerX.value,
      [-1, 1],
      [-300, 300],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateX }],
    };
  });

  const getContainerStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      width,
      height,
      borderRadius: variant === 'circle' ? height / 2 : borderRadius,
      overflow: 'hidden',
    };

    if (variant === 'text') {
      return {
        ...baseStyle,
        height: height || 16,
        borderRadius: BorderRadius.sm,
      };
    }

    return baseStyle;
  };

  return (
    <View style={[styles.container, getContainerStyle(), style]}>
      <View style={styles.shimmerContainer}>
        <Animated.View style={[styles.shimmer, animatedStyle]}>
          <LinearGradient
            colors={[
              'rgba(229, 231, 235, 0.3)', // Light gray
              'rgba(229, 231, 235, 0.8)', // More opaque gray
              'rgba(229, 231, 235, 0.3)', // Back to light
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
};

// Preset skeleton components for common use cases
export const PointCardSkeleton: React.FC = () => (
  <View style={styles.pointCardSkeleton}>
    <LoadingSkeleton variant="circle" width={50} height={50} />
    <View style={styles.pointCardText}>
      <LoadingSkeleton width="60%" height={18} style={{ marginBottom: 4 }} />
      <LoadingSkeleton width="40%" height={14} style={{ marginBottom: 6 }} />
      <LoadingSkeleton width="80%" height={12} />
    </View>
    <LoadingSkeleton width={80} height={32} borderRadius={BorderRadius.md} />
  </View>
);

export const TextLineSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <View>
    {Array.from({ length: lines }, (_, index) => (
      <LoadingSkeleton
        key={index}
        variant="text"
        width={index === lines - 1 ? '70%' : '100%'}
        height={14}
        style={{ marginBottom: Spacing.sm }}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral[200],
  } as ViewStyle,

  shimmerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,

  shimmer: {
    width: 300,
    height: '100%',
  } as ViewStyle,

  gradient: {
    flex: 1,
  } as ViewStyle,

  // Preset component styles
  pointCardSkeleton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    backgroundColor: Colors.background.primary,
    borderRadius: BorderRadius.xl,
    marginBottom: Spacing.md,
    shadowColor: Colors.shadow.light,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  } as ViewStyle,

  pointCardText: {
    flex: 1,
    marginLeft: Spacing.md,
    marginRight: Spacing.md,
  } as ViewStyle,
});