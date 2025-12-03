# AccuHeal - Acupressure Guide App

A mobile-first acupressure guide app built with React Native and Expo, designed to help users discover and apply natural acupressure techniques for everyday wellness.

## 🎯 Project Status

**Current Phase:** ✅ **Phase 1.5 Beautiful UI Enhancement**  
**Status:** 🎨 **Implementing Beautiful UI Improvements & Tailwind CSS Integration**  
**Version:** v1.3 - Visual Enhancement  
**Last Updated:** August 26, 2025  
**GitHub:** [AccuHeal_Acupressure_App-Phase-1-Expansion](https://github.com/sarvjot23/AccuHeal_Acupressure_App)

### ✅ Verified Working Configuration
- **Node.js:** v22.17.0
- **Expo CLI:** @expo/cli@0.24.20 (latest)
- **React Native:** 0.79.5
- **Platform:** Windows 11, macOS, Linux
- **Status:** ✅ Web version fully functional, ⏳ Android/iOS ready for testing

## 🚀 Quick Start

### Web Development (Fastest Testing)
```bash
cd F:\ai_projects\projects\accuheal
npx @expo/cli start --web --port 3001
# Open: http://localhost:3001
```

### Full Development Server
```bash
npm install
npx @expo/cli start
```

## 📱 Features

### Enhanced Features Complete ✅
- **Bilingual Support**: English and Hindi with complete translations and language switching
- **53 Acupressure Points**: Comprehensive essential points database covering all major health categories
- **Smart Search**: Unified search architecture with Supabase Full-Text Search (currently active) and Typesense support for future scaling
- **Beginner's Guide**: Interactive 5-step educational tutorial teaching acupressure fundamentals
- **Guided Questionnaire**: Personalized recommendations based on user responses
- **Interactive Timer Sessions**: Smart duration parsing with pause/resume/reset controls
- **Beautiful UI Design**: Enhanced cards, animations, and modern visual effects
- **Cross-Platform**: Works on iOS, Android, and Web
- **Production Ready**: Firebase backend, Supabase database, enhanced search, complete UI/UX

### 🎨 UI Enhancement Features (Phase 1.5) 🚀
- **Enhanced Card Design**: Subtle gradients, improved shadows, and better visual hierarchy
- **Interactive Animations**: Button press effects, loading skeletons, and micro-interactions
- **Modern Visual Effects**: Glass morphism elements, breathing animations for timers
- **Tailwind CSS Ready**: Optional integration for utility-first styling approach
- **Performance Optimized**: 60fps animations with React Native Reanimated 3

### Core Screens
- **Home**: Popular points and quick actions
- **Search**: Advanced search with filters and suggestions  
- **Guide**: Guided questionnaire, beginner's guide, and browse options
- **Settings**: Language preferences and app information with working language switcher
- **Point Detail**: Comprehensive point information with interactive timer
- **Questionnaire**: Step-by-step symptom assessment
- **Beginner Guide**: Interactive 5-step educational tutorial with progress tracking

## 🛠 Tech Stack

- **Frontend**: React Native with Expo, TypeScript
- **Navigation**: React Navigation (Bottom Tabs + Stack)
- **Backend**: Firebase (Firestore, Storage, Analytics)
- **Database**: Supabase (PostgreSQL with Full-Text Search)
- **Search**: Unified search architecture
  - **Current**: Supabase Full-Text Search (PostgreSQL FTS with Hindi support)
  - **Future**: Typesense ready for production scaling when needed
- **Authentication**: Clerk (OAuth, email)
- **Payments**: Razorpay (subscription management)
- **Internationalization**: react-i18next
- **State Management**: React Context + Hooks

## 📋 Development Phases

### 🎨 Phase 1.5: Beautiful UI Enhancement (IN PROGRESS - August 2025)
- **Enhanced Visual Design**: Improved cards, buttons, and interactive elements with subtle animations
- **Modern UI Patterns**: Glass morphism effects, gradient backgrounds, and enhanced shadows
- **Animation Framework**: Micro-interactions, loading skeletons, and smooth transitions
- **Tailwind CSS Integration**: Optional utility-first styling system for faster development
- **Performance Optimization**: 60fps animations with React Native Reanimated 3
- **Beautiful Loading States**: Skeleton screens and shimmer effects replacing basic loaders
- **Enhanced Typography**: Improved font scaling, spacing, and visual hierarchy
- **Accessibility Improvements**: Better contrast ratios and screen reader support

### ✅ Phase 1: Database Expansion (COMPLETED - January 2025)
- **Major Content Expansion**: 53 essential acupressure points (from 24 to 53)
- **Enhanced Health Coverage**: 190+ symptoms and conditions covered
- **Supabase Migration**: PostgreSQL database with Full-Text Search for bilingual search support
- **Unified Search Architecture**: Flexible search backend supporting both Supabase FTS (current) and Typesense (future)
- **Beginner's Guide**: Comprehensive 5-step interactive educational tutorial
- **Language Enhancement**: Complete bilingual UI with working language switcher
- **UI/UX Improvements**: Fixed scrollability issues, button functionality, and enhanced user experience
- **Complete Legacy Compatibility**: All new points work seamlessly with existing features
- **Comprehensive Health Categories**: Pain management, respiratory health, digestive support, mental/emotional wellness, sensory issues, energy & vitality, emergency/first aid
- **Quality Assurance**: All points include proper contraindications, bilingual support, and TCM classifications

### ✅ Phase 0: MVP Foundation (COMPLETED - Previous)
- Complete React Native + Expo + TypeScript setup
- Design system with green wellness theme
- All 6 core screens implemented
- Bilingual support (English/Hindi) with i18next
- Firebase and search integration
- Initial acupressure points with full details

### 🔮 Phase 2: Complete Meridian Systems (NEXT PRIORITY)
- **Expand to 100+ points**: Complete major meridian coverage
- **Advanced TCM Features**: Five Element Theory integration, meridian flow visualization
- **Specialized Point Categories**: Auricular (ear) points, pediatric-safe points, sports/athletic performance
- **Enhanced Search**: Body part visualization and point location mapping
- **Medical Professional Mode**: Advanced point combinations and treatment protocols

### 🔮 Phase 3: Advanced Features (FUTURE)
- Interactive body map interface with 3D visualization
- Progress tracking and user journal with health metrics
- Video tutorials for popular points with proper technique demonstrations
- AI chatbot for natural language symptom queries
- Community features and user reviews with professional moderation
- Custom routine builder with personalized treatment plans
- **Professional Integration**: Practitioner dashboard and patient management tools

## 📚 Documentation & Guides

### Setup Guides
- **[Firebase Setup](guides/FIREBASE_SETUP_GUIDE.md)** - Complete Firebase project configuration
- **[Supabase Setup](docs/SUPABASE_SETUP_GUIDE.md)** - Database and Full-Text Search configuration
- **[Typesense Setup](docs/TYPESENSE_SETUP_GUIDE.md)** - Optional search service for future scaling
- **[Android Testing](guides/ANDROID_TESTING_GUIDE.md)** - Comprehensive Android testing guide
- **[iOS Deployment](guides/IOS_DEPLOYMENT_GUIDE.md)** - iOS development and App Store submission
- **[Troubleshooting](guides/TROUBLESHOOTING_GUIDE.md)** - Common issues and solutions

### Key Files for Development
- `src/data/samplePoints.ts` - Acupressure point data structure
- `src/services/firebase.ts` - Firebase configuration
- `src/services/supabaseService.ts` - Supabase database and search service
- `src/services/searchService.ts` - Unified search architecture (switches between Supabase/Typesense)
- `src/services/typesense.ts` - Typesense search service (for future production use)
- `src/localization/` - English and Hindi translations
- `src/screens/BeginnerGuideScreen.tsx` - Interactive educational tutorial
- `src/contexts/LanguageContext.tsx` - Language switching functionality
- `app.json` - Expo configuration
- `.env` - Environment variables (search backend selection)
- `CLAUDE.md` - Project memories and context

## 🎨 Design Guidelines

### Visual Design System
- **UI Style**: Calm, clean, minimal with green/earth tones enhanced with subtle gradients
- **Animation Philosophy**: Gentle, healing-inspired micro-interactions and transitions
- **Card Design**: Enhanced shadows, glass morphism effects, and improved visual hierarchy  
- **Color Palette**: Professional green primary (healing theme) with expanded tonal variations
- **Typography**: Readable fonts with optimized spacing and proper scale ratios
- **Navigation**: Bottom nav bar (Home, Search, Guide, Settings) with smooth transitions
- **Tone**: Friendly, informative, culturally appropriate for bilingual users
- **Accessibility**: Large touch zones, proper contrast ratios, screen reader support

### UI Enhancement Implementation
- **Phase 1**: Enhanced cards, button animations, loading skeletons (1-2 hours)
- **Phase 2**: Advanced animations, transitions, visual effects (3-5 hours)  
- **Phase 3**: Gesture interactions, premium polish, accessibility (5-8 hours)
- **Optional**: Tailwind CSS integration for utility-first styling

### Related Documentation
- **[UI Future Enhancements](UI_FUTURE_ENHANCEMENTS.md)** - Complete roadmap and feature list
- **[Beautiful UI Implementation Plan](BEAUTIFUL_UI_IMPLEMENTATION_PLAN.md)** - Technical implementation guide

## 📊 Content Foundation

- **Current Points**: 53 professionally described essential acupressure points
- **Medical Coverage**: 190+ conditions and symptoms across comprehensive health categories
- **Enhanced Data Structure**: Scalable schema supporting 361+ points (complete TCM system)
- **Bilingual Content**: Complete English/Hindi translations with cultural adaptation
- **Medical Safety**: Comprehensive contraindications, safety warnings, and medical disclaimers
- **TCM Classifications**: Proper meridian assignments, Five Element Theory, and difficulty levels

## 🔧 Commands

```bash
# Development
npm start                    # Start Expo server
npm run web                  # Start web version
npm run android             # Run on Android (requires setup)
npm run ios                 # Run on iOS (requires macOS)

# Maintenance
npm run lint                # Run ESLint
npm run type-check          # Run TypeScript checks
```

## 🔍 Search Architecture

AccuHeal uses a unified search architecture that supports multiple search backends:

### Current Implementation: Supabase Full-Text Search (FTS)
- **Technology**: PostgreSQL Full-Text Search with `websearch_to_tsquery`
- **Benefits**:
  - Free tier available (no additional costs)
  - Integrated with existing Supabase database
  - Supports bilingual search (English and Hindi)
  - Good performance for current dataset (53 points)
- **Configuration**: Set `EXPO_PUBLIC_SEARCH_BACKEND=supabase` in `.env` (default)

### Future Option: Typesense
- **Status**: Implementation complete, ready for production when needed
- **When to Switch**: Consider migrating to Typesense when:
  - Dataset grows beyond 100+ points
  - Need advanced typo tolerance and relevance tuning
  - Require sub-millisecond search latency
  - Want dedicated search infrastructure
- **Hosting Options**:
  - Self-hosted (Oracle Cloud free tier, home server)
  - Typesense Cloud (paid service)
- **Configuration**: Set `EXPO_PUBLIC_SEARCH_BACKEND=typesense` in `.env`

### Switching Between Backends
The app automatically uses the configured backend via the unified `searchService`:
```typescript
// In .env file
EXPO_PUBLIC_SEARCH_BACKEND=supabase  # or 'typesense'
```

No code changes required - the search service handles backend selection automatically with fallback support.

## ⚠️ Important Notes for Development

### Environment Setup Required
1. **Firebase Configuration**: Update `.env` with production Firebase credentials
2. **Supabase Configuration**: Update `.env` with Supabase URL and anon key
3. **Search Backend Selection**: Set `EXPO_PUBLIC_SEARCH_BACKEND` to either `supabase` (default) or `typesense`
4. **Typesense Configuration** (Optional): Update `.env` with Typesense server and API keys for future production use
5. **Dependencies**: Run `npm install --force` if encountering Metro bundler issues

### Common Commands for Issues
```bash
# Clean install (most common fix)
rm -rf node_modules package-lock.json
npm install --timeout=600000 --force

# Clear Expo cache
npx @expo/cli start --clear
```

### Technical Notes
- **React Native Web Scrolling Fix**: Platform-specific scrolling solution documented in `docs/REACT_NATIVE_WEB_SCROLLING_FIX.md` - search: `react-native-web-scrolling-fix`

### Medical Disclaimer
AccuHeal is for educational purposes only. The information provided should not replace professional medical advice. Always consult with healthcare providers for serious health concerns.

---

**For detailed setup instructions, troubleshooting, and deployment guides, see the `guides/` directory.**