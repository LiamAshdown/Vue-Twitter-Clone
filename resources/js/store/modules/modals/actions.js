import { OPEN_MODAL_MUTATION, CLOSE_MODAL_MUTATION } from '../../mutation-types'

export default {
  open (context, id) {
    context.commit(OPEN_MODAL_MUTATION, id)
  },
  close (context, id) {
    context.commit(CLOSE_MODAL_MUTATION, id)
  }
}
