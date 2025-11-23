# AccuHeal - Acupressure Guide App

## Overview
AccuHeal is a comprehensive, mobile-first acupressure guide application built with React Native and Expo. It offers professional guidance on traditional Chinese Medicine (TCM) acupressure techniques for natural healing and wellness. The app features a bilingual English and Hindi interface, making it accessible to a diverse user base, particularly in India. It includes a database of 89 acupressure points with detailed descriptions, indications, contraindications, and safety guidelines. Users can discover points through smart search, guided questionnaires, and structured learning materials. The business vision is to provide an accessible and professional tool for natural wellness, leveraging a freemium model for market penetration and sustained revenue.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React Native with Expo SDK for cross-platform development (iOS, Android, Web).
- **Navigation**: React Navigation v6 with stack-based navigation and an OpenRouter.ai-style top navigation bar.
- **State Management**: Context API for language preferences, Clerk authentication state (including email verification), and real-time Firestore-synced subscription status.
- **UI Components**: Custom component library including `Button`, `Card`, `SearchInput`, `PointCard`, `TopNavigationBar`, and `PremiumGate` components.
- **Styling**: StyleSheet-based approach with a comprehensive design system for colors, typography, spacing, and shadows.
- **Animations**: React Native Reanimated v3 for smooth micro-interactions.
- **Internationalization**: i18next for English/Hindi bilingual support with persistent language preferences.
- **Content Gating**: Freemium model offering 15 free beginner points and 74 premium points.

### Backend Architecture
- **Database**: Firebase Firestore for acupressure point data, user profiles, and subscription status.
- **File Storage**: Firebase Storage for acupressure point anatomical images.
- **Search Engine**: Typesense for intelligent point discovery with symptom search and multilingual support.
- **Authentication**: Clerk for email/password, Google OAuth, and Apple Sign-In, including an email verification flow.
- **Analytics**: Firebase Analytics for usage tracking.
- **Subscriptions**: Freemium model where subscription status is stored in Firestore and synchronized in real-time. Stripe integration for payment processing is pending.

### Data Structure
- **Acupressure Points**: 89 points with multilingual names, locations, meridian information, therapeutic indications, contraindications, and technique instructions.
- **Meridian System**: Classical TCM meridian organization (12 main, governing, conception vessels).
- **Classification**: Points categorized by difficulty (Beginner, Intermediate, Advanced), body parts, and therapeutic categories.
- **Search Schema**: Optimized for symptom-based search, body part filtering, and point code lookup.

### Design System
- **Color Palette**: Green-themed primary color (#4ade80), blue info color (#3b82f6) for navigation, earth tones, and neutral scales.
- **Typography**: Scalable text system with display, heading, body, and caption variants.
- **Spacing**: Consistent spacing scale and `BorderRadius` from `sm` (4px) to `full` (9999) for pill-shaped elements.
- **Shadows**: Multi-layer shadow system (sm, md, lg, xl, soft, glow, floating) for depth.
- **Components**: Modular architecture with modern variants like pill-shaped buttons, rounded cards with soft shadows, circular badges, and elevated navigation bars.

## External Dependencies

### Cloud Services
- **Firebase**: Firestore, Storage, and Analytics.
- **Clerk**: Authentication provider.
- **Typesense**: Search engine.
- **Stripe** (Pending): Payment processing.

### Development Tools
- **Expo**: Development platform and build service.
- **TypeScript**: For type safety.
- **ESLint**: For code quality.
- **React Navigation**: Navigation framework.

### UI/UX Libraries
- **Expo Image**: Optimized image loading.
- **React Native Reanimated**: High-performance animations.
- **Expo Linear Gradient**: Visual enhancements.
- **React Native SVG**: Vector graphics.
- **React Native Gesture Handler**: Touch interactions.

### Localization
- **i18next**: Internationalization framework.
- **React i18next**: React Native integration for translations.
- **Expo Localization**: Device locale detection.

### Security & Storage
- **React Native Async Storage**: Local data persistence.
- **Expo Secure Store**: Secure credential storage.
- **Firebase Security Rules**: Database access control.

### Platform Integration
- **React Native Google Sign-In**: Google authentication.
- **Expo Apple Authentication**: Apple Sign-In for iOS.
- **React Native Haptic Feedback**: Haptic feedback.
- **Expo Local Authentication**: Biometric authentication.