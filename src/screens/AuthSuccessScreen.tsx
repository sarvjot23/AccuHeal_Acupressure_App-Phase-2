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
import { useAuth } from '@contexts/AuthContext';

type AuthSuccessScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type AuthSuccessScreenRouteProp = RouteProp<RootStackParamList, 'AuthSuccess'>;

const AuthSuccessScreen: React.FC = () => {
  const navigation = useNavigation<AuthSuccessScreenNavigationProp>();
  const route = useRoute<AuthSuccessScreenRouteProp>();
  const { t } = useTranslation();
  const { user } = useAuth();
  
  const scaleValue = new Animated.Value(0);
  const fadeValue = new Animated.Value(0);

  // Get the auth method from route params (e.g., 'google', 'apple', 'email')
  const authMethod = route.params?.method || 'email';
  const userName = user?.displayName || user?.email?.split('@')[0] || 'User';

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

    // Auto-navigate to main screen after 3 seconds
    const timer = setTimeout(() => {
      handleContinue();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
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
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.successCircle}>
            <Ionicons name="checkmark" size={48} color={Colors.background.primary} />
          </View>
          <View style={styles.authMethodIcon}>
            <Ionicons 
              name={authDisplay.icon as any} 
              size={20} 
              color={Colors.primary[600]} 
            />
          </View>
        </View>

        {/* Success Message */}
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>
          Successfully signed in{authMethod !== 'email' ? ` with ${authDisplay.text}` : ''}
        </Text>

        {/* User Greeting */}
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Hello, {userName}!</Text>
          <Text style={styles.userSubtitle}>
            Ready to continue your acupressure wellness journey?
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue to AccuHeal</Text>
            <Ionicons name="arrow-forward" size={20} color={Colors.background.primary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.accountButton}
            onPress={() => navigation.navigate('MyAccount' as any)}
          >
            <Text style={styles.accountButtonText}>Manage My Account</Text>
          </TouchableOpacity>
        </View>

        {/* Auto-continue Notice */}
        <Text style={styles.autoText}>
          Automatically continuing in a few seconds...
        </Text>
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
  successCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.success,
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
    borderColor: Colors.primary[100],
  },
  title: {
    ...Typography.h2,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  greeting: {
    ...Typography.h4,
    color: Colors.primary[600],
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  userSubtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  continueButton: {
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
  continueButtonText: {
    ...Typography.h6,
    color: Colors.background.primary,
    fontWeight: '600',
    marginRight: Spacing.sm,
  },
  accountButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  accountButtonText: {
    ...Typography.body1,
    color: Colors.primary[600],
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  autoText: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    textAlign: 'center',
    marginTop: Spacing.md,
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
    backgroundColor: Colors.primary[100],
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

export default AuthSuccessScreen;