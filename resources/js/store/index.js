import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import miscModule from './modules/misc/index'
import modalsModule from './modules/modals/index'

const dataState = createPersistedState({
  key: 'vuex:persist',
  reducer: (state) => ({
  })
})

const store = createStore({
  strict: true,
  plugins: [dataState],
  modules: {
    misc: miscModule,
    modals: modalsModule
  }
})

export default store
