# Firebase Production Setup Guide

## Step 1: Create Firebase Project

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Sign in with your Google account

2. **Create New Project**
   - Click "Create a project"
   - Project name: `AccuHeal Production` (or `accuheal-prod`)
   - Accept Firebase terms
   - **Disable** Google Analytics for now (can enable later)
   - Click "Create project"

## Step 2: Enable Required Services

### 2.1 Enable Firestore Database
1. In Firebase console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode" (we'll update rules later)
4. Select region: Choose closest to your target users (e.g., `asia-south1` for India)
5. Click "Done"

### 2.2 Enable Firebase Storage
1. Go to "Storage" in the left menu
2. Click "Get started"
3. Accept default security rules for now
4. Use same region as Firestore
5. Click "Done"

### 2.3 Enable Analytics (Optional)
1. Go to "Analytics" in the left menu
2. Click "Enable Google Analytics"
3. Link to existing Google Analytics account or create new
4. Choose region and accept terms

## Step 3: Get Configuration Credentials

1. **Go to Project Settings**
   - Click the gear icon ⚙️ next to "Project Overview"
   - Select "Project settings"

2. **Add Web App**
   - Scroll down to "Your apps" section
   - Click the web icon `</>`
   - App nickname: `AccuHeal Web`
   - **Do NOT** check "Also set up Firebase Hosting"
   - Click "Register app"

3. **Copy Configuration**
   - You'll see a config object like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyA...",
     authDomain: "accuheal-prod.firebaseapp.com",
     projectId: "accuheal-prod",
     storageBucket: "accuheal-prod.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123",
     measurementId: "G-XXXXXXXXXX"
   };
   ```

4. **Save These Values**
   - Copy each value (apiKey, authDomain, etc.)
   - We'll use them in the environment configuration

## Step 4: Configure Security Rules

### 4.1 Firestore Rules
1. Go to "Firestore Database" → "Rules"
2. Replace the rules with:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to acupressure points for all users
    match /acupressure_points/{pointId} {
      allow read: if true;
      // Only allow writes from admin/backend (add authentication later)
      allow write: if false;
    }
    
    // Allow read access to app configuration
    match /app_config/{configId} {
      allow read: if true;
      allow write: if false;
    }
    
    // User data (if needed in future)
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4.2 Storage Rules
1. Go to "Storage" → "Rules"
2. Replace with:
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow read access to acupressure point images
    match /images/acupressure_points/{allPaths=**} {
      allow read: if true;
      allow write: if false; // Only backend uploads
    }
    
    // Allow read access to app assets
    match /assets/{allPaths=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

## Step 5: Provide Configuration to Developer

**Please provide these values from your Firebase config:**

```
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id (if Analytics enabled)
```

## Verification Steps

After setup, you can verify everything works:

1. **Firestore**: Go to Firestore → Data tab, you should see empty database
2. **Storage**: Go to Storage, you should see empty storage bucket
3. **Usage**: Go to Usage tab to monitor quotas

## Next Steps

Once you provide the configuration values:
- I'll update the app's environment variables
- I'll create the data structure in Firestore
- I'll upload acupressure point data
- I'll test the production configuration

## Estimated Time: 15-20 minutes

---

**Questions?** Let me know if you need help with any step!