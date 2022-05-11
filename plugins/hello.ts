export default defineNuxtPlugin(() => ({
  provide: {
    /**
     * pluginテストメソッド
     * @returns 文字列
     */
    hello: () => 'world',
  },
}))
