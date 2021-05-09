<template>
  <img src="img/logo_white.svg" v-if="isDark"/>
  <img src="img/logo_blue.svg" v-else/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BaseLogo',
  computed: {
    ...mapGetters(['isDark'])
  }
}
</script>
