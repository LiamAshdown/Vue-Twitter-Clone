<template>
  <div>
    <the-title class="p-4">
      <template v-slot:header>
        Home
      </template>
    </the-title>
    <tweet-box></tweet-box>
  </div>
</template>

<script>
import TheTitle from '../components/TheTitle'
import TweetBox from '../components/tweets/TweetBox'

export default {
  name: 'Home',
  components: {
    TheTitle,
    TweetBox
  },
  mounted () {
    this.$store.dispatch('tweets/index')
  }
}
</script>
