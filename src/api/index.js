import ajax from  './ajax'

export const postSendMsg = (apiPrefix, data, type) => ajax(apiPrefix, data, type)
export const getOpenid = (apiPrefix, data) => ajax(apiPrefix, data)

