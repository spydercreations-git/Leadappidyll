# Change App Icon - Step by Step Guide

## ✅ App Name Changed to "Idyll Inbox"

The app name has been updated in:
- `android/app/src/main/res/values/strings.xml`
- `capacitor.config.ts`

---

## 🎨 Change App Icon

Your logo: https://res.cloudinary.com/dxd79mrse/image/upload/v1772349182/Black_Yellow_Illustrative_Penpal_Mobile_Application_Logo_1_zawfbv.png

### Method 1: Using Android Studio (Easiest)

1. **Download your logo** from the URL above and save it to your computer

2. **Open Android Studio** (if not already open):
   ```bash
   npx cap open android
   ```

3. **Right-click on `res` folder** in the left panel:
   - Navigate to: `app` → `src` → `main` → `res`
   - Right-click on `res`

4. **Select**: `New` → `Image Asset`

5. **In the Asset Studio window**:
   - Asset Type: `Launcher Icons (Adaptive and Legacy)`
   - Name: `ic_launcher`
   - Path: Click folder icon and select your downloaded logo
   - Trim: Yes (if logo has extra space)
   - Resize: Adjust as needed
   - Shape: Choose your preferred shape (Circle, Square, etc.)
   - Background: Choose background color or transparent

6. **Click "Next"** then **"Finish"**

7. **Done!** Android Studio will generate all icon sizes automatically

---

### Method 2: Using Online Tool (Quick)

1. **Go to**: https://icon.kitchen/

2. **Upload your logo** from:
   ```
   https://res.cloudinary.com/dxd79mrse/image/upload/v1772349182/Black_Yellow_Illustrative_Penpal_Mobile_Application_Logo_1_zawfbv.png
   ```

3. **Configure**:
   - Platform: Android
   - Shape: Your choice
   - Background: Your choice

4. **Download** the generated icons

5. **Extract** the downloaded ZIP file

6. **Copy the folders** to your project:
   - Copy all `mipmap-*` folders to: `android/app/src/main/res/`
   - Replace existing files when prompted

---

### Method 3: Manual Replacement

You need icons in these sizes:

| Folder | Size |
|--------|------|
| mipmap-mdpi | 48x48 |
| mipmap-hdpi | 72x72 |
| mipmap-xhdpi | 96x96 |
| mipmap-xxhdpi | 144x144 |
| mipmap-xxxhdpi | 192x192 |

**Steps:**
1. Resize your logo to each size above
2. Name each file: `ic_launcher.png` and `ic_launcher_round.png`
3. Place in corresponding folders:
   ```
   android/app/src/main/res/mipmap-mdpi/ic_launcher.png
   android/app/src/main/res/mipmap-hdpi/ic_launcher.png
   android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
   android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
   android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
   ```

---

## 🔄 After Changing Icon

1. **Sync Capacitor**:
   ```bash
   npx cap sync android
   ```

2. **Rebuild APK**:
   - In Android Studio: `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - Or command line:
     ```bash
     cd android
     ./gradlew assembleDebug
     ```

3. **Find new APK**:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

---

## 📱 Quick Test

After rebuilding:
1. Uninstall old app from your phone
2. Install new APK
3. Check the new icon and name!

---

## 🎯 Recommended: Use Android Studio Method

The Android Studio Image Asset tool is the easiest because it:
- Automatically generates all required sizes
- Creates adaptive icons (modern Android)
- Handles foreground and background layers
- Ensures proper formatting

---

## Your Logo URL

```
https://res.cloudinary.com/dxd79mrse/image/upload/v1772349182/Black_Yellow_Illustrative_Penpal_Mobile_Application_Logo_1_zawfbv.png
```

Download this first, then use one of the methods above!

---

## ✅ Summary

- ✅ App name changed to "Idyll Inbox"
- ⏭️ Change icon using Android Studio (recommended)
- ⏭️ Rebuild APK
- ⏭️ Install and test

