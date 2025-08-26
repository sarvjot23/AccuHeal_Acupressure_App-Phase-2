import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Card } from '@components';
import { RootStackParamList } from '@types';
import { useLanguage } from '@contexts/LanguageContext';
import { useAuth } from '@contexts/AuthContext';

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { user, isAuthenticated, staySignedIn, setStaySignedIn, signOut, isLoading } = useAuth();
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  // Common settings available to all users
  const commonSettings = [
    {
      id: 'language',
      title: t('settings.language'),
      subtitle: `${t('settings.current')}: ${currentLanguage === 'en' ? 'English' : 'हिंदी'}`,
      icon: 'language-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => showLanguageSelector(),
    },
    {
      id: 'about',
      title: t('settings.about'),
      subtitle: t('settings.learnMore'),
      icon: 'information-circle-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => showAbout(),
    },
    {
      id: 'privacy',
      title: t('settings.privacy'),
      subtitle: t('settings.protectData'),
      icon: 'shield-checkmark-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => showPrivacyPolicy(),
    },
    {
      id: 'terms',
      title: t('settings.terms'),
      subtitle: t('settings.termsConditions'),
      icon: 'document-text-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => showTerms(),
    },
    {
      id: 'typesense-test',
      title: t('settings.typesenseTest'),
      subtitle: t('settings.developmentTest'),
      icon: 'flask-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => navigation.navigate('TypesenseTest'),
    },
  ];

  // Authentication-specific settings
  const authSettings = isAuthenticated 
    ? [
        {
          id: 'my-account',
          title: 'My Account',
          subtitle: 'Manage your account settings and preferences',
          icon: 'person-circle-outline' as keyof typeof Ionicons.glyphMap,
          onPress: () => navigation.navigate('MyAccount' as any),
        },
      ]
    : [
        {
          id: 'auth',
          title: 'Create Account or Sign In',
          subtitle: 'Access your personalized AccuHeal experience',
          icon: 'person-outline' as keyof typeof Ionicons.glyphMap,
          onPress: () => navigation.navigate('Signup'),
        },
      ];

  // Admin settings (always shown for development)
  const adminSettings = [
    {
      id: 'admin-login',
      title: 'Admin Login',
      subtitle: 'Administrator access',
      icon: 'shield-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => navigation.navigate('AdminLogin'),
    },
    {
      id: 'admin-update',
      title: 'Admin: Update Search',
      subtitle: 'Update search index with new points',
      icon: 'refresh-circle-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => navigation.navigate('AdminUpdate'),
    },
  ];

  const settingsOptions = [
    ...authSettings,
    ...commonSettings,
    ...adminSettings,
  ];

  const showLanguageSelector = () => {
    setShowLanguageModal(true);
  };

  const showAbout = () => {
    Alert.alert(
      t('settings.aboutAccuHeal'),
      t('settings.aboutDescription'),
      [{ text: 'OK' }]
    );
  };

  const showPrivacyPolicy = () => {
    Alert.alert(
      t('settings.privacy'),
      t('settings.privacyDescription'),
      [{ text: 'OK' }]
    );
  };

  const showTerms = () => {
    Alert.alert(
      t('settings.terms'),
      t('settings.termsDescription'),
      [{ text: 'OK' }]
    );
  };


  const renderSettingOption = (option: typeof settingsOptions[0]) => (
    <TouchableOpacity 
      key={option.id} 
      onPress={option.onPress} 
      activeOpacity={0.7}
      style={{ pointerEvents: 'auto' }}
    >
      <Card style={[styles.settingCard, { pointerEvents: 'none' }]}>
        <View style={styles.settingContent}>
          <View style={styles.settingIcon}>
            <Ionicons name={option.icon} size={24} color={Colors.primary[600]} />
          </View>
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>{option.title}</Text>
            <Text style={styles.settingSubtitle}>{option.subtitle}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* App Info */}
        <View style={styles.appInfo}>
          <View style={styles.appIcon}>
            <Ionicons name="leaf" size={48} color={Colors.primary[600]} />
          </View>
          <Text style={styles.appName}>AccuHeal</Text>
          <Text style={styles.appVersion}>{t('settings.version')} 1.0.0</Text>
          <Text style={styles.appDescription}>
            Your guide to natural acupressure healing
          </Text>
        </View>

        {/* User Profile Section - Only show when authenticated */}
        {isAuthenticated && user && (
          <Card style={styles.userProfileCard}>
            <View style={styles.userProfileContent}>
              <View style={styles.userAvatar}>
                {user.photoURL ? (
                  <Ionicons name="person" size={32} color={Colors.primary[600]} />
                ) : (
                  <Ionicons name="person" size={32} color={Colors.primary[600]} />
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
        )}


        {/* Settings Options */}
        <View style={styles.settingsSection}>
          {settingsOptions.map(renderSettingOption)}
        </View>

        {/* Disclaimer */}
        <Card style={styles.disclaimerCard}>
          <View style={styles.disclaimerHeader}>
            <Ionicons name="warning-outline" size={24} color={Colors.warning} />
            <Text style={styles.disclaimerTitle}>Important Notice</Text>
          </View>
          <Text style={styles.disclaimerText}>
            AccuHeal is for educational purposes only. The information provided should not replace professional medical advice. Always consult with healthcare providers for serious health concerns or before starting any new treatment.
          </Text>
        </Card>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Made with ❤️ for natural wellness
          </Text>
          <Text style={styles.footerText}>
            © 2025 AccuHeal. All rights reserved.
          </Text>
        </View>
      </View>

      {/* Language Selection Modal */}
      <Modal
        visible={showLanguageModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('settings.chooseLanguage')}</Text>
            
            <TouchableOpacity
              style={[
                styles.languageOption,
                currentLanguage === 'en' && styles.selectedLanguageOption
              ]}
              onPress={() => {
                changeLanguage('en');
                setShowLanguageModal(false);
              }}
            >
              <Text style={[
                styles.languageOptionText,
                currentLanguage === 'en' && styles.selectedLanguageOptionText
              ]}>
                English
              </Text>
              {currentLanguage === 'en' && (
                <Ionicons name="checkmark" size={20} color={Colors.primary[600]} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.languageOption,
                currentLanguage === 'hi' && styles.selectedLanguageOption
              ]}
              onPress={() => {
                changeLanguage('hi');
                setShowLanguageModal(false);
              }}
            >
              <Text style={[
                styles.languageOptionText,
                currentLanguage === 'hi' && styles.selectedLanguageOptionText
              ]}>
                हिंदी
              </Text>
              {currentLanguage === 'hi' && (
                <Ionicons name="checkmark" size={20} color={Colors.primary[600]} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowLanguageModal(false)}
            >
              <Text style={styles.cancelButtonText}>{t('common.cancel')}</Text>
            </TouchableOpacity>
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
  content: {
    padding: Spacing.md,
  },
  appInfo: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
    paddingVertical: Spacing.xl,
  },
  appIcon: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  appName: {
    ...Typography.h2,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  appVersion: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginBottom: Spacing.sm,
  },
  appDescription: {
    ...Typography.body2,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 240,
  },
  settingsSection: {
    marginBottom: Spacing.xl,
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
  disclaimerCard: {
    backgroundColor: Colors.warning + '10',
    borderWidth: 1,
    borderColor: Colors.warning + '30',
    marginBottom: Spacing.xl,
  },
  disclaimerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  disclaimerTitle: {
    ...Typography.h6,
    color: Colors.warning,
    marginLeft: Spacing.sm,
  },
  disclaimerText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  footerText: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
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
    maxWidth: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border.light,
  },
  selectedLanguageOption: {
    backgroundColor: Colors.primary[50],
    borderColor: Colors.primary[500],
  },
  languageOptionText: {
    ...Typography.body1,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  selectedLanguageOptionText: {
    color: Colors.primary[700],
    fontWeight: '600',
  },
  cancelButton: {
    marginTop: Spacing.md,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.neutral[100],
    alignItems: 'center',
  },
  cancelButtonText: {
    ...Typography.body1,
    color: Colors.text.secondary,
    fontWeight: '500',
  },

  // User profile styles
  userProfileCard: {
    backgroundColor: Colors.primary[50],
    borderWidth: 1,
    borderColor: Colors.primary[200],
    marginBottom: Spacing.lg,
  },
  userProfileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  userEmail: {
    ...Typography.body2,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: Spacing.xs,
  },
  statusText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
});

export default SettingsScreen;