import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../pages/homePage/homePage.vue'
import myPage from '../pages/myPage/myPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/homePage"
    },
    {
      path: '/homePage',
      component: homePage
    },
    {
      path: '/myPage',
      component: myPage
    }
  ]
})
