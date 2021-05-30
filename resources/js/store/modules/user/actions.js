import api from '../../../api/index'
import { SET_FOLLOW_USER_MUTATION, SET_UNFOLLOW_USER_MUTATION, SET_USER_MUTATION } from '../../mutation-types'

export default {
  async user (context, payload) {
    let response = null

    try {
      response = await api.user.show(payload)
    } catch {
      // TODO; Log?
    } finally {
      context.commit(SET_USER_MUTATION, response)
    }

    context.dispatch('profile')
  },
  async follow (context) {
    // Optimistic update
    try {
      context.commit(SET_FOLLOW_USER_MUTATION)

      await api.user.follow({
        id: context.getters.user.id
      })
    } catch {
      context.commit(SET_UNFOLLOW_USER_MUTATION)
    }
  },
  async unfollow (context) {
    // Optimistic update
    try {
      context.commit(SET_UNFOLLOW_USER_MUTATION)

      api.user.unfollow({
        id: context.getters.user.id
      })
    } catch {
      context.commit(SET_FOLLOW_USER_MUTATION)
    }
  }
}
