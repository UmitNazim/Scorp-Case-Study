import { createApp } from 'vue';
import '@/assets/scss/main.scss';
import App from './App.vue';
import store from './store';
import router from './router';
import i18n from './locales';
import helpers from './helpers';
import ScorpButton from './components/ScorpButton';
import ScorpInput from './components/ScorpInput';
import ScorpForm from './components/ScorpForm';
import ScorpModal from './components/ScorpModal';
import './validator/';
import './prototypes/';

const app = createApp(App);
app.config.globalProperties.helpers = helpers;

app.component('ScorpButton', ScorpButton);
app.component('ScorpInput', ScorpInput);
app.component('ScorpForm', ScorpForm);
app.component('ScorpModal', ScorpModal);

app
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app');
