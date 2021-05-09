export default {
  active (state) {
    return state.open.length > 0 ? state.open[0] : null
  }
}
