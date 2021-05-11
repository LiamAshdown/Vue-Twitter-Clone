export default function ({ next, to, store }) {
  const isAuthenticated = store.getters.isAuthenticated
  if (!isAuthenticated) {
    next({ name: 'Splash' })
    return
  }

  next()
}
