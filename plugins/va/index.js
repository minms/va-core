import Vue from 'vue'

import {getModules} from "./modules/loadModules";
import {getRoutes} from "./modules/loadRoutes";
import {getStores} from "./modules/loadStores";

import router from "../router";
import store from "../store";

const va = new Vue({
  data() {
    return {
      modules: getModules()
    }
  },
  methods: {
    init() {
      if (process.env.NODE_ENV === 'development') {
        console.log('%c Register Modules', 'color: green;')
      }
      this.modules.map((module) => {
        module['register'] && this.registerModule(module);
      });

      this._registerModulesStore();
      this._registerModulesRouter();
    },
    /**
     * 注册模块
     * @param module
     */
    registerModule(module) {
      if (process.env.NODE_ENV === 'development') {
        console.log('%c Register Module: %s', 'color: gray;', module.name)
      }
      module['register'](Vue, router, store, module.name)
    },
    /**
     * 注册模块状态管理
     * @private
     */
    _registerModulesStore() {
      if (process.env.NODE_ENV === 'development') {
        console.log('%c Register Modules Store', 'color: green;')
      }
      let stores = getStores();
      Object.keys(stores).map((moduleName) => {
        store.registerModule([moduleName], stores[moduleName]);
      });
    },
    /**
     * 注册模块路由
     * @private
     */
    _registerModulesRouter() {
      if (process.env.NODE_ENV === 'development') {
        console.log('%c Register Modules Router', 'color: green;')
      }
      router.addRoutes(getRoutes());
    },
    start() {
      this.init();
    }
  }
});
Vue.prototype.$va = va;

export default va