import Vue from 'vue'
import App from './App.vue'

import {store, router} from "./plugins";

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
