<template>
  <validation-form ref="form" @on-submit="onSubmit"></validation-form>
</template>

<script>
import { Form } from 'vee-validate';
export default {
  name: 'ScorpForm',
  components:{'validation-form':Form}
};
</script>
