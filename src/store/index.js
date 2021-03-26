import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import user from './modules/user.js'
console.log(getters)
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user
  }
})
