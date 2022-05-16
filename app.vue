<script setup lang="ts">
useHead({
  titleTemplate: 'My App - %s',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  // link: [
  //   {
  //     rel: 'stylesheet',
  //     href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css',
  //   },
  // ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
