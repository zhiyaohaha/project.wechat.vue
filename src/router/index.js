import Vue from 'vue'
import Router from 'vue-router'
import myPage from '../pages/myPage/myPage.vue'
const homePage = () => import('../pages/homePage/homePage.vue')
const phoneApprove = () => import('../pages/phoneApprove/phoneApprove.vue')
const loanPage = () => import('../pages/loanPage/loanPage.vue')

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage',
    },
    {
      path: '/homePage',
      component: homePage,
      meta: {
        keepAlive: true,
        isTop: true,
        title: '首页'
      },
      children: [
        {
          path: 'loanPage',
          component: loanPage,
          meta: {keepAlive: false, isTop: true, title:"贷款产品"},
        },
      ]
    },
    {
      path: '/phoneApprove',
      component: phoneApprove,
      meta: {keepAlive: false, isTop: true, title:"手机认证"},
    },
    {
      path: '/myPage',
      component: myPage,
      meta: {keepAlive: true, isTop: true, title:"我的"},
      children: [
        {
          path: 'generalize',
          component: loanPage,
          meta: {keepAlive: false, isTop: true, title:"推广"},
        },
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

