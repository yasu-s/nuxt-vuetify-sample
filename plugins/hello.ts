import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => ({
  provide: {
    /**
     * pluginテストメソッド
     * @returns 文字列
     */
    hello: () => 'world',
  },
}))
