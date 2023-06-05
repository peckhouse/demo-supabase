import { createApp } from 'vue'

import './styles/normalize.scss'
import './styles/layout.scss'

import router from './router/index'
import App from './App.vue'


createApp(App)
  .use(router)
  .mount('#app')
