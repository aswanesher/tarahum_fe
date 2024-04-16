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
    },
  },
  colorMode: {
    preference: "light",
  },
});
