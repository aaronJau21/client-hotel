import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  srcDir: "src/",
  image: {
    inject: true,
    format: ["png", "webp", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      lg: 2560,
    },
    domains: ["hotel-s3-2025-7266.s3.us-east-2.amazonaws.com"],
    alias: {
      "hotel-s3": "https://hotel-s3-2025-7266.s3.us-east-2.amazonaws.com",
    },
  },
  // dir:{
  //   app:"src"
  // }
});
