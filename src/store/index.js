import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import tabRouter from './module/tabRouter'
import saveInLocal from './plugin/saveInLocal'
import commodity from './module/commodity'

Vue.use(Vuex)
//状态管理文件
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    tabRouter,
    commodity
  },
  plugins: [
    // saveInLocal
  ]
})
