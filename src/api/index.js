import ajax from  './ajax'
import wAjax from './wAjax'

export const postSendMsg = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postOpenid = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postPhone = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const getUserinfo = (apiWeChat, data) => ajax(apiWeChat, data)
export const getLoanAmount = (apiWeChat, data) => ajax(apiWeChat, data)
export const getListForApp = (apiWeChat, data) => ajax(apiWeChat, data)

