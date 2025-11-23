# AccuHeal - Acupressure Guide App

## Overview
AccuHeal is a comprehensive, mobile-first acupressure guide application built with React Native and Expo. It offers professional guidance on traditional Chinese Medicine (TCM) acupressure techniques for natural healing and wellness. The app features a bilingual English and Hindi interface, making it accessible to a diverse user base, particularly in India. It includes a database of 89 acupressure points with detailed descriptions, indications, contraindications, and safety guidelines. Users can discover points through smart search, guided questionnaires, and structured learning materials. The business vision is to provide an accessible and professional tool for natural wellness, leveraging a freemium model for market penetration and sustained revenue.

## Recent Changes (November 23, 2025)

### Major Migration: Firebase → Supabase
- **Completed**: Full migration of backend from Firebase to Supabase PostgreSQL
- **Data**: 24 acupressure points successfully migrated to Supabase
- **Users**: User subscription data synced to Supabase
- **Real-time**: SubscriptionContext now uses Supabase real-time subscriptions
- **Services**: Created comprehensive supabaseService.ts with all CRUD operations

### Razorpay Payment Integration (In Progress)
- **Status**: Service layer created and ready for integration
- **Service**: razorpayService.ts handles order creation and payment verification
- **Subscription**: ₹499/month subscription pricing configured
- **Next Steps**: Integrate Razorpay Checkout modal in SubscriptionScreen

### Logo & Brand Refinements
- Seamless logo-text integration with "A" icon + "ccuHeal" text
- Larger 56x56px logo in navbar
- No gaps between logo and text for professional appearance
- 512x512px favicon for better browser visibility

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React Native with Expo SDK for cross-platform development (iOS, Android, Web).
- **Navigation**: React Navigation v6 with stack-based navigation and OpenRouter.ai-style top navigation bar.
- **State Management**: Context API for language preferences, Clerk authentication, and real-time Supabase subscription status.
- **UI Components**: Custom component library including Button, Card, SearchInput, PointCard, TopNavigationBar, and PremiumGate.
- **Styling**: StyleSheet-based approach with comprehensive design system.
- **Animations**: React Native Reanimated v3 for micro-interactions.
- **Internationalization**: i18next for English/Hindi bilingual support.
- **Content Gating**: Freemium model (15 free beginner points, 74 premium points).

### Backend Architecture (MIGRATED TO SUPABASE)
- **Database**: Supabase PostgreSQL (replacing Firebase Firestore)
  - acupressure_points table: 24+ points with full TCM data
  - users table: Subscription status and user profiles
  - Real-time subscriptions enabled
  - Row Level Security policies for data protection
  
- **File Storage**: Supabase Storage for acupressure point images
- **Search Engine**: Typesense (runs on localhost:8108, Docker required - TODO: Replace with Supabase full-text search)
- **Authentication**: Clerk for email/password, Google OAuth, Apple Sign-In
- **Payments**: Razorpay for ₹499/month subscriptions (in integration phase)
- **Analytics**: Firebase Analytics (legacy, can be removed)

### Data Structure
- **Acupressure Points**: Multilingual names, locations, meridian info, indications, contraindications, technique instructions
- **Users**: clerk_user_id, email, subscription status, expiry dates
- **Meridian System**: Classical TCM meridian organization

### Design System
- **Color Palette**: Green primary (#4ade80), Blue info (#3b82f6), light blue backgrounds (#E8F2F8, #DFF4F0)
- **Typography**: Scalable text system with display, heading, body, caption variants
- **Spacing**: Consistent spacing scale
- **Shadows**: Multi-layer shadow system for depth

## External Dependencies

### Cloud Services
- **Supabase**: PostgreSQL database, storage, real-time subscriptions
- **Clerk**: Authentication provider
- **Razorpay**: Payment processing for subscriptions
- **Typesense**: Search engine (local Docker instance - future: migrate to Supabase FTS)

### Development Tools
- **Expo**: Development platform and build service
- **TypeScript**: Type safety
- **ESLint**: Code quality
- **React Navigation**: Navigation framework

### Libraries
- **@supabase/supabase-js**: Database client (✅ migrated)
- **razorpay**: Payment SDK (✅ installed)
- **expo-***: Platform integrations (image, fonts, auth, etc.)
- **react-native-reanimated**: Animations
- **i18next**: Translations

## Next Steps
1. ✅ Complete Supabase data migration (import script ready)
2. 🚀 Integrate Razorpay Checkout modal in SubscriptionScreen
3. 🔄 Replace Typesense with Supabase full-text search (eliminates Docker dependency)
4. 🧹 Remove Firebase SDK completely (cleanup)
5. 🚀 Deploy to production with Replit publishing

## TODO: Razorpay Setup
- Add EXPO_PUBLIC_RAZORPAY_KEY_ID to environment variables
- Add RAZORPAY_KEY_SECRET to secrets
- Integrate Razorpay Checkout modal for web/mobile
- Create webhook handler for payment success/failure
- Test subscription flow end-to-end
