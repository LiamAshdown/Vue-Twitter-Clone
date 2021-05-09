<template>
  <button
    class="rounded-full text-white font-bold transition transition-background-color duration-500 ease-out"
    :class="[
      style()
    ]"
    :disabled="disabled"
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
          return `${this.outline ? 'hover:bg-opacity-10 text-blue-500 dark:text-white border-2 border-blue-400 bg-blue-400 bg-opacity-0' : 'bg-blue-400'} 
                  ${!this.disabled ? 'hover:bg-blue-500' : ''}`
        default:
          return ''
      }
    },
    style () {
      let style = ''
      style += ' ' + this.variantStyle()
      style += ' ' + this.sizeStyle()
      style += ' ' + this.disabledStyle()

      return style
    }
  }
}
</script>
