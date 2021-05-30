<template>
  <div>
    <template v-if="loading">
      <div class="w-full mt-4">
        <loading-icon class="mx-auto" :loading="true"></loading-icon>
      </div>
    </template>
    <template v-else>
      <tweet
      v-for="tweet in tweets"
      :key="tweet.id"
      class="border-b border-gray-500"
      :tweet="tweet"
      ></tweet>
    </template>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import Tweet from '../../tweets/Tweet'
import api from '../../../api/index'

export default {
  name: 'ProfileTweets',
  components: {
    Tweet
  },
  setup () {
    const store = useStore()
    const tweets = ref([])
    const loading = ref(true)

    const user = computed(() => store.getters['user/user'])

    const getTweets = async () => {
      tweets.value = await api.tweet.userTweets(user.value.id)
      loading.valuie = false
    }

    onMounted(getTweets)

    return {
      user,
      tweets
    }
  }
}
</script>
