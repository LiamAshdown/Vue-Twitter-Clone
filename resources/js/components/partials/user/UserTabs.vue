<template>
  <tweet-tabs>
    <tweet-tab title="Tweets"><user-tweets></user-tweets></tweet-tab>
    <tweet-tab title="Tweets & replies"><p class="text-white">ffdffff</p></tweet-tab>
    <tweet-tab title="Media"><p class="text-white">ffdffff</p></tweet-tab>
    <tweet-tab title="Likes"><p class="text-white">ffdffff</p></tweet-tab>
  </tweet-tabs>
</template>

<script>
import UserTweets from './UserTweets'

export default {
  name: 'UserTabs',
  components: {
    UserTweets
  }
}
</script>
