export default {
  install: (app, options) => {
    app.config.globalProperties.$modal = {
      show: (id) => {
        app.config.globalProperties.$store.dispatch('modals/open', id)
      },
      close: (id) => {
        app.config.globalProperties.$store.dispatch('modals/close', id)
      }
    }
  }
}
