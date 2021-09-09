<template>
  <header class="app-header d-flex justify-content-between align-items-center">
    <app-mobile-navbar v-if="helpers.isMobile()"></app-mobile-navbar>
    <app-desktop-navbar v-else></app-desktop-navbar>
  </header>
</template>

<script>
import AppDesktopNavbar from './DesktopNavbar';
import AppMobileNavbar from './MobileNavbar';

export default {
  name: 'AppNavbar',
  components: {
    AppDesktopNavbar,
    AppMobileNavbar,
  },
};
</script>
