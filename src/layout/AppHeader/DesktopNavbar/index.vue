<template>
  <div class="d-flex justify-content-start align-items-center">
    <span
      v-for="({ key, to }, index) in items"
      :key="`header-item-${index}`"
      class="app-header__item"
      @click="getItemPage({ to })"
      >{{ $t(`general.${key}`) }}</span
    >
  </div>
  <div class="me-5">
    <select class="form-select" aria-label="Default select example" @change="onLanguageChange($event)" name="" id="">
      <option v-for="({ value, text }, index) in languages" :key="`language-item-${index}`" :value="value">{{
        $t(`languages.${text}`)
      }}</option>
    </select>
  </div>
</template>

<script>
import DataMixin from '../dataMixin';
export default {
  name: 'AppDesktopNavbar',
  mixins: [DataMixin],
};
</script>
