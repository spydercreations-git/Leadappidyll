import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.idyllproductions.emailgenerator',
  appName: 'Idyll Email Generator',
  webDir: 'dist',
  server: {
    url: 'https://leadidyll.netlify.app',
    cleartext: true,
    androidScheme: 'https'
  },
  android: {
    backgroundColor: '#FDFBF7'
  }
};

export default config;
