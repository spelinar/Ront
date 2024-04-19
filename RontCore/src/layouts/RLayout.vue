<template>
  <v-layout ref="app" class="rounded rounded-md">
  <r-app-bar />

  <v-main>
    Main Content
  </v-main>

  <r-footer />
</v-layout>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from "vue";

const RAppBar = defineAsyncComponent(() =>
  import('@/components/RAppBar/RAppBar.vue')
)
const RFooter = defineAsyncComponent(() =>
  import('@/components/RFooter/RFooter.vue')
)
</script>

<style scoped lang="scss">

</style>
