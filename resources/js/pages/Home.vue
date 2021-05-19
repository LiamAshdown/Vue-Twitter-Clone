<template>
  <div>
    <the-title title="Home"></the-title>
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
  }
}
</script>
