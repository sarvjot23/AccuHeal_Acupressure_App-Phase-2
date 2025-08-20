import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Card } from '@components';
import { RootStackParamList } from '@types';
import { useLanguage } from '@contexts/LanguageContext';

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  const settingsOptions = [
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

  const showLanguageSelector = () => {
    console.log('Language selector clicked!'); // Debug log
    Alert.alert(
      t('settings.language'),
      t('settings.chooseLanguage'),
      [
        {
          text: 'English',
          onPress: () => {
            console.log('English selected');
            changeLanguage('en');
          },
          style: currentLanguage === 'en' ? 'default' : 'default',
        },
        {
          text: 'हिंदी',
          onPress: () => {
            console.log('Hindi selected');
            changeLanguage('hi');
          },
          style: currentLanguage === 'hi' ? 'default' : 'default',
        },
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
      ]
    );
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
      onPress={() => {
        console.log(`Setting option clicked: ${option.id}`);
        option.onPress();
      }} 
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

        {/* Debug Test Buttons */}
        <TouchableOpacity 
          onPress={() => {
            console.log('=== SIMPLE TEST BUTTON CLICKED ===');
            alert('Simple test button works!');
          }}
          style={{
            backgroundColor: '#00ff00',
            padding: 15,
            margin: 10,
            borderRadius: 8,
            alignItems: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
            SIMPLE TEST (Green)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => {
            console.log('=== LANGUAGE TEST BUTTON CLICKED ===');
            console.log('Current language:', currentLanguage);
            console.log('changeLanguage function:', typeof changeLanguage);
            console.log('t function:', typeof t);
            try {
              showLanguageSelector();
            } catch (error) {
              console.error('Error in showLanguageSelector:', error);
              alert('Error: ' + error.message);
            }
          }}
          style={{
            backgroundColor: '#ff0000',
            padding: 15,
            margin: 10,
            borderRadius: 8,
            alignItems: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
            LANGUAGE TEST (Red)
          </Text>
        </TouchableOpacity>

        {/* Direct Language Switcher */}
        <View style={{ margin: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
          <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}>
            Direct Language Switch (Current: {currentLanguage})
          </Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity 
              onPress={() => {
                console.log('=== DIRECT ENGLISH CLICKED ===');
                try {
                  changeLanguage('en');
                  console.log('Language changed to English');
                } catch (error) {
                  console.error('Error changing to English:', error);
                }
              }}
              style={{
                backgroundColor: currentLanguage === 'en' ? '#007AFF' : '#ccc',
                padding: 10,
                borderRadius: 5,
                flex: 1,
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>English</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => {
                console.log('=== DIRECT HINDI CLICKED ===');
                try {
                  changeLanguage('hi');
                  console.log('Language changed to Hindi');
                } catch (error) {
                  console.error('Error changing to Hindi:', error);
                }
              }}
              style={{
                backgroundColor: currentLanguage === 'hi' ? '#007AFF' : '#ccc',
                padding: 10,
                borderRadius: 5,
                flex: 1,
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>हिंदी</Text>
            </TouchableOpacity>
          </View>
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