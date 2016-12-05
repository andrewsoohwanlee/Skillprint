import * as types from '../mutation-types'

const state = {
  popup: {
    blockId: 'undefined',
    visible: false,
    pos: {
      x: 0,
      y: 0
    }
  }
}

const mutations = {
  [types.UPDATE_POPUP_BLOCK_ID] (state, { blockId }) {
    state.popup.blockId = blockId
  },

  [types.SET_POPUP_VISIBLE] (state, { bool }) {
    state.popup.visible = bool
  },

  [types.UPDATE_POPUP_POS] (state, { pos }) {
    state.popup.pos = { x: pos.x, y: pos.y }
  }
//   [types.SET_BLOCK_ID] (state, { id }) {
//     state.blockId = id
//   },

//   [types.UPDATE_POPUP] (state, { popupData }) {
//     state.blockId = popupData.blockId
//     state.name = popupData.name
//     state.description = popupData.description
//     state.blocks = popupData.blocks
//   },

//   [types.SET_POPUP_VISIBLE] (state, { visible }) {
//     state.visible = visible
//   },

//   [types.UPDATE_POPUP_POSITION] (state, { position }) {
//     state.popupPos = position
//   }
}

export default {
  state,
  mutations
}
