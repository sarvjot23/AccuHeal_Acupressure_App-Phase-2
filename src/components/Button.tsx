import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
  Platform,
} from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  runOnJS 
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
// Platform-specific haptic feedback import
let ReactNativeHapticFeedback: any = null;
if (Platform.OS !== 'web') {
  ReactNativeHapticFeedback = require('react-native-haptic-feedback').default;
}
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  animated?: boolean;
  hapticFeedback?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  fullWidth = false,
  style,
  disabled,
  animated = true,
  hapticFeedback = true,
  ...props
}) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const handlePressIn = () => {
    if (animated && !disabled && !loading) {
      // Enhanced haptic feedback
      if (hapticFeedback && Platform.OS === 'ios' && ReactNativeHapticFeedback) {
        ReactNativeHapticFeedback.trigger('impactLight', {
          enableVibrateFallback: true,
          ignoreAndroidSystemSettings: false,
        });
      }
      
      scale.value = withSpring(0.95, {
        damping: 12,
        stiffness: 250,
      });
      opacity.value = withSpring(0.8, {
        damping: 12,
        stiffness: 250,
      });
    }
  };

  const handlePressOut = () => {
    if (animated && !disabled && !loading) {
      scale.value = withSpring(1, {
        damping: 12,
        stiffness: 250,
      });
      opacity.value = withSpring(1, {
        damping: 12,
        stiffness: 250,
      });
    }
  };

  const handlePress = () => {
    if (props.onPress && !disabled && !loading) {
      // Call onPress directly since it's already on the JS thread
      props.onPress();
    }
  };

  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textStyle = [
    styles.textBase,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
  ];

  const ButtonContent = () => (
    <>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' || variant === 'gradient' ? Colors.text.inverse : Colors.primary[500]}
        />
      ) : (
        <>
          {icon}
          <Text style={textStyle}>{title}</Text>
        </>
      )}
    </>
  );

  if (variant === 'gradient') {
    return (
      <Animated.View style={[animatedStyle]}>
        <TouchableOpacity
          style={[buttonStyle, styles.gradientButton]}
          disabled={disabled || loading}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handlePress}
          activeOpacity={0.9}
          {...props}
        >
          <LinearGradient
            colors={[
              Colors.primary[400],
              Colors.primary[500],
              Colors.primary[600],
              Colors.primary[700]
            ]}
            locations={[0, 0.3, 0.7, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientContainer}
          >
            <ButtonContent />
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={[animatedStyle]}>
      <TouchableOpacity
        style={buttonStyle}
        disabled={disabled || loading}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        activeOpacity={0.9}
        {...props}
      >
        <ButtonContent />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
    ...Shadows.sm,
  } as ViewStyle,

  // Variants
  primary: {
    backgroundColor: Colors.primary[500],
    shadowColor: Colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  } as ViewStyle,
  
  secondary: {
    backgroundColor: Colors.secondary[500],
    shadowColor: Colors.secondary[500],
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  } as ViewStyle,
  
  outline: {
    backgroundColor: 'rgba(34, 197, 94, 0.05)',
    borderWidth: 2,
    borderColor: Colors.primary[500],
    shadowColor: Colors.primary[300],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  } as ViewStyle,
  
  text: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  } as ViewStyle,

  gradient: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  } as ViewStyle,

  // Sizes
  sm: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    minHeight: 36,
  } as ViewStyle,
  
  md: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    minHeight: 44,
  } as ViewStyle,
  
  lg: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    minHeight: 52,
  } as ViewStyle,

  // States
  disabled: {
    backgroundColor: Colors.neutral[300],
    shadowOpacity: 0,
    elevation: 0,
  } as ViewStyle,
  
  fullWidth: {
    width: '100%',
  } as ViewStyle,

  // Text styles
  textBase: {
    ...Typography.button,
  } as TextStyle,
  
  primaryText: {
    color: Colors.text.inverse,
  } as TextStyle,
  
  secondaryText: {
    color: Colors.text.primary,
  } as TextStyle,
  
  outlineText: {
    color: Colors.primary[500],
  } as TextStyle,
  
  textText: {
    color: Colors.primary[500],
  } as TextStyle,

  gradientText: {
    color: Colors.text.inverse,
  } as TextStyle,
  
  disabledText: {
    color: Colors.neutral[500],
  } as TextStyle,

  // Size text
  smText: {
    fontSize: 14,
  } as TextStyle,
  
  mdText: {
    fontSize: 16,
  } as TextStyle,
  
  lgText: {
    fontSize: 18,
  } as TextStyle,

  // Gradient specific styles
  gradientButton: {
    shadowColor: Colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  } as ViewStyle,

  gradientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
  } as ViewStyle,
});