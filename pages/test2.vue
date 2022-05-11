<script setup lang="ts">
const title = ref('test2')
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <span>{{ title }}</span>
  </div>
</template>
