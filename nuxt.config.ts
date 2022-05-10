import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  dev: true,
  ssr: false,
  typescript: {
    strict: true,
  },
  css: [
    'vuetify/lib/styles/main.sass',
    // https://next.vuetifyjs.com/en/features/icon-fonts/#installing-icon-fonts
    '@mdi/font/css/materialdesignicons.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
  },
})
