import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getter'
Vue.use(Vuex)
const state={
  navName:'首页'
}
const store =new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: true
})
export default store