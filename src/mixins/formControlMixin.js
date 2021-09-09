const formControlMixin = {
  props: {
    modelValue: {
      type: [String, Object, Array, Number, Boolean, Date],
    },
    name: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    validate: {
      type: [String, Object],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: [String, Array, Object],
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  computed: {
    isRequired() {
      if (typeof this.validate === 'string') return this.validate.includes('required');
      else if (typeof this.validate === 'object') return this.validate['required'];
      return false;
    },
    formControlOptions() {
      return {
        name: this.name,
        placeholder: this.placeholder,
        readonly: this.readonly,
        class: this.classes,
        disabled: this.disabled,
        rules: this.validate,
        label: this.label,
      };
    },
    // value: {
    //   get() {
    //     return this.modelValue;
    //   },
    //   set(val) {
    //     this.$emit('update:modalValue', val);
    //   },
    // },
  },
};

export default formControlMixin;
