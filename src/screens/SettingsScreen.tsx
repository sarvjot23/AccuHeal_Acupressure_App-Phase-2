import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Card } from '@components';
import { useLanguage } from '@contexts/LanguageContext';

const SettingsScreen: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  const settingsOptions = [
    {
      id: 'language',
      title: t('settings.language'),
      subtitle: `Current: ${currentLanguage === 'en' ? 'English' : 'हिंदी'}`,
      icon: 'language-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => showLanguageSelector(),
    },
    {
      id: 'about',
      title: t('settings.about'),
      subtitle: 'Learn more about AccuHeal',
      icon: 'information-circle-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => showAbout(),
    },
    {
      id: 'privacy',
      title: t('settings.privacy'),
      subtitle: 'How we protect your data',
      icon: 'shield-checkmark-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => showPrivacyPolicy(),
    },
    {
      id: 'terms',
      title: t('settings.terms'),
      subtitle: 'Terms and conditions',
      icon: 'document-text-outline' as keyof typeof Ionicons.glyphMap,
      onPress: () => showTerms(),
    },
  ];

  const showLanguageSelector = () => {
    Alert.alert(
      t('settings.language'),
      'Choose your preferred language',
      [
        {
          text: 'English',
          onPress: () => changeLanguage('en'),
          style: currentLanguage === 'en' ? 'default' : 'default',
        },
        {
          text: 'हिंदी',
          onPress: () => changeLanguage('hi'),
          style: currentLanguage === 'hi' ? 'default' : 'default',
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    );
  };

  const showAbout = () => {
    Alert.alert(
      'About AccuHeal',
      'AccuHeal v1.0\n\nYour guide to natural acupressure healing. Learn traditional techniques for everyday wellness.\n\nDeveloped with care for your health journey.',
      [{ text: 'OK' }]
    );
  };

  const showPrivacyPolicy = () => {
    Alert.alert(
      'Privacy Policy',
      'We respect your privacy. AccuHeal does not collect personal data without your consent. All health information stays on your device.',
      [{ text: 'OK' }]
    );
  };

  const showTerms = () => {
    Alert.alert(
      'Terms of Service',
      'AccuHeal is for educational purposes only. Always consult healthcare professionals for medical concerns. Use techniques at your own discretion.',
      [{ text: 'OK' }]
    );
  };

  const renderSettingOption = (option: typeof settingsOptions[0]) => (
    <Card key={option.id} onPress={option.onPress} style={styles.settingCard}>
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
});

export default SettingsScreen;