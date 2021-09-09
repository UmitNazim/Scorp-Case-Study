<template>
  <scorp-button @click="deneme = true" block class="ms-2">Open Modal</scorp-button>

  <scorp-modal size="lg" close-on-out-side-click v-if="deneme" @on-close="deneme = false">
    <scorp-form @on-submit="handleSubmit()">
      <div class="row">
        <div class="col-md-6">
          <scorp-input :validate="{ required: true, email: true }" name="name" label="Name" v-model="user.name" />
        </div>
        <div class="col-md-6">
          <scorp-input validate="required" name="surname" label="Surname" v-model="user.surname" />
        </div>
        <div class="col-md-6">
          <scorp-input validate="required" name="age" label="Age" v-model="user.age" />
        </div>
        <div class="col-md-6">
          <scorp-input validate="required" name="sex" label="Sex" v-model="user.sex" />
        </div>
        <div class="col-md-6">
          <scorp-input validate="required" name="job" label="Job" v-model="user.job" />
        </div>
        <div class="col-md-6">
          <scorp-input validate="required" name="citizen" label="Citizen" v-model="user.citizen" />
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center mt-4">
        <scorp-button @click="deneme = false" bg-color="none" color="mid-grey" block>Cancel</scorp-button>
        <scorp-button type="submit" block class="ms-2">Save</scorp-button>
      </div>
    </scorp-form>
  </scorp-modal>
</template>
<script>
import ScorpButton from '@/components/ScorpButton';
import ScorpModal from '@/components/ScorpModal';
import ScorpInput from '@/components/ScorpInput';
import ScorpForm from '@/components/ScorpForm';

export default {
  components: { ScorpButton, ScorpModal, ScorpInput, ScorpForm },
  emits: ['click', 'onClose'], // <--- add this line

  data() {
    return {
      deneme: false,
      user: {
        name: null,
        surname: null,
        age: null,
        sex: null,
        job: null,
        citizen: null,
      },
    };
  },
  methods: {
    handleSubmit({ isValid = true } = {}) {
      console.log('ethreth');
      if (isValid) console.log(this.user);
    },
  },
};
</script>
