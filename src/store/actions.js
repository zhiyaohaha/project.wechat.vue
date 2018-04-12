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
  getDetailForApp,
  getOrderListFor,
  postLoginout,
  getUserRelated,
  getRakeBackInfo,
  getSubordinateNum,
  getSubordinateUserList,
  postPeopleFiveReal,
  getBanks,
  getAdCodes,
  postFiveRealVerifyCode,
  getListScheduleForApp,
  getBinBankCard,
  getAccountInfo,
  getPosters,
  getLastOrderInfo
} from '../api'

let apiPrefix = 'http://211.94.137.70:8001/'
let apiWeChat = 'http://api2.cpf360.com/'
export default {
  //验证码
  async postSendMsg({commit}, data) {
    // debugger
    let url = apiPrefix + 'api/SMS/SendVerifyCode'
    const result = await postSendMsg(url, data)
    return result
  },
  //验证用户石否注册
  async postOpenid({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + 'api/OfficialAccounts/ThridPlatFormLogin'
    const result = await postOpenid(url, data)
    let flag
    let whether = null
    if (result.success) {
      // commit('GET_OPENID', {result})
      flag = result.data.id
      whether = 1
    } else {
      flag = ""
      whether = 0
    }
    cb && cb(flag, whether)
  },
  //手机登陆
  async postPhone({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + 'api/OfficialAccounts/LoginByVerifyCode'
    const result = await postPhone(url, data)
    let whether
    let flag
    if (result.success) {
      flag = result.data.id
      whether = 1
    } else {
      flag = ""
      whether = 0
    }
    cb && cb(flag, whether)
    return result
  },
  //信用卡申请
  async postRecordForApp({commit}, data) {
    // debugger
    let url = apiPrefix + 'api/CreditCardOrder/RecordForApp'
    const result = await postRecordForApp(url, data)
    return result
  },
  //退出
  async postLoginout({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + 'api/Auth/Loginout'
    cb && cb()
    const result = await postLoginout(url, data)
    return result
  },
  //绑卡
  async postPeopleFiveReal({commit}, data) {
    // debugger
    let url = apiPrefix + 'api/OfficialAccounts/PeopleFiveReal'
    const result = await postPeopleFiveReal(url, data)
    commit('GET_BINBANKCARD', {result})
    return result
  },
//绑卡验证码
  async postFiveRealVerifyCode({commit}, data) {
    // debugger
    let url = apiPrefix + 'api/OfficialAccounts/FiveRealVerifyCode'
    const result = await postFiveRealVerifyCode(url, data)
    if(result.success){
      commit('GET_BINBANKCARD', {result})
    }
    return result
  },
  //获取用户信息
  async getUserinfo({commit}, data) {
    let url = apiPrefix + 'api/OfficialAccounts/GetWeChatInfo'
    let obj = data.obj
    const result = await getUserinfo(url, {code: obj.code})
    if (result) {
      data.cb && data.cb(result.data, obj.id)
      commit('SUBSCRIBE', {result:result.data.subscribe})
    }
  },
  //产品列表
  async getListForApp({commit}, data) {
    let url = apiPrefix + 'api/LoanProduct/ListForOfficialAccounts'
    const result = await getListForApp(url, data)
    if (data.hot) {
      commit('GET_LISTFORAPP', {result})
    } else {
      if (data.id) {
        return result.data
      } else {
        commit('GET_LISTFORAPPLONG', {result})
      }
    }
  },
  //产品详情
  async getDetailedFor({commit}, data) {
    let url = apiPrefix + 'api/LoanProduct/DetailedForApp'
    const result = await getDetailedFor(url, data)
    commit('GET_DETAILEDFOR', {result})
    // alert(JSON.stringify(result))
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
  async getListBankCardDetail({commit}, data) {
    let url = apiPrefix + "api/CreditCard/GetDetailForApp"
    const result = await getListBankCardDetail(url, data)
    commit('GET_LISTBANKCARDDETAIL', {result})
  },

  async getInviteUrl({commit},) {
    let url = apiPrefix + "api/Loginer/GetInviteUrl"
    const result = await getInviteUrl(url)
    commit('GET_INVITEURL', {result})
  },
  //获取推广素材分类 攻略专区分类
  async getSelectDataSource({commit}, data) {
    let url = apiPrefix + "api/Values/GetSelectDataSource"
    const result = await getSelectDataSource(url, data)
    return result
  },
  //获取推广素材列表 攻略专区列表
  async getNewsListFor({commit}, data) {
    let url = apiPrefix + "api/News/ListForApp"
    const result = await getNewsListFor(url, data)
    if (data.id) {
      return result.data
    } else {
      // 推广素材列表
      if (data.type) {
        commit('GET_NEWSLIST', {result})
      } else {
        if (data.scene === "Scene.DJQCreditCardNews") {
          //攻略专区列表
          commit('CREDITCARDNEWS', {result})
        } else {
          commit('GET_NEWSLISTFOR', {result})
        }
      }
    }


  },
  //获取文章详情
  async getDetailForApp({commit}, data) {
    let url = apiPrefix + "api/News/DetailForApp"
    const result = await getDetailForApp(url, data)
    commit('GET_DETAILFORAPP', {result})
  },
  //获取信用卡订单列表
  async getOrderListFor({commit}, data) {
    let url = apiPrefix + "api/OfficialAccounts/SpeedOrderListForOfficial"
    const result = await getOrderListFor(url, data)
    if (data.id) {
      return result.data
    } else {
      commit('GET_ORDERLISTFOR1', {result})
    }
  },
  //信用卡赛选弹窗数据
  async getUserRelated({commit}, data) {
    let url = apiPrefix + "api/OfficialAccounts/GetUserRelatedProductForOfficial"
    const result = await getUserRelated(url, data)
    commit('GET_USERRELATED', {result})
  },
  //分佣列表
  async getRakeBackInfo({commit}, data) {
    let url = apiPrefix + "api/OfficialAccounts/GetRakeBackInfo"
    const result = await getRakeBackInfo(url, data)
    if (data.id) {
      return result.data.result
    } else {
      commit('GET_RAKEBACKINFO', {result})
    }
  },
  //推广列表头部
  async getSubordinateNum({commit}, data) {
    let url = apiPrefix + "api/OfficialAccounts/GetSubordinateNum"
    const result = await getSubordinateNum(url, data)
    if (data.userId) {
      commit('GET_ERSUBORDINATENUM', {result})
    } else {
      commit('GET_SUBORDINATENUM', {result})
    }
  },
  //推广列表
  async getSubordinateUserList({commit}, data) {
    let url = apiPrefix + "api/OfficialAccounts/GetSubordinateUserList"
    const result = await getSubordinateUserList(url, data)
    if (data.userId) {
      commit('GET_ERSUBORDINATEUSERLIST', {result})
    } else {
      commit('GET_SUBORDINATEUSERLIST', {result})
    }
  },
  //银行卡列表
  async getBanks() {
    let url = apiPrefix + "api/ThirdAPI/Fuiou/GetBanks"
    const result = await getBanks(url,)
    return result.data
  },
  //城市列表
  async getAdCodes() {
    let url = apiPrefix + "api/ThirdAPI/Fuiou/GetAdCodes"
    const result = await getAdCodes(url)
    return result.data
  },
  //办卡进度
  async getListScheduleForApp({commit}, data) {
    let url = apiPrefix + "api/CreditCardOrder/ListScheduleForApp"
    const result = await getListScheduleForApp(url, data)
    if (data.id) {
      return result.data
    } else {
      commit('GET_LISTSCHEDULEFORAPP', {result})
    }
  },
  //是否实名
  async getBinBankCard({commit},{cb}) {
    let url = apiPrefix + "api/OfficialAccounts/BinBankCard"
    const result = await getBinBankCard(url)
    if(result.success){
      cb&&cb(2)
    }
    commit('GET_BINBANKCARD', {result})
  },
  async getAccountInfo({commit}) {
    let url = apiPrefix + "api/OfficialAccounts/GetAccountInfo"
    const result = await getAccountInfo(url)
    return result
  },
  //推广海报图的地址
  async getPosters({commit}) {
    let url = apiPrefix + "api/OfficialAccounts/GetPosters"
    const result = await getPosters(url)
    return result
  },
  async getLastOrderInfo({commit}) {
    let url = apiPrefix + "api/OfficialAccounts/GetLastOrderInfo"
    const result = await getLastOrderInfo(url)
    if(result.success){
      commit("GET_LASTORDERINFO",{result})
    }

  },
  //改变时间
  changeTime({commit}) {
    commit("CHANGETIME")
  },
}

