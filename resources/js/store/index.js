import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const dataState = createPersistedState({
  key: 'vuex:persist'
})

const store = new Vuex.Store({
  strict: true,
  plugins: [dataState]
})

export default store
