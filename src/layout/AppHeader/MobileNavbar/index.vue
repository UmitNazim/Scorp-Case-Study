<template>
  <div class="position-relative" @click="isTabOpen = !isTabOpen">
    <img width="35" class="ms-2" src="https://img.icons8.com/material-outlined/50/000000/menu--v1.png" />
  </div>
  <!-- did not use v-if for SEO -->
  <div :class="{ 'd-none': !isTabOpen }" class="position-absolute app-header__mobile-tab">
    <div
      v-for="({ key, to }, index) in links"
      :key="`header-item-${index}`"
      class="text-center mb-2 "
      @click="getItemPage({ to })"
      :class="{ 'mt-2': index == 0 }"
    >
      {{ $t(`general.${key}`) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMobileNavbar',
  data() {
    return {
      isTabOpen: false,
    };
  },
  methods: {
    getItemPage({ to = null } = {}) {
      this.$router.push(to);
      this.isTabOpen = false;
    },
  },
  computed: {
    links() {
      return this.$store.getters['lookups/getLinks'];
    },
  },
};
</script>
