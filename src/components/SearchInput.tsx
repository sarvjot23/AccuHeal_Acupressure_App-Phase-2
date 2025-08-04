import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';

interface SearchInputProps extends TextInputProps {
  onClear?: () => void;
  showClearButton?: boolean;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onClear,
  showClearButton = true,
  leftIcon = 'search',
  rightIcon,
  onRightIconPress,
  style,
  ...props
}) => {
  const hasValue = props.value && props.value.length > 0;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <Ionicons
          name={leftIcon}
          size={20}
          color={Colors.neutral[400]}
          style={styles.leftIcon}
        />
        
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.neutral[400]}
          {...props}
        />
        
        {hasValue && showClearButton && (
          <TouchableOpacity
            onPress={onClear}
            style={styles.clearButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="close-circle" size={20} color={Colors.neutral[400]} />
          </TouchableOpacity>
        )}
        
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightIcon}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name={rightIcon} size={20} color={Colors.neutral[400]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  } as ViewStyle,

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.secondary,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border.light,
    ...Shadows.sm,
  } as ViewStyle,

  leftIcon: {
    marginRight: Spacing.sm,
  } as ViewStyle,

  input: {
    flex: 1,
    ...Typography.body1,
    color: Colors.text.primary,
    minHeight: 24,
  },

  clearButton: {
    marginLeft: Spacing.sm,
  } as ViewStyle,

  rightIcon: {
    marginLeft: Spacing.sm,
  } as ViewStyle,
});