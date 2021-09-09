<template>
  <footer class="app-footer">
    <div class="row text-center">
      <div
        v-for="({ key, to }, index) in items"
        :key="`header-item-${index}`"
        @click="getItemPage({ to })"
        class="col-md-3 col-sm-12 app-footer__item"
      >
        {{ $t(`general.${key}`) }}
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      items: [
        { key: 'mainPage', to: '/main-page' },
        { key: 'aboutUs', to: '/about-us' },
        { key: 'contact', to: '/contact' },
        { key: 'carrier', to: '/carrier' },
      ],
    };
  },
  methods: {
    getItemPage({ to = null } = {}) {
      this.$router.push(to);
    },
  },
};
</script>
