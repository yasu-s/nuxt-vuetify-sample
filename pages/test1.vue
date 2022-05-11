<script setup lang="ts">
const title = 'test1'
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <span>{{ title }}</span>
  </div>
</template>
