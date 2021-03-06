import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import skillprint from './modules/skillprint'
import scroll from './modules/scroll'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    skillprint,
    scroll
  }
})
