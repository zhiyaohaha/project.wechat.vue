import ajax from './ajax'
import wAjax from './wAjax'

export const postSendMsg = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postOpenid = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postPhone = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postSpeedOrder = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postLoanDemand = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postRecordForApp = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const postLoginout = (apiPrefix,data) => ajax(apiPrefix, data, "post")
export const postPeopleFiveReal = (apiPrefix,data) => ajax(apiPrefix, data, "post")
export const postFiveRealVerifyCode = (apiPrefix,data) => ajax(apiPrefix, data, "post")
export const postFillUserInfo = (apiPrefix,data) => ajax(apiPrefix, data, "post")
export const postIdentify4Auth = (apiPrefix,data) => ajax(apiPrefix, data, "post")
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
export const getOrderListFor = (apiPrefix,data) => ajax(apiPrefix,data)
export const getUserRelated = (apiPrefix,data) => ajax(apiPrefix,data)
export const getRakeBackInfo = (apiPrefix,data) => ajax(apiPrefix,data)
export const getSubordinateNum = (apiPrefix,data) => ajax(apiPrefix,data)
export const getSubordinateUserList = (apiPrefix,data) => ajax(apiPrefix,data)
// export const getBanks = (apiPrefix) => ajax(apiPrefix) //富友开户行
// export const getAdCodes = (apiPrefix) => ajax(apiPrefix)  // 富友城市
export const getListScheduleForApp = (apiPrefix,data) => ajax(apiPrefix,data)
// export const getBinBankCard = (apiPrefix) => ajax(apiPrefix)
export const getAccountInfo = (apiPrefix) => ajax(apiPrefix)
export const getPosters = (apiPrefix) => ajax(apiPrefix)
export const getLastOrderInfo = (apiPrefix) => ajax(apiPrefix)
export const getOrderCount = (apiPrefix) => ajax(apiPrefix)
export const getIdentify2Auth = (apiPrefix,data) => ajax(apiPrefix,data)
export const getAllArea = (apiPrefix) => ajax(apiPrefix)
export const getDemandList = (apiPrefix,data) => ajax(apiPrefix,data)
export const getDemandDetail = (apiPrefix,data) => ajax(apiPrefix,data)
export const getClickRecord = (apiPrefix,data) => ajax(apiPrefix,data)
export const getWithDraw = (apiPrefix,data) => ajax(apiPrefix,data)
export const getWithDrawRecord = (apiPrefix,data) => ajax(apiPrefix,data)
export const getVerifyCode = (apiPrefix,data) => ajax(apiPrefix,data) //短信验证码
export const getSetPayPassword = (apiPrefix,data) => ajax(apiPrefix,data) //短信验证码


