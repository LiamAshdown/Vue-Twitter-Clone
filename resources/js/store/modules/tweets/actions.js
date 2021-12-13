import api from '../../../api/index'
import { ADD_TWEET_MUTATION, TWEET_INDEX_MUTATION, LIKE_TWEET_MUTATION } from '../../mutation-types'

export default {
  async index (context) {
    const response = await api.tweet.index()
    context.commit(TWEET_INDEX_MUTATION, response)
  },
  async add (context, payload) {
    const response = await api.tweet.store(payload)
    context.commit(ADD_TWEET_MUTATION, response)
  },
  async like (context, id) {
    try {
      context.commit(LIKE_TWEET_MUTATION, {
        id: id,
        like: true
      })

      await api.tweet.like(id)
    } catch {
      context.commit(LIKE_TWEET_MUTATION, {
        id: id,
        like: true
      })
    }
  },
  async unlike (context, id) {
    try {
      context.commit(LIKE_TWEET_MUTATION, {
        id: id,
        like: false
      })

      await api.tweet.unlike(id)
    } catch {
      context.commit(LIKE_TWEET_MUTATION, {
        id: id,
        like: true
      })
    }
  }
}
