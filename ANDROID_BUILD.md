# Building Android App - Idyll Email Generator

## Prerequisites
1. **Android Studio** - Download from https://developer.android.com/studio
2. **Java JDK 17** - Required for Android development

## Build Instructions

### Option 1: Build APK using Android Studio (Recommended)

1. **Open Android Studio**
   ```bash
   npx cap open android
   ```

2. **Wait for Gradle sync** to complete (first time may take 5-10 minutes)

3. **Build APK**
   - Go to: `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - Wait for build to complete
   - APK will be in: `android/app/build/outputs/apk/debug/app-debug.apk`

4. **Install on Device**
   - Connect Android device via USB (enable USB debugging)
   - Click the green "Run" button in Android Studio
   - Or drag the APK file to your device and install

### Option 2: Build from Command Line

1. **Build the web app first**
   ```bash
   npm run build
   ```

2. **Sync with Android**
   ```bash
   npx cap sync android
   ```

3. **Build APK**
   ```bash
   cd android
   ./gradlew assembleDebug
   ```
   (On Windows: `gradlew.bat assembleDebug`)

4. **Find APK**
   - Location: `android/app/build/outputs/apk/debug/app-debug.apk`

### Option 3: Build Release APK (for distribution)

1. **Generate signing key** (first time only)
   ```bash
   keytool -genkey -v -keystore idyll-release-key.keystore -alias idyll -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Create `android/key.properties`**
   ```
   storePassword=YOUR_STORE_PASSWORD
   keyPassword=YOUR_KEY_PASSWORD
   keyAlias=idyll
   storeFile=../idyll-release-key.keystore
   ```

3. **Build release APK**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```

4. **Find release APK**
   - Location: `android/app/build/outputs/apk/release/app-release.apk`

## Testing on Device

### Via USB
1. Enable Developer Options on Android device
2. Enable USB Debugging
3. Connect device to computer
4. Run: `npx cap run android`

### Via APK Install
1. Transfer APK to device
2. Enable "Install from Unknown Sources"
3. Open APK file and install

## App Features
- ✅ Offline capable
- ✅ Native Android UI
- ✅ Secure authentication
- ✅ Local storage for favorites
- ✅ Optimized for mobile screens
- ✅ Smooth animations

## Troubleshooting

### Gradle build fails
- Make sure Java JDK 17 is installed
- Run: `cd android && ./gradlew clean`

### App crashes on startup
- Check Android version (minimum Android 5.0)
- Clear app data and reinstall

### Changes not showing
```bash
npm run build
npx cap sync android
```

## App Info
- **Package Name**: com.idyllproductions.emailgenerator
- **App Name**: Idyll Email Generator
- **Min Android Version**: 5.0 (API 21)
- **Target Android Version**: Latest

## Next Steps
1. Test on multiple Android devices
2. Add app icon (replace default in `android/app/src/main/res/`)
3. Add splash screen
4. Optimize performance
5. Submit to Google Play Store (optional)
