<template>
  <v-footer
    color="footer"
    app
    class="px-0"
  >
      <v-row class="d-flex">
        <v-col class="text-center">
          <h4 class="">Logo i nazwa</h4>
        </v-col>
        <v-col class="text-center">
          <h4 class="text-uppercase text-color">Roman Spelina Company</h4>
          <p class="text-color">ul. Stanisława Skarżyńskiego 217</p>
          <p class="text-color">50-572 Wrocław</p>
        </v-col>
        <v-col class="justify-center text-center">
          <h4 class="text-uppercase  text-color">Skontaktuj się z nami</h4>
          <p class="mb-2 text-color">e-mail: rorenthelp@gmail.com</p>
          <a v-for="(icon, index) in footerIcons" :key="index" :href="icon.link">
            <v-icon color="#c9c9c9" class="mx-3">{{ icon.icon }}</v-icon>
          </a>
        </v-col>
        <v-sheet class="py-2 bg-black text-center w-100" color="footer-accent">
          <span class="text-color">
            &copy;{{moment().format('YYYY')}} <span>Roman Spelina Company v1.0</span>
          </span>
        </v-sheet>
      </v-row>
  </v-footer>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import moment from "moment";

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

<style scoped lang="scss">
.text-color {
  color: #c9c9c9
}

</style>
