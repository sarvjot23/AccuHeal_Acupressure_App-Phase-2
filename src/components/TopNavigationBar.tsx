import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Platform,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@contexts/AuthContext';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { RootStackParamList } from '@types';

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface TopNavigationBarProps {
  onSearchChange?: (text: string) => void;
  onSearchSubmit?: () => void;
  searchQuery?: string;
}

export const TopNavigationBar: React.FC<TopNavigationBarProps> = ({
  onSearchChange,
  onSearchSubmit,
  searchQuery = '',
}) => {
  const navigation = useNavigation<NavigationProp>();
  const { isAuthenticated, user } = useAuth();
  const { i18n } = useTranslation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const currentLanguage = i18n.language || 'en';

  const handleLogoPress = () => {
    navigation.navigate('Main');
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigation.navigate('Search', { initialQuery: searchQuery });
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Left Section: Logo + Search */}
        <View style={styles.leftSection}>
          {/* AccuHeal Logo/Home Button */}
          <Pressable
            onPress={handleLogoPress}
            style={({ pressed, hovered }: any) => [
              styles.logoButton,
              hovered && styles.logoButtonHovered,
              pressed && styles.logoButtonPressed,
            ]}
          >
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>ccuHeal</Text>
          </Pressable>

          {/* Search Bar */}
          <View
            style={[
              styles.searchContainer,
              isSearchFocused && styles.searchContainerFocused,
            ]}
          >
            <Ionicons
              name="search"
              size={18}
              color={Colors.neutral[400]}
              style={styles.searchIcon}
            />
            <TextInput
              value={searchQuery}
              onChangeText={onSearchChange}
              placeholder="Search acupressure points..."
              placeholderTextColor={Colors.neutral[400]}
              style={styles.searchInput}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onSubmitEditing={onSearchSubmit || handleSearchSubmit}
              returnKeyType="search"
            />
          </View>
        </View>

        {/* Right Section: Navigation & Auth Buttons */}
        <View style={styles.rightSection}>
          {/* Guide Button */}
          <Pressable
            onPress={() => navigation.navigate('BeginnerGuide')}
            style={({ pressed, hovered }: any) => [
              styles.navButton,
              hovered && styles.navButtonHovered,
              pressed && styles.buttonPressed,
            ]}
          >
            <Ionicons name="book-outline" size={18} color={Colors.neutral[600]} />
            <Text style={styles.navButtonText}>Guide</Text>
          </Pressable>

          {/* Language Selector */}
          <Pressable
            onPress={toggleLanguage}
            style={({ pressed, hovered }: any) => [
              styles.navButton,
              styles.languageButton,
              hovered && styles.navButtonHovered,
              pressed && styles.buttonPressed,
            ]}
          >
            <Ionicons name="language-outline" size={18} color={Colors.neutral[600]} />
            <Text style={styles.navButtonText}>
              {currentLanguage === 'en' ? 'EN' : 'हि'}
            </Text>
          </Pressable>

          {/* Pricing Button */}
          <Pressable
            onPress={() => navigation.navigate('Subscription')}
            style={({ pressed, hovered }: any) => [
              styles.navButton,
              hovered && styles.navButtonHovered,
              pressed && styles.buttonPressed,
            ]}
          >
            <Ionicons name="pricetag-outline" size={18} color={Colors.neutral[600]} />
            <Text style={styles.navButtonText}>Pricing</Text>
          </Pressable>

          {isAuthenticated ? (
            <>
              <Pressable
                onPress={() => navigation.navigate('MyAccount')}
                style={({ pressed, hovered }: any) => [
                  styles.authButton,
                  styles.loginButton,
                  hovered && styles.loginButtonHovered,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Ionicons name="person-circle-outline" size={20} color={Colors.neutral[700]} />
                <Text style={styles.loginButtonText}>
                  {user?.displayName || 'Account'}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('Subscription')}
                style={({ pressed, hovered }: any) => [
                  styles.authButton,
                  styles.signupButton,
                  hovered && styles.signupButtonHovered,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Ionicons name="star" size={16} color="#ffffff" style={{ marginRight: 6 }} />
                <Text style={styles.signupButtonText}>Premium</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Pressable
                onPress={() => navigation.navigate('Login')}
                style={({ pressed, hovered }: any) => [
                  styles.authButton,
                  styles.loginButton,
                  hovered && styles.loginButtonHovered,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('Signup')}
                style={({ pressed, hovered }: any) => [
                  styles.authButton,
                  styles.signupButton,
                  hovered && styles.signupButtonHovered,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Text style={styles.signupButtonText}>Sign Up</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.navbar,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
    ...Shadows.sm,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: Spacing.lg,
  },
  logoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Spacing.lg,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    ...Platform.select({
      web: {
        cursor: 'pointer' as any,
        transition: 'all 0.2s ease' as any,
      },
    }),
  },
  logoButtonHovered: {
    backgroundColor: Colors.neutral[50],
  },
  logoButtonPressed: {
    opacity: 0.7,
  },
  logoImage: {
    width: 56,
    height: 56,
    marginRight: 0,
  },
  logoText: {
    ...Typography.h5,
    color: Colors.primary[600],
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: -1.5,
  },
  searchContainer: {
    flex: 1,
    maxWidth: 500,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral[50],
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
    ...Platform.select({
      web: {
        transition: 'all 0.2s ease' as any,
      },
    }),
  },
  searchContainerFocused: {
    backgroundColor: Colors.background.primary,
    borderColor: Colors.primary[400],
    ...Shadows.md,
  },
  searchIcon: {
    marginRight: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    ...Typography.body1,
    color: Colors.text.primary,
    fontSize: 14,
    paddingVertical: 6,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    backgroundColor: 'transparent',
    ...Platform.select({
      web: {
        cursor: 'pointer' as any,
        transition: 'all 0.2s ease' as any,
      },
    }),
  },
  navButtonHovered: {
    backgroundColor: Colors.neutral[100],
  },
  navButtonText: {
    ...Typography.body2,
    color: Colors.neutral[700],
    fontWeight: '500',
    fontSize: 14,
  },
  languageButton: {
    minWidth: 60,
    justifyContent: 'center',
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.full,
    ...Platform.select({
      web: {
        cursor: 'pointer' as any,
        transition: 'all 0.2s ease' as any,
      },
    }),
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.neutral[300],
  },
  loginButtonHovered: {
    backgroundColor: Colors.neutral[100],
    borderColor: Colors.neutral[400],
  },
  loginButtonText: {
    ...Typography.body2,
    color: Colors.neutral[700],
    fontWeight: '600',
    fontSize: 14,
  },
  signupButton: {
    backgroundColor: Colors.primary[600],
    ...Shadows.md,
  },
  signupButtonHovered: {
    backgroundColor: Colors.primary[700],
    ...Shadows.lg,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  signupButtonText: {
    ...Typography.body2,
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});
