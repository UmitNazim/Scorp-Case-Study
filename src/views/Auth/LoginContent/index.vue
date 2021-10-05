<template>
  <div class="contact-us bg-seas-hell mx-auto">
    <organism-form @on-submit="handleSubmit">
      <div class="row">
        <div
          class="col-md-12 col-sm-12"
          v-for="({ value, ...rest }, index) in fields"
          :key="`login-content-field-${index}`"
        >
          <molecule-input :name="$t(`contactUs.${value}`)" v-bind="rest" v-model="user[value]" />
        </div>
      </div>
      <atom-button block type="submit" size="lg" class="mt-4" bg-color="regent-grey" v-text="$t('action.login')" />
    </organism-form>
  </div>
</template>

<script>
export default {
  name: 'LoginContent',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    handleSubmit({ isValid: { valid } } = {}) {
      if (valid) {
        this.$store.commit('auth/setUser', {
          user: this.user,
        });
        this.$router.push('/');
      }
    },
  },
  computed: {
    fields() {
      return [
        { validate: 'required', value: 'title' },
        { validate: 'required', value: 'name' },
        { validate: 'required|email', value: 'email' },
        { type: 'password', validate: 'required|min:6|max:12|numeric', value: 'password' },
      ];
    },
  },
};
</script>
