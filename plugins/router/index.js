import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: []
})

export default router