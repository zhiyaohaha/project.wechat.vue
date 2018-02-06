import Vue from 'vue'
import Router from 'vue-router'
const homePage = () => import('../pages/homePage/homePage.vue')
const phoneApprove = () => import('../pages/phoneApprove/phoneApprove.vue')
const loanPage = () => import('../pages/loanPage/loanPage.vue')
const productPage = () => import('../pages/productPage/productPage.vue')
const myPage = () => import('../pages/myPage/myPage.vue')
const generalizeYiPage = () => import('../pages/generalizeYiPage/generalizeYiPage.vue')
const generalizeErPage = () => import('../pages/generalizeErPage/generalizeErPage.vue')
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
const cardDetailsPage = () => import('../pages/cardDetailsPage/cardDetailsPage.vue')
const productDetailsPage = () => import('../pages/productDetailsPage/productDetailsPage.vue')
const cardApplyForPage = () => import('../pages/cardApplyForPage/cardApplyForPage.vue')
const tieOnCardPage = () => import('../pages/tieOnCardPage/tieOnCardPage.vue')
const verifyPage = () => import('../pages/verifyPage/verifyPage.vue')

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
          path: 'productPage',
          component: productPage,
          meta: {keepAlive: false, isTop: true, title: '贷款产品'},
          children:[
            {
              path: 'productDetailsPage',
              component: productDetailsPage,
              meta: {keepAlive: false, isTop: false, title: '产品详情'},
            }
          ]
        },
        {
          path: 'creditCardPage',
          component: creditCardPage,
          meta: {keepAlive: false, isTop: true, title: '信用卡'},
          children:[
            {
              path: 'zhongXinCardPage',
              component: zhongXinCardPage,
              meta: {keepAlive: false, isTop: false, title: '中信信用卡'},
            },
            {
              path: 'cardApplyForPage',
              component: cardApplyForPage,
              meta: {keepAlive: false, isTop: false, title: '信用卡详情'},
            },
            {
              path: 'cardDetailsPage',
              component: cardDetailsPage,
              meta: {keepAlive: false, isTop: false, title: '信用卡详情'},
            },
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
          path: 'generalizeYiPage',
          component: generalizeYiPage,
          meta: {keepAlive: false, isTop: true, title: '我的一级代理'},
          children:[
            {
              path: 'generalizeErPage',
              component: generalizeErPage,
              meta: {keepAlive: false, isTop: false, title: '我的二级代理'},
            }
          ]
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
        {
          path: 'tieOnCardPage',
          component: tieOnCardPage,
          meta: {keepAlive: false, isTop: true, title: '实名绑卡'},
        },
        {
          path: 'verifyPage',
          component: verifyPage,
          meta: {keepAlive: false, isTop: true, title: '实名认证'},
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

