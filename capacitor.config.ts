import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cap.test',
  appName: 'CapTest',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
