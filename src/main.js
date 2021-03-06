import { createApp } from 'vue'
import App from './vue/App.vue'
import store from './vue/store'
import router from './vue/router'

import CodeExample from './vue/components/CodeExample'
import ScreencaptureExample from './vue/components/ScreencaptureExample'
// import LightBox from './vue/components/LightBox'

const app = createApp(App)
  .use(store)
  .use(router)

app.component('CodeExample', CodeExample)
app.component('ScreencaptureExample', ScreencaptureExample)
// app.component('LightBox', LightBox)
app.mount('#app')
