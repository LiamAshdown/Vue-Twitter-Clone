import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const dataState = createPersistedState({
  key: 'vuex:persist'
})

const store = createStore({
  strict: true,
  plugins: [dataState]
})

export default store
