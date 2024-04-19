// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/RLayout.vue'),
    children: [
      {
        path: '',
        name: '',
        // component: () => import(/* webpackChunkName: "home" */),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
