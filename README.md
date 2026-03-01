# Idyll Productions - Cold Email Generator

A powerful cold email generator for video editing outreach, built for Idyll Productions team members.

## 🚀 Features

- ✅ 100+ Pre-built email templates (Creators, SaaS, Agencies, Business)
- ✅ AI-powered email generation with Llama 3.3
- ✅ Favorites system with local storage
- ✅ Search by template number, title, or content
- ✅ Dynamic name personalization
- ✅ Copy to clipboard with animation
- ✅ Secure authentication system
- ✅ Mobile-optimized responsive design
- ✅ Android app with auto-updates
- ✅ Offline support

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Mobile**: Capacitor (Android)
- **AI**: Groq API (Llama 3.3)
- **Deployment**: Netlify

## 📱 Platforms

- Web App (Desktop & Mobile)
- Android App (APK)
- Progressive Web App (PWA)

## 🔐 Authentication

Secure login system with hardcoded credentials:
- harsh / @idyll1
- void / @idyll1
- smita / @idyll1
- snow / @idyll1
- zada / @idyll1

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### Deploy to Netlify

```bash
# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Build Android App

```bash
# Sync to Android
npx cap sync android

# Open in Android Studio
npx cap open android

# Build APK
# In Android Studio: Build → Build APK
```

## 📂 Project Structure

```
├── src/
│   ├── App.tsx              # Main app component
│   ├── LoginPage.tsx        # Login screen
│   ├── WelcomePage.tsx      # Welcome screen
│   ├── Chatbot.tsx          # AI chatbot
│   ├── auth.ts              # Authentication logic
│   ├── templates.ts         # Email templates (100)
│   └── index.css            # Global styles
├── android/                 # Android app
├── dist/                    # Build output
└── public/                  # Static assets
```

## 🎨 Features in Detail

### Email Templates
- 100 templates across 4 categories
- Searchable by ID number (#1, #2, etc.)
- Editable and resettable
- Favorites system

### AI Chatbot
- Message humanization
- Company information
- Emergency use only (20 msgs/day limit)
- 8 rotating API keys for rate limiting

### Mobile Optimization
- 2-column grid on mobile
- Compact chatbot (70vh)
- No scrolling on welcome page
- Touch-optimized buttons

## 🔄 Auto-Updates

The Android app supports live updates via Netlify:
1. Deploy to Netlify
2. Configure `capacitor.config.ts` with Netlify URL
3. Build APK once
4. Future updates: Just deploy to Netlify!

Users get updates automatically without downloading new APK.

## 📦 Build Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Android
npx cap sync android    # Sync web to Android
npx cap open android    # Open in Android Studio

# Deployment
netlify deploy --prod   # Deploy to Netlify
```

## 🌐 Environment Variables

Create `.env` file:
```env
VITE_GROQ_API_KEYS=key1,key2,key3...
```

## 📱 Android App

- Package: `com.idyllproductions.emailgenerator`
- Min SDK: 21 (Android 5.0)
- Target SDK: Latest
- Auto-updates via Netlify

## 🎯 Deployment

### Netlify (Recommended)
- Automatic deployments from GitHub
- Free SSL certificate
- CDN distribution
- Environment variables support

### Manual Deployment
1. Build: `npm run build`
2. Upload `dist` folder to any static host

## 📄 License

Built exclusively for Idyll Productions team members.

## 👥 Team

- Harsh Pawar - CEO
- Rohit Gaikwad - COO
- Snow - Chief Editing Manager
- Smita - Chief Sales Officer
- Void - Chief Commercial Officer
- Vishal - Chief Information Officer
- Mansi - Chief Financial Officer
- Parth - Chief Data Officer

## 🆘 Support

For issues or questions, contact the Idyll Productions team.

---

**Built with ❤️ by Idyll Productions**
