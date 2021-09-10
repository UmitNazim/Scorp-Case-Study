<template>
  <validation-form ref="form" @submit="handleSubmit"><slot></slot></validation-form>
</template>
<script>
import { Form as ValidationForm } from 'vee-validate';
export default {
  name: 'ScorpForm',
  emits: ['on-submit'],
  components: { ValidationForm },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate();
      this.$emit('on-submit', { isValid });
    },
  },
};
</script>
