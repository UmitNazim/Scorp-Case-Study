<template>
  <footer class="row text-center app-footer m-0">
    <div
      v-for="({ key, to }, index) in links"
      :key="`header-item-${index}`"
      @click="getItemPage({ to })"
      class="col-md-3 col-sm-12 app-footer__item"
    >
      {{ $t(`general.${key}`) }}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    getItemPage({ to = null } = {}) {
      this.$router.push(to);
    },
  },
  computed: {
    links() {
      return this.$store.getters['lookups/getLinks'];
    },
  },
};
</script>
