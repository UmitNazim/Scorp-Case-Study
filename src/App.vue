<template>
  <app-layout>
    <!-- <transition name="fade-in-down-out" mode="in-out"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </app-layout>
</template>
<script>
import AppLayout from './layout';
export default {
  name: 'ScorpStoreFront',
  components: { AppLayout },
};
</script>
