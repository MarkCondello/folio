import { createApp } from 'vue'
import App from './vue/App.vue'
import store from './vue/store'
import router from './vue/router'

import CodeExample from './vue/components/CodeExample'
import ScreencaptureExample from './vue/components/ScreencaptureExample'

import VueApollo from 'vue-apollo'
import { apolloClient } from './vue/services/Apollo'

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const app = createApp(App)
  .use(apolloProvider.provide())
  .use(store)
  .use(router)

app.component('CodeExample', CodeExample)
app.component('ScreencaptureExample', ScreencaptureExample)
// app.component('LightBox', LightBox)
app.mount('#app')
