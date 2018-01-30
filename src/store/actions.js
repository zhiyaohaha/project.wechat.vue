import {
  postSendMsg,
  getOpenid
} from '../api'
export default {
  postSendMsg({commit}, {data}) {
    // debugger
    let apiPrefix = 'http://192.168.6.66:8001/api/SMS/SendVerifyCode'
    const result = postSendMsg(apiPrefix, data, "post")
    commit('POST_SENDMSG', {result})
  },
  getOpenid({commit}, {data}) {
    // debugger
    let apiPrefix = 'http://192.168.6.66:8001/api/OfficialAccounts/ThridPlatFormLogin'
    const result = getOpenid(apiPrefix, data)
    commit('GET_OPENID', {result})
  },
}

