<script setup lang="ts">
const props = defineProps<{ title: string }>()
const emit = defineEmits<(e: 'click', value: string) => void>()
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <template #prepend>
      <v-app-bar-nav-icon @click="emit('click', 'aaaa')"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ props.title }}</v-app-bar-title>

    <template #append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
