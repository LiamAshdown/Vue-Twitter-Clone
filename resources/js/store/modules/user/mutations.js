import { SET_USER_MUTATION } from '../../mutation-types'

export default {
  [SET_USER_MUTATION] (state, payload) {
    state.user = payload
  }
}
