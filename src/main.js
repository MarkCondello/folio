import { createApp } from 'vue'
import App from './vue/App.vue'
import store from './vue/store'

createApp(App)
  .use(store)
  .mount('#app')
