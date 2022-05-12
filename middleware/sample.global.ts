import { defineNuxtRouteMiddleware } from '#app'

export default defineNuxtRouteMiddleware((to, _) => {
  if (to.path === '/') {
    console.log('index.vueだよ')
  }
})
