# Fix for Metro Bundling Issue - Restart Typesense Server

## 🚨 **Issue Fixed**
The "Requiring unknown module '940'" error has been resolved by removing dynamic imports.

## 🔧 **Restart Your Typesense Server with Correct API Key**

### **Step 1: Stop Current Server**
```bash
# Find and stop any running Typesense containers
docker ps
docker stop [CONTAINER_ID]
```

### **Step 2: Start Server with Correct API Key**
```bash
# PowerShell (recommended for Windows path handling)
docker run -d -p 8108:8108 -v "F:\ai_projects\typesense-data:/data" typesense/typesense:26.0 --data-dir /data --api-key=uPgH34r# --enable-cors

# Alternative using Command Prompt
docker run -d -p 8108:8108 -v F:/ai_projects/typesense-data:/data typesense/typesense:26.0 --data-dir /data --api-key=uPgH34r# --enable-cors
```

### **Step 3: Verify Server is Running**
1. **Open browser**: http://localhost:8108/health
2. **Expected response**: `{"ok": true}`

## 🧪 **Test Migration Again**

After restarting your server with the correct API key:

1. **Go to Settings → Typesense Test**
2. **Click "Test Connection"** - should show "✅ Typesense server is healthy!"
3. **Click "Run Migration"** - should work without the Metro error
4. **Click "Run Tests"** - should show all tests passing

## 🎯 **Expected Success Output**

```
7:XX:XX pm: 🚀 Starting migration...
7:XX:XX pm: 1️⃣ Checking Typesense server health...
7:XX:XX pm: ✅ Typesense server is healthy
7:XX:XX pm: 2️⃣ Initializing acupressure points collection...
7:XX:XX pm: 📝 Creating acupressure points collection...
7:XX:XX pm: ✅ Collection created successfully
7:XX:XX pm: 3️⃣ Migrating existing acupressure points...
7:XX:XX pm: 📝 Indexing 13 acupressure points...
7:XX:XX pm: ✅ Batch indexing completed
7:XX:XX pm: 📊 Successfully indexed: 13 points
7:XX:XX pm: 4️⃣ Getting collection statistics...
7:XX:XX pm: 📊 Collection: acupressure_points
7:XX:XX pm: 📈 Documents: 13
7:XX:XX pm: 🎉 Typesense migration completed successfully!
```

If you see this success message, Typesense is ready to replace your current search! 🚀