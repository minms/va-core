import Vue from 'vue'
import Vuex from 'vuex'
import ModuleApp from "./modules/app"
import ModuleLayout from "./modules/layout"
import ModulePermission from "./modules/permission"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    vaApp: ModuleApp,
    vaLayout: ModuleLayout,
    vaAccess: ModulePermission,
  }
});

export default store

