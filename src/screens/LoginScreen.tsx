import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Pressable,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import * as LocalAuthentication from 'expo-local-authentication';

import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { RootStackParamList } from '@types';
import { useAuth } from '@contexts/AuthContext';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { t } = useTranslation();
  const { signInWithEmail, signInWithGoogle, signInWithApple, signInWithBiometric, isLoading: authLoading } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [biometricAvailable, setBiometricAvailable] = useState(false);

  React.useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    setBiometricAvailable(hasHardware && isEnrolled);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      await signInWithEmail(email, password);
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigation.goBack();
    } catch (error: any) {
      if (!error.message?.includes('cancelled')) {
        Alert.alert('Error', error.message || 'Google sign-in failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    if (Platform.OS !== 'ios') return;
    
    setIsLoading(true);
    try {
      await signInWithApple();
      navigation.goBack();
    } catch (error: any) {
      if (!error.message?.includes('cancelled')) {
        Alert.alert('Error', error.message || 'Apple sign-in failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleBiometricLogin = async () => {
    try {
      await signInWithBiometric();
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Biometric authentication failed');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Forgot Password',
      'Password reset functionality will be implemented soon.',
      [{ text: 'OK' }]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back Button */}
        <Pressable
          style={({ pressed, hovered }: any) => [
            styles.backButton,
            hovered && styles.backButtonHovered,
            pressed && styles.backButtonPressed,
          ]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={Colors.primary[600]} />
        </Pressable>

        {/* Logo at top */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Centered Login Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Log in</Text>

          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              placeholder="user@company.com"
              placeholderTextColor={Colors.neutral[400]}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputGroup}>
            <View style={styles.passwordHeader}>
              <Text style={styles.inputLabel}>Password</Text>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor={Colors.neutral[400]}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons 
                  name={showPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color={Colors.neutral[400]} 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <Pressable
            style={({ pressed, hovered }: any) => [
              styles.loginButton,
              hovered && styles.loginButtonHovered,
              pressed && styles.buttonPressed,
              (isLoading || authLoading) && styles.buttonDisabled,
            ]}
            onPress={handleLogin}
            disabled={isLoading || authLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading || authLoading ? 'Logging in...' : 'Log in'}
            </Text>
          </Pressable>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* OAuth Buttons */}
          <Pressable
            style={({ pressed, hovered }: any) => [
              styles.oauthButton,
              hovered && styles.oauthButtonHovered,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleGoogleLogin}
            disabled={isLoading || authLoading}
          >
            <Ionicons name="logo-google" size={20} color={Colors.neutral[700]} />
            <Text style={styles.oauthButtonText}>Login with Google</Text>
          </Pressable>

          {Platform.OS === 'ios' && (
            <Pressable
              style={({ pressed, hovered }: any) => [
                styles.oauthButton,
                hovered && styles.oauthButtonHovered,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleAppleLogin}
              disabled={isLoading || authLoading}
            >
              <Ionicons name="logo-apple" size={20} color={Colors.neutral[700]} />
              <Text style={styles.oauthButtonText}>Login with Apple</Text>
            </Pressable>
          )}

          {biometricAvailable && (
            <Pressable
              style={({ pressed, hovered }: any) => [
                styles.oauthButton,
                hovered && styles.oauthButtonHovered,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleBiometricLogin}
              disabled={isLoading || authLoading}
            >
              <Ionicons name="finger-print" size={20} color={Colors.neutral[700]} />
              <Text style={styles.oauthButtonText}>Login with Biometric</Text>
            </Pressable>
          )}

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup' as any)}>
              <Text style={styles.signupLink}>Sign up for free</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: Spacing.lg,
    left: Spacing.lg,
    padding: Spacing.sm,
    borderRadius: BorderRadius.md,
    ...Platform.select({
      web: {
        cursor: 'pointer' as any,
        transition: 'all 0.2s ease' as any,
      },
    }),
  },
  backButtonHovered: {
    backgroundColor: Colors.primary[50],
  },
  backButtonPressed: {
    opacity: 0.7,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  logo: {
    width: 60,
    height: 60,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: Colors.card.background,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl * 1.5,
    ...Shadows.lg,
  },
  title: {
    ...Typography.h2,
    color: Colors.text.primary,
    fontWeight: '700',
    fontSize: 28,
    marginBottom: Spacing.xl,
  },
  inputGroup: {
    marginBottom: Spacing.lg,
  },
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  inputLabel: {
    ...Typography.body2,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
    fontSize: 13,
  },
  textInput: {
    backgroundColor: Colors.neutral[50],
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    fontSize: 15,
    color: Colors.text.primary,
    borderWidth: 1,
    borderColor: Colors.border.light,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: Spacing.md,
    top: '50%',
    transform: [{ translateY: -10 }],
    padding: Spacing.xs,
  },
  forgotPasswordText: {
    ...Typography.body2,
    color: Colors.neutral[500],
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: Colors.primary[600],
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md + 2,
    alignItems: 'center',
    marginTop: Spacing.sm,
    ...Shadows.sm,
    ...Platform.select({
      web: {
        cursor: 'pointer' as any,
        transition: 'all 0.2s ease' as any,
      },
    }),
  },
  loginButtonHovered: {
    backgroundColor: Colors.primary[700],
    ...Shadows.md,
    transform: [{ scale: 1.02 }],
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    ...Typography.body1,
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border.light,
  },
  dividerText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginHorizontal: Spacing.md,
    fontSize: 13,
  },
  oauthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.card.background,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border.light,
    ...Platform.select({
      web: {
        cursor: 'pointer' as any,
        transition: 'all 0.2s ease' as any,
      },
    }),
  },
  oauthButtonHovered: {
    backgroundColor: Colors.primary[50],
    borderColor: Colors.primary[300],
    transform: [{ scale: 1.01 }],
    ...Shadows.sm,
  },
  oauthButtonText: {
    ...Typography.body2,
    color: Colors.text.primary,
    fontWeight: '500',
    marginLeft: Spacing.sm,
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  signupText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    fontSize: 14,
  },
  signupLink: {
    ...Typography.body2,
    color: Colors.text.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default LoginScreen;
