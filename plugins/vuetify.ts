import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  // https://next.vuetifyjs.com/en/getting-started/installation/
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme: {
          dark: false,
          colors: {
            primary: '#1976d2',
            accent: '#f76c28',
            secondary: '#153c6b',
            info: '#26a69a',
            warning: '#ffc107',
            error: '#fe5855',
            success: '#00e676',
          },
        },
      },
    },
  })

  app.vueApp.use(vuetify)
})
