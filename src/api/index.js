import ajax from './ajax'
import wAjax from './wAjax'

export const postSendMsg = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postOpenid = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postPhone = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postSpeedOrder = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postSendVerifyCode = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postLoanDemand = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postRecordForApp = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const getUserinfo = (apiPrefix, data) => ajax(apiPrefix, data)
export const getLoanAmount = (apiPrefix, data) => ajax(apiPrefix, data)
export const getListForApp = (apiPrefix, data) => ajax(apiPrefix, data)
export const getDetailedFor = (apiPrefix, data) => ajax(apiPrefix, data)
export const getListBanks = (apiPrefix) => ajax(apiPrefix)
export const getListBankCard = (apiPrefix, data) => ajax(apiPrefix, data)
export const getListBankCardDetail = (apiPrefix, data) => ajax(apiPrefix, data)
export const getInviteUrl = (apiPrefix) => ajax(apiPrefix)
export const getSelectDataSource = (apiPrefix,data) => ajax(apiPrefix,data)
export const getNewsListFor = (apiPrefix,data) => ajax(apiPrefix,data)
export const getDetailForApp = (apiPrefix,data) => ajax(apiPrefix,data)


