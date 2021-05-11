import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import authModule from './modules/auth/index'
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
    misc: miscModule,
    modals: modalsModule
  }
})

export default store
