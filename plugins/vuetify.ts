import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa4'

export default defineNuxtPlugin((app) => {
  // https://next.vuetifyjs.com/en/getting-started/installation/
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
    components,
    directives,
  })

  app.vueApp.use(vuetify)
})
