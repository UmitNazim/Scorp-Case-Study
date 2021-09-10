<template>
  <div class="d-flex justify-content-start align-items-center">
    <span
      v-for="({ key, to }, index) in links"
      :key="`header-item-${index}`"
      class="app-header__item"
      @click="getItemPage({ to })"
      >{{ $t(`general.${key}`) }}</span
    >
  </div>
  <div class="me-5 d-flex justify-content-center align-items-center">
    <scorp-button @click="getAction" block size="lg" :bg-color="userInfo ? 'regent-grey' : 'success'" class="mx-3">{{
      $t(`action.${userInfo ? 'logOut' : 'login'}`)
    }}</scorp-button>

    <select class="form-select" @change="onLanguageChange($event)">
      <option v-for="({ value, text }, index) in languages" :key="`language-item-${index}`" :value="value">{{
        $t(`languages.${text}`)
      }}</option>
    </select>
  </div>
  <login-modal v-if="isModalOpen" @on-close="isModalOpen = false" />
</template>

<script>
import LoginModal from '../_shared/LoginModal';
import { setLocale } from '@vee-validate/i18n';

export default {
  name: 'AppDesktopNavbar',
  components: { LoginModal },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    getAction() {
      if (this.userInfo) this.$store.commit('auth/setUser');
      else this.isModalOpen = true;
    },
    onLanguageChange({ target: { value: lang } }) {
      this.$root.$i18n.locale = document.querySelector('html').lang = lang;
      setLocale(lang);
    },
    getItemPage({ to = null } = {}) {
      this.$router.push(to);
    },
  },
  computed: {
    userInfo() {
      return this.$store.getters['auth/getUser'];
    },
    languages() {
      return this.$store.getters['localization/getLanguages'];
    },
    links() {
      return this.$store.getters['lookups/getLinks'];
    },
  },
};
</script>
