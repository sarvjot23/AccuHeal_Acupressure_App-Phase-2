# Typesense Migration Step-by-Step Guide

## 🚨 **If Your App Shows Blank Screen**

**First, let's fix the app and then safely test migration:**

### **Step 1: Remove Migration Code from App**
1. **Open your main App.tsx file**
2. **Remove any migration code** you added (like `runMigration()` calls)
3. **Save the file**
4. **Refresh the app** - it should work again

---

## 🧪 **Safe Migration Testing Method**

### **Step 2: Test Typesense Server Connection**
1. **Open browser** and go to: http://localhost:8108/health
2. **Expected result:** `{"ok": true}`
3. **If you see this ✅** - server is running correctly
4. **If you get error ❌** - restart Typesense server:
   ```bash
   docker run -p 8108:8108 -v C:\typesense-data:/data typesense/typesense:26.0 --data-dir /data --api-key=uPgH34r# --enable-cors
   ```

### **Step 3: Create Test Migration Button**
Instead of running migration on app start, let's create a test button:

1. **Create a new test component**: `src/components/TypesenseTest.tsx`
```jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { runMigration, runTests } from '@utils/migrationScript';

export const TypesenseTest: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    console.log(message);
  };

  const testConnection = async () => {
    setIsLoading(true);
    addLog('Testing Typesense connection...');
    
    try {
      const response = await fetch('http://localhost:8108/health');
      const data = await response.json();
      
      if (data.ok) {
        addLog('✅ Typesense server is healthy!');
      } else {
        addLog('❌ Typesense server not healthy');
      }
    } catch (error) {
      addLog(`❌ Connection failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const runMigrationSafely = async () => {
    setIsLoading(true);
    setLogs([]);
    
    try {
      addLog('🚀 Starting migration...');
      await runMigration();
      addLog('✅ Migration completed successfully!');
    } catch (error) {
      addLog(`❌ Migration failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const runTestsSafely = async () => {
    setIsLoading(true);
    
    try {
      addLog('🧪 Running search tests...');
      await runTests();
      addLog('✅ All tests passed!');
    } catch (error) {
      addLog(`❌ Tests failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Typesense Migration Test</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.testButton]}
          onPress={testConnection}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Test Connection</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.migrateButton]}
          onPress={runMigrationSafely}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Run Migration</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.testButton]}
          onPress={runTestsSafely}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Run Tests</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.logsTitle}>Migration Logs:</Text>
      <ScrollView style={styles.logsContainer}>
        {logs.map((log, index) => (
          <Text key={index} style={styles.logText}>{log}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  testButton: {
    backgroundColor: '#007AFF',
  },
  migrateButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logsContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
  },
  logText: {
    color: '#00FF00',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 2,
  },
});
```

2. **Add to your main navigation** (temporarily for testing):
```jsx
// In your App.tsx or main navigator
import { TypesenseTest } from './src/components/TypesenseTest';

// Add a test screen or replace a screen temporarily
<Stack.Screen name="TypesenseTest" component={TypesenseTest} />
```

### **Step 4: Run Tests Safely**
1. **Start your app**: `npm start`
2. **Navigate to the TypesenseTest screen**
3. **Click "Test Connection"** first
   - Should show: "✅ Typesense server is healthy!"
4. **Click "Run Migration"**
   - Watch the logs for progress
   - Should create collection and index points
5. **Click "Run Tests"**
   - Tests search functionality
   - Verifies typo tolerance works

---

## 🔍 **Expected Results**

### **Successful Migration Logs:**
```
Testing Typesense connection...
✅ Typesense server is healthy!
🚀 Starting migration...
1️⃣ Checking Typesense server health...
✅ Typesense server is healthy
2️⃣ Initializing acupressure points collection...
📝 Creating acupressure points collection...
✅ Collection created successfully
3️⃣ Migrating existing acupressure points...
📝 Indexing 13 acupressure points...
✅ Batch indexing completed
📊 Successfully indexed: 13 points
✅ Migration completed successfully!
```

### **Successful Test Logs:**
```
🧪 Running search tests...
1️⃣ Testing basic search...
✅ Basic search: Found X results for "headache"
2️⃣ Testing typo tolerance...
✅ Typo tolerance: Found X results for "headach"
✅ All tests passed!
```

---

## 🚨 **Troubleshooting**

### **If "Test Connection" Fails:**
1. **Check Typesense server is running:**
   ```bash
   docker ps
   ```
2. **Restart server with correct API key:**
   ```bash
   docker run -p 8108:8108 -v C:\typesense-data:/data typesense/typesense:26.0 --data-dir /data --api-key=uPgH34r# --enable-cors
   ```

### **If Migration Fails:**
- Check console logs for specific error
- Ensure API key matches: `uPgH34r#`
- Verify TypeScript compilation is working

### **If App Still Shows Blank Screen:**
1. **Check Metro console** for JavaScript errors
2. **Remove all migration code** from app startup
3. **Clear Metro cache**: `npx react-native start --reset-cache`

---

## 📞 **Let Me Know When:**
1. ✅ App is working again (no blank screen)
2. ✅ Test Connection button shows "healthy"
3. ✅ Migration runs successfully
4. ✅ Tests pass

Then I'll update the SearchScreen to use Typesense! 🚀