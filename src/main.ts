import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'
import { SetupRouter } from './plugins/router'
import { SetupPinia } from './plugins/pinja'
import { SetupApp } from './plugins/app'
import 'nprogress/nprogress.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  console.log('--->', key)
  app.component('V-' + key, component)
}
SetupApp(app)
SetupRouter(app)
SetupPinia(app)

app.mount('#app')
