// Components
import App from './App.vue'

import ".//css/main.scss"
// Composables
import { createApp } from 'vue'

// Plugins
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import {createPinia} from "pinia";
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
