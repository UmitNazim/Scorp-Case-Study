<template>
  <div class="contact-us bg-seas-hell mx-auto">
    <h1 class="text-center mb-4">{{ $t('page.contactUs') }}</h1>
    <scorp-form @on-submit="handleSubmit">
      <div class="row">
        <div
          class="col-md-12 col-sm-12"
          v-for="({ value, ...rest }, index) in fields"
          :key="`contact-us-field-${index}`"
        >
          <scorp-input :name="$t(`contactUs.${value}`)" v-bind="rest" v-model="user[value]" />
        </div>
      </div>
      <scorp-button flat block class="my-4" type="submit">{{ $t('action.send') }}</scorp-button>
    </scorp-form>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    handleSubmit({ isValid: { valid } } = {}) {
      valid && this.$router.push('/');
    },
  },
  computed: {
    fields() {
      return [
        { validate: 'required', value: 'title' },
        { validate: 'required', value: 'name' },
        { validate: 'required|email', value: 'email' },
        { validate: 'required', value: 'country' },
        { type: 'textarea', validate: 'required|min:20|max:100', value: 'message' },
      ];
    },
    userInfo() {
      return this.$store.getters['auth/getUser'];
    },
  },
};
</script>
