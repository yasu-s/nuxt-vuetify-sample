<script setup lang="ts">
const title = ref('test1')
const { $hello } = useNuxtApp()
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <span>{{ title }}</span>
    <span>{{ $hello() }}</span>
  </div>
</template>
