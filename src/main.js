import { createApp } from 'vue';
import '@/assets/scss/main.scss'
import App from './App.vue';
import store from './store';
import router from './router';
import i18n from './locales';

import './components/'
import './validator/';
import './prototypes/';

createApp(App).use(router).use(store).use(i18n).mount('#app');
