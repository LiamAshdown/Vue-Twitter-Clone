<template>
  <svg class="animate-spin h-5 w-5" :class="[ styles() ]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
</template>

<script>
export default {
  name: 'LoadingIcon',
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    variant: {
      type: String,
      required: false,
      default: 'primary'
    },
    size: {
      type: String,
      required: false,
      default: 'normal'
    }
  },
  methods: {
    sizeStyle () {
      switch (this.size) {
        case 'normal':
          return 'w-8 h-8'
      }

      return ''
    },
    styles () {
      let style = ''

      switch (this.variant) {
        case 'primary': {
          style += 'text-blue-400'
        }
      }

      style += ' ' + this.sizeStyle()

      return style
    }
  }
}
</script>
