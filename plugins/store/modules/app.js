export default {
  namespaced: true,
  state: {
    layout: true
  },
  mutations: {
    UPDATE_LAYOUT_STATUS(state, status) {
      state.layout = status;
    }
  },
  actions: {
    layout({commit}, payload) {
      commit('UPDATE_LAYOUT_STATUS', payload);
    }
  }
}
