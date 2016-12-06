import * as types from '../mutation-types'

const state = {
  pos: {
    x: 0,
    y: 0
  }
}

const mutations = {
  [types.UPDATE_SCROLL_POS] (state, { pos }) {
    state.pos = pos
  }
}

export default {
  state,
  mutations
}
