import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
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
  ...props
}) => {
  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textStyle = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? Colors.text.inverse : Colors.primary[500]}
        />
      ) : (
        <>
          {icon}
          <Text style={textStyle}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
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
  } as ViewStyle,
  
  secondary: {
    backgroundColor: Colors.secondary[500],
  } as ViewStyle,
  
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary[500],
  } as ViewStyle,
  
  text: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
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
  text: {
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
});