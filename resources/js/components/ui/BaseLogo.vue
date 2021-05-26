<template>
  <img :src="'img/' + logo"/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BaseLogo',
  props: {
    color: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    ...mapGetters(['isDark']),
    logo () {
      if (this.color) {
        return `logo_${this.color}.svg`
      }

      return this.isDark ? 'logo_white.svg' : 'logo_blue.svg'
    }
  }
}
</script>
