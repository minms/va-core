export default {
  namespaced: true,
  state: {
    collapse: false,
    menus: []
  },
  mutations: {
    TOGGLE_SIDEBAR(state, status) {
      state.collapse = !state.collapse;
    },
    UPDATE_MENUS(state, menus) {
      state.menus = menus;
    }
  },
  actions: {
    toggleSideBar({commit}) {
      commit('TOGGLE_SIDEBAR');
    },
    updateMenus({commit}, payload) {
      commit('UPDATE_MENUS', payload);
    }
  }
}
