<template>
  <label class="scorp-label d-block mb-1 mt-2" :for="name">
    {{ name }}<span v-if="isRequired" class="scorp-label__error">*</span></label
  >
  <validate-form-field v-bind="options" class="scorp-input" v-model="value" />
  <validate-form-error-message :name="name" class="scorp-label__error" />
</template>

<script>
import FormControlMixin from '../../mixins/formControlMixin';
import { Field, ErrorMessage } from 'vee-validate';
import { computed } from 'vue';

export default {
  name: 'ScorpInput',
  emits: ['update:modelValue'],
  mixins: [FormControlMixin],
  components: {
    'validate-form-field': Field,
    'validate-form-error-message': ErrorMessage,
  },
  props: {
    type: {
      type: String,
      validator: val => ['text', 'textarea', 'password'].includes(val),
    },
  },
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: value => emit('update:modelValue', value),
    });
    return { value };
  },
  computed: {
    options() {
      return {
        ...this.formControlOptions,
        class: { 'scorp-input__disabled': this.disabled },
        ...(this.type && this.type === 'textarea' ? { as: this.type } : { type: this.type }),
        ...this.$attrs,
      };
    },
  },
};
</script>
