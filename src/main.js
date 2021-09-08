import { createApp } from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
