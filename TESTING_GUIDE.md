# AccuHeal Testing Guide

This guide provides step-by-step instructions for testing the AccuHeal app across web, Android, and iOS platforms.

## Prerequisites

Before testing, ensure you have:
- Node.js installed (v16 or higher)
- Expo CLI installed globally: `npm install -g @expo/cli`
- All dependencies installed: `npm install`

## Web Testing

### Quick Start
```bash
npm run web
```

### Detailed Web Testing Steps

1. **Start the development server**
   ```bash
   expo start --web
   ```
   - Opens development server on http://localhost:8081
   - Web app typically runs on http://localhost:19006

2. **Browser Testing**
   - **Chrome/Edge**: Primary testing browser
   - **Firefox**: Secondary browser for compatibility
   - **Safari**: For macOS users

3. **Responsive Design Testing**
   - Test desktop viewport (1920x1080, 1366x768)
   - Test tablet viewport (768x1024, 1024x768)
   - Test mobile viewport (375x667, 414x896)
   - Use browser dev tools to simulate different screen sizes

4. **Web-Specific Features to Test**
   - Touch/mouse interactions
   - Keyboard navigation
   - Copy/paste functionality
   - Browser back/forward buttons
   - Page refresh behavior
   - Network connectivity (offline/online)

5. **Performance Testing**
   - Check Network tab in dev tools for load times
   - Monitor Console for errors/warnings
   - Test with throttled network conditions

## Android Testing

### Prerequisites for Android
- Android Studio installed
- Android SDK and emulator set up
- USB debugging enabled (for physical device)

### Android Testing Steps

1. **Using Android Emulator**
   ```bash
   # Start emulator from Android Studio or command line
   npm run android
   # OR
   expo start --android
   ```

2. **Using Physical Android Device**
   ```bash
   # Enable USB debugging on device
   # Connect via USB or ensure same WiFi network
   npm run android
   ```

3. **Testing Considerations for Android**
   - **Multiple Screen Sizes**: Test on phones (5", 6", 6.5"+) and tablets (7", 10")
   - **Android Versions**: Test on Android 8+ (API level 26+)
   - **Hardware Features**: 
     - Touch gestures (swipe, pinch, tap)
     - Back button behavior
     - Hardware back button
     - Rotation (portrait/landscape)

4. **Android-Specific Testing**
   - App permissions
   - Background/foreground behavior
   - Memory usage in Android Studio profiler
   - Battery optimization settings
   - Different manufacturers (Samsung, Google, OnePlus variations)

5. **Performance Testing**
   - Use Android Studio's CPU/Memory profiler
   - Test on low-end devices (2GB RAM)
   - Monitor ANR (Application Not Responding) errors

## iOS Testing

### Prerequisites for iOS
- macOS with Xcode installed
- iOS Simulator
- Apple Developer account (for physical device testing)

### iOS Testing Steps

1. **Using iOS Simulator**
   ```bash
   npm run ios
   # OR
   expo start --ios
   ```

2. **Using Physical iOS Device**
   ```bash
   # Requires Apple Developer account and device provisioning
   expo start --ios
   # Follow Expo's device setup instructions
   ```

3. **Testing Considerations for iOS**
   - **Multiple Screen Sizes**: 
     - iPhone SE (4.7"), iPhone 12/13/14 (6.1"), iPhone Pro Max (6.7")
     - iPad (10.9"), iPad Pro (11", 12.9")
   - **iOS Versions**: Test on iOS 13+ (current Expo support)
   - **Hardware Features**:
     - Touch ID/Face ID simulation
     - Device rotation
     - Safe area handling (notch, Dynamic Island)

4. **iOS-Specific Testing**
   - App Store compliance
   - Privacy permissions
   - Background app refresh
   - Push notifications (if implemented)
   - Accessibility features (VoiceOver, Dynamic Type)

5. **Performance Testing**
   - Use Xcode Instruments for memory/CPU profiling
   - Test on older devices (iPhone 8, iPad 6th gen)
   - Monitor crash logs

## Cross-Platform Testing Checklist

### Core App Features
- [ ] Home screen loads correctly
- [ ] Navigation between screens works
- [ ] Search functionality works
- [ ] Acupressure point details display properly
- [ ] Questionnaire flows correctly
- [ ] Language switching (English/Hindi) works
- [ ] Settings screen functionality

### UI/UX Testing
- [ ] Text is readable on all screen sizes
- [ ] Images load and display correctly
- [ ] Touch targets are appropriately sized (44px minimum)
- [ ] Loading states display properly
- [ ] Error states are handled gracefully
- [ ] Consistent styling across platforms

### Data & Connectivity
- [ ] App works offline (cached data)
- [ ] Firebase connection works
- [ ] Algolia search functions properly
- [ ] Data syncing across app restart

### Bilingual Support
- [ ] Hindi text displays correctly
- [ ] Font rendering for Devanagari script
- [ ] Text direction and alignment
- [ ] Language switching persists

## Debugging and Troubleshooting

### Common Issues and Solutions

1. **Metro bundler issues**
   ```bash
   npx expo start --clear
   ```

2. **iOS simulator not launching**
   ```bash
   xcrun simctl list
   npx expo run:ios --simulator="iPhone 14"
   ```

3. **Android emulator connection issues**
   ```bash
   adb devices
   adb reverse tcp:8081 tcp:8081
   ```

4. **Web build errors**
   - Check browser console for errors
   - Verify web-compatible packages are used
   - Test in incognito/private mode

### Performance Monitoring

1. **Use Expo Developer Tools**
   - Performance monitor
   - Network requests
   - Device logs

2. **Platform-Specific Tools**
   - **Web**: Browser DevTools
   - **Android**: Android Studio Profiler
   - **iOS**: Xcode Instruments

### Testing Environment Setup

```bash
# Install all dependencies
npm install

# Run linting
npm run lint

# Run type checking
npm run type-check

# Start development server
npm start
```

## Automated Testing (Future Enhancement)

Consider implementing:
- Unit tests with Jest
- Component tests with React Native Testing Library
- E2E tests with Detox (React Native) or Playwright (Web)
- Visual regression testing
- Performance testing automation

## Deployment Testing

Before production deployment:
1. Test production builds on all platforms
2. Verify all third-party service integrations
3. Test app store submission requirements
4. Validate accessibility compliance
5. Performance benchmarking

---

## Quick Test Commands

```bash
# Web testing
npm run web

# Android testing  
npm run android

# iOS testing
npm run ios

# Run all checks
npm run lint && npm run type-check
```

For detailed deployment instructions, refer to `DEPLOYMENT_GUIDE.md`.