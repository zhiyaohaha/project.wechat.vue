import Vue from 'vue'
import Router from 'vue-router'
const homePage = () => import('../pages/homePage/homePage.vue')
const phoneApprove = () => import('../pages/phoneApprove/phoneApprove.vue')
const loanPage = () => import('../pages/loanPage/loanPage.vue')
const myPage = () => import('../pages/myPage/myPage.vue')
const generalizePage = () => import('../pages/generalizePage/generalizePage.vue')
const orderFormPage = () => import('../pages/orderFormPage/orderFormPage.vue')
const orderFormMyPage = () => import('../pages/orderFormMyPage/orderFormMyPage.vue')
const orderFormStairPage = () => import('../pages/orderFormStairPage/orderFormStairPage.vue')
const orderFormTwoPage = () => import('../pages/orderFormTwoPage/orderFormTwoPage.vue')
const rebatePage = () => import('../pages/rebatePage/rebatePage.vue')
const rebatePageMyPage = () => import('../pages/rebatePageMyPage/rebatePageMyPage.vue')
const rebatePageStairPage = () => import('../pages/rebatePageStairPage/rebatePageStairPage.vue')
const rebatePageTwoPage = () => import('../pages/rebatePageTwoPage/rebatePageTwoPage.vue')
const depositPage = () => import('../pages/depositPage/depositPage.vue')
const creditCardPage = () => import('../pages/creditCardPage/creditCardPage.vue')
const zhongXinCardPage = () => import('../pages/zhongXinCardPage/zhongXinCardPage.vue')

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
          meta: {keepAlive: false, isTop: true, title: '贷款产品'},
        },
        {
          path: 'creditCardPage',
          component: creditCardPage,
          meta: {keepAlive: false, isTop: true, title: '信用卡'},
          children:[
            {
              path: 'zhongXinCard',
              component: zhongXinCard,
              meta: {keepAlive: false, isTop: false, title: '中信信用卡'},
            }
          ]
        },
      ]
    },
    {
      path: '/phoneApprove',
      component: phoneApprove,
      meta: {keepAlive: false, isTop: true, title: '手机认证'},
    },
    {
      path: '/myPage',
      component: myPage,
      meta: {keepAlive: true, isTop: true, title: '我的'},
      children: [
        {
          path: 'generalizePage',
          component: generalizePage,
          meta: {keepAlive: false, isTop: true, title: '我的二级代理'},
        },
        {
          path: 'orderFormPage',
          component: orderFormPage,
          meta: {keepAlive: false, isTop: true, title: '订单明细'},
          children: [
            {
              path: '/',
              redirect: "orderFormMyPage",
            },
            {
              path: 'orderFormMyPage',
              component: orderFormMyPage,
              meta: {keepAlive: false, isTop: true, title: '订单明细'}
            },
            {
              path: 'orderFormStairPage',
              component: orderFormStairPage,
              meta: {keepAlive: false, isTop: true, title: '订单明细'}
            },
            {
              path: 'orderFormTwoPage',
              component: orderFormTwoPage,
              meta: {keepAlive: false, isTop: true, title: '订单明细'}
            },
          ]
        },
        {
          path: 'rebatePage',
          component: rebatePage,
          meta: {keepAlive: false, isTop: true, title: '返佣明细'},
          children: [
            {
              path: '/',
              redirect: "rebatePageMyPage",
            },
            {
              path: 'rebatePageMyPage',
              component: rebatePageMyPage,
              meta: {keepAlive: false, isTop: true, title: '返佣明细'}
            },
            {
              path: 'rebatePageStairPage',
              component: rebatePageStairPage,
              meta: {keepAlive: false, isTop: true, title: '返佣明细'}
            },
            {
              path: 'rebatePageTwoPage',
              component: rebatePageTwoPage,
              meta: {keepAlive: false, isTop: true, title: '返佣明细'}
            },
          ]
        },
        {
          path: 'depositPage',
          component: depositPage,
          meta: {keepAlive: false, isTop: true, title: '提现明细'},
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

