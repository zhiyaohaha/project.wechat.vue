import {
  postSendMsg,
  postOpenid,
  postPhone,
  getUserinfo,
  getLoanAmount
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
  async postOpenid ({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + '/api/OfficialAccounts/ThridPlatFormLogin'
    const result = await postOpenid(url, data)
    if (result) {
      commit('GET_OPENID', {result})
      let flag = data.openId
      let whether = null
      result.success ? whether = 1 : whether = 0
      cb && cb(flag, whether)
    }
  },
  async postPhone ({commit}, {data, cb}) {
    // debugger
    let url = apiPrefix + '/api/OfficialAccounts/LoginByVerifyCode'
    const result = await postPhone(url, data)
    let whether = null
    result.success ? whether = 1 : whether = 0
    cb && cb(whether)
    commit('POST_PHONE', {result})
  },
  async getUserinfo ({commit}, data) {
    let url = apiWeChat + '/api/OfficialAccounts/GetWeChatInfo'
    let obj = data.obj
    const result = await getUserinfo(url, {code:obj.code})
    if (result) {
      data.cb && data.cb(result,obj.id)
      commit('GET_USERINFO', {result})
    }
  },
}

