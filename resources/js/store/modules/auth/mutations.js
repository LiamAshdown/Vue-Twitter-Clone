import { SET_PROFILE_MUTATION, SET_TOKEN_MUTATION } from '../../mutation-types'

export default {
  [SET_TOKEN_MUTATION] (state, payload) {
    state.accessToken = payload.accessToken
    state.expiresIn = payload.expiresIn
    state.refreshToken = payload.refreshToken
    state.authenticated = payload.authenticated
  },
  [SET_PROFILE_MUTATION] (state, payload) {
    state.profile = payload
  }
}
