<script setup lang="ts">
import TheHeader from '@/components/layouts/TheHeader.vue'

const title = '入力部品'
const check = ref('')
const text = ref('')
const items = ['その１', 'その2', 'その3']
const selectedItem = ref('')
const radio = ref('')

definePageMeta({
  layout: false,
})
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <v-layout>
    <TheHeader :title="title" />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox v-model="check" label="red" color="red" value="red" hide-details></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox v-model="check" label="orange" color="orange" value="orange" hide-details></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <span>{{ check }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-text-field v-model="text" label="テキスト"></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            {{ text }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-select v-model="selectedItem" :items="items" label="Selects"></v-select>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            {{ selectedItem }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-radio-group v-model="radio" column>
              <v-radio label="primary" color="primary" value="primary"></v-radio>
              <v-radio label="secondary" color="secondary" value="secondary"></v-radio>
              <v-radio label="success" color="success" value="success"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            {{ radio }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-progress-circular color="primary" indeterminate></v-progress-circular>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
