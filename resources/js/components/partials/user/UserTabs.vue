<template>
  <tweet-tabs v-if="user">
    <tweet-tab title="Tweets"><user-tweets></user-tweets></tweet-tab>
    <tweet-tab title="Tweets & replies"><p class="text-white">ffdffff</p></tweet-tab>
    <tweet-tab title="Media"><p class="text-white">ffdffff</p></tweet-tab>
    <tweet-tab title="Likes"><p class="text-white">ffdffff</p></tweet-tab>
  </tweet-tabs>
  <div class="text-center border-1 border-t border-gray-500 pt-10" v-else>
    <p class="text-black dark:text-gray-200 text-xl font-bold mb-2"> This account doesn't exist</p>
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
