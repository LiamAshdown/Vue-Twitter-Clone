import { ADD_TWEET_MUTATION } from '../../mutation-types'

export default {
  [ADD_TWEET_MUTATION] (state, payload) {
    state.tweets = [...state.tweets, { ...payload }]
  }
}
