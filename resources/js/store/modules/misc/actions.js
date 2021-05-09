import { SET_THEME_MUTATION } from '../../mutation-types'

export default {
  setTheme (context, payload) {
    console.log(payload)
    context.commit(SET_THEME_MUTATION, payload)
  }
}
