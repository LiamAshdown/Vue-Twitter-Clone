import { TWEET_INDEX_MUTATION, ADD_TWEET_MUTATION } from '../../mutation-types'

export default {
  [TWEET_INDEX_MUTATION] (state, payload) {
    state.tweets = payload
  },
  [ADD_TWEET_MUTATION] (state, payload) {
    state.tweets = [{ ...payload }, ...state.tweets]

    console.log(state.tweets)
  }
}
