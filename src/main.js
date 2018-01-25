// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import split from './components/split/split.vue'
import { Popup, Picker} from 'mint-ui';
import '../static/css/reset.styl'
import '../static/js/adaptive'
import 'mint-ui/lib/style.css'

Vue.component('split', split)
Vue.component(Popup.name, Popup)
Vue.component(Picker.name, Picker);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
