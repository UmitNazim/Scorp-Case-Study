<template>
  <scorp-modal size="md" @on-close="onClose" close-on-out-side-click full-screen-on-mobile>
    <scorp-form @on-submit="handleSubmit">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <scorp-input validate="required" :name="$t('contactUs.title')" v-model="user.title" />
        </div>
        <div class="col-md-12 col-sm-12">
          <scorp-input validate="required" :name="$t('contactUs.name')" v-model="user.name" />
        </div>
        <div class="col-md-12 col-sm-12">
          <scorp-input validate="required|email" :name="$t('contactUs.email')" v-model="user.email" />
        </div>
        <div class="col-md-12 col-sm-12">
          <scorp-input
            type="password"
            validate="required|min:6|max:12|numeric"
            :name="$t('contactUs.password')"
            v-model.trim="user.password"
          />
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center my-3">
        <scorp-button @click="onClose" block size="lg" color="mid-grey" bg-color="transparent" class="mx-3">{{
          $t('action.cancel')
        }}</scorp-button>
        <scorp-button type="submit" block size="lg" bg-color="regent-grey" class="mx-3">{{
          $t('action.login')
        }}</scorp-button>
      </div>
    </scorp-form>
  </scorp-modal>
</template>

<script>
export default {
  name: 'LoginModal',
  data() {
    return {
      user: {
        title: null,
        name: null,
        email: null,
        password: null,
      },
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
};
</script>
