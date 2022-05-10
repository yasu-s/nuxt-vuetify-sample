<script setup lang="ts">
const hoge = 'hoge'

const slots = useSlots()
</script>

<template>
  <div>
    <template v-if="slots.label">
      <div>if</div>
    </template>
    <slot name="label"></slot>
    <v-btn><slot :params="hoge"></slot></v-btn>
  </div>
</template>
