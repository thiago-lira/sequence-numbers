import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import MainContent from './pages/MainContent.vue'
import StatsContent from './pages/StatsContent.vue'

import './registerServiceWorker'

const routes = [
  { path: '/', component: MainContent },
  { path: '/stats', component: StatsContent }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
