import md5 from 'js-md5'
import Qs from 'qs'

/**
 * Created by Administrator on 2018/1/25.
 */
export var __boxheight = function (ele) {
  //函数：获取尺寸
  //获取浏览器窗口高度
  let winHeight = 0
  if (window.innerHeight){
    winHeight = window.innerHeight
  } else if ((document.body) && (document.body.clientHeight)){
    winHeight = document.body.clientHeight
  }
  /*//通过Document对body进行检测，获取浏览器可视化高度
  if (document.documentElement && document.documentElement.clientHeight)
    winHeight = document.documentElement.clientHeight*/
  //DIV高度为浏览器窗口高度
  if (ele) {
    ele.style.height = winHeight + 'px'
  }
}
//post请求鉴权
export var postAuth = function (param,a) {
  let _param = {}
  let str = param
  let timestamp = (new Date().getTime()).toString().substr(0, 10)
  _param.data = str
  _param.timestamp = timestamp
  _param.sign = md5(str + timestamp + '84qudMIhOkX5JMQXVd0f4jneqfP2Lp')
  _param.weChatUserIdHanLi=a
  return Qs.stringify(_param)
}

export var __GetRequest = function () {
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
// JUID
export var __newGuid = function (time){
  let guid = ""
  for (let i = 1; i <= 32; i++){
    let n = Math.floor(Math.random()*16.0).toString(16);
    guid += n;
    if((i==8)||(i==12)||(i==16)||(i==20))
      guid += "-"
  }
  return guid
}

//清空历史记录
export var pushHistory = function () {
  let url = "#";
  let state = {
    title: "title",
    url: "#"
  };
  window.history.pushState(state, "title", "#");
}
