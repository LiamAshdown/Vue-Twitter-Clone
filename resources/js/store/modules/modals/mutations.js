import { OPEN_MODAL_MUTATION, CLOSE_MODAL_MUTATION } from '../../mutation-types'

export default {
  [OPEN_MODAL_MUTATION] (state, id) {
    state.open.unshift(id)
  },
  [CLOSE_MODAL_MUTATION] (state, id) {
    state.open = state.open.filter((e) => e !== id)
  }
}
