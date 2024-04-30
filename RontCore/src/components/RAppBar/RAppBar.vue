<template>
  <v-app-bar
    elevation="1"
  >
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <!-- Triangle -->
      <path d="M 100,10 L 190,190 L 10,190 Z" fill="none" stroke="black"/>
      <!-- Text -->
      <text x="50%" y="60%" text-anchor="middle" fill="black" font-size="30" font-family="sans-serif" dy=".3em">Rorent</text>
    </svg>
    <v-spacer />
    <ro-app-bar-settings></ro-app-bar-settings>
  </v-app-bar>
</template>

<script lang="ts" setup>
import RoAppBarSettings from "@/components/RoAppBarSettings/RoAppBarSettings.vue";
</script>

<style scoped>

</style>
