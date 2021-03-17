import { createRouter, createWebHistory } from 'vue-router'
import QRcodeCreater from '../views/QRcodeCreater.vue'

const routes = [
  {
    path: '/',
    name: 'QRcodeCreater',
    component: QRcodeCreater
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
