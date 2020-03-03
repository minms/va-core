function getCollapseStatus() {
  return localStorage.getItem('vaLayout.collapse') || false;
}

function updateCollapseStatus(status) {
  localStorage.setItem('vaLayout.collapse', status)
}

export default {
  namespaced: true,
  state: {
    collapse: getCollapseStatus(),
    menus: [],
    topMenus: []
  },
  mutations: {
    TOGGLE_SIDEBAR(state, status = null) {
      if (status !== null) {
        state.collapse = status;
        updateCollapseStatus(status);
        return;
      }
      state.collapse = !state.collapse;
      updateCollapseStatus(state.collapse);
    },
    UPDATE_MENUS(state, menus) {
      state.menus = menus;
    },
    ADD_TOP_MENUS(state, menu) {
      state.topMenus.push(menu);
    }
  },
  actions: {
    toggleSideBar({commit}, status) {
      commit('TOGGLE_SIDEBAR', status);
    },
    updateMenus({commit}, payload) {
      commit('UPDATE_MENUS', payload);
    },
    addTopMenus({commit}, payload) {
      commit('ADD_TOP_MENUS', payload);
    }
  }
}
