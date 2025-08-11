# Android Testing Guide for AccuHeal

## Prerequisites

### 1. Install Android Studio
1. **Download Android Studio**
   - Visit: https://developer.android.com/studio
   - Download the latest stable version
   - Install with default settings

2. **Install Android SDK**
   - Open Android Studio
   - Go to **Tools → SDK Manager**
   - Install **Android SDK Platform 34** (or latest)
   - Install **Android SDK Build-Tools 34.0.0** (or latest)
   - Install **Android Emulator** and **Intel x86 Emulator Accelerator (HAXM)**

### 2. Set Up Environment Variables
Add these to your system PATH:
```bash
# Windows
ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
PATH=%PATH%;%ANDROID_HOME%\emulator;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools

# macOS/Linux
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
export ANDROID_HOME=$HOME/Android/Sdk          # Linux
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

## Method 1: Android Emulator (Recommended)

### Step 1: Create Virtual Device
1. **Open Android Studio**
2. **Click "More Actions" → "Virtual Device Manager"** (or Tools → AVD Manager)
3. **Click "Create Device"**
4. **Choose Device:**
   - **Recommended:** Pixel 7 or Pixel 6
   - **Alternative:** Any device with Play Store support
5. **Choose System Image:**
   - **API Level:** 34 (Android 14) or 33 (Android 13)
   - **Target:** Google Play (includes Play Store)
   - **ABI:** x86_64 (faster on Intel/AMD computers)
6. **Configure AVD:**
   - **Name:** AccuHeal_Test_Device
   - **Advanced Settings:**
     - **RAM:** 4GB (if your computer has 8GB+ RAM)
     - **Internal Storage:** 8GB
     - **SD Card:** 1GB (optional)
7. **Click "Finish"**

### Step 2: Start Emulator
1. **In AVD Manager, click ▶️ (Play button)** next to your device
2. **Wait for emulator to fully boot** (shows home screen)
3. **Verify emulator is ready:**
   ```bash
   # Check if device is detected
   adb devices
   # Should show: emulator-5554    device
   ```

### Step 3: Run AccuHeal on Emulator
1. **Navigate to project directory:**
   ```bash
   cd F:\ai_projects\projects\accuheal
   ```

2. **Start Expo with Android:**
   ```bash
   # Method 1: Direct Android start
   npx @expo/cli start --android
   
   # Method 2: Start server then connect
   npx @expo/cli start
   # Then press 'a' in the terminal or scan QR code with Expo Go app
   ```

3. **App should automatically install and launch** on the emulator

## Method 2: Physical Android Device

### Step 1: Enable Developer Options
1. **Go to Settings → About phone**
2. **Tap "Build number" 7 times** (until you see "You are now a developer!")
3. **Go back to Settings → System → Developer options**
4. **Enable "USB debugging"**
5. **Enable "Install via USB"** (if available)

### Step 2: Connect Device
1. **Connect phone to computer via USB**
2. **On phone, allow USB debugging** when prompted
3. **Verify connection:**
   ```bash
   adb devices
   # Should show your device: ABC123DEF    device
   ```

### Step 3: Run AccuHeal on Device
1. **Install Expo Go app** from Google Play Store
2. **Start Expo development server:**
   ```bash
   cd F:\ai_projects\projects\accuheal
   npx @expo/cli start
   ```
3. **Connect to app:**
   - **Option A:** Press 'a' in terminal (if USB debugging enabled)
   - **Option B:** Scan QR code with Expo Go app camera

## Method 3: Expo Go App (Easiest)

### Step 1: Install Expo Go
1. **On your Android phone:**
   - Open **Google Play Store**
   - Search for **"Expo Go"**
   - Install the official Expo Go app

### Step 2: Start Development Server
```bash
cd F:\ai_projects\projects\accuheal
npx @expo/cli start
```

### Step 3: Connect to App
1. **Make sure phone and computer are on same WiFi network**
2. **Open Expo Go app on phone**
3. **Scan QR code** displayed in terminal/browser
4. **AccuHeal will load and install**

## Testing Checklist

### ✅ Core Functionality Tests
- [ ] **App Launch:** App starts without crashes
- [ ] **Navigation:** All 4 bottom tabs work (Home, Search, Guide, Settings)
- [ ] **Home Screen:** Popular points display, language toggle works
- [ ] **Search Screen:** Search bar works, results display
- [ ] **Guide Screen:** Questionnaire loads, browse functionality
- [ ] **Settings Screen:** Language switch works (English ↔ Hindi)

### ✅ Acupressure Point Tests
- [ ] **Point List:** All 24 points load in search/browse
- [ ] **Point Detail:** Tap any point → detail screen opens
- [ ] **Point Information:** Name, location, method, conditions display
- [ ] **Images:** Point images load correctly
- [ ] **Timer Feature:** Timer modal opens, countdown works
- [ ] **Timer Controls:** Start, pause, resume, reset all function

### ✅ Language Tests
- [ ] **English Mode:** All text displays in English
- [ ] **Hindi Mode:** All text displays in Hindi (हिंदी)
- [ ] **Language Switch:** Toggle works from Settings
- [ ] **Point Names:** Both English and Hindi names show correctly
- [ ] **Search:** Works in both languages

### ✅ Questionnaire Tests
- [ ] **Start Questionnaire:** Loads from Guide screen
- [ ] **Question Navigation:** Next/Previous buttons work
- [ ] **Answers:** Can select symptoms/conditions
- [ ] **Results:** Recommendations display based on answers
- [ ] **Point Links:** Recommended points are clickable

### ✅ Performance Tests
- [ ] **Loading Speed:** App loads within 3-5 seconds
- [ ] **Smooth Navigation:** No lag between screen transitions
- [ ] **Memory Usage:** App doesn't crash after extended use
- [ ] **Search Performance:** Search results appear quickly
- [ ] **Timer Accuracy:** Timer countdown is accurate

## Troubleshooting

### Emulator Issues

**Emulator won't start:**
```bash
# Check if virtualization is enabled in BIOS
# Windows: Task Manager → Performance → CPU → Virtualization: Enabled

# Try cold boot
# In AVD Manager: ⬇️ → Cold Boot Now
```

**"INSTALL_FAILED_INSUFFICIENT_STORAGE":**
```bash
# Increase emulator storage
# In AVD Manager: ✏️ → Show Advanced Settings → Internal Storage: 8GB
```

**Slow emulator performance:**
- Use x86_64 system image (not ARM)
- Allocate more RAM (4GB if possible)
- Enable hardware acceleration in AVD settings

### Device Connection Issues

**"adb devices" shows no devices:**
```bash
# Restart adb server
adb kill-server
adb start-server

# Check USB drivers (Windows)
# Device Manager → Update driver for Android device
```

**USB debugging not working:**
- Revoke USB debugging authorizations in Developer options
- Disconnect and reconnect device
- Try different USB cable/port

### App Loading Issues

**Metro bundler errors:**
```bash
# Clear Metro cache
npx @expo/cli start --clear

# Reset node modules
npm install --force
```

**"Unable to resolve module" errors:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Expected Performance

### Android Emulator (Recommended specs):
- **Launch time:** 15-30 seconds first time, 5-10 seconds subsequent
- **App loading:** 3-5 seconds
- **Navigation:** Instant (<1 second)
- **Search:** Results within 1-2 seconds

### Physical Device:
- **Launch time:** 2-5 seconds
- **App loading:** 1-3 seconds  
- **Navigation:** Instant
- **Search:** Results within 1 second

## Build Information

**Last tested configuration:**
- **Android Studio:** 2024.1.1 (latest)
- **Android Emulator:** 34.2.16
- **Target SDK:** 34 (Android 14)
- **Minimum SDK:** 21 (Android 5.0)
- **Expo CLI:** @expo/cli@0.24.20
- **Node.js:** 22.17.0

## Next Steps After Testing

Once testing is successful:
1. **Production build:** `npx @expo/cli build --platform android`
2. **App signing:** Configure keystore for Play Store
3. **Play Store submission:** Upload APK/AAB file

---

**Need Help?** Check the main README.md or create an issue in the project repository.