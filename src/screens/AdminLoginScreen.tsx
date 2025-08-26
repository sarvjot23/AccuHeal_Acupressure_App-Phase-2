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

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Button } from '@components';
import { RootStackParamList } from '@types';

type AdminLoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const AdminLoginScreen: React.FC = () => {
  const navigation = useNavigation<AdminLoginScreenNavigationProp>();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Basic admin credentials check (replace with proper auth later)
    if (email !== 'admin@accuheal.com') {
      Alert.alert('Error', 'Invalid admin credentials');
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement proper admin authentication
      console.log('Admin login attempt:', { email });
      
      // Simulate admin login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just show success and navigate to admin areas
      Alert.alert('Success', 'Admin login successful!', [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to admin update screen for now
            navigation.navigate('AdminUpdate');
          }
        }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Admin login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
            <Ionicons name="chevron-back" size={24} color={Colors.neutral[600]} />
          </TouchableOpacity>
        </View>

        {/* Admin Badge */}
        <View style={styles.adminBadge}>
          <Ionicons name="shield-checkmark" size={48} color={Colors.neutral[700]} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Admin Access</Text>
        <Text style={styles.subtitle}>Restricted access for administrators only</Text>

        {/* Login Form */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Admin Email</Text>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              placeholder="admin@accuheal.com"
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
                style={[styles.textInput, styles.passwordInput]}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter admin password"
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
                  color={Colors.neutral[500]} 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <Button
            title="Admin Login"
            onPress={handleAdminLogin}
            loading={isLoading}
            size="lg"
            fullWidth
            style={styles.loginButton}
          />

          {/* Warning Notice */}
          <View style={styles.warningContainer}>
            <Ionicons name="warning-outline" size={20} color={Colors.warning} />
            <Text style={styles.warningText}>
              This area is restricted to authorized administrators only. 
              Unauthorized access attempts are logged.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>AccuHeal Admin Panel v1.0</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
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
    padding: Spacing.sm,
  },
  adminBadge: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.neutral[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
    borderWidth: 2,
    borderColor: Colors.neutral[200],
  },
  title: {
    ...Typography.h2,
    color: Colors.neutral[800],
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...Typography.body1,
    color: Colors.neutral[600],
    textAlign: 'center',
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
    color: Colors.neutral[700],
    fontWeight: '600',
    marginBottom: Spacing.sm,
  },
  textInput: {
    backgroundColor: Colors.background.primary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    fontSize: 16,
    color: Colors.neutral[800],
    borderWidth: 1,
    borderColor: Colors.neutral[300],
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
  loginButton: {
    backgroundColor: Colors.neutral[800],
    marginBottom: Spacing.xl,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.warning + '15',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.warning + '30',
  },
  warningText: {
    ...Typography.body2,
    color: Colors.neutral[700],
    flex: 1,
    marginLeft: Spacing.sm,
    lineHeight: 18,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    marginTop: 'auto',
  },
  footerText: {
    ...Typography.caption,
    color: Colors.neutral[500],
    textAlign: 'center',
  },
});

export default AdminLoginScreen;