<template>
  <validation-form ref="form" @submit="onSubmit"><slot></slot></validation-form>
</template>
<script>
import { Form } from 'vee-validate';
export default {
  name: 'ScorpForm',
  emits: ['onSubmit'],
  components: { 'validation-form': Form },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate();
      this.$emit('on-submit', { isValid });
    },
  },
};
</script>
