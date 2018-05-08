import Vue from 'vue'
import Router from 'vue-router'
import {
  getCookie,
} from '../util/cookieUtil.js'
import {
  pushHistory,
  __GetRequest
} from "../util/viewportWidth.js"
import store from '../store'
import {MessageBox} from "mint-ui"

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
const strategyPage = () => import('../pages/strategyPage/strategyPage.vue')
const strategyListPage = () => import('../pages/strategyListPage/strategyListPage.vue')
const schedulePage = () => import('../pages/schedulePage/schedulePage.vue')
const posterPage = () => import('../pages/posterPage/posterPage.vue')
const generalizePage = () => import('../pages/generalizePage/generalizePage.vue')
const WithdrawalPage = () => import('../pages/WithdrawalPage/WithdrawalPage.vue')
const materialPage = () => import('../pages/materialPage/materialPage.vue')
const articlePage = () => import('../pages/articlePage/articlePage.vue')
const quickenLoansHistoryPage = () => import('../pages/quickenLoansHistoryPage/quickenLoansHistoryPage.vue')
const personalDataPage = () => import('../pages/personalDataPage/personalDataPage.vue')
const quickenLoansDetailPage = () => import('../pages/quickenLoansDetailPage/quickenLoansDetailPage.vue')
const creditInvestigationPage = () => import('../pages/creditInvestigationPage/creditInvestigationPage.vue')
const customerServicePage = () => import('../pages/customerServicePage/customerServicePage.vue')


// keepAlive判断一级路由是否应该存在
// isTop判断二级路由是否应该存在
// cache判断是否需要缓存，不变的应应用缓存 true 不缓存 false 缓存
//register判断需要验证用户登录的页面
let obj = __GetRequest()
if (!obj.state) {
  obj.state = "homePage"
}
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: {name: obj.state}
    },
    {
      path: '/homePage',
      component: homePage,
      name: "homePage",
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
          name: "loanPage",
          meta: {keepAlive: false, cache: true, register: true, isTop: true, title: '快速贷款'},
        },
        {
          path: 'productPage',
          component: productPage,
          name: "productPage",
          meta: {keepAlive: false, isTop: true, title: '贷款产品'},
        },
        {
          path: 'productDetailsPage',
          component: productDetailsPage,
          name: "productDetailsPage",
          meta: {keepAlive: false, cache: true, register: true, isTop: false, title: '产品详情'},
        },
        {
          path: 'creditCardPage',
          component: creditCardPage,
          name: "creditCardPage",
          meta: {keepAlive: false, isTop: true, title: '办信用卡'},
          children: [
            {
              path: 'zhongXinCardPage',
              component: zhongXinCardPage,
              name: "zhongXinCardPage",
              meta: {keepAlive: false, isTop: false, title: ''},
            },
          ]
        },
        {
          path: 'cardApplyForPage',
          component: cardApplyForPage,
          name: "cardApplyForPage",
          meta: {keepAlive: false, cache: true, register: true, isTop: false, title: '信用卡申请'},
        },
        {
          path: 'cardDetailsPage',
          component: cardDetailsPage,
          meta: {keepAlive: false, cache: true, isTop: false, title: '信用卡详情'},
        },
        {
          path: 'strategyPage',
          component: strategyPage,
          name: "strategyPage",
          meta: {keepAlive: false, isTop: false, title: '用卡攻略'},
        },
        {
          path: 'strategyListPage',
          component: strategyListPage,
          name: "strategyListPage",
          meta: {keepAlive: false, cache: true, isTop: false, title: ''},
        },
        {
          path: 'articlePage',
          component: articlePage,
          meta: {keepAlive: false, cache: true, isTop: false, title: '文章详情'},
        },
        {
          path: 'schedulePage',
          component: schedulePage,
          name: 'schedulePage',
          meta: {keepAlive: false, register: true, cache: true, isTop: false, title: '办卡进度'},
        },
        {
          path: 'posterPage',
          component: posterPage,
          name: "posterPage",
          meta: {keepAlive: false, register: true, isTop: false, title: '推广海报'},
        },
        {
          path: 'materialPage',
          component: materialPage,
          meta: {keepAlive: false, isTop: false, title: '推广素材'},
        },

        {
          path: 'generalizePage',
          component: generalizePage,
          name: "generalizePage",
          meta: {keepAlive: false, cache: true, isTop: true, title: '赚佣金'},
        },
      ]
    },
    {
      path: '/creditInvestigationPage',
      component: creditInvestigationPage,
      name: "creditInvestigationPage",
      meta: {keepAlive: false, isTop: true, register: true, title: '个人征信查询'},
    },
    {
      path: '/phoneApprove',
      component: phoneApprove,
      name: "phoneApprove",
      meta: {keepAlive: false, isTop: true, title: '手机号认证'},
    },
    {
      path: '/personalDataPage',
      component: personalDataPage,
      name: "personalDataPage",
      meta: {keepAlive: false, isTop: true, cache: true, title: '个人信息'},
    },
    /*{
      path: '/authenticationPage',
      component: authenticationPage,
      meta: {keepAlive: false, isTop: true, title: '认证选择'},
    },*/
    {
      path: '/myPage',
      component: myPage,
      name: "myPage",
      meta: {keepAlive: true, isTop: true, cache: true, register: true, title: '我的'},
      children: [
        {
          path: 'generalizeYiPage',
          component: generalizeYiPage,
          name: "generalizeYiPage",
          meta: {keepAlive: false, register: true, isTop: true, title: '我的一级代理'},
          children: [
            {
              path: 'generalizeErPage',
              name: 'generalizeErPage',
              component: generalizeErPage,
              meta: {keepAlive: false, isTop: false, title: '我的二级代理'},
            }
          ]
        },
        {
          path: 'orderFormPage',
          component: orderFormPage,
          meta: {keepAlive: false, cache: true, register: true, isTop: true, title: '订单明细'},
        },

        {
          path: 'quickenLoansHistoryPage',
          name: 'quickenLoansHistoryPage',
          component: quickenLoansHistoryPage,
          meta: {keepAlive: false, isTop: true, register: true, title: '贷款历史'},
          children: [
            {
              path: 'quickenLoansDetailPage',
              name: 'quickenLoansDetailPage',
              component: quickenLoansDetailPage,
              meta: {keepAlive: false, isTop: false, cache: true, register: true, title: '快速贷款信息'},
            },
          ],
        },
        {
          path: 'rebatePage',
          name: 'rebatePage',
          component: rebatePage,
          meta: {keepAlive: false, cache: true, register: true, isTop: true, title: '返佣明细'},
        },
        {
          path: 'customerServicePage',
          name: 'customerServicePage',
          component: customerServicePage,
          meta: {keepAlive: false, register: true, isTop: true, title: '客服'},
        },
        {
          path: 'depositPage',
          component: depositPage,
          name: "depositPage",
          meta: {keepAlive: false, cache: true, register: true, isTop: true, title: '提现明细'},
        },
        {
          path: 'WithdrawalPage',
          component: WithdrawalPage,
          name: "WithdrawalPage",
          meta: {keepAlive: false, cache: true, register: true, isTop: true, title: '提现'},
        },
      ]
    },
    {
      path: '/tieOnCardPage',
      component: tieOnCardPage,
      name: "tieOnCardPage",
      meta: {keepAlive: false, isTop: true, title: '实名绑卡'},
    },

  ]
})
let goBack = function (e) {
  let ua = navigator.userAgent.toLowerCase()
  if (ua) {
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      WeixinJSBridge.call('closeWindow') //微信
    } else if (ua.indexOf("alipay") != -1) {
      AlipayJSBridge.call('closeWebview') //支付宝
    } else if (ua.indexOf("baidu") != -1) {
      BLightApp.closeWindow() //百度
    } else {
      window.close() //普通浏览器
    }
  }
}

router.beforeResolve((to, from, next) => {
  if ((to.name === "loanPage" || to.name === "creditInvestigationPage") && getCookie('whether') * 1 === 1) {
    MessageBox.confirm('请确认个人信息后继续办理业务', "提示").then(() => {
      next({name: "personalDataPage", params: {name: "loanPage"}})
    }).catch(() => {
      next(false)
    })
    return
  }
  if (to.name === "depositPage" || to.name === "WithdrawalPage") {
    store.commit("QRCODEISSHOW", true)
    return
  }
  if(to.name === "phoneApprove"){
    if(getCookie('whether') * 1 > 0){
      next({name: "homePage"})
    }
  }
  next()
})
router.beforeEach((to, from, next) => {
  store.commit("AWAITFALSE")
  MessageBox.close(false)
  //首页退出浏览器
  if (to.name === "homePage" || to.name === obj.state || to.params.name1 === obj.state) {
    pushHistory()
    window.addEventListener("popstate", goBack, false)
  } else {
    window.removeEventListener("popstate", goBack, false)
  }
  //判断用户是否注册
  if (to.meta.register && (getCookie('whether') * 1 < 1)) {
    next({name: "phoneApprove", params: {name1: to.name, name2: ""}, query: {id: to.query.id}})
  }
  /* 路由发生变化修改页面title */
  if (to.name == "zhongXinCardPage" || to.name == "strategyListPage") {
    to.meta.title = to.query.name
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

