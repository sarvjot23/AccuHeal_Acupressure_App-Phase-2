import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Card } from '@components';
import { RootStackParamList } from '@types';
import { useAuth } from '@contexts/AuthContext';

type MyAccountScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const MyAccountScreen: React.FC = () => {
  const navigation = useNavigation<MyAccountScreenNavigationProp>();
  const { t } = useTranslation();
  const { user, isAuthenticated, staySignedIn, setStaySignedIn, signOut } = useAuth();
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const handleSignOut = () => {
    console.log('handleSignOut function called');
    setShowSignOutModal(true);
  };

  const confirmSignOut = async () => {
    console.log('User confirmed sign out, starting process...');
    setShowSignOutModal(false);
    try {
      console.log('Calling signOut function...');
      await signOut();
      console.log('signOut function completed successfully');
      console.log('Navigating to main screen...');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
      console.log('Navigation completed');
    } catch (error) {
      console.error('Sign out error details:', error);
      Alert.alert('Error', `Failed to sign out: ${error.message || error}`);
    }
  };

  const cancelSignOut = () => {
    console.log('User cancelled sign out');
    setShowSignOutModal(false);
  };

  const handleStaySignedInToggle = async (value: boolean) => {
    try {
      await setStaySignedIn(value);
    } catch (error) {
      Alert.alert('Error', 'Failed to update stay signed in preference');
    }
  };

  if (!isAuthenticated || !user) {
    return (
      <View style={styles.container}>
        <View style={styles.notAuthenticatedContainer}>
          <Ionicons name="person-circle-outline" size={80} color={Colors.neutral[400]} />
          <Text style={styles.notAuthenticatedTitle}>Not Signed In</Text>
          <Text style={styles.notAuthenticatedSubtitle}>
            Please sign in to access your account settings
          </Text>
          <TouchableOpacity 
            style={styles.signInButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        {/* User Profile Header */}
        <Card style={styles.profileCard}>
          <View style={styles.profileContent}>
            <View style={styles.userAvatar}>
              {user.photoURL ? (
                <Ionicons name="person" size={40} color={Colors.primary[600]} />
              ) : (
                <Ionicons name="person" size={40} color={Colors.primary[600]} />
              )}
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>
                {user.displayName || 'User'}
              </Text>
              <Text style={styles.userEmail}>
                {user.email}
              </Text>
              {user.isAdmin && (
                <View style={styles.adminBadge}>
                  <Text style={styles.adminBadgeText}>Admin</Text>
                </View>
              )}
            </View>
            <View style={styles.userStatus}>
              <View style={[styles.statusDot, { backgroundColor: Colors.success }]} />
              <Text style={styles.statusText}>Online</Text>
            </View>
          </View>
        </Card>

        {/* Account Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Account Preferences</Text>

          {/* Stay Signed In Setting */}
          <Card style={styles.settingCard}>
            <View style={styles.settingContent}>
              <View style={styles.settingIcon}>
                <Ionicons name="lock-closed-outline" size={24} color={Colors.primary[600]} />
              </View>
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Stay Signed In</Text>
                <Text style={styles.settingSubtitle}>
                  {staySignedIn ? 'Keep me signed in across sessions' : 'Sign in each time I open the app'}
                </Text>
              </View>
              <Switch
                value={staySignedIn}
                onValueChange={handleStaySignedInToggle}
                trackColor={{
                  false: Colors.neutral[200],
                  true: Colors.primary[300]
                }}
                thumbColor={staySignedIn ? Colors.primary[600] : Colors.neutral[400]}
              />
            </View>
          </Card>

          {/* Language Preference */}
          <Card style={styles.settingCard}>
            <View style={styles.settingContent}>
              <View style={styles.settingIcon}>
                <Ionicons name="language-outline" size={24} color={Colors.primary[600]} />
              </View>
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Language</Text>
                <Text style={styles.settingSubtitle}>
                  {user.preferredLanguage === 'en' ? 'English' : 'हिंदी'}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
            </View>
          </Card>

          {/* Account Actions */}
          <Text style={[styles.sectionTitle, styles.sectionTitleSpacing]}>Account Actions</Text>

          {/* Sign Out */}
          <Card style={[styles.settingCard, styles.dangerCard]}>
            <TouchableOpacity 
              onPress={handleSignOut} 
              activeOpacity={0.7}
              style={styles.settingContent}
            >
              <View style={[styles.settingIcon, styles.dangerIcon]}>
                <Ionicons name="log-out-outline" size={24} color={Colors.error} />
              </View>
              <View style={styles.settingText}>
                <Text style={[styles.settingTitle, styles.dangerText]}>Sign Out</Text>
                <Text style={styles.settingSubtitle}>
                  Sign out of your AccuHeal account
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.error} />
            </TouchableOpacity>
          </Card>
        </View>

        {/* Account Info */}
        <Card style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Ionicons name="information-circle-outline" size={24} color={Colors.primary[600]} />
            <Text style={styles.infoTitle}>Account Information</Text>
          </View>
          <Text style={styles.infoText}>
            Your account data is securely stored and encrypted. You can manage your preferences 
            and sign out at any time. For support or account deletion requests, please contact our support team.
          </Text>
        </Card>
      </View>

      {/* Sign Out Confirmation Modal */}
      <Modal
        visible={showSignOutModal}
        transparent={true}
        animationType="fade"
        onRequestClose={cancelSignOut}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIcon}>
              <Ionicons name="log-out-outline" size={48} color={Colors.error} />
            </View>
            <Text style={styles.modalTitle}>Sign Out</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to sign out of your AccuHeal account?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={cancelSignOut}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={confirmSignOut}
              >
                <Text style={styles.confirmButtonText}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // Extra space for bottom navigation
  },
  content: {
    padding: Spacing.md,
  },
  notAuthenticatedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  notAuthenticatedTitle: {
    ...Typography.h4,
    color: Colors.text.primary,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  notAuthenticatedSubtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  signInButton: {
    backgroundColor: Colors.primary[600],
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  signInButtonText: {
    ...Typography.h6,
    color: Colors.background.primary,
    fontWeight: '600',
  },
  profileCard: {
    backgroundColor: Colors.primary[50],
    borderWidth: 1,
    borderColor: Colors.primary[200],
    marginBottom: Spacing.lg,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.lg,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...Typography.h5,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  userEmail: {
    ...Typography.body1,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs,
  },
  adminBadge: {
    backgroundColor: Colors.warning,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.sm,
    alignSelf: 'flex-start',
  },
  adminBadgeText: {
    ...Typography.caption,
    color: Colors.background.primary,
    fontWeight: '600',
    fontSize: 10,
  },
  userStatus: {
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: Spacing.xs,
  },
  statusText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
  settingsSection: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
    marginLeft: Spacing.xs,
  },
  sectionTitleSpacing: {
    marginTop: Spacing.lg,
  },
  settingCard: {
    marginBottom: Spacing.sm,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  settingSubtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
  },
  dangerCard: {
    borderColor: Colors.error + '20',
    backgroundColor: Colors.error + '05',
  },
  dangerIcon: {
    backgroundColor: Colors.error + '10',
  },
  dangerText: {
    color: Colors.error,
  },
  infoCard: {
    backgroundColor: Colors.primary[50],
    borderWidth: 1,
    borderColor: Colors.primary[200],
    marginBottom: Spacing.xl,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  infoTitle: {
    ...Typography.h6,
    color: Colors.primary[700],
    marginLeft: Spacing.sm,
  },
  infoText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  modalContent: {
    backgroundColor: Colors.background.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  modalIcon: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.error + '10',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  modalTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    fontWeight: '600',
    marginBottom: Spacing.sm,
  },
  modalMessage: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: Spacing.xl,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: Spacing.md,
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Colors.neutral[100],
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
  cancelButtonText: {
    ...Typography.body1,
    color: Colors.text.secondary,
    fontWeight: '600',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: Colors.error,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
  confirmButtonText: {
    ...Typography.body1,
    color: Colors.background.primary,
    fontWeight: '600',
  },
});

export default MyAccountScreen;