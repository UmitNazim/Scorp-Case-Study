<template>
  <scorp-modal size="md" @on-close="onClose" close-on-out-side-click full-screen-on-mobile>
    <scorp-form @on-submit="handleSubmit">
      <div class="row">
        <div
          class="col-md-12 col-sm-12"
          v-for="({ value, ...rest }, index) in fields"
          :key="`logi-modal-field-${index}`"
        >
          <scorp-input :name="$t(`contactUs.${value}`)" v-bind="rest" v-model="user[value]" />
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center my-3">
        <scorp-button
          block
          size="lg"
          class="mx-3"
          color="mid-grey"
          @click="onClose"
          bg-color="transparent"
          v-text="$t('action.cancel')"
        />
        <scorp-button type="submit" block size="lg" bg-color="regent-grey" class="mx-3" v-text="$t('action.login')" />
      </div>
    </scorp-form>
  </scorp-modal>
</template>

<script>
export default {
  name: 'LoginModal',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onClose() {
      this.$emit('on-close');
    },
    handleSubmit({ isValid: { valid } } = {}) {
      if (valid) {
        this.$store.commit('auth/setUser', {
          user: this.user,
        });
        this.onClose();
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
