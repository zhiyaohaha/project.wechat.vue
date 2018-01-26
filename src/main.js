// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Popup, Picker} from 'mint-ui'
import split from './components/split/split.vue'
import __boxheight from '../static/js/viewportWidth.js'
import '../static/css/reset.styl'
import '../static/js/adaptive'
import 'mint-ui/lib/style.css'

Vue.component('split', split)
Vue.component(Popup.name, Popup)
Vue.component(Picker.name, Picker);
Vue.prototype.__boxheight = __boxheight
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
