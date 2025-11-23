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

import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { RootStackParamList } from '@types';
import { useAuth } from '@contexts/AuthContext';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const { t } = useTranslation();
  const { 
    signUpWithEmail, 
    signInWithGoogle, 
    signInWithApple, 
    verifyEmail,
    resendVerificationEmail,
    pendingVerification,
    pendingVerificationEmail,
    isLoading: authLoading 
  } = useAuth();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !fullName) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      await signUpWithEmail(email, password, fullName);
      if (!pendingVerification) {
        navigation.goBack();
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyEmail = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit verification code');
      return;
    }

    setIsLoading(true);
    try {
      await verifyEmail(verificationCode);
      Alert.alert('Success', 'Email verified successfully!', [
        {
          text: 'OK',
          onPress: () => navigation.goBack()
        }
      ]);
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Verification failed. Please check the code and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      await resendVerificationEmail();
      Alert.alert('Success', 'Verification code sent! Check your email.');
      setVerificationCode('');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to resend code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
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

  const handleAppleSignup = async () => {
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

  // Show email verification screen if pending
  if (pendingVerification && pendingVerificationEmail) {
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
          {/* Logo at top */}
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Verification Card */}
          <View style={styles.card}>
            <Text style={styles.title}>Verify your email</Text>
            <Text style={styles.subtitle}>
              We sent a verification code to{'\n'}{pendingVerificationEmail}
            </Text>

            {/* Verification Code Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Verification Code</Text>
              <TextInput
                style={styles.textInput}
                value={verificationCode}
                onChangeText={setVerificationCode}
                placeholder="000000"
                placeholderTextColor={Colors.neutral[400]}
                keyboardType="number-pad"
                maxLength={6}
                autoFocus
              />
            </View>

            {/* Verify Button */}
            <Pressable
              style={({ pressed, hovered }: any) => [
                styles.loginButton,
                hovered && styles.loginButtonHovered,
                pressed && styles.buttonPressed,
                (isLoading || authLoading) && styles.buttonDisabled,
              ]}
              onPress={handleVerifyEmail}
              disabled={isLoading || authLoading}
            >
              <Text style={styles.loginButtonText}>
                {isLoading || authLoading ? 'Verifying...' : 'Verify Email'}
              </Text>
            </Pressable>

            {/* Resend Code */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Didn't receive the code? </Text>
              <TouchableOpacity onPress={handleResendCode} disabled={isLoading || authLoading}>
                <Text style={styles.signupLink}>Resend</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

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
        {/* Logo at top */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Centered Signup Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Sign up</Text>

          {/* Full Name Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.textInput}
              value={fullName}
              onChangeText={setFullName}
              placeholder="John Doe"
              placeholderTextColor={Colors.neutral[400]}
              autoCapitalize="words"
              autoCorrect={false}
            />
          </View>

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
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Create a password"
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

          {/* Sign Up Button */}
          <Pressable
            style={({ pressed, hovered }: any) => [
              styles.loginButton,
              hovered && styles.loginButtonHovered,
              pressed && styles.buttonPressed,
              (isLoading || authLoading) && styles.buttonDisabled,
            ]}
            onPress={handleSignup}
            disabled={isLoading || authLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading || authLoading ? 'Signing up...' : 'Sign up'}
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
            onPress={handleGoogleSignup}
            disabled={isLoading || authLoading}
          >
            <Ionicons name="logo-google" size={20} color={Colors.neutral[700]} />
            <Text style={styles.oauthButtonText}>Sign up with Google</Text>
          </Pressable>

          {Platform.OS === 'ios' && (
            <Pressable
              style={({ pressed, hovered }: any) => [
                styles.oauthButton,
                hovered && styles.oauthButtonHovered,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleAppleSignup}
              disabled={isLoading || authLoading}
            >
              <Ionicons name="logo-apple" size={20} color={Colors.neutral[700]} />
              <Text style={styles.oauthButtonText}>Sign up with Apple</Text>
            </Pressable>
          )}

          {/* Login Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login' as any)}>
              <Text style={styles.signupLink}>Log in</Text>
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
    marginBottom: Spacing.md,
  },
  subtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginBottom: Spacing.xl,
    lineHeight: 20,
  },
  inputGroup: {
    marginBottom: Spacing.lg,
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
  loginButton: {
    backgroundColor: Colors.neutral[900],
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
    backgroundColor: Colors.neutral[800],
    ...Shadows.md,
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
    backgroundColor: Colors.neutral[50],
    borderColor: Colors.neutral[300],
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

export default SignupScreen;
