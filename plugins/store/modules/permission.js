export default {
  namespaced: true,
  state: {
    roles: [],
    rules: [],
  },
  mutations: {
    UPDATE_ROLES(state, roles) {
      state.roles = roles;
    },
    UPDATE_RULES(state, rules) {
      state.rules = rules;
    }
  },
  actions: {
    updateRoles({commit}, roles) {
      commit('UPDATE_ROLES', roles);
    },
    updateRules({commit}, rules) {
      commit('UPDATE_RULES', rules);
    }
  }
}
