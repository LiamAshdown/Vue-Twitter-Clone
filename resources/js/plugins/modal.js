export default {
  install: (app, options) => {
    console.log(app.config)
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
