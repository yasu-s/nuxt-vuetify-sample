<script setup lang="ts">
import TheHeader from '@/components/layouts/TheHeader.vue'

type Item = {
  name: string
  memo: string
}

const title = 'DataTable'
const items = ref<Item[]>([])

function setItems(size = 20) {
  items.value = [...Array<Item>(size)].map((_, i): Item => ({ name: `name${i}`, memo: `memo${i}` }))
}
setItems()

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
          <v-col cols="12" sm="12" md="12">
            <v-table fixed-header height="300px">
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Memo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.memo }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
