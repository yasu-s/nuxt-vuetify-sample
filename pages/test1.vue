<script setup lang="ts">
const title = ref('test1')
// const { $hello } = useNuxtApp()
onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <span>{{ title }}</span>
    <span>{{ $hello() }}</span>
    <div v-ripple class="text-center elevation-2 pa-12 text-h5">HTML element with v-ripple</div>
    <v-alert type="warning">I'm a warning alert.</v-alert>
  </div>
</template>
