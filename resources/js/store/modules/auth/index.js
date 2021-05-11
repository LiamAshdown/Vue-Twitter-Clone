import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  state () {
    return {
      accessToken: null,
      expiresIn: null,
      refreshToken: null,
      authenticated: false
    }
  },
  mutations,
  actions,
  getters
}
