<script setup lang="ts">
const props = defineProps<{ title: string }>()
const emit = defineEmits<(e: 'click', value: string) => void>()
const drawer = ref(false)
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>{{ props.title }}</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon="mdi-dots-vertical" @click="emit('click', 'aaaa')"></v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" bottom temporary>
    <v-list nav>
      <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox" to="/"></v-list-item>
      <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors" to="/test1">
        <template #append>
          <v-badge color="info" content="12" inline></v-badge>
        </template>
      </v-list-item>
      <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin1" to="/test2"></v-list-item>
      <v-list-item prepend-icon="mdi-apple-keyboard-option" title="Clock-in" value="clockin2" to="/test3"></v-list-item>
      <v-list-item prepend-icon="mdi-camera" title="components" value="components" to="/components"></v-list-item>
      <v-list-item prepend-icon="mdi-keyboard" title="inputs" value="inputs" to="/inputs"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
