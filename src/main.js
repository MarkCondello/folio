import { createApp } from 'vue'
import App from './vue/App.vue'
import store from './vue/store'
import router from './vue/router'

import CodeExample from './vue/components/CodeExample'

const app = createApp(App)
  .use(store)
  .use(router)

app.component('CodeExample', CodeExample)
app.mount('#app')
