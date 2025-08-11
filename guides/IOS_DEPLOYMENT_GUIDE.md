# iOS Deployment Guide for AccuHeal

## Prerequisites

- **macOS computer** (required for iOS development)
- **Xcode** (latest version from Mac App Store)
- **Apple Developer Account** ($99/year for App Store submission)
- **iOS device** or **iOS Simulator**

## Development Testing

### Method 1: iOS Simulator (macOS only)

1. **Install Xcode from Mac App Store**
2. **Open Xcode → Preferences → Components**
3. **Install desired iOS Simulator versions** (iOS 16+)
4. **Start development server:**
   ```bash
   cd /path/to/accuheal
   npx @expo/cli start --ios
   ```
5. **App will launch in iOS Simulator**

### Method 2: Physical iOS Device

1. **Install Expo Go** from App Store on iPhone/iPad
2. **Connect to same WiFi network** as development computer
3. **Start development server:**
   ```bash
   npx @expo/cli start
   ```
4. **Scan QR code** with Expo Go app

## Production Build Setup

### Step 1: Apple Developer Account
1. **Sign up at:** https://developer.apple.com/
2. **Choose Individual or Organization account** ($99/year)
3. **Complete enrollment process**

### Step 2: App Store Configuration

1. **Update app.json:**
   ```json
   {
     "expo": {
       "name": "AccuHeal - Acupressure Guide",
       "slug": "accuheal-acupressure",
       "ios": {
         "bundleIdentifier": "com.yourcompany.accuheal",
         "buildNumber": "1",
         "supportsTablet": true
       }
     }
   }
   ```

2. **Create App Store listing:**
   - Go to **App Store Connect** (appstoreconnect.apple.com)
   - Click **"My Apps" → "+"** → **"New App"**
   - **Bundle ID:** Must match app.json bundleIdentifier
   - **App Name:** "AccuHeal - Acupressure Guide"

## Build Process

### Using EAS Build (Recommended)

1. **Install EAS CLI:**
   ```bash
   npm install -g eas-cli
   eas login
   ```

2. **Initialize EAS:**
   ```bash
   eas build:configure
   ```

3. **Build for iOS:**
   ```bash
   # Internal distribution (TestFlight)
   eas build --platform ios --profile preview
   
   # App Store submission
   eas build --platform ios --profile production
   ```

### Traditional Expo Build

1. **Build IPA file:**
   ```bash
   npx @expo/cli build:ios
   ```

2. **Choose build type:**
   - **archive:** For App Store submission
   - **simulator:** For testing only

## App Store Submission

### Step 1: Upload Build
1. **Use Application Loader** or **Transporter app**
2. **Upload .ipa file** generated from build process
3. **Wait for processing** (10-30 minutes)

### Step 2: App Store Listing
Required information:
- **App Screenshots** (use provided screenshots from `/screenshots` folder)
- **App Description:**
  ```
  AccuHeal is your comprehensive guide to acupressure healing. Discover natural wellness through traditional acupressure techniques with our easy-to-follow, bilingual (English/Hindi) mobile app.

  Features:
  • 24+ professional acupressure points with detailed instructions
  • Smart search by symptoms, body parts, or conditions  
  • Guided questionnaire for personalized recommendations
  • Interactive timer for guided sessions
  • Complete bilingual support (English & Hindi)
  • Beautiful, calming interface designed for wellness
  
  Perfect for anyone interested in natural healing, stress relief, and traditional wellness practices.
  ```

- **Keywords:** acupressure, wellness, healing, natural, health, massage, pressure points, alternative medicine, stress relief, pain relief
- **Support URL:** Your website or support email
- **Privacy Policy URL:** Required for health apps

### Step 3: App Review
1. **Submit for Review**
2. **Review time:** 24-48 hours typically
3. **Common rejection reasons to avoid:**
   - Missing privacy policy
   - Medical claims without disclaimers
   - Crashes or broken functionality

## App Store Assets

### Required Screenshots
Use provided screenshots from `/screenshots/ios/` folder:
- **iPhone 6.7"** (iPhone 14 Pro Max, 15 Pro Max)
- **iPhone 6.5"** (iPhone 11 Pro Max, 12 Pro Max, 13 Pro Max)
- **iPhone 5.5"** (iPhone 8 Plus, 7 Plus, 6s Plus)
- **iPad Pro (3rd gen) 12.9"**
- **iPad Pro (2nd gen) 12.9"**

### App Icon Requirements
- **1024x1024px** for App Store
- **180x180px** for iPhone app icon
- **152x152px** for iPad app icon
- Must be PNG format, no transparency

## Testing Checklist

### Core Functionality
- [ ] App launches without crashes
- [ ] All navigation works (4 bottom tabs)
- [ ] Search functionality works
- [ ] Point details display correctly
- [ ] Timer feature functions properly
- [ ] Language switching works (English ↔ Hindi)

### iOS-Specific Tests
- [ ] Safe area handling (iPhone with notch)
- [ ] iPad layout (if supporting tablets)
- [ ] Dark mode appearance (if implemented)
- [ ] Haptic feedback (timer completion)
- [ ] Background app refresh
- [ ] Multitasking support

## Distribution Options

### TestFlight (Beta Testing)
1. **Upload build to App Store Connect**
2. **Create TestFlight group**
3. **Invite testers via email**
4. **Testers install via TestFlight app**

### Internal Testing
- Up to 100 testers
- No review required
- Immediate access

### External Testing
- Up to 10,000 testers
- Apple review required
- Public beta link available

## Maintenance

### Updates
1. **Increment buildNumber** in app.json
2. **Build new version:** `eas build --platform ios`
3. **Upload to App Store Connect**
4. **Submit update for review**

### Analytics
Monitor via:
- **App Store Connect Analytics**
- **Firebase Analytics** (already integrated)
- **Expo Analytics** (if using EAS)

## Common Issues

### Build Failures
```bash
# Clear Expo cache
expo r -c

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Provisioning Profile Issues
- Ensure bundle identifier matches exactly
- Verify Apple Developer account is active
- Check certificate expiration dates

### App Store Rejection
**Medical Disclaimer Required:**
Add to app description and in-app disclaimer:
"This app is for educational purposes only and should not replace professional medical advice."

## Cost Breakdown

- **Apple Developer Account:** $99/year
- **EAS Build (optional):** Free tier available, paid plans for more builds
- **App Store listing:** Included with developer account

## Timeline

- **Development setup:** 1-2 hours
- **First build:** 30-60 minutes  
- **App Store setup:** 2-3 hours
- **Review process:** 24-48 hours
- **Total to launch:** 1-2 days

---

**Note:** iOS development requires a Mac computer. For Windows/Linux users, consider using cloud-based Mac services or partnering with a Mac-owning developer for the build process.