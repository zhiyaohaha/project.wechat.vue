import md5 from 'js-md5'
import Qs from 'qs'

/**
 * Created by Administrator on 2018/1/25.
 */
export const __boxheight = function (ele) { //函数：获取尺寸
                                            //获取浏览器窗口高度
  let winHeight = 0
  if (window.innerHeight)
    winHeight = window.innerHeight
  else if ((document.body) && (document.body.clientHeight))
    winHeight = document.body.clientHeight
  //通过Document对body进行检测，获取浏览器可视化高度
  if (document.documentElement && document.documentElement.clientHeight)
    winHeight = document.documentElement.clientHeight
  //DIV高度为浏览器窗口高度
  if (ele) {
    ele.style.height = winHeight + 'px'
  }
}
export const postAuth = function (param) {
  let _param = {}
  let str = param
  let timestamp = (new Date().getTime()).toString().substr(0, 10)
  _param.data = str
  _param.timestamp = timestamp
  _param.sign = md5(str + timestamp + '84qudMIhOkX5JMQXVd0f4jneqfP2Lp')
  return Qs.stringify(_param)
}
export const __GetRequest = function () {
  let url = location.search //获取url中"?"符后的字串
  let theRequest = {}
  if (url.indexOf('?') != -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}
