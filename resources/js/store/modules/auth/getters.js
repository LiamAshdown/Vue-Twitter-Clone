export default {
  isAuthenticated (state) {
    return state.authenticated
  },
  accessToken (state) {
    return state.accessToken
  },
  user (state) {
    return state.profile
  }
}
