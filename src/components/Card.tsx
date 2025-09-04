import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  runOnJS 
} from 'react-native-reanimated';
import { Colors, Spacing, BorderRadius, Shadows } from '@constants';

interface CardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient' | 'glass' | 'floating';
  padding?: keyof typeof Spacing;
  onPress?: () => void;
  animated?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  onPress,
  style,
  animated = true,
  ...props
}) => {
  const scale = useSharedValue(1);
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    if (animated && onPress) {
      scale.value = withSpring(0.98, {
        damping: 15,
        stiffness: 300,
      });
    }
  };

  const handlePressOut = () => {
    if (animated && onPress) {
      scale.value = withSpring(1, {
        damping: 15,
        stiffness: 300,
      });
    }
  };

  const handlePress = () => {
    if (onPress) {
      runOnJS(onPress)();
    }
  };

  const cardStyle = [
    styles.base,
    styles[variant],
    { padding: Spacing[padding] },
    style,
  ];

  const CardContent = ({ children }: { children: React.ReactNode }) => {
    if (variant === 'gradient') {
      return (
        <LinearGradient
          colors={[
            Colors.background.primary,
            Colors.primary[50],
            Colors.primary[100],
            'rgba(34, 197, 94, 0.05)'
          ]}
          locations={[0, 0.4, 0.8, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradientContainer, { borderRadius: BorderRadius.xl }]}
        >
          <View style={styles.gradientOverlay}>
            {children}
          </View>
        </LinearGradient>
      );
    }
    
    if (variant === 'glass') {
      return (
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.35)',
            'rgba(255, 255, 255, 0.25)',
            'rgba(34, 197, 94, 0.08)',
            'rgba(255, 255, 255, 0.15)',
          ]}
          locations={[0, 0.3, 0.6, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradientContainer, { borderRadius: BorderRadius.xl }]}
        >
          <View style={styles.glassOverlay}>
            {children}
          </View>
        </LinearGradient>
      );
    }
    
    return <>{children}</>;
  };

  if (onPress) {
    return (
      <Animated.View style={[animatedStyle]}>
        <TouchableOpacity
          style={cardStyle}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handlePress}
          activeOpacity={0.9}
          {...props}
        >
          <CardContent>{children}</CardContent>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <View style={cardStyle}>
      <CardContent>{children}</CardContent>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.background.primary,
    overflow: 'hidden',
  } as ViewStyle,

  default: {
    ...Shadows.sm,
    shadowColor: Colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  } as ViewStyle,

  elevated: {
    shadowColor: Colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    // Enhanced shadow for more depth
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  } as ViewStyle,

  outlined: {
    borderWidth: 1.5,
    borderColor: Colors.border.light,
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  } as ViewStyle,

  gradient: {
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.1)', // Primary color with transparency
    shadowColor: Colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  } as ViewStyle,

  glass: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 32,
    elevation: 8,
    backdropFilter: 'blur(10px)', // Note: This works on web, limited on React Native
  } as ViewStyle,

  floating: {
    backgroundColor: Colors.background.primary,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    ...Shadows.floating,
    shadowColor: Colors.primary[400],
    shadowOpacity: 0.15,
  } as ViewStyle,

  gradientContainer: {
    flex: 1,
    width: '100%',
  } as ViewStyle,

  gradientOverlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: BorderRadius.xl,
  } as ViewStyle,

  glassOverlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  } as ViewStyle,
});