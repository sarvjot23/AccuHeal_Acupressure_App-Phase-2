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

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { t } = useTranslation();
  const { signInWithEmail, signInWithBiometric, isLoading: authLoading } = useAuth();
  
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
      Alert.alert('Success', 'Login successful!', [
        {
          text: 'OK',
          onPress: () => navigation.goBack()
        }
      ]);
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBiometricLogin = async () => {
    try {
      await signInWithBiometric();
      Alert.alert('Success', 'Biometric login successful!', [
        {
          text: 'OK',
          onPress: () => navigation.goBack()
        }
      ]);
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

  const handleSignUp = () => {
    navigation.navigate('Signup' as any);
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
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color={Colors.primary[600]} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hello!</Text>
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome</Text>

        {/* Login Form */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email or Mobile Number</Text>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              placeholder="example@example.com"
              placeholderTextColor={Colors.primary[300]}
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
                style={[styles.textInput, styles.passwordInput]}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••••••••"
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
                  size={20} 
                  color={Colors.primary[400]} 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <Button
            title="Log In"
            onPress={handleLogin}
            loading={isLoading || authLoading}
            size="lg"
            fullWidth
            style={styles.loginButton}
          />

          {/* Divider */}
          <Text style={styles.dividerText}>or</Text>

          {/* Biometric Login */}
          {biometricAvailable && (
            <TouchableOpacity 
              style={styles.biometricButton}
              onPress={handleBiometricLogin}
            >
              <View style={styles.biometricIcon}>
                <Ionicons name="finger-print" size={32} color={Colors.primary[600]} />
              </View>
            </TouchableOpacity>
          )}

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signupLink}>Sign Up</Text>
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
    backgroundColor: Colors.background.primary,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xl,
    marginTop: Spacing.md,
  },
  backButton: {
    marginRight: Spacing.md,
  },
  headerTitle: {
    ...Typography.h4,
    color: Colors.primary[600],
    fontWeight: '600',
  },
  welcomeText: {
    ...Typography.h2,
    color: Colors.primary[600],
    fontWeight: '700',
    marginBottom: Spacing.xl,
  },
  formContainer: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: Spacing.lg,
  },
  inputLabel: {
    ...Typography.body1,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
  },
  textInput: {
    backgroundColor: Colors.primary[50],
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    fontSize: 16,
    color: Colors.primary[700],
    borderWidth: 1,
    borderColor: 'transparent',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
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
    color: Colors.primary[600],
    textAlign: 'right',
    marginBottom: Spacing.xl,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: Colors.primary[600],
    marginBottom: Spacing.lg,
  },
  dividerText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  biometricButton: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  biometricIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: Spacing.lg,
  },
  signupText: {
    ...Typography.body2,
    color: Colors.text.secondary,
  },
  signupLink: {
    ...Typography.body2,
    color: Colors.primary[600],
    fontWeight: '600',
  },
});

export default LoginScreen;