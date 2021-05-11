import { SET_THEME_MUTATION } from '../../mutation-types'

export default {
  setTheme (context, payload) {
    context.commit(SET_THEME_MUTATION, payload)
  }
}
