<script setup lang="ts">
import Button from '@/components/Button.vue'

const { data, refresh } = await useAsyncData('index.vue', () => Promise.resolve(`aaa: ${new Date().getTime()}`))
</script>

<template>
  <div>
    <Head>
      <Title>{{ data }}</Title>
    </Head>

    <div>
      <v-btn class="ma-2" color="primary" @click="refresh()">
        Accept
        <v-icon end icon="checkbox-marked-circle"></v-icon>
      </v-btn>

      <v-btn class="ma-2" color="red">
        Decline
        <v-icon end icon="lock"></v-icon>
      </v-btn>

      <v-btn class="ma-2">
        <v-icon start icon="store"></v-icon>
        Cancel
      </v-btn>
    </div>

    <div>
      <v-btn class="ma-2" color="orange-darken-2">
        <v-icon start icon="done_all"></v-icon>
        Back
      </v-btn>

      <v-btn class="ma-2" color="purple" icon="home_work"></v-btn>

      <v-btn class="ma-2" color="indigo" icon="app_settings_alt"></v-btn>
    </div>

    <div>
      <v-btn class="ma-2" variant="text" icon="thumb_up_off_alt" color="blue-lighten-2"></v-btn>

      <v-btn class="ma-2" variant="text" icon="thumb_down_off_alt" color="red-lighten-2"></v-btn>
    </div>

    <Button>
      <template #label> aaaa </template>
      <template #default="{ params }">
        {{ params }}
      </template>
    </Button>

    <div>
      <ol>
        <li><NuxtLink to="/test1">test1.vue</NuxtLink></li>
        <li><NuxtLink to="/test2?hoge=aaaa">test2.vue</NuxtLink></li>
      </ol>
    </div>
  </div>
</template>
