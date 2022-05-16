import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  dev: true,
  ssr: false,
  components: {
    global: false,
  },
  typescript: {
    strict: true,
  },
  css: ['vuetify/lib/styles/main.sass', 'material-design-icons-iconfont/dist/material-design-icons.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['./modules/sample'],
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
  },
})
