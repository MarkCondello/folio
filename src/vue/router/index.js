import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/'
import Home from '../views/Home.vue'
import Styleguide from '../views/Styleguide.vue'
import ProjectShow from '../views/ProjectShow.vue'
// import Vue from 'vue'

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
      console.log('reached before enter', routeTo.params)
      store.dispatch('fetchProject', routeTo.params)
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash && document.querySelector(to.hash)) {
      // console.log('hash val', document.querySelector(to.hash))
      document.querySelector(to.hash).scrollIntoView({ behavior: 'smooth' })
    } else {
      console.log('reached else, to top pos should be set')
      return { x: 0, y: 0 }
    }
  }
})

export default router
