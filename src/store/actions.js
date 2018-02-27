import {
  postSendMsg,
  getOpenid,
  postPhone,
  getUserinfo
} from '../api'

let apiPrefix = 'http://192.168.6.66:8001'
let apiWeChat = 'http://api2.cpf360.com'
export default {
  async postSendMsg ({commit}, {data,}) {
    // debugger
    let url = apiPrefix + '/api/SMS/SendVerifyCode'
    const result = await postSendMsg(url, data)
    if (result) {
      commit('POST_SENDMSG', {result})
    }
  },
  async getOpenid ({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + '/api/OfficialAccounts/ThridPlatFormLogin'
    const result = await getOpenid(url, data)
    if (result) {
      commit('GET_OPENID', {result})
      let flag = null
      result.success ? flag = 1 : flag = 0
      cb && cb(flag)
    }
  },
  async postPhone ({commit}, {data}) {
    // debugger
    let url = apiPrefix + '/api/OfficialAccounts/LoginByVerifyCode'
    const result = await postPhone(url, data)
    commit('POST_PHONE', {result})
  },
  async getUserinfo ({commit}, data) {
    let url = apiWeChat + '/api/OfficialAccounts/GetWeChatInfo'
    console.log(data)
    const result = await getUserinfo(url, data)
    if (result) {
      commit('GET_USERINFO', {result})
    }
  }
}

