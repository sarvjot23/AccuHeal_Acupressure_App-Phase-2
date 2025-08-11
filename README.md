# AccuHeal - Acupressure Guide App

A mobile-first acupressure guide app built with React Native and Expo, designed to help users discover and apply natural acupressure techniques for everyday wellness.

## 🎯 Project Status

**Current Phase:** ✅ **Phase 1 Database Expansion Complete**  
**Status:** 🚀 **Enhanced with 53 Essential Acupressure Points**  
**Version:** v1.1 - Database Expansion  
**Last Updated:** January 11, 2025  
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
- **Bilingual Support**: English and Hindi with complete translations
- **53 Acupressure Points**: Comprehensive essential points database covering all major health categories
- **Smart Search**: Enhanced search with Typesense migration for better performance
- **Guided Questionnaire**: Personalized recommendations based on user responses
- **Interactive Timer Sessions**: Smart duration parsing with pause/resume/reset controls
- **Improved UI/UX**: Fixed scrollability issues and enhanced user experience
- **Cross-Platform**: Works on iOS, Android, and Web
- **Production Ready**: Firebase backend, enhanced search, complete UI/UX

### Core Screens
- **Home**: Popular points and quick actions
- **Search**: Advanced search with filters and suggestions  
- **Guide**: Guided questionnaire and browse options
- **Settings**: Language preferences and app information
- **Point Detail**: Comprehensive point information with interactive timer
- **Questionnaire**: Step-by-step symptom assessment

## 🛠 Tech Stack

- **Frontend**: React Native with Expo, TypeScript
- **Navigation**: React Navigation (Bottom Tabs + Stack)
- **Backend**: Firebase (Firestore, Storage, Analytics)
- **Search**: Typesense with enhanced bilingual support and performance
- **Internationalization**: react-i18next
- **State Management**: React Context + Hooks

## 📋 Development Phases

### ✅ Phase 1: Database Expansion (COMPLETED - January 2025)
- **Major Content Expansion**: 53 essential acupressure points (from 24 to 53)
- **Enhanced Health Coverage**: 190+ symptoms and conditions covered
- **Typesense Migration**: Improved search performance and scalability
- **UI/UX Improvements**: Fixed Conditions tab scrollability and Start Session button visibility
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
- **[Typesense Setup](docs/TYPESENSE_SETUP_GUIDE.md)** - Search service configuration and migration
- **[Android Testing](guides/ANDROID_TESTING_GUIDE.md)** - Comprehensive Android testing guide
- **[iOS Deployment](guides/IOS_DEPLOYMENT_GUIDE.md)** - iOS development and App Store submission
- **[Troubleshooting](guides/TROUBLESHOOTING_GUIDE.md)** - Common issues and solutions

### Key Files for Development
- `src/data/samplePoints.ts` - Acupressure point data structure
- `src/services/firebase.ts` - Firebase configuration
- `src/services/typesense.ts` - Enhanced search service configuration
- `src/localization/` - English and Hindi translations
- `app.json` - Expo configuration
- `CLAUDE.md` - Project memories and context

## 🎨 Design Guidelines

- **UI Style**: Calm, clean, minimal with green/earth tones
- **Typography**: Readable fonts optimized for accessibility
- **Navigation**: Bottom nav bar (Home, Search, Guide, Settings)
- **Tone**: Friendly, informative, culturally appropriate for bilingual users
- **Accessibility**: Large touch zones, screen reader support

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

## ⚠️ Important Notes for Development

### Environment Setup Required
1. **Firebase Configuration**: Update `.env` with production Firebase credentials
2. **Typesense Configuration**: Update `.env` with Typesense server and API keys
3. **Dependencies**: Run `npm install --force` if encountering Metro bundler issues

### Common Commands for Issues
```bash
# Clean install (most common fix)
rm -rf node_modules package-lock.json
npm install --timeout=600000 --force

# Clear Expo cache
npx @expo/cli start --clear
```

### Medical Disclaimer
AccuHeal is for educational purposes only. The information provided should not replace professional medical advice. Always consult with healthcare providers for serious health concerns.

---

**For detailed setup instructions, troubleshooting, and deployment guides, see the `guides/` directory.**