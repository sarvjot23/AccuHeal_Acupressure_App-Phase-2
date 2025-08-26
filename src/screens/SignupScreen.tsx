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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import * as LocalAuthentication from 'expo-local-authentication';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Button } from '@components';
import { RootStackParamList } from '@types';
import { useAuth } from '@contexts/AuthContext';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const { t } = useTranslation();
  const { signUpWithEmail, signInWithEmail, signInWithGoogle, signInWithApple, signInWithBiometric } = useAuth();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const [isSignInMode, setIsSignInMode] = useState(false);

  React.useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    setBiometricAvailable(hasHardware && isEnrolled);
  };

  const handleAuthSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in required fields');
      return;
    }

    if (!isSignInMode && !fullName) {
      Alert.alert('Error', 'Please enter your full name for sign up');
      return;
    }

    setIsLoading(true);
    try {
      if (isSignInMode) {
        await signInWithEmail(email, password);
        navigation.navigate('AuthSuccess', { method: 'email' });
      } else {
        await signUpWithEmail(email, password, fullName);
        navigation.navigate('AuthSuccess', { method: 'email' });
      }
    } catch (error: any) {
      navigation.navigate('AuthFailure', { 
        method: 'email', 
        error: error.message || `${isSignInMode ? 'Sign in' : 'Sign up'} failed. Please try again.`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      navigation.navigate('AuthSuccess', { method: 'google' });
    } catch (error: any) {
      console.error('Google Sign-In Error:', error);
      let errorMessage = 'Google sign-in failed';
      
      if (error.message?.includes('configuration error')) {
        errorMessage = 'Google Sign-In is not properly configured. Please use email sign-up instead.';
      } else if (error.message?.includes('cancelled')) {
        errorMessage = 'Google sign-in was cancelled';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      navigation.navigate('AuthFailure', { method: 'google', error: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleSignup = async () => {
    try {
      setIsLoading(true);
      await signInWithApple();
      navigation.navigate('AuthSuccess', { method: 'apple' });
    } catch (error: any) {
      console.error('Apple Sign-In Error:', error);
      let errorMessage = 'Apple sign-in failed';
      
      if (error.message?.includes('not available')) {
        errorMessage = 'Apple Sign-In is not available on this device or browser';
      } else if (error.message?.includes('cancelled')) {
        errorMessage = 'Apple sign-in was cancelled';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      navigation.navigate('AuthFailure', { method: 'apple', error: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBiometricSignup = async () => {
    try {
      setIsLoading(true);
      await signInWithBiometric();
      navigation.navigate('AuthSuccess', { method: 'biometric' });
    } catch (error: any) {
      navigation.navigate('AuthFailure', { 
        method: 'biometric', 
        error: error.message || 'Biometric authentication failed' 
      });
    } finally {
      setIsLoading(false);
    }
  };


  const formatDateInput = (text: string) => {
    // Remove all non-digits
    const cleaned = text.replace(/\D/g, '');
    
    // Format as DD / MM / YYYY
    if (cleaned.length >= 2 && cleaned.length < 4) {
      return cleaned.substring(0, 2) + ' / ' + cleaned.substring(2);
    } else if (cleaned.length >= 4) {
      return cleaned.substring(0, 2) + ' / ' + cleaned.substring(2, 4) + ' / ' + cleaned.substring(4, 8);
    }
    return cleaned;
  };

  const handleDateChange = (text: string) => {
    const formatted = formatDateInput(text);
    setDateOfBirth(formatted);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={Colors.primary[600]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {isSignInMode ? 'Welcome Back' : 'New Account'}
        </Text>
        <TouchableOpacity 
          style={styles.modeToggle}
          onPress={() => setIsSignInMode(!isSignInMode)}
        >
          <Text style={styles.modeToggleText}>
            {isSignInMode ? 'Need an account? Sign up' : 'Have an account? Sign in'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Signup Form */}
        <View style={styles.formContainer}>
          {isSignInMode ? (
            // Sign In Mode - Simplified form
            <>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email address"
                  placeholderTextColor={Colors.primary[300]}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.textInput, styles.passwordInput]}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••"
                    placeholderTextColor={Colors.primary[300]}
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
                      size={18} 
                      color={Colors.primary[400]} 
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            // Sign Up Mode - Full form
            <>
              {/* Row 1: Name and Email */}
              <View style={styles.inputRow}>
                <View style={[styles.inputGroup, styles.halfWidth]}>
                  <Text style={styles.inputLabel}>Full name</Text>
                  <TextInput
                    style={styles.textInput}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Full name"
                    placeholderTextColor={Colors.primary[300]}
                    autoCapitalize="words"
                    autoCorrect={false}
                  />
                </View>
                <View style={[styles.inputGroup, styles.halfWidth]}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email address"
                    placeholderTextColor={Colors.primary[300]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Row 2: Password and Mobile */}
              <View style={styles.inputRow}>
                <View style={[styles.inputGroup, styles.halfWidth]}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={[styles.textInput, styles.passwordInput]}
                      value={password}
                      onChangeText={setPassword}
                      placeholder="••••••••"
                      placeholderTextColor={Colors.primary[300]}
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
                        size={18} 
                        color={Colors.primary[400]} 
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={[styles.inputGroup, styles.halfWidth]}>
                  <Text style={styles.inputLabel}>Mobile</Text>
                  <TextInput
                    style={styles.textInput}
                    value={mobile}
                    onChangeText={setMobile}
                    placeholder="Mobile number"
                    placeholderTextColor={Colors.primary[300]}
                    keyboardType="phone-pad"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Date of Birth - Full Width */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Date of Birth</Text>
                <TextInput
                  style={styles.textInput}
                  value={dateOfBirth}
                  onChangeText={handleDateChange}
                  placeholder="DD / MM / YYYY"
                  placeholderTextColor={Colors.primary[300]}
                  keyboardType="numeric"
                  maxLength={14}
                />
              </View>
            </>
          )}

        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Terms & Privacy */}
          {!isSignInMode && (
            <Text style={styles.termsText}>
              By signing up, you agree to our{' '}
              <Text style={styles.termsLink}>Terms</Text> and{' '}
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          )}

          {/* Auth Button */}
          <Button
            title={isSignInMode ? "Sign In" : "Sign Up"}
            onPress={handleAuthSubmit}
            loading={isLoading}
            size="lg"
            fullWidth
            style={styles.signupButton}
          />

          {/* Social Login Row */}
          <View style={styles.socialRow}>
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.socialButtons}>
              {/* Google Sign In - All platforms */}
              <TouchableOpacity 
                style={styles.socialButton}
                onPress={handleGoogleSignup}
              >
                <Ionicons name="logo-google" size={20} color={Colors.primary[600]} />
              </TouchableOpacity>

              {/* Apple Sign In - Temporarily disabled until Apple Developer account is available */}
              {false && (Platform.OS === 'ios' || Platform.OS === 'web') && (
                <TouchableOpacity 
                  style={styles.socialButton}
                  onPress={handleAppleSignup}
                >
                  <Ionicons name="logo-apple" size={20} color={Colors.primary[600]} />
                </TouchableOpacity>
              )}

              {/* Biometric Sign In - Mobile only */}
              {biometricAvailable && Platform.OS !== 'web' && (
                <TouchableOpacity 
                  style={styles.socialButton}
                  onPress={handleBiometricSignup}
                >
                  <Ionicons name="finger-print" size={20} color={Colors.primary[600]} />
                </TouchableOpacity>
              )}
            </View>
          </View>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: Spacing.md,
  },
  backButton: {
    marginRight: Spacing.md,
  },
  headerTitle: {
    ...Typography.h4,
    color: Colors.primary[600],
    fontWeight: '600',
    flex: 1,
  },
  modeToggle: {
    marginLeft: 'auto',
  },
  modeToggleText: {
    ...Typography.caption,
    color: Colors.primary[500],
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
    gap: Spacing.md,
  },
  inputGroup: {
    marginBottom: Spacing.md,
  },
  halfWidth: {
    flex: 1,
  },
  inputLabel: {
    ...Typography.caption,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.xs,
  },
  textInput: {
    backgroundColor: Colors.primary[50],
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: 14,
    color: Colors.primary[700],
    borderWidth: 1,
    borderColor: 'transparent',
    height: 44,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 40,
  },
  eyeButton: {
    position: 'absolute',
    right: Spacing.sm,
    top: '50%',
    transform: [{ translateY: -9 }],
    padding: Spacing.xs,
  },
  bottomSection: {
    paddingBottom: Platform.OS === 'ios' ? 34 : Spacing.lg,
  },
  termsText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: Spacing.md,
  },
  termsLink: {
    color: Colors.primary[600],
    fontWeight: '600',
  },
  signupButton: {
    backgroundColor: Colors.primary[600],
    marginBottom: Spacing.md,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
    gap: Spacing.md,
  },
  dividerText: {
    ...Typography.caption,
    color: Colors.text.secondary,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen;