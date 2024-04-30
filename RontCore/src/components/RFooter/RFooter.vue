<template>
  <v-footer
    color="footer"
    app
  >
    <v-row class="d-flex">
      <v-col class="text-center">
<h4 class="">Logo i nazwa</h4>
      </v-col>
      <v-col class="text-center">
        <h4 class="text-uppercase">Roman Spelina Company</h4>
        <p>Borowska 217</p>
        <p>50-572 Wrocław</p>
      </v-col>
      <v-col class="justify-center text-center">
          <h4 class="text-uppercase">Skontaktuj się z nami</h4>
          <p>e-mail: rorenthelp@gmail.com</p>
          <a v-for="(icon, index) in footerIcons" :key="index" :href="icon.link">
            <v-icon color="white" class="mx-3">{{icon.icon}}</v-icon>
          </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts" setup>

import {ref} from "vue";

const footerIcons = ref({
  facebook: {
    icon: 'fa-brands fa-facebook',
    link: 'https://www.facebook.com/'
  },
  twitter: {
    icon: 'fa-brands fa-twitter',
    link: 'https://twitter.com/'
  },
  linkedIn: {
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/'
  },
  instagram: {
    icon: 'fa-brands fa-instagram',
    link: 'https://www.instagram.com/'
  }
})
</script>

<style scoped>

</style>
