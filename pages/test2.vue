<script setup lang="ts">
const route = useRoute()
const title = ref('test2')

/**
 * homeに戻る
 */
function navigateToHome() {
  navigateTo('/')
}

const router = useRouter()

/**
 * test1に移動
 */
function navigateToTest1() {
  router.push('/test1')
}

definePageMeta({
  layout: 'custom',
})
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <span>{{ title }}</span>
    <p>{{ route.query.hoge }}</p>

    <div>
      <v-btn class="ma-2" variant="text" icon="mdi-thumb-down" color="red-lighten-2" @click="navigateToHome()"></v-btn>
      <v-btn class="ma-2" variant="text" icon="mdi-thumb-up" color="blue-lighten-2" @click="navigateToTest1()"></v-btn>
    </div>
  </div>
</template>
