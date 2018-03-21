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
const rebatePage = () => import('../pages/rebatePage/rebatePage.vue')
const depositPage = () => import('../pages/depositPage/depositPage.vue')
const creditCardPage = () => import('../pages/creditCardPage/creditCardPage.vue')
const zhongXinCardPage = () => import('../pages/zhongXinCardPage/zhongXinCardPage.vue')
const cardDetailsPage = () => import('../pages/cardDetailsPage/cardDetailsPage.vue')
const productDetailsPage = () => import('../pages/productDetailsPage/productDetailsPage.vue')
const cardApplyForPage = () => import('../pages/cardApplyForPage/cardApplyForPage.vue')
const tieOnCardPage = () => import('../pages/tieOnCardPage/tieOnCardPage.vue')
const verifyPage = () => import('../pages/verifyPage/verifyPage.vue')
const strategyPage = () => import('../pages/strategyPage/strategyPage.vue')
const strategyListPage = () => import('../pages/strategyListPage/strategyListPage.vue')
const schedulePage = () => import('../pages/schedulePage/schedulePage.vue')
const posterPage = () => import('../pages/posterPage/posterPage.vue')
const generalizePage = () => import('../pages/generalizePage/generalizePage.vue')
const WithdrawalPage = () => import('../pages/WithdrawalPage/WithdrawalPage.vue')
const authenticationPage = () => import('../pages/authenticationPage/authenticationPage.vue')
const materialPage = () => import('../pages/materialPage/materialPage.vue')

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
        footerShow: true,
        homeShow: true,
        title: '首页'
      },
      children: [
        {
          path: 'loanPage',
          component: loanPage,
          meta: {keepAlive: false, isTop: true, title: '快速贷款'},
        },
        {
          path: 'productPage',
          component: productPage,
          meta: {keepAlive: false, isTop: true, title: '贷款产品'},
          children: [
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
          meta: {keepAlive: false, isTop: true, title: '办信用卡'},
          children: [
            {
              path: 'zhongXinCardPage',
              component: zhongXinCardPage,
              name: "银行卡详情",
              meta: {keepAlive: false, isTop: false, title: ''},
            },
            {
              path: 'cardApplyForPage',
              component: cardApplyForPage,
              meta: {keepAlive: false, isTop: false, title: '信用卡申请'},
            },
            {
              path: 'cardDetailsPage',
              component: cardDetailsPage,
              meta: {keepAlive: false, isTop: false, title: '信用卡详情'},
            },

          ]
        },
        {
          path: 'strategyPage',
          component: strategyPage,
          meta: {keepAlive: false, isTop: false, title: '用卡攻略'},
        },
        {
          path: 'strategyListPage',
          component: strategyListPage,
          meta: {keepAlive: false, isTop: false, title: '攻略列表'},
        },
        {
          path: 'schedulePage',
          component: schedulePage,
          meta: {keepAlive: false, isTop: false, title: '办卡进度'},
        },
        {
          path: 'posterPage',
          component: posterPage,
          meta: {keepAlive: false, isTop: false, title: '推广海报'},
        },
        {
          path: 'materialPage',
          component: materialPage,
          meta: {keepAlive: false, isTop: false, title: '推广素材'},
        },
        {
          path: 'generalizePage',
          component: generalizePage,
          meta: {keepAlive: false, cache:true ,isTop: true, title: '赚佣金'},
        },

      ]
    },
    {
      path: '/phoneApprove',
      component: phoneApprove,
      meta: {keepAlive: false, isTop: true, title: '手机号认证'},
    },
    {
      path: '/authenticationPage',
      component: authenticationPage,
      meta: {keepAlive: false, isTop: true, title: '认证选择'},
    },
    {
      path: '/myPage',
      component: myPage,
      meta: {keepAlive: true, isTop: true, footerShow: false, homeShow: false, title: '我的'},
      children: [
        {
          path: 'generalizeYiPage',
          component: generalizeYiPage,
          meta: {keepAlive: false, isTop: true, title: '我的一级代理'},
          children: [
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
        },
        {
          path: 'rebatePage',
          component: rebatePage,
          meta: {keepAlive: false, isTop: true, title: '返佣明细'},
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
        {
          path: 'WithdrawalPage',
          component: WithdrawalPage,
          meta: {keepAlive: false, isTop: true, title: '提现'},
        },
      ]
    },

  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.name == "银行卡详情") {
    to.meta.title = to.query.name
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

