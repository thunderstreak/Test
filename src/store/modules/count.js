import { SET, GET, MUTATIONS } from '../types'

const state = {
  tabNarActive: 0
}

const mutations = {
  [MUTATIONS.MUTATIONS_TAB_BAR_ACTIVE] (state, payload) {
    state.tabNarActive = payload
  }
}

const actions = {
  [SET.SET_TAB_BAR_ACTIVE] ({ commit }, payload) {
    commit(MUTATIONS.MUTATIONS_TAB_BAR_ACTIVE, payload)
  }
}

const getters = {
  [GET.GET_TAB_BAR_ACTIVE]: state => state.tabNarActive
}

export default {
  state,
  mutations,
  actions,
  getters
}
