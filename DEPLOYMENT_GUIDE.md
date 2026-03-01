# Complete Deployment Guide - Idyll Email Generator

## 🚀 Quick Deploy to Netlify (For Auto-Updates)

### Step 1: Deploy to Netlify

**Option A: Using Netlify CLI (Recommended)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
npm run build
netlify deploy --prod
```

**Option B: Using Netlify Website**
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository (GitHub/GitLab)
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 2: Get Your Netlify URL
After deployment, you'll get a URL like: `https://your-app-name.netlify.app`

### Step 3: Update Android App for Auto-Updates

1. **Update capacitor.config.ts**
   ```typescript
   const config: CapacitorConfig = {
     appId: 'com.idyllproductions.emailgenerator',
     appName: 'Idyll Email Generator',
     webDir: 'dist',
     server: {
       url: 'https://your-app-name.netlify.app', // Your Netlify URL
       cleartext: true,
       androidScheme: 'https'
     },
     android: {
       backgroundColor: '#FDFBF7'
     }
   };
   ```

2. **Sync and rebuild APK**
   ```bash
   npx cap sync android
   ```

3. **Build APK** (see Android section below)

---

## 📱 Building Android APK

### Prerequisites
1. **Install Android Studio**: https://developer.android.com/studio
2. **Install Java JDK 17**: https://www.oracle.com/java/technologies/downloads/

### Method 1: Using Android Studio (Easiest)

1. **Open Android Studio**
   ```bash
   npx cap open android
   ```

2. **Wait for Gradle sync** (first time takes 5-10 minutes)

3. **Build APK**
   - Menu: `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - Wait for build to complete
   - Click "locate" in the notification

4. **APK Location**
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Method 2: Command Line (After Android Studio is set up)

```bash
# Make sure you're in the project root
npm run build
npx cap sync android

# Build APK
cd android
./gradlew assembleDebug
```

**APK will be at:** `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 💻 Building Windows EXE

### Using Electron

1. **Install Electron dependencies**
   ```bash
   npm install --save-dev electron electron-builder
   ```

2. **Create electron.js**
   ```javascript
   const { app, BrowserWindow } = require('electron');
   const path = require('path');

   function createWindow() {
     const win = new BrowserWindow({
       width: 1200,
       height: 800,
       webPreferences: {
         nodeIntegration: false,
         contextIsolation: true
       },
       icon: path.join(__dirname, 'icon.ico')
     });

     win.loadFile('dist/index.html');
   }

   app.whenReady().then(createWindow);
   ```

3. **Update package.json**
   ```json
   {
     "main": "electron.js",
     "scripts": {
       "electron": "electron .",
       "electron:build": "npm run build && electron-builder"
     },
     "build": {
       "appId": "com.idyllproductions.emailgenerator",
       "productName": "Idyll Email Generator",
       "win": {
         "target": "nsis",
         "icon": "icon.ico"
       },
       "files": [
         "dist/**/*",
         "electron.js"
       ]
     }
   }
   ```

4. **Build EXE**
   ```bash
   npm run electron:build
   ```

**EXE will be at:** `dist/Idyll Email Generator Setup.exe`

---

## 🔄 How Auto-Updates Work

### After Netlify Deployment:

1. **Users install APK once** (with Netlify URL configured)

2. **You make changes** to your code

3. **Deploy to Netlify**
   ```bash
   npm run build
   netlify deploy --prod
   ```

4. **Users open app** → They see updates automatically! ✅

**No need to rebuild or redistribute APK!**

---

## 📦 Distribution

### Android APK
- **Share directly**: Send `app-debug.apk` via email/drive
- **Google Play Store**: Use release build (see below)
- **Internal distribution**: Use Firebase App Distribution

### Windows EXE
- **Share directly**: Send `.exe` file
- **Auto-updates**: Use electron-updater
- **Microsoft Store**: Package as MSIX

---

## 🔐 Building Release APK (For Production)

### Step 1: Generate Signing Key
```bash
keytool -genkey -v -keystore idyll-release-key.keystore -alias idyll -keyalg RSA -keysize 2048 -validity 10000
```

### Step 2: Create android/key.properties
```properties
storePassword=YOUR_PASSWORD
keyPassword=YOUR_PASSWORD
keyAlias=idyll
storeFile=../idyll-release-key.keystore
```

### Step 3: Update android/app/build.gradle
Add before `android` block:
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

### Step 4: Build Release APK
```bash
cd android
./gradlew assembleRelease
```

**Release APK:** `android/app/build/outputs/apk/release/app-release.apk`

---

## 🎯 Recommended Workflow

### For Development:
1. Make changes to code
2. Test locally: `npm run dev`
3. Deploy to Netlify: `netlify deploy --prod`
4. Test in app (auto-updates)

### For Distribution:
1. Build APK once with Netlify URL
2. Share APK with users
3. Future updates: Just deploy to Netlify!

### For Windows:
1. Build EXE: `npm run electron:build`
2. Share EXE file
3. For updates: Rebuild and redistribute

---

## 📝 Environment Variables

Create `.env.production`:
```env
VITE_GROQ_API_KEYS=your-keys-here
```

These will be included in the build.

---

## ✅ Checklist Before Distribution

- [ ] Test on multiple Android devices
- [ ] Test on different screen sizes
- [ ] Verify all features work offline
- [ ] Check API keys are working
- [ ] Test login with all usernames
- [ ] Verify favorites persist
- [ ] Test copy functionality
- [ ] Check chatbot works
- [ ] Verify templates load correctly
- [ ] Test on slow internet connection

---

## 🆘 Troubleshooting

### Android build fails
- Install Android Studio first
- Make sure Java JDK 17 is installed
- Run: `./gradlew clean` in android folder

### Netlify deployment fails
- Check build command: `npm run build`
- Check publish directory: `dist`
- Verify all dependencies in package.json

### App doesn't update
- Check internet connection
- Verify Netlify URL in capacitor.config.ts
- Clear app cache and restart

### EXE doesn't work
- Install Visual C++ Redistributable
- Run as administrator
- Check antivirus isn't blocking

---

## 📞 Support

For issues:
1. Check error logs
2. Verify all prerequisites installed
3. Test on different devices
4. Check Netlify deployment logs

---

## 🎉 You're Ready!

Your app is now set up for:
✅ Auto-updates via Netlify
✅ Android APK distribution
✅ Windows EXE distribution
✅ Offline functionality
✅ Secure authentication

Deploy to Netlify and share your APK/EXE with users!
