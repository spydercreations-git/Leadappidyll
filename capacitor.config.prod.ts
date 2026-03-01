import type { CapacitorConfig } from '@capacitor/cli';

// Production config with Netlify URL
// After deploying to Netlify, replace YOUR_NETLIFY_URL with your actual URL
const config: CapacitorConfig = {
  appId: 'com.idyllproductions.emailgenerator',
  appName: 'Idyll Email Generator',
  webDir: 'dist',
  server: {
    url: 'https://YOUR_NETLIFY_URL.netlify.app', // Replace after deploying
    cleartext: true,
    androidScheme: 'https'
  },
  android: {
    backgroundColor: '#FDFBF7'
  }
};

export default config;
