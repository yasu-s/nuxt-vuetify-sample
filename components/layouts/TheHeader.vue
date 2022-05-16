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
    <v-btn icon="more_vert" @click="emit('click', 'aaaa')"></v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" bottom temporary>
    <v-list nav>
      <v-list-item prepend-icon="email" title="Inbox" value="inbox" to="/"></v-list-item>
      <v-list-item prepend-icon="people" title="Supervisors" value="supervisors" to="/test1"> </v-list-item>
      <v-list-item prepend-icon="history" title="Clock-in" value="clockin" to="/test2"></v-list-item>
      <v-list-item prepend-icon="lock_clock" title="Clock-in" value="clockin" to="/test3"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
