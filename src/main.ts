import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'
import { SetupRouter } from './plugins/router'
import { SetupPinia } from './plugins/pinja'
import { SetupApp } from './plugins/app'
import 'nprogress/nprogress.css'

const app = createApp(App)

SetupApp(app)
SetupRouter(app)
SetupPinia(app)

app.mount('#app')
