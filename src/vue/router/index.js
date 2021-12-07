import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/'
import Home from '../views/Home.vue'
import Styleguide from '../views/Styleguide.vue'
import ProjectShow from '../views/ProjectShow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:slug',
    name: 'project-show',
    component: ProjectShow,
    props: true,
    beforeEnter (routeTo, routeFrom, next) {
      console.log('reached before enter')
      store.dispatch('fetchProject', routeTo.params.slug)
        .then((project) => {
          routeTo.params.project = project
          next()
        })
        .catch(err => console.log(err))
    }
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
