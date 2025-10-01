import { ViewStyle } from 'react-native';
import { Colors } from './colors';

export const Shadows = {
  // Soft, clean shadows for modern UI
  sm: {
    shadowColor: Colors.shadow.light,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  } as ViewStyle,

  md: {
    shadowColor: Colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  } as ViewStyle,

  lg: {
    shadowColor: Colors.shadow.medium,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  } as ViewStyle,

  xl: {
    shadowColor: Colors.shadow.dark,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  } as ViewStyle,

  // Colored shadow for accent elements
  green: {
    shadowColor: Colors.primary[400],
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  } as ViewStyle,
};