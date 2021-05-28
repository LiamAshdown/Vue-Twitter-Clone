import { SET_FOLLOW_USER_MUTATION, SET_USER_MUTATION } from '../../mutation-types'

export default {
  [SET_USER_MUTATION] (state, payload) {
    state.user = payload
  },
  [SET_FOLLOW_USER_MUTATION] (state, payload) {
    state.user.follow = true
  }
}
