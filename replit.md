# AccuHeal - Acupressure Guide App

## Overview

AccuHeal is a comprehensive mobile-first acupressure guide application built with React Native and Expo. The app provides users with professional guidance on traditional Chinese Medicine (TCM) acupressure techniques for natural healing and wellness. The application features a bilingual interface supporting English and Hindi languages, making it accessible to a diverse user base, particularly in India.

The app contains a database of 89 carefully documented acupressure points from classical TCM meridians, including detailed location descriptions, therapeutic indications, contraindications, and safety guidelines. Users can discover acupressure points through smart search functionality, guided questionnaires, and structured learning materials.

## Recent Changes

### Clerk Authentication Migration - November 2025
- **Authentication Provider Switch**: Migrated from Firebase Auth to Clerk for simplified OAuth and improved UX
- **Clerk Setup**: Installed @clerk/clerk-expo@2.19.4, expo-web-browser@15.0.9, expo-linking, configured ClerkProvider with secure token cache
- **AuthContext Redesign**: Complete rewrite using Clerk hooks (useAuth, useUser, useSignIn, useSignUp, useOAuth)
  - Email/password authentication via Clerk's signIn.create() and signUp.create()
  - Email verification flow with verifyEmail(code) and resendVerificationEmail() methods
  - Pending verification state management (pendingVerification, pendingVerificationEmail)
  - Google OAuth via useOAuth with proper redirectUrl (Linking.createURL)
  - Apple Sign-In via useOAuth with iOS-specific handling
  - Maintains backward compatibility with existing AuthContext interface
- **App Configuration**: Added 'accuheal' scheme to app.json, enabled usesAppleSignIn for iOS
- **Environment Variables**: Added EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY for Clerk configuration
- **Legacy Code**: Backed up original Firebase AuthContext to src/contexts/AuthContext.firebase.tsx.backup
- **Next Steps**: Update LoginScreen and SignupScreen to use new verification flow, migrate SubscriptionContext to Clerk user IDs

### Freemium Subscription System - October 2025
- **Business Model**: Implemented freemium model with 15 free beginner points and 74 premium points unlocked via $5/month subscription
- **Free Tier Content**: LI4, GV20, PC6, ST36, SP6, HT7, GB20, LI20, KI3, LU7, LI11, BL23, CV6, CV17, GV14 marked as free with `isFree: true` flag
- **SubscriptionContext**: Created context provider managing premium status, subscription state, and real-time Firestore synchronization
- **Content Gating**: Implemented filtering in SearchScreen and HomeScreen to show only free points for non-premium users
- **PremiumGate Component**: Reusable component for protecting premium content with upgrade prompts
- **SubscriptionScreen**: Professional pricing UI with feature comparison, premium benefits display, and subscription management
- **Auth Integration**: Fixed race condition in subscription checking; now passes Firebase user directly from auth callback
- **Search Cleanup**: Removed Algolia dependency completely; app now uses Typesense exclusively for search functionality
- **⚠️ Stripe Integration Pending**: Payment processing requires backend webhook setup (Firebase Cloud Functions recommended)

### UI Redesign - October 2025
- **Modern Card-Based Design**: Completely redesigned UI with clean, modern aesthetic inspired by professional medical app references
- **PointCard Component**: Redesigned with soft light green backgrounds, large circular point images (70px) with white borders, difficulty badges with star ratings, TCM badges, pill-shaped blue info buttons, and action icon buttons
- **Design System Enhancements**: Added new shadow constants (sm, md, lg, xl, soft, glow, floating) for cleaner visual hierarchy; introduced BorderRadius.full (9999) for pill-shaped elements
- **Bottom Navigation**: Modernized with blue rounded background (Colors.info), enhanced shadows, white active/inactive text colors, and 28px rounded top corners
- **Screen Updates**: 
  - HomeScreen: Cleaner background (#f8fafb), better typography hierarchy, improved spacing with bottom padding for tab bar
  - SearchScreen: Refined with cleaner backgrounds, improved filter chips, and consistent card styling
- **Button Component**: Updated to pill-shaped by default with proper event handling
- **Safe Area Handling**: Added bottom padding (90px) to prevent content overlap with navigation bar

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React Native with Expo SDK for cross-platform development (iOS, Android, Web)
- **Navigation**: React Navigation v6 with bottom tab navigation and stack navigation for detail screens
- **State Management**: Context API for language preferences, authentication state, and subscription status
  - `LanguageContext`: Manages app language (English/Hindi)
  - `AuthContext`: Clerk authentication state with email verification management
  - `SubscriptionContext`: Premium subscription status with real-time Firestore sync
- **UI Components**: Custom component library with reusable Button, Card, SearchInput, PointCard, and PremiumGate components
- **Styling**: StyleSheet-based approach with design system constants for colors, typography, spacing, and shadows
- **Animations**: React Native Reanimated v3 for smooth micro-interactions and loading animations
- **Internationalization**: i18next for English/Hindi bilingual support with persistent language preferences
- **Content Gating**: Free users see 15 essential beginner points; premium users see all 89 points

### Backend Architecture
- **Database**: Firebase Firestore for storing acupressure point data, user profiles, and subscription status
- **File Storage**: Firebase Storage for acupressure point anatomical images
- **Search Engine**: Typesense for intelligent point discovery with symptom search and multilingual support
- **Authentication**: Clerk for authentication with email/password, Google OAuth, and Apple Sign-In; includes email verification flow
- **Analytics**: Firebase Analytics for usage tracking and app performance monitoring
- **Subscriptions**: Freemium model with 15 free points and 74 premium points ($5/month)
  - User subscription status stored in Firestore `users/{uid}` with fields: `isPremium`, `subscriptionStatus`, `subscriptionExpiresAt`
  - Real-time subscription state synchronization using Firestore onSnapshot listeners
  - ⚠️ Stripe payment backend pending (requires Cloud Functions for webhook handling)

### Data Structure
- **Acupressure Points**: 89 points with multilingual names, locations, meridian information, therapeutic indications, contraindications, and technique instructions
- **Meridian System**: Classical TCM meridian organization with 12 main meridians plus governing and conception vessels
- **Classification**: Points categorized by difficulty (Beginner, Intermediate, Advanced), body parts, and therapeutic categories
- **Search Schema**: Optimized for symptom-based search, body part filtering, and point code lookup

### Design System
- **Color Palette**: Green-themed healing colors with primary (#4ade80), blue info color (#3b82f6) for navigation, secondary earth tones, and comprehensive neutral scales
- **Typography**: Scalable text system with display, heading, body, and caption variants with improved hierarchy
- **Spacing**: Consistent spacing scale from 4px to 96px with semantic naming; BorderRadius from sm (4px) to full (9999) for pill-shaped elements
- **Shadows**: Multi-layer shadow system (sm, md, lg, xl) plus enhanced shadows (soft, glow, floating) for improved depth and visual appeal
- **Components**: Modular component architecture with modern variants including pill-shaped buttons, rounded cards with soft shadows, circular badges, and elevated navigation bars

## External Dependencies

### Cloud Services
- **Firebase**: Backend infrastructure for Firestore database, Storage, and Analytics (Auth migrated to Clerk)
- **Clerk**: Authentication provider for email/password, Google OAuth, and Apple Sign-In with built-in email verification
- **Typesense**: Search engine for intelligent acupressure point discovery with typo tolerance, faceted search, and Hindi language support
- **Stripe** (Pending): Payment processing for $5/month premium subscriptions - requires backend webhook setup

### Development Tools
- **Expo**: Development platform and build service for React Native applications
- **TypeScript**: Type safety and enhanced developer experience
- **ESLint**: Code quality and consistency enforcement
- **React Navigation**: Navigation framework for multi-screen app architecture

### UI/UX Libraries
- **Expo Image**: Optimized image loading and caching for acupressure point illustrations
- **React Native Reanimated**: High-performance animations for user interactions
- **Expo Linear Gradient**: Visual enhancement for cards and UI elements
- **React Native SVG**: Scalable vector graphics for icons and illustrations
- **React Native Gesture Handler**: Touch interactions and gesture recognition

### Localization
- **i18next**: Internationalization framework for bilingual English/Hindi support
- **React i18next**: React Native integration for translation management
- **Expo Localization**: Device locale detection and regional formatting

### Security & Storage
- **React Native Async Storage**: Local data persistence for user preferences
- **Expo Secure Store**: Secure credential storage for authentication tokens
- **Firebase Security Rules**: Database access control and data protection

### Platform Integration
- **React Native Google Sign-In**: Google authentication integration
- **Expo Apple Authentication**: Apple Sign-In for iOS devices
- **React Native Haptic Feedback**: Touch feedback for enhanced user experience
- **Expo Local Authentication**: Biometric authentication support