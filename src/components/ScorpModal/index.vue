<template>
  <!-- teleport tag opens modal in body layer -->
  <teleport to="body">
    <transition name="fade-in-down-out" mode="in-out">
      <div
        v-if="isVisible"
        class="scorp-modal__overlay d-flex justify-content-center align-items-center"
        @click.self="closeOnOutSideClick && $emit('on-close')"
      >
        <div v-bind="containerOptions" class="scorp-modal__content  p-3 d-flex flex-column">
          <header @click="$emit('on-close')">
            <img src="@/assets/icons/close.svg" class="cursor-pointer text-mid-grey float-end" />
          </header>

          <article class="scorp-modal__main mt-1">
            <slot></slot>
          </article>

          <footer>
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'ScorpModal',
  emits: ['on-close'],
  props: {
    size: {
      type: String,
      default: 'sm',
      validator: val => ['sm', 'md', 'lg', 'xl'].includes(val),
    },
    closeOnOutSideClick: {
      type: Boolean,
      default: false,
    },
    fullScreenOnMobile: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    containerOptions() {
      return {
        class: {
          'scorp-modal__fullscreen-on-mobile': this.fullScreenOnMobile,
          [`scorp-modal__${this.size}`]: this.size,
          'rounded-0': this.flat || this.fullScreenOnMobile,
          ...this.$attrs,
        },
      };
    },
  },
  unmounted() {
    document.querySelector('body').classList.remove('overflow-hidden');
  },
  created() {
    document.querySelector('body').classList.add('overflow-hidden');
    this.$nextTick(() => {
      this.isVisible = true;
    });
  },
};
</script>
