// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Popup, Picker, Swipe, SwipeItem  } from 'mint-ui'
// import { Popup } from 'vue-ydui/dist/lib.rem/popup'
// import {DateTime} from 'vue-ydui/dist/lib.rem/datetime'
import store from './store'
import BScroll from 'better-scroll'
import split from './components/split/split.vue'
import headline from './components/headline/headline.vue'
import pickerMod from './components/pickerMod/pickerMod.vue'

import {
  __boxheight,
  __GetRequest
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

Vue.component('split', split)
Vue.component('headline', headline)
Vue.component('pickerMod', pickerMod)
Vue.component(Popup.name, Popup)
// Vue.component(DateTime.name, DateTime)
// Vue.component(Picker.name, Picker)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.prototype.__boxheight = __boxheight
Vue.prototype.__GetRequest = __GetRequest
Vue.prototype.getCookie = getCookie
Vue.prototype.setCookie = setCookie
Vue.prototype.saveTodos = storageUtil.saveTodos
Vue.prototype.readTodos = storageUtil.readTodos

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

