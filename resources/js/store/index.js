import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import authModule from './modules/auth/index'
import tweetsModule from './modules/tweets/index'
import miscModule from './modules/misc/index'
import modalsModule from './modules/modals/index'

const dataState = createPersistedState({
  key: 'vuex:persist',
  reducer: (state) => ({
    auth: state.auth
  })
})

const store = createStore({
  strict: true,
  plugins: [dataState],
  modules: {
    auth: authModule,
    tweets: tweetsModule,
    misc: miscModule,
    modals: modalsModule
  }
})

export default store
