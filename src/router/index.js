import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../pages/homePage/homePage.vue'
import myPage from '../pages/myPage/myPage.vue'
import loanPage from '../pages/loanPage/loanPage.vue'

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
