import Vue from 'vue'
import Router from 'vue-router'
const homePage = () => import('../pages/homePage/homePage.vue')
const myPage = () => import('../pages/myPage/myPage.vue')
const loanPage = () => import('../pages/loanPage/loanPage.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/homePage",
    },
    {
      path: '/homePage',
      component: homePage,
      meta: {keepAlive: true, isTop: true}
    },
    {
      path: '/myPage',
      component: myPage,
      meta: {keepAlive: true, isTop: true}
    },
    {
      path: '/loanPage',
      component: loanPage,
      meta: {keepAlive: true, isTop: true}
    },
  ]
})
