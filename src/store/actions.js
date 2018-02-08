import {
  postSendMsg,
  getOpenid,
  postPhone
} from '../api'
let apiPrefix = 'http://192.168.6.66:8001'
export default {
  async postSendMsg({commit}, {data}) {
    // debugger
    let url = apiPrefix + '/api/SMS/SendVerifyCode'
    const result = await postSendMsg(url, data)
    if(result) {
      commit('POST_SENDMSG', {result})
    }
  },
  async getOpenid({commit}, {data,cb}) {
    // debugger
    let url = apiPrefix + '/api/OfficialAccounts/ThridPlatFormLogin'
    const result = await getOpenid(url, data)
    commit('GET_OPENID', {result})
    cb && cb()
   },
  async postPhone({commit}, {data}) {
    // debugger
    let url = apiPrefix + '/api/OfficialAccounts/LoginByVerifyCode'
    const result = await postPhone(url, data)
    commit('POST_PHONE', {result})
  },
}

