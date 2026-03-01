# Build APK - Quick Guide

## ✅ Android Studio is Open!

Follow these steps to build your APK:

---

## Step 1: Wait for Gradle Sync (Important!)

When Android Studio opens:
- Look at the bottom of the window
- You'll see "Gradle sync in progress..."
- **Wait until it says "Gradle sync finished"**
- This can take 2-5 minutes on first run

---

## Step 2: Build the APK

1. **Click** `Build` in the top menu bar
2. **Select** `Build Bundle(s) / APK(s)`
3. **Click** `Build APK(s)`

Or use keyboard shortcut: `Ctrl + Shift + A` → type "Build APK" → Enter

---

## Step 3: Wait for Build

- You'll see build progress at the bottom
- Wait for "BUILD SUCCESSFUL" message
- A notification will appear when done

---

## Step 4: Get Your APK

When build completes, you'll see a notification:
- Click **"locate"** in the notification

Or manually go to:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📱 Install APK on Your Phone

### Method 1: USB Cable
1. Enable "Developer Options" on your phone
2. Enable "USB Debugging"
3. Connect phone to computer
4. In Android Studio: `Run` → `Run 'app'`

### Method 2: Share APK File
1. Copy `app-debug.apk` to your phone
2. Open the file on your phone
3. Allow "Install from unknown sources" if prompted
4. Install the app

---

## 🎉 Your App Features

✅ **Live at**: https://leadidyll.netlify.app/
✅ **Auto-updates**: Users get updates automatically
✅ **No re-install needed**: Just deploy to Netlify!

---

## 🔧 Troubleshooting

### "Gradle sync failed"
- Check internet connection
- Wait and try again
- Click "Sync Project with Gradle Files" (elephant icon)

### "SDK not found"
- Go to: `File` → `Settings` → `Appearance & Behavior` → `System Settings` → `Android SDK`
- Install Android SDK if missing

### Build errors
- Try: `Build` → `Clean Project`
- Then: `Build` → `Rebuild Project`

---

## 🚀 Future Updates

To update your app:
1. Make changes to your code
2. Run: `npm run build`
3. Deploy to Netlify (auto-deploys from GitHub)
4. Users automatically get updates!

**No need to rebuild APK for updates!**

---

## 📞 Quick Commands

```bash
# Open Android Studio
npx cap open android

# Sync changes to Android
npx cap sync android

# Build from command line (if SDK configured)
cd android
./gradlew assembleDebug
```

---

**APK Location**: `android/app/build/outputs/apk/debug/app-debug.apk`

**App Name**: Idyll Email Generator
**Package**: com.idyllproductions.emailgenerator
**Live URL**: https://leadidyll.netlify.app/
