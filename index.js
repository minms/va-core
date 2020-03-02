import Vue from 'vue'
import App from './App.vue'

import {store, router, http} from "./plugins";
Vue.prototype.productionTip = true;


export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export const VaStore = store
export const VaHttp = http