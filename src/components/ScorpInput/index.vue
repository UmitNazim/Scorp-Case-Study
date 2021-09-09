<template>
  <validation-field type="text" name="" id="" />
  <validation-error-message  as="label" />
</template>

<script>


import { Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'ScorpInput',
  components: {
    'validation-field': Field,
    'validation-error-message': ErrorMessage,
  },
};
</script>
