import api from '../../../api/index'
import { SET_USER_MUTATION } from '../../mutation-types'

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
  }
}
