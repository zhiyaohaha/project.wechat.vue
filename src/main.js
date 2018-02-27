// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Popup, Picker } from 'mint-ui'
import store from './store'
import BScroll from 'better-scroll'
import split from './components/split/split.vue'
import {
  __boxheight,
  __GetRequest
} from '../static/js/viewportWidth.js'
import {
  getCookie,
  setCookie
} from './util/cookieUtil.js'
import '../static/css/reset.styl'
import '../static/js/adaptive'
import 'mint-ui/lib/style.css'

Vue.component('split', split)
Vue.component(Popup.name, Popup)
Vue.component(Picker.name, Picker)
Vue.prototype.__boxheight = __boxheight
Vue.prototype.__GetRequest = __GetRequest
Vue.prototype.getCookie = getCookie
Vue.prototype.setCookie = setCookie
Vue.prototype.BScroll = BScroll
let code = __GetRequest().code
if (code === undefined) {
  window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3e7e9692d8fc4a4b&redirect_uri=http://wechat.cpf360.com/index.html&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})

