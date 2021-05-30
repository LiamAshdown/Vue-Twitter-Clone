import api from '../../../api/index'
import { ADD_TWEET_MUTATION, TWEET_INDEX_MUTATION } from '../../mutation-types'

export default {
  async index (context) {
    const response = await api.tweet.index()
    context.commit(TWEET_INDEX_MUTATION, response)
  },
  async add (context, payload) {
    const response = await api.tweet.store(payload)
    context.commit(ADD_TWEET_MUTATION, response)
  }
}
