import ajax from  './ajax'

export const postSendMsg = (apiPrefix, data) => ajax(apiPrefix, data, "post")
export const getOpenid = (apiPrefix, data) => ajax(apiPrefix, data)
export const postPhone = (apiPrefix, data) => ajax(apiPrefix, data, "post")

