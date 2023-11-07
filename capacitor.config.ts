import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "travel-app-demo",
  webDir: "dist",

  server: {
    androidScheme: "https",
  },

  plugins: {
    android: {
      capacitorConfig: {
        android: {
          useAndroidX: true,
          minSdkVersion: 21,
          targetSdkVersion: 3,
          versionCode: 1,
          versionName: "1.0.0",
        },
      },
    },
  },
};

export default config;
