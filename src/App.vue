<template>
  <div>
    <h1>This is main Part</h1>
    <router-view></router-view>

    <router-link :to="{name:'deneme'}">Deneme</router-link> |
    <router-link :to="{name:'deneme-second'}">Deneme-Second</router-link> 

    <button>{{$t('general.name')}}</button>
  </div>
</template>
<script>
export default {
  name: 'ScorpStoreFront',
};
</script>
