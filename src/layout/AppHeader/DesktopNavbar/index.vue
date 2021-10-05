<template>
  <div class="d-flex justify-content-center align-items-center">
    <span
      v-for="({ key, to }, index) in links"
      :key="`header-item-${index}`"
      class="app-header__item"
      @click="getItemPage({ to })"
      >{{ $t(`general.${key}`) }}</span
    >
  </div>
  <div
    class="d-flex justify-content-center align-items-center position-relative"
    :style="{
      width: userInfo ? '12%' : '20%',
    }"
  >
    <atom-button
      v-if="!userInfo"
      @click="$router.push('/login')"
      block
      size="lg"
      bg-color="white"
      color="mid-grey"
      v-text="$t('action.login')"
      class="me-2"
    />
    <select class="form-select me-2" @change="onLanguageChange($event)">
      <option v-for="({ value, text }, index) in languages" :key="`language-item-${index}`" :value="value">{{
        $t(`languages.${text}`)
      }}</option>
    </select>
    <img
      v-if="userInfo"
      @click="isOptionsPanelOpen = !isOptionsPanelOpen"
      src="@/assets/icons/user.svg"
      height="35"
      width="40"
      class="me-2 "
    />
  </div>
  <div v-if="isOptionsPanelOpen" class="position-absolute app-header__item-options p-2 text-center">
    <span class="app-header__item-options--text">
      {{ userInfo.name }}
    </span>
    <hr />
    <atom-button @click="getLogingOut" block size="lg" bg-color="regent-grey" v-text="$t('action.logOut')" />
  </div>
</template>

<script>
import { setLocale } from '@vee-validate/i18n';

export default {
  name: 'AppDesktopNavbar',
  data() {
    return {
      isOptionsPanelOpen: false,
    };
  },
  methods: {
    getLogingOut() {
      this.$store.commit('auth/setUser');
      this.isOptionsPanelOpen = false;
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
