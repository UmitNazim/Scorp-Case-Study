<template>
  <label v-if="label" class="scorp-label d-block mb-1 mt-2" :for="name">
    {{ label }} <span v-if="isRequired" class="scorp-label__error">*</span></label
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
  mixins: [FormControlMixin],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: value => emit('update:modelValue', value),
    });
    return { value };
  },
  components: {
    'validate-form-field': Field,
    'validate-form-error-message': ErrorMessage,
  },

  computed: {
    options() {
      return {
        ...this.formControlOptions,
        class: { 'scorp-input__disabled': this.disabled },
        type: 'text',
      };
    },
  },
};
</script>
