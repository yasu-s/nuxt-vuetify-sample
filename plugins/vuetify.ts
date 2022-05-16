import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'

export default defineNuxtPlugin((app) => {
  // https://next.vuetifyjs.com/en/getting-started/installation/
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'md',
      aliases,
      sets: {
        md,
      },
    },
    components,
    directives,
  })

  app.vueApp.use(vuetify)
})
