<script setup lang="ts">
import TheHeader from '@/components/layouts/TheHeader.vue'

function log(value: string) {
  console.log(value)
}
</script>

<template>
  <v-layout>
    <TheHeader title="Header" @click="log($event)" />
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>
