import api from '../../../api/index'
import { ADD_TWEET_MUTATION } from '../../mutation-types'

export default {
  async add (context, payload) {
    const response = await api.tweet.store(payload)
    context.commit(ADD_TWEET_MUTATION, response)
  }
}
