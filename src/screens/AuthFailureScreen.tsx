import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { RootStackParamList } from '@types';

type AuthFailureScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type AuthFailureScreenRouteProp = RouteProp<RootStackParamList, 'AuthFailure'>;

const AuthFailureScreen: React.FC = () => {
  const navigation = useNavigation<AuthFailureScreenNavigationProp>();
  const route = useRoute<AuthFailureScreenRouteProp>();
  const { t } = useTranslation();
  
  const scaleValue = new Animated.Value(0);
  const fadeValue = new Animated.Value(0);

  // Get error info from route params
  const authMethod = route.params?.method || 'email';
  const errorMessage = route.params?.error || 'Authentication failed. Please try again.';

  useEffect(() => {
    // Animate entrance
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleRetry = () => {
    navigation.goBack();
  };

  const handleTryDifferentMethod = () => {
    navigation.navigate('Signup');
  };

  const handleGetHelp = () => {
    // Could navigate to a support screen or show contact info
    navigation.navigate('Settings');
  };

  const getAuthMethodDisplay = () => {
    switch (authMethod) {
      case 'google':
        return { icon: 'logo-google', text: 'Google' };
      case 'apple':
        return { icon: 'logo-apple', text: 'Apple' };
      case 'biometric':
        return { icon: 'finger-print', text: 'Biometric' };
      default:
        return { icon: 'mail', text: 'Email' };
    }
  };

  const authDisplay = getAuthMethodDisplay();

  const getErrorIcon = () => {
    if (errorMessage.toLowerCase().includes('cancel')) {
      return 'close-circle';
    }
    if (errorMessage.toLowerCase().includes('network')) {
      return 'wifi-off';
    }
    if (errorMessage.toLowerCase().includes('configuration')) {
      return 'settings';
    }
    return 'alert-circle';
  };

  const getHelpfulSuggestion = () => {
    if (errorMessage.toLowerCase().includes('cancel')) {
      return 'Sign-in was cancelled. You can try again when ready.';
    }
    if (errorMessage.toLowerCase().includes('network')) {
      return 'Check your internet connection and try again.';
    }
    if (errorMessage.toLowerCase().includes('configuration')) {
      return 'This sign-in method is temporarily unavailable. Try email sign-up instead.';
    }
    if (errorMessage.toLowerCase().includes('password')) {
      return 'Double-check your password or try resetting it.';
    }
    return 'Sometimes trying again or using a different method helps.';
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeValue,
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        {/* Error Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.errorCircle}>
            <Ionicons name={getErrorIcon() as any} size={48} color={Colors.background.primary} />
          </View>
          <View style={styles.authMethodIcon}>
            <Ionicons 
              name={authDisplay.icon as any} 
              size={20} 
              color={Colors.error} 
            />
          </View>
        </View>

        {/* Error Message */}
        <Text style={styles.title}>Oops! Something went wrong</Text>
        <Text style={styles.subtitle}>
          {authMethod !== 'email' ? `${authDisplay.text} sign-in` : 'Sign-in'} encountered an issue
        </Text>

        {/* Error Details */}
        <View style={styles.errorInfo}>
          <View style={styles.errorBox}>
            <Ionicons name="information-circle-outline" size={20} color={Colors.error} />
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
          <Text style={styles.suggestion}>{getHelpfulSuggestion()}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={handleRetry}
          >
            <Ionicons name="refresh" size={20} color={Colors.background.primary} />
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.alternativeButton}
            onPress={handleTryDifferentMethod}
          >
            <Text style={styles.alternativeButtonText}>Try Different Method</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.helpButton}
            onPress={handleGetHelp}
          >
            <Text style={styles.helpButtonText}>Get Help</Text>
          </TouchableOpacity>
        </View>

        {/* Tips */}
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>Quick Tips:</Text>
          <Text style={styles.tipsText}>
            • Check your internet connection{'\n'}
            • Ensure your credentials are correct{'\n'}
            • Try email sign-up if other methods fail
          </Text>
        </View>
      </Animated.View>

      {/* Background Pattern */}
      <View style={styles.backgroundPattern}>
        <View style={[styles.patternCircle, styles.patternCircle1]} />
        <View style={[styles.patternCircle, styles.patternCircle2]} />
        <View style={[styles.patternCircle, styles.patternCircle3]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    zIndex: 1,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: Spacing.xl,
  },
  errorCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.error,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.error,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  authMethodIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.error + '20',
  },
  title: {
    ...Typography.h3,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  errorInfo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.error + '10',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: Colors.error,
    marginBottom: Spacing.md,
    maxWidth: 320,
  },
  errorText: {
    ...Typography.body2,
    color: Colors.error,
    flex: 1,
    marginLeft: Spacing.sm,
    lineHeight: 18,
  },
  suggestion: {
    ...Typography.body2,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 18,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  retryButton: {
    backgroundColor: Colors.primary[600],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.lg,
    width: '100%',
    maxWidth: 280,
    marginBottom: Spacing.md,
    shadowColor: Colors.primary[600],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  retryButtonText: {
    ...Typography.h6,
    color: Colors.background.primary,
    fontWeight: '600',
    marginLeft: Spacing.sm,
  },
  alternativeButton: {
    backgroundColor: Colors.neutral[100],
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
  },
  alternativeButtonText: {
    ...Typography.body1,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  helpButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  helpButtonText: {
    ...Typography.body2,
    color: Colors.primary[600],
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  tipsContainer: {
    backgroundColor: Colors.primary[50],
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.primary[200],
    maxWidth: 300,
  },
  tipsTitle: {
    ...Typography.body1,
    color: Colors.primary[700],
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  tipsText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    lineHeight: 18,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  patternCircle: {
    position: 'absolute',
    backgroundColor: Colors.error + '10',
    borderRadius: 999,
    opacity: 0.3,
  },
  patternCircle1: {
    width: 200,
    height: 200,
    top: 50,
    right: -100,
  },
  patternCircle2: {
    width: 150,
    height: 150,
    bottom: 100,
    left: -75,
  },
  patternCircle3: {
    width: 100,
    height: 100,
    top: 200,
    left: 50,
  },
});

export default AuthFailureScreen;