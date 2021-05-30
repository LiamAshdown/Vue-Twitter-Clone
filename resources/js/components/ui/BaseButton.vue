<template>
  <button
    class="rounded-full text-white font-bold transition transition-background-color duration-500 ease-out"
    :class="[
      style()
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    outline: {
      type: Boolean,
      required: false,
      default: false
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: Object,
      required: false,
      default: null
    },
    size: {
      type: String,
      required: false,
      default: 'lg'
    }
  },
  methods: {
    sizeStyle () {
      switch (this.size) {
        case 'lg':
          return 'py-3 px-6'
        case 'md':
          return 'py-2 px-3'
        case 'sm':
          return 'py-2 px-4'
        default:
          return ''
      }
    },
    disabledStyle () {
      if (this.disabled) {
        return 'pointer-events-none opacity-50'
      }

      return ''
    },
    variantStyle () {
      switch (this.variant) {
        case 'primary':
          return `${this.outline ? 'btn-primary--outline' : 'btn-primary'} 
                  ${this.disabled ? 'btn-primary--disabled' : ''}`
        case 'white':
          return `${this.outline ? 'btn-white--outline' : 'btn-white'} 
                  ${!this.disabled ? (this.outline ? 'hover:bg-opacity-25' : 'hover:bg-opacity-75') : ''}`
        default:
          return ''
      }
    },
    style () {
      let style = ''
      style += ' ' + this.variantStyle()
      style += ' ' + this.sizeStyle()
      style += ' ' + this.disabledStyle()

      if (this.block) {
        style += ' ' + 'w-full'
      }

      return style
    },
    onClick (event) {
      if (this.to) {
        event.stopPropagation()
        this.$router.push(this.to)
      }
    }
  }
}
</script>

<style>
.btn-primary {
  @apply bg-blue-400;
}
.btn-primary--outline {
  @apply text-blue-500 border-2 border-blue-400 bg-blue-400 bg-opacity-0 hover:bg-opacity-10 hover:bg-blue-500;
}
.btn-primary--disabled {
  @apply hover:bg-current;
}

.btn-white {
  @apply bg-white text-blue-400;
}
.btn-white--outline {
  @apply hover:bg-white text-white bg-blue-400 border-2 border-white;
}

/** Custom overrides */
.btn-follow-hover {
  @apply hover:bg-red-500
}
</style>
