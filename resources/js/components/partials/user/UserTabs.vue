<template>
  <tweet-tabs v-if="user">
    <tweet-tab title="Tweets"><user-tweets></user-tweets></tweet-tab>
    <tweet-tab title="Tweets & replies"><p class="text-white">ffdffff</p></tweet-tab>
    <tweet-tab title="Media"><p class="text-white">ffdffff</p></tweet-tab>
    <tweet-tab title="Likes"><p class="text-white">ffdffff</p></tweet-tab>
  </tweet-tabs>
  <div class="text-center" v-else>
    <p class="text-black dark:text-white text-xl font-bold mb-2"> This account doesn't exist</p>
    <small class="text-gray-400 text-sm font-normal">Try searching for another.</small>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserTweets from './UserTweets'

export default {
  name: 'UserTabs',
  components: {
    UserTweets
  },
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  }
}
</script>
