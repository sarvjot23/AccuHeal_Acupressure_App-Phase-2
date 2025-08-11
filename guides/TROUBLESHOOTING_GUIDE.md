# AccuHeal Troubleshooting Guide

## Installation Issues

### Node Modules Corruption

**🚨 CRITICAL: Most Common Issue**

**Symptoms:**
- Metro bundler errors
- "Cannot find module" errors
- App crashes on startup
- Build failures

**Solution:**
```bash
# Complete clean install (RECOMMENDED)
rm -rf node_modules package-lock.json
npm install --timeout=600000 --force

# Or on Windows
rmdir /s node_modules
del package-lock.json
npm install --timeout=600000 --force
```

### Expo CLI Issues

**Legacy CLI Warnings:**
```
WARNING: The legacy expo-cli does not support Node +17
```

**Solution:**
```bash
# Remove legacy CLI
npm uninstall -g expo-cli

# Install latest CLI
npm install -g @expo/cli@latest

# Update package.json scripts
"scripts": {
  "start": "npx @expo/cli start",
  "android": "npx @expo/cli start --android",
  "web": "npx @expo/cli start --web"
}
```

### Metro Bundler Errors

**ImportLocationsPlugin Error:**
```
Cannot find module 'metro/src/ModuleGraph/worker/importLocationsPlugin'
```

**Solution:**
```bash
npm install metro@^0.82.0
```

**Missing Web Dependencies:**
```
It looks like you're trying to use web support but don't have the required dependencies
```

**Solution:**
```bash
npm install @expo/metro-runtime@~5.0.4
```

## Development Server Issues

### Port Conflicts

**Error:** `Port 19000 is already in use`

**Solution:**
```bash
# Kill existing processes
npx kill-port 19000 8081 3001

# Or start on different port
npx @expo/cli start --port 19001
npx @expo/cli start --web --port 3002
```

### Network Issues

**Cannot connect from device:**
1. **Check WiFi:** Device and computer on same network
2. **Firewall:** Allow Expo CLI through Windows Firewall
3. **VPN:** Disconnect VPN if connected
4. **Router:** Some routers block device-to-device communication

**Solution:**
```bash
# Try tunnel connection
npx @expo/cli start --tunnel

# Or use localhost
npx @expo/cli start --localhost
```

## Component and Navigation Errors

### Missing Export Errors

**Error:** "Got an invalid value for 'component' prop for the screen"

**Cause:** Missing `export default` statements in screen components

**Solution:** Ensure all screen files end with:
```typescript
export default ComponentName;
```

**Files to check:**
- `src/screens/HomeScreen.tsx`
- `src/screens/SearchScreen.tsx`
- `src/screens/GuideScreen.tsx`
- `src/screens/SettingsScreen.tsx`
- `src/screens/PointDetailScreen.tsx`
- `src/screens/QuestionnaireScreen.tsx`

### Navigation Component Errors

**Error:** "The component for route 'Home' must be a React component"

**Solution:**
```typescript
// ❌ Wrong
import { HomeScreen } from '../screens/HomeScreen';

// ✅ Correct
import HomeScreen from '../screens/HomeScreen';
```

## Platform-Specific Issues

### Android Issues

**USB Debugging Not Working:**
```bash
# Restart ADB server
adb kill-server
adb start-server

# Check device connection
adb devices
```

**Emulator Performance:**
- Use x86_64 system image (not ARM)
- Enable hardware acceleration
- Allocate 4GB+ RAM if possible
- Use API level 30-34

**Build Failures:**
```bash
# Clear Android build cache
cd android
./gradlew clean
cd ..
```

### iOS Issues (macOS only)

**Simulator Not Opening:**
```bash
# Reset iOS Simulator
xcrun simctl shutdown all
xcrun simctl erase all
```

**Build Signing Issues:**
- Verify Apple Developer account active
- Check bundle identifier matches
- Ensure certificates not expired

### Web Issues

**Blank White Screen:**
```bash
# Clear browser cache
# Check browser console for errors
# Try incognito/private mode
```

**Slow Loading:**
- Disable browser extensions
- Check network throttling in dev tools
- Clear browser cache and cookies

## Firebase Integration Issues

### Connection Errors

**Error:** "Firebase: No Firebase App '[DEFAULT]' has been created"

**Solution:**
1. Check `.env` file exists with Firebase config
2. Verify Firebase project is active
3. Confirm API keys are correct

**Example .env:**
```bash
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abc123
```

### Firestore Errors

**Permission Denied:**
- Check Firestore security rules
- Verify collection names match exactly
- Ensure proper read permissions

## Search (Algolia) Issues

### Search Not Working

**Symptoms:**
- No search results
- Search crashes app
- "Index does not exist" errors

**Solution:**
1. Verify Algolia credentials in `.env`
2. Check index name matches exactly
3. Ensure search index has data

**Debug Algolia:**
```typescript
// Add to search service for debugging
console.log('Algolia App ID:', process.env.EXPO_PUBLIC_ALGOLIA_APP_ID);
console.log('Search Key:', process.env.EXPO_PUBLIC_ALGOLIA_SEARCH_KEY);
```

## Performance Issues

### Slow App Performance

**Memory Leaks:**
- Check for unremoved event listeners
- Verify useEffect cleanup functions
- Monitor timer cleanup in point detail screen

**Bundle Size:**
```bash
# Analyze bundle size
npx @expo/cli export --dump-sourcemap

# Use sourcemap analyzer
npm install -g source-map-explorer
source-map-explorer dist/static/js/*.js
```

### Image Loading Issues

**Images Not Loading:**
1. Check image paths are correct
2. Verify Firebase Storage permissions
3. Confirm images exist in storage bucket

## Environment Configuration

### Environment Variables Not Loading

**Common Issues:**
- `.env` file not in root directory
- Variables not prefixed with `EXPO_PUBLIC_`
- Missing variables from app.json

**Solution:**
```bash
# Check .env exists
ls -la .env

# Verify variables are accessible
console.log(process.env.EXPO_PUBLIC_FIREBASE_API_KEY);
```

### App Configuration Issues

**app.json Problems:**
- Validate JSON syntax
- Check required fields are present
- Verify version and build numbers

## Testing and Debugging

### Debug Mode

**Enable detailed logging:**
```bash
# Start with debug mode
EXPO_DEBUG=true npx @expo/cli start

# Or with additional logging
DEBUG=expo:* npx @expo/cli start
```

### React Native Debugger

**Setup remote debugging:**
1. Install React Native Debugger
2. Enable remote debugging in Expo dev menu
3. Access developer tools at `localhost:19001/debugger-ui`

### Common Debug Commands

```bash
# Check Expo installation
npx @expo/cli --version

# Check Node version
node --version

# Check package versions
npm list react-native expo

# Clear all caches
npx @expo/cli start --clear
npm cache clean --force
```

## Emergency Recovery

### Complete Reset

**If nothing else works:**
```bash
# 1. Clear everything
rm -rf node_modules package-lock.json .expo

# 2. Clear npm cache
npm cache clean --force

# 3. Reinstall
npm install --force

# 4. Clear Expo cache
npx @expo/cli start --clear
```

### Backup Strategy

**Before major changes:**
1. Commit current working state to Git
2. Create backup branch: `git checkout -b backup-working-state`
3. Test changes on separate branch first

## Getting Help

### Debug Information to Collect

When reporting issues, include:
- **OS:** Windows/macOS/Linux version
- **Node.js:** Version (`node --version`)
- **Expo CLI:** Version (`npx @expo/cli --version`)
- **Package versions:** `npm list react-native expo`
- **Error messages:** Full error text
- **Steps to reproduce:** Exact commands run
- **Environment:** Development/production

### Useful Commands for Support

```bash
# System information
npx @expo/cli doctor

# Dependency tree
npm list --depth=0

# Expo diagnostics
npx @expo/cli install --check
```

---

**Still having issues?** Check the GitHub repository issues or create a new issue with the debug information above.