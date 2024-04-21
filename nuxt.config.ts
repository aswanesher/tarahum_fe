export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-swiper", "@nuxt/image", "@nuxt/ui", "nuxt-icon"],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/style.css",
    "~/assets/css/custom.css",
    "~/assets/css/remixicon.css",
  ],
  plugins: ["~/plugins/fontawesome.js", { src: "~/plugins/bootstrap.js", mode: "client" }],
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
      allowedOrigins: process.env.NUXT_ALLOWED_ORIGINS || "http://localhost:3000",
    },
  },
  colorMode: {
    preference: "light",
  },
});
