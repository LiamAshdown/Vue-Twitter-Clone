export default function ({ next, to, store }) {
  const isAuthenticated = store.getters.isAuthenticated
  if (!isAuthenticated) {
    next({ name: 'SignIn' })
    return
  }

  next()
}
