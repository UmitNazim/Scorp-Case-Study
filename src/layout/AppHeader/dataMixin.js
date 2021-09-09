const dataMixin = {
  data() {
    return {
      items: [
        { key: 'mainPage', to: '/main-page' },
        { key: 'aboutUs', to: '/about-us' },
        { key: 'contact', to: '/contact' },
        { key: 'carrier', to: '/carrier' },
      ],
      languages: [
        { value: 'en', text: 'english' },
        { value: 'tr', text: 'turkish' },
      ],
    };
  },
  methods: {
    onLanguageChange({ target: { value: lang } }) {
      this.$root.$i18n.locale = lang;
    },
    getItemPage({ to = null } = {}) {
      this.$router.push(to);
    },
  },
};

export default dataMixin;
