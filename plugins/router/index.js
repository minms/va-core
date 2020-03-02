import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: []
})

router.afterEach((to, from) => {
  if (to.meta && to.meta.title) document.title = to.meta.title
})

export default router