import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform } from 'react-native';

import en from './en.json';
import hi from './hi.json';

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
};

// Get browser language on web, fallback to 'en'
const getDefaultLanguage = () => {
  if (Platform.OS === 'web') {
    const browserLang = navigator.language || navigator.languages?.[0] || 'en';
    return browserLang.startsWith('hi') ? 'hi' : 'en';
  }
  
  // For native platforms, try to import expo-localization
  try {
    const Localization = require('expo-localization');
    return Localization.locale.startsWith('hi') ? 'hi' : 'en';
  } catch (error) {
    console.log('Expo localization not available, defaulting to en');
    return 'en';
  }
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;