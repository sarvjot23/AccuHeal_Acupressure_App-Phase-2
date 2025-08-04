import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LanguageContextType {
  currentLanguage: 'en' | 'hi';
  changeLanguage: (language: 'en' | 'hi') => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'hi'>('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    loadSavedLanguage();
  }, []);

  const loadSavedLanguage = async () => {
    try {
      let savedLanguage: string | null = null;
      
      if (Platform.OS === 'web') {
        // Use localStorage on web
        savedLanguage = localStorage.getItem('selectedLanguage');
      } else {
        // Use AsyncStorage on native
        savedLanguage = await AsyncStorage.getItem('selectedLanguage');
      }
      
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
        setCurrentLanguage(savedLanguage);
        i18n.changeLanguage(savedLanguage);
        setIsRTL(savedLanguage === 'hi');
      }
    } catch (error) {
      console.log('Error loading saved language:', error);
    }
  };

  const changeLanguage = async (language: 'en' | 'hi') => {
    try {
      if (Platform.OS === 'web') {
        // Use localStorage on web
        localStorage.setItem('selectedLanguage', language);
      } else {
        // Use AsyncStorage on native
        await AsyncStorage.setItem('selectedLanguage', language);
      }
      
      setCurrentLanguage(language);
      i18n.changeLanguage(language);
      setIsRTL(language === 'hi');
    } catch (error) {
      console.log('Error saving language:', error);
    }
  };

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};