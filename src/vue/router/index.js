import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Styleguide from '../views/Styleguide.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/styleguide',
    name: 'Styleguide',
    component: Styleguide
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
