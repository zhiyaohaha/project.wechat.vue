import {
  postSendMsg,
  postOpenid,
  postPhone,
  getUserinfo,
  getListForApp,
  getDetailedFor,
  getListBanks,
  getListBankCard
} from '../api'

let apiPrefix = 'http://192.168.6.66:8001/'
let apiWeChat = 'http://api2.cpf360.com/'
export default {
  async postSendMsg({commit}, {data,}) {
    // debugger
    let url = apiPrefix + 'api/SMS/SendVerifyCode'
    const result = await postSendMsg(url, data)
    if (result) {
      commit('POST_SENDMSG', {result})
    }
  },
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
  async postPhone({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + 'api/OfficialAccounts/LoginByVerifyCode'
    const result = await postPhone(url, data)
    let whether = null
    result.success ? whether = 1 : whether = 0
    cb && cb(whether)
    commit('POST_PHONE', {result})
  },
  async getUserinfo({commit}, data) {
    let url = apiWeChat + 'api/OfficialAccounts/GetWeChatInfo'
    let obj = data.obj
    const result = await getUserinfo(url, {code: obj.code})
    if (result) {
      data.cb && data.cb(result, obj.id)
      commit('GET_USERINFO', {result})
    }
  },
  async getListForApp({commit}, {data}) {
    let url = apiPrefix + 'api/LoanProduct/ListForOfficialAccounts'
    const result = await getListForApp(url, data)
    if (data.hot) {
      commit('GET_LISTFORAPP', {result})
    } else {
      commit('GET_LISTFORAPPLONG', {result})
    }
  },
  async getDetailedFor({commit}, data) {
    let url = apiPrefix + 'api/LoanProduct/DetailedForApp'
    const result = await getDetailedFor(url, data)
    commit('GET_DETAILEDFOR', {result})
  },
  async getListBanks({commit},) {
    let url = apiPrefix + "api/CreditCard/ListBanksForApp"
    let res = await getListBanks(url)
    const result = res.data.filter((item)=>{
      return item.name === "交通银行"||item.name === "兴业银行"||item.name === "光大银行"||item.name === "浦发银行"
    })
    commit('GET_LISTBANKS', {result})
    return result
  },
  async getListBankCard({commit},{data,site}) {
    let url = apiPrefix + "api/CreditCard/ListForApp"
    const result = await getListBankCard(url,data)
    if(site === "home"){
      commit('GET_HOMELISTBANKCARD', {result})
    }else if(site === "credit"){
      commit('GET_CREDITLISTBANKCARD', {result})
    }else {
      commit('GET_LISTBANKCARD', {result})
    }

  },
}

