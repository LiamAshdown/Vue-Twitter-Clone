import { SET_THEME_MUTATION } from '../../mutation-types'

export default {
  [SET_THEME_MUTATION] (state, payload) {
    state.theme = payload.theme
  }
}
