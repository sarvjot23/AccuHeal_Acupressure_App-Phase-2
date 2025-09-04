# Typesense Self-Hosted Setup Guide for AccuHeal

## 🎯 **Goal**: Set up Typesense server locally for development (FREE!)

---

## **Option 1: Docker Setup (Recommended - Easiest)**

### **Step 1: Install Docker Desktop**
1. Download Docker Desktop from: https://www.docker.com/products/docker-desktop/
2. Install and start Docker Desktop
3. Verify installation: Open Command Prompt and run:
   ```bash
   docker --version
   ```

### **Step 2: Run Typesense Server**
Open Command Prompt and run:
```bash
 -p 8108:8108 -v C:\typesense-data:/data typesense/typesense:26.0 \
  --data-dir /data --api-key=xyz123 --enable-cors
```

**What this does:**
- Downloads and rdocker rununs Typesense server
- Exposes it on port 8108 (http://localhost:8108)
- Uses API key: `xyz123` (change this for production)
- Stores data in `C:\typesense-data`
- Enables CORS for React Native

### **Step 3: Test Server**
Open browser and go to: http://localhost:8108/health
You should see: `{"ok": true}`

---

## **Option 2: Native Windows Installation**

### **Step 1: Download Typesense**
1. Go to: https://github.com/typesense/typesense/releases
2. Download `typesense-server-26.0-windows-amd64.zip`
3. Extract to `C:\typesense\`

### **Step 2: Create Data Directory**
```bash
mkdir C:\typesense-data
```

### **Step 3: Start Server**
Open Command Prompt in `C:\typesense\` and run:
```bash
typesense-server.exe --data-dir=C:\typesense-data --api-key=xyz123 --enable-cors
```

---

## **Step 4: Verify Installation**

### **Test with curl (if available):**
```bash
curl "http://localhost:8108/health"
```

### **Or test in browser:**
Navigate to: http://localhost:8108/health

**Expected response:** `{"ok": true}`

---

## **Step 5: Create AccuHeal Collection**

I'll provide the code to create the collection in the next step, but you can test manually:

### **Using curl:**
```bash
curl "http://localhost:8108/collections" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "X-TYPESENSE-API-KEY: xyz123" \
  -d '{
    "name": "acupressure_points",
    "fields": [
      {"name": "id", "type": "string"},
      {"name": "code", "type": "string", "facet": true},
      {"name": "name_en", "type": "string"},
      {"name": "name_hi", "type": "string"}
    ]
  }'
```

---

## **🚨 Important Notes:**

### **Security:**
- **Development**: Use simple API key like `xyz123`
- **Production**: Generate secure random API key

### **Performance:**
- Local setup handles 1000+ points easily
- No internet required after setup
- Instant search responses

### **Data Persistence:**
- Docker: Data stored in `C:\typesense-data`
- Native: Data stored in specified directory
- Survives restarts

---

## **💡 Next Steps After Setup:**

1. **✅ Verify server is running** (Step 4)
2. **🔄 Let me know when ready** - I'll create the AccuHeal collection
3. **📱 Update React Native app** to use Typesense
4. **🧪 Test with existing points**
5. **🚀 Scale to 361+ points**

---

## **🆘 Troubleshooting:**

### **Port 8108 already in use:**
```bash
# Find what's using the port
netstat -ano | findstr :8108

# Kill the process (replace PID)
taskkill /F /PID [PID_NUMBER]
```

### **Docker issues:**
- Ensure Docker Desktop is running
- Try restarting Docker Desktop
- Check Windows containers vs Linux containers

### **Permission issues:**
- Run Command Prompt as Administrator
- Ensure antivirus isn't blocking

---

**💰 Cost: $0** - Completely free for development!
**⏱️ Setup time: 5-10 minutes**
**🎯 Ready for AccuHeal integration once server is running**