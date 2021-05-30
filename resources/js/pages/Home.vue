<template>
  <div>
    <the-title class="p-4">
      <template v-slot:header>
        Home
      </template>
    </the-title>
    <tweet-box></tweet-box>
    <tweet
      v-for="tweet in tweets"
      :key="tweet.id"
      class="border-b border-gray-500"
      :tweet="tweet"
    ></tweet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheTitle from '../components/TheTitle'
import TweetBox from '../components/tweets/TweetBox'
import Tweet from '../components/tweets/Tweet'

export default {
  name: 'Home',
  components: {
    TheTitle,
    TweetBox,
    Tweet
  },
  computed: {
    ...mapGetters({
      tweets: 'tweets/tweets'
    })
  },
  mounted () {
    this.$store.dispatch('tweets/index')
  }
}
</script>
