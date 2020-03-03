export default {
  namespaced: true,
  state: {
    layout: true,
    loading: false,
  },
  mutations: {
    UPDATE_LAYOUT_STATUS(state, status) {
      state.layout = status;
    },
    UPDATE_LOADING(state, status) {
      state.loading = status;
    }
  },
  actions: {
    layout({commit}, payload) {
      commit('UPDATE_LAYOUT_STATUS', payload);
    },
    updateLoading({commit}, status) {
      commit('UPDATE_LOADING', status);
    }
  }
}
