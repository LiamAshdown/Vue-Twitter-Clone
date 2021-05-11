import { SET_TOKEN_MUTATION } from '../../mutation-types'

export default {
  [SET_TOKEN_MUTATION] (state, payload) {
    state.accessToken = payload.accessToken
    state.expiresIn = payload.expiresIn
    state.refreshToken = payload.refreshToken
    state.authenticated = payload.authenticated
  }
}
