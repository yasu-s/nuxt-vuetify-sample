import { defineNuxtConfig } from 'nuxt'
import { VuetifyLoaderPlugin } from 'vuetify-loader'

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
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['./modules/sample'],
  // vite: {
  //   define: {
  //     'process.env.DEBUG': 'false',
  //   },
  // },
  builder: 'webpack',
  webpack: {
    plugins: [new VuetifyLoaderPlugin({})],
  },
})
