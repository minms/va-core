import Vue from 'vue'
import Vuex from 'vuex'
import ModuleApp from "./modules/app"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: ModuleApp
  }
})

export default store

