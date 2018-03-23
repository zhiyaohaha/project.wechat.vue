import {
  postSendMsg,
  postOpenid,
  postPhone,
  getUserinfo,
  getListForApp,
  getDetailedFor,
  getListBanks,
  getListBankCard,
  getListBankCardDetail,
  postRecordForApp,
  getInviteUrl,
  getSelectDataSource,
  getNewsListFor,
  getDetailForApp
} from '../api'

let apiPrefix = 'http://211.94.137.70:8001/'
let apiWeChat = 'http://api2.cpf360.com/'
export default {
  //验证码
  async postSendMsg({commit}, {data,}) {
    // debugger
    let url = apiPrefix + 'api/SMS/SendVerifyCode'
    const result = await postSendMsg(url, data)
    if (result) {
      commit('POST_SENDMSG', {result})
    }
  },
  //验证用户石否注册
  async postOpenid({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + 'api/OfficialAccounts/ThridPlatFormLogin'
    const result = await postOpenid(url, data)
    if (result) {
      commit('GET_OPENID', {result})
      let flag = data.openId
      let whether = null
      result.success ? whether = 1 : whether = 0
      cb && cb(flag, whether)
    }
  },
  //手机登陆
  async postPhone({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + 'api/OfficialAccounts/LoginByVerifyCode'
    const result = await postPhone(url, data)
    let whether = null
    result.success ? whether = 1 : whether = 0
    cb && cb(whether)
    commit('POST_PHONE', {result})
  },
  //信用卡申请
  async postRecordForApp({commit}, data) {
    // debugger
    let url = apiPrefix + 'api/CreditCardOrder/RecordForApp'
    const result = await postRecordForApp(url, data)
    return result
  },
  //获取用户信息
  async getUserinfo({commit}, data) {
    let url = apiWeChat + 'api/OfficialAccounts/GetWeChatInfo'
    let obj = data.obj
    const result = await getUserinfo(url, {code: obj.code})
    if (result) {
      data.cb && data.cb(result, obj.id)
      commit('GET_USERINFO', {result})
    }
  },
  //产品列表
  async getListForApp({commit}, {data}) {
    let url = apiPrefix + 'api/LoanProduct/ListForOfficialAccounts'
    const result = await getListForApp(url, data)
    if (data.hot) {
      commit('GET_LISTFORAPP', {result})
    } else {
      commit('GET_LISTFORAPPLONG', {result})
    }
  },
  //产品详情
  async getDetailedFor({commit}, data) {
    let url = apiPrefix + 'api/LoanProduct/DetailedForApp'
    const result = await getDetailedFor(url, data)
    commit('GET_DETAILEDFOR', {result})
  },
  //银行列表
  async getListBanks({commit},) {
    let url = apiPrefix + "api/CreditCard/ListBanksForApp"
    let res = await getListBanks(url)
    const result = res.data.filter((item) => {
      return item.name === "交通银行" || item.name === "兴业银行" || item.name === "光大银行" || item.name === "浦发银行"
    })
    commit('GET_LISTBANKS', {result})
    return result
  },
  //信用卡列表
  async getListBankCard({commit}, {data, site}) {
    let url = apiPrefix + "api/CreditCard/ListForApp"
    const result = await getListBankCard(url, data)
    if (site === "home") {
      commit('GET_HOMELISTBANKCARD', {result})
    } else if (site === "credit") {
      commit('GET_CREDITLISTBANKCARD', {result})
    } else if (site === "newCredit") {
      return result.data
    } else if (site === "all") {
      commit('GET_ALLLISTBANKCARD', {result})
    }
  },
  //信用卡详情
  async getListBankCardDetail({commit}, {data}) {
    let url = apiPrefix + "api/CreditCard/GetDetailForApp"
    const result = await getListBankCardDetail(url, data)
    commit('GET_LISTBANKCARDDETAIL', {result})
  },
  //二维码
  async getInviteUrl({commit},) {
    let url = apiPrefix + "api/Loginer/GetInviteUrl"
    const result = await getInviteUrl(url)
    commit('GET_INVITEURL', {result})
  },
  //获取推广素材分类
  async getSelectDataSource({commit}, data) {
    let url = apiPrefix + "api/Values/GetSelectDataSource"
    const result = await getSelectDataSource(url, data)
    return result.data
  },
  //获取推广素材列表
  async getNewsListFor({commit}, data) {
    let url = apiPrefix + "api/News/ListForApp"
    const result = await getNewsListFor(url, data)
    if (data.id) {
      return result.data
    } else {
      if(data.type){
        commit('GET_NEWSLIST', {result})
      }else {
        commit('GET_NEWSLISTFOR', {result})
      }

    }
  },
  //获取文章详情
  async getDetailForApp({commit}, data) {
    let url = apiPrefix + "api/News/DetailForApp"
    const result = await getDetailForApp(url, data)
    commit('GET_DETAILFORAPP', {result})
  },
}

