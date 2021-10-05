import { createApp } from 'vue';
import '@/assets/scss/main.scss';
import App from './App.vue';
import store from './store';
import router from './router';
import i18n from './locales';
import helpers from './helpers';
import AtomButton from './components/AtomButton';
import MoleculeInput from './components/MoleculeInput';
import OrganismForm from './components/OrganismForm';
import OrganismModal from './components/OrganismModal';
import './validator/';
import './prototypes/';

const app = createApp(App);
app.component('AtomButton', AtomButton);
app.component('MoleculeInput', MoleculeInput);
app.component('OrganismForm', OrganismForm);
app.component('OrganismModal', OrganismModal);

app.config.globalProperties.helpers = helpers;
app.use(router).use(store).use(i18n).mount('#app');
