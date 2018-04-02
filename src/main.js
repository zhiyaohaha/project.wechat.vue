// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Popup, Swipe, SwipeItem ,Loadmore,MessageBox,Toast} from 'mint-ui'
import store from './store'
import BScroll from 'better-scroll'
import headline from './components/headline/headline.vue'
import footline from './components/footline/footline.vue'
import pickerMod from './components/pickerMod/pickerMod.vue'
import scroll from './components/scroll/scroll.vue'

import {
  __boxheight,
  __GetRequest,
  __newGuid
} from '../static/js/viewportWidth.js'
import {
  getCookie,
  setCookie
} from './util/cookieUtil.js'
import storageUtil from './util/storageUtil.js'
import '../static/css/reset.styl'
import '../static/js/adaptive'
import 'mint-ui/lib/style.css'
// import 'vue-ydui/dist/ydui.base.css'
Vue.component(Loadmore.name, Loadmore);
Vue.component("scroll",scroll);
Vue.component('headline', headline)
Vue.component('pickerMod', pickerMod)
Vue.component('footline', footline)
Vue.component(Popup.name, Popup)
// Vue.component(DateTime.name, DateTime)
// Vue.component(Picker.name, Picker)
Vue.component(Swipe.name, Swipe)

Vue.component(SwipeItem.name, SwipeItem)
Vue.prototype.__boxheight = __boxheight
Vue.prototype.__GetRequest = __GetRequest
Vue.prototype.__newGuid = __newGuid
Vue.prototype.getCookie = getCookie
Vue.prototype.setCookie = setCookie
Vue.prototype.saveTodos = storageUtil.saveTodos
Vue.prototype.readTodos = storageUtil.readTodos
Vue.prototype.MessageBox = MessageBox
Vue.prototype.Toast = Toast
// Vue.prototype.apiPrefix = 'http://192.168.6.66:8001/'
Vue.prototype.apiPrefix = 'http://211.94.137.70:8001/'

Vue.prototype.BScroll = BScroll
/*let code = __GetRequest().code
console.log(code)
if (code === undefined) {
  window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3e7e9692d8fc4a4b&redirect_uri=http://wechat.cpf360.com/index.html?id=123&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
}*/
 // eslint-disable no-new

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})

