import { createApp } from 'vue'
import App from './vue/App.vue'
import store from './vue/store'
import router from './vue/router'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
