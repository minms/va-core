export default {
  namespaced: true,
  state: {
    layout: true,
    menus: []
  },
  mutations: {
    UPDATE_LAYOUT_STATUS(state, status) {
      state.layout = status;
    },
    UPDATE_MENUS(state, menus) {
      state.menus = menus;
    }
  },
  actions: {
    layout({commit}, payload) {
      commit('UPDATE_LAYOUT_STATUS', payload);
    },
    updateMenus({commit}, payload) {
      commit('UPDATE_MENUS', payload);
    }
  }
}
