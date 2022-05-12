import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(moduleOptions, nuxt) {
    if (moduleOptions) {
      console.log(JSON.stringify(moduleOptions))
    }
    if (nuxt) {
      console.log('nuxt ok')
    }
  },
})
