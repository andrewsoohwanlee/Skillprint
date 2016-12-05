import * as types from './mutation-types'

export const updatePopupBlockId = ({ commit }, blockId) => {
  commit(
    types.UPDATE_POPUP_BLOCK_ID,
    { blockId }
  )
}

export const setPopupVisible = ({ commit }, bool) => {
  commit(
    types.SET_POPUP_VISIBLE,
    { bool }
  )
}

export const updatePopupPos = ({ commit }, pos) => {
  commit(
    types.UPDATE_POPUP_POS,
    { pos }
  )
}
