import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors, Spacing, BorderRadius, Shadows } from '@constants';

interface CardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: keyof typeof Spacing;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  onPress,
  style,
  ...props
}) => {
  const cardStyle = [
    styles.base,
    styles[variant],
    { padding: Spacing[padding] },
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        style={cardStyle}
        onPress={onPress}
        activeOpacity={0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  base: {
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.background.primary,
  } as ViewStyle,

  default: {
    ...Shadows.sm,
  } as ViewStyle,

  elevated: {
    ...Shadows.lg,
  } as ViewStyle,

  outlined: {
    borderWidth: 1,
    borderColor: Colors.border.light,
    shadowOpacity: 0,
    elevation: 0,
  } as ViewStyle,
});