import { TextStyle } from 'react-native';

export const FontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
};

export const FontWeights = {
  light: '300' as TextStyle['fontWeight'],
  normal: '400' as TextStyle['fontWeight'],
  medium: '500' as TextStyle['fontWeight'],
  semibold: '600' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
};

export const LineHeights = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 32,
  '2xl': 36,
  '3xl': 40,
  '4xl': 44,
  '5xl': 56,
};

export const Typography = {
  // Display text (largest)
  display: {
    fontSize: FontSizes['5xl'],
    fontWeight: FontWeights.light,
    lineHeight: LineHeights['5xl'],
  },
  
  // Headings
  h1: {
    fontSize: FontSizes['4xl'],
    fontWeight: FontWeights.bold,
    lineHeight: LineHeights['4xl'],
  },
  h2: {
    fontSize: FontSizes['3xl'],
    fontWeight: FontWeights.bold,
    lineHeight: LineHeights['3xl'],
  },
  h3: {
    fontSize: FontSizes['2xl'],
    fontWeight: FontWeights.semibold,
    lineHeight: LineHeights['2xl'],
  },
  h4: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.semibold,
    lineHeight: LineHeights.xl,
  },
  h5: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.medium,
    lineHeight: LineHeights.lg,
  },
  h6: {
    fontSize: FontSizes.base,
    fontWeight: FontWeights.medium,
    lineHeight: LineHeights.base,
  },
  
  // Body text
  body1: {
    fontSize: FontSizes.base,
    fontWeight: FontWeights.normal,
    lineHeight: LineHeights.base,
  },
  body2: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.normal,
    lineHeight: LineHeights.sm,
  },
  
  // Caption and small text
  caption: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.normal,
    lineHeight: LineHeights.xs,
  },
  
  // Button text
  button: {
    fontSize: FontSizes.base,
    fontWeight: FontWeights.medium,
    lineHeight: LineHeights.base,
  },
  
  // Link text
  link: {
    fontSize: FontSizes.base,
    fontWeight: FontWeights.medium,
    lineHeight: LineHeights.base,
  },
};