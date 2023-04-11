export default {
  expo: {
    name: "Membros",
    slug: "membros",
    version: "1.0.1",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#202123",
    },
    plugins: [
      [
        "expo-image-picker",
        {
          photosPermission:
            "O aplicativo precisa de permissão para acessar suas fotos.",
        },
      ],
    ],
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "app.membros.me",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "app.membros.me",
      permissions: ["android.permission.RECORD_AUDIO"],
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    runtimeVersion: "exposdk:47.0.0",
    extra: {
      eas: {
        projectId: "1a822c4c-ec0e-4f1a-b230-a22d2c5d9aca",
      }
    },
  },
};
