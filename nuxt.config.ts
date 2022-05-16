import { defineNuxtConfig } from 'nuxt'
import vuetify from '@vuetify/vite-plugin'

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
  // build: {
  //   transpile: ['vuetify'],
  // },
  modules: ['./modules/sample'],
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
    plugins: [
      vuetify({}),
      {
        // https://github.com/nuxt/framework/discussions/1183#discussioncomment-1997354
        // https://github.com/nuxt/framework/issues/2798
        configResolved(config): void {
          const idx = config.plugins.findIndex((plugin) => plugin.name === 'vuetify:import')
          const vueIdx = config.plugins.findIndex((plugin) => plugin.name === 'vite:vue')
          if (~idx && idx < vueIdx) {
            const plugin = config.plugins[idx]
            config.plugins.splice(idx, 1)
            config.plugins.splice(vueIdx, 0, plugin)
          }
        },
      },
    ],
  },
})
