# Firebase Security Rules for AccuHeal Production

## Current Status
- **Environment**: Production (accuheal-14307)
- **Data Sync**: ✅ Complete (24 acupressure points uploaded)
- **Security**: ⚠️ Temporary open rules (FOR TESTING ONLY)

## ⚠️ IMPORTANT: Update Security Rules Before Going Live

Currently, the Firebase security rules are set to allow all reads/writes for testing. **You MUST update these rules before production deployment.**

## Production Security Rules

### 1. Firestore Security Rules

Copy and paste these rules in your Firebase Console under **Firestore Database > Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Acupressure points collection - Read only for authenticated users
    match /acupressure_points/{pointId} {
      allow read: if true; // Public read access for app functionality
      allow write: if false; // No writes from client apps
    }
    
    // App configuration - Read only
    match /app_config/{configId} {
      allow read: if true; // Public read for app configuration
      allow write: if false; // No writes from client apps
    }
    
    // User-specific data (for future features)
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // User favorites and progress (for future features)
    match /user_favorites/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Analytics and usage data (write-only)
    match /analytics/{document=**} {
      allow read: if false;
      allow write: if true; // Allow anonymous usage analytics
    }
    
    // Default: Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### 2. Firebase Storage Security Rules

Copy and paste these rules in your Firebase Console under **Storage > Rules**:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // Public images (acupressure point diagrams, app assets)
    match /images/public/{allPaths=**} {
      allow read: if true; // Public read access
      allow write: if false; // No client uploads to public folder
    }
    
    // User uploaded content (for future features)
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Default: Deny all other access
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

## How to Update Security Rules

### Method 1: Firebase Console (Recommended)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **accuheal-14307**
3. Navigate to **Firestore Database** > **Rules**
4. Replace the current rules with the production rules above
5. Click **Publish**
6. Repeat for **Storage** > **Rules**

### Method 2: Firebase CLI
```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init firestore
firebase init storage

# Deploy security rules
firebase deploy --only firestore:rules
firebase deploy --only storage
```

## Security Features

### 1. Data Protection
- ✅ **Read-only acupressure points**: Users can read but not modify medical content
- ✅ **No unauthorized writes**: Only admin accounts can update content
- ✅ **User data isolation**: Users can only access their own data (for future features)

### 2. Performance Optimization
- ✅ **Public read access**: No authentication required for core app functionality
- ✅ **Efficient queries**: Rules allow optimal indexing and caching
- ✅ **Analytics support**: Usage data collection for app improvement

### 3. Scalability
- ✅ **User authentication ready**: Rules support future user accounts
- ✅ **Feature expansion**: Structure supports favorites, progress tracking
- ✅ **Admin operations**: Content updates via server-side operations only

## Current Production Data

### Firestore Collections
```
acupressure_points/
├── AC01_yintang/ (Yin Tang point)
├── AC02_baihui/ (Bai Hui point)
├── AC03_yingxiang/ (Ying Xiang point)
├── ... (21 more points)
└── AC24_daling/ (Da Ling point)

app_config/
└── main/ (App configuration document)
```

### Data Statistics
- **Total Points**: 24 acupressure points
- **Languages**: English + Hindi (complete translations)
- **Conditions Covered**: 45+ medical conditions
- **Body Parts**: 8 major body regions

## Testing Production Rules

After updating the security rules, test with:

```bash
# Test Algolia search (should work)
node scripts/test-algolia.js

# Test Firebase read access (should work from app)
npm start

# Test Firebase write access (should fail from client)
# - Try to modify data from the app
# - Should receive "Permission denied" error
```

## Rollback Plan

If the new security rules cause issues:

1. **Immediate Rollback**: Set temporary open rules in Firebase Console:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // TEMPORARY ONLY
    }
  }
}
```

2. **Debug and Fix**: Check Firebase logs for permission errors
3. **Re-deploy**: Update and test rules in staging environment first

## Security Checklist

Before going live:
- [ ] Update Firestore security rules to production version
- [ ] Update Storage security rules to production version  
- [ ] Test app functionality with new rules
- [ ] Verify read access works for acupressure points
- [ ] Verify write access is properly blocked
- [ ] Test search functionality continues to work
- [ ] Monitor Firebase logs for permission errors

## Support

If you encounter issues with security rules:
1. Check Firebase Console logs for detailed error messages
2. Test rules in Firebase Rules Playground
3. Verify API keys and authentication settings
4. Contact Firebase support if needed

---
**Status**: Ready for implementation  
**Priority**: HIGH - Must be completed before app store submission  
**Estimated Time**: 15 minutes to update rules