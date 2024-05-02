<template>
  <v-app-bar
    elevation="1"
  >
    <v-container>
      <v-img :src="roLogo" width="200px" />
    </v-container>
    <v-spacer/>
    <ro-app-bar-settings></ro-app-bar-settings>
  </v-app-bar>
</template>

<script lang="ts" setup>
import RoAppBarSettings from "@/components/RoAppBarSettings/RoAppBarSettings.vue";
import RoLogo from '@/assets/ro-logo.png'


const roLogo = RoLogo;
</script>

<style scoped>

</style>
