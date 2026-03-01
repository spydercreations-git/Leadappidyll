# Deploy to Netlify - Step by Step

## ✅ Build Complete!

Your app has been built successfully in the `dist` folder.

---

## 🚀 Deploy to Netlify (Choose One Method)

### Method 1: Drag & Drop (Easiest - 2 minutes)

1. **Go to Netlify**: https://app.netlify.com/drop

2. **Drag the `dist` folder** from your project to the Netlify drop zone

3. **Done!** You'll get a URL like: `https://random-name-123.netlify.app`

4. **Optional**: Click "Site settings" → "Change site name" to customize

---

### Method 2: Netlify CLI (Recommended)

1. **Login to Netlify**
   ```bash
   netlify login
   ```
   This will open your browser to login.

2. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

3. **Follow prompts**:
   - Create & configure a new site? **Yes**
   - Team: Select your team
   - Site name: `idyll-email-generator` (or your choice)

4. **Get your URL** from the output!

---

### Method 3: Connect Git Repository (Auto-deploy on push)

1. **Push to GitHub/GitLab** (if not already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Go to Netlify**: https://app.netlify.com

3. **Click**: "Add new site" → "Import an existing project"

4. **Connect your repository**

5. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

6. **Auto-deploy**: Now every git push will auto-deploy! 🎉

---

## 📱 After Deployment: Update Android App

### Step 1: Get Your Netlify URL
After deployment, you'll have a URL like:
```
https://idyll-email-generator.netlify.app
```

### Step 2: Update capacitor.config.ts

Replace the current config with:

```typescript
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.idyllproductions.emailgenerator',
  appName: 'Idyll Email Generator',
  webDir: 'dist',
  server: {
    url: 'https://YOUR-SITE-NAME.netlify.app', // ← Put your Netlify URL here
    cleartext: true,
    androidScheme: 'https'
  },
  android: {
    backgroundColor: '#FDFBF7'
  }
};

export default config;
```

### Step 3: Sync to Android

```bash
npx cap sync android
```

### Step 4: Build APK

**Option A: Using Android Studio**
```bash
npx cap open android
```
Then: `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`

**Option B: Command Line** (if Android Studio is set up)
```bash
cd android
./gradlew assembleDebug
```

**APK Location**: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🎉 You're Done!

### What You Have Now:

✅ **Web App**: Live at your Netlify URL
✅ **Android App**: APK with auto-updates enabled
✅ **Auto-Updates**: Just deploy to Netlify, users get updates!

### Future Updates:

```bash
# Make your changes, then:
npm run build
netlify deploy --prod --dir=dist
```

**That's it!** All users with the APK will get updates automatically when they open the app.

---

## 🔧 Environment Variables on Netlify

If you need to add environment variables:

1. Go to: Site settings → Environment variables
2. Add your variables:
   - `VITE_GROQ_API_KEYS` = your-keys-here
3. Redeploy

---

## 📊 Monitor Your Deployment

- **Site URL**: Check your live site
- **Deploy logs**: See build process
- **Analytics**: Track visitors (free)
- **Forms**: Collect feedback (free)

---

## ⚡ Quick Commands Reference

```bash
# Deploy to Netlify
netlify deploy --prod --dir=dist

# Check deployment status
netlify status

# Open site in browser
netlify open:site

# View deploy logs
netlify logs

# Link to existing site
netlify link
```

---

## 🆘 Troubleshooting

### Build fails on Netlify
- Check Node version (should be 18+)
- Verify `netlify.toml` exists
- Check build logs for errors

### App doesn't update
- Verify Netlify URL in capacitor.config.ts
- Check internet connection on device
- Clear app cache and restart

### Can't login to Netlify CLI
```bash
netlify logout
netlify login
```

---

## 📞 Next Steps

1. ✅ Deploy to Netlify (you're here!)
2. ⏭️ Update capacitor.config.ts with your URL
3. ⏭️ Build APK with Android Studio
4. ⏭️ Share APK with users
5. ⏭️ Make updates → Just deploy to Netlify!

---

**Ready to deploy?** Run:
```bash
netlify login
netlify deploy --prod --dir=dist
```

Or drag the `dist` folder to: https://app.netlify.com/drop
