import { SET_PROFILE_MUTATION, SET_TOKEN_MUTATION } from '../../mutation-types'
import api from '../../../api/index'

export default {
  async login (context, payload) {
    let response = await api.auth.login(payload)

    context.commit(SET_TOKEN_MUTATION, {
      accessToken: response.accessToken,
      expiresIn: response.expiresIn,
      refreshToken: response.refreshToken,
      authenticated: true
    })

    response = await api.auth.profile()
    context.commit(SET_PROFILE_MUTATION, response)
  },
  async logout (context) {
    await api.auth.logout()

    // Reset the state
    context.commit(SET_TOKEN_MUTATION, {
      accessToken: '',
      expiresIn: '',
      refreshToken: '',
      authenticated: false
    })
  },
  async register (context, payload) {
    const response = await api.auth.register(payload)

    context.commit(SET_TOKEN_MUTATION, {
      accessToken: response.accessToken,
      expiresIn: response.expiresIn,
      refreshToken: response.refreshToken,
      authenticated: true
    })
  }
}
