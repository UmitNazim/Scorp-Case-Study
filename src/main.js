import { createApp } from 'vue';
import '@/assets/scss/main.scss';
import App from './App.vue';
import store from './store';
import router from './router';
import i18n from './locales';
import helpers from './helpers';
import './validator/';
import './prototypes/';

const app = createApp(App);
app.config.globalProperties.helpers = helpers;

app
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app');
