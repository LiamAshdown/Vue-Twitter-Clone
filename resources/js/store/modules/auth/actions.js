import { SET_TOKEN_MUTATION } from '../../mutation-types'
import api from '../../../api/index'

export default {
  async login (context, payload) {
    const response = await api.auth.login(payload)

    context.commit(SET_TOKEN_MUTATION, {
      accessToken: response.accessToken,
      expiresIn: response.expiresIn,
      refreshToken: response.refreshToken,
      authenticated: true
    })

    await context.dispatch('getProfile')
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
