import { TWEET_INDEX_MUTATION, ADD_TWEET_MUTATION, LIKE_TWEET_MUTATION } from '../../mutation-types'

export default {
  [TWEET_INDEX_MUTATION] (state, payload) {
    state.tweets = payload
  },
  [ADD_TWEET_MUTATION] (state, payload) {
    state.tweets = [{ ...payload }, ...state.tweets]

    console.log(state.tweets)
  },
  [LIKE_TWEET_MUTATION] (state, payload) {
    state.tweets = state.tweets.map(tweet => {
      console.log(tweet.id, payload.id)
      if (tweet.id === payload.id) {
        tweet.liked = payload.like

        if (tweet.liked) {
          tweet.likes += 1
        } else {
          tweet.likes -= 1
        }
      }

      return tweet
    })
  }
}
