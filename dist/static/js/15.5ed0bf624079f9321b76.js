webpackJsonp([15],{"+b4N":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),o=i.n(n),a=i("6RLW"),s=i("NYxO"),c={name:"authentication-page",data:function(){return{sendMsgText:"获取验证码",num:0,authCode:"",verificationShow:!1}},components:{verification:a.a},computed:o()({mobilePhone:function(){var t="";return"authenticationPage"===this.$route.name&&(t=this.$route.query.mobile,t=t.substr(0,3)+"******"+t.substr(9)),t}},Object(s.c)(["time"]),Object(s.b)(["key"])),watch:{},mounted:function(){window.history.pushState(null,"title","#/myPage"),window.history.pushState(null,"title","#/authenticationPage")},methods:{__countDown:function(){var t=this;this.num=60;var e=void 0;e=setInterval(function(){t.num--,0===t.num?(t.sendMsgText="重发验证码",t.num=0,clearInterval(e)):t.sendMsgText=t.num+"s后重发"},1e3)},__phoneNote:function(t){var e=this,i=this;this.$store.commit("AWAITTRUE"),this.$store.dispatch("postSendMsg",{code:"SMS_123669047",mobilePhone:i.$route.query.mobile,validateKey:i.key+i.time,validateCode:t,needvalidateCode:!0,smsSign:"掌金超"}).then(function(t){e.$store.commit("AWAITFALSE"),t.success?(e.MessageBox.alert("短信验证码已发送，5分钟内有效","提示"),e.__countDown()):e.MessageBox.alert(t.message,"提交失败")})},goodInput:function(t){t.length>4&&(this.authCode=t.substring(0,t.length-1))},submit:function(){var t=this,e=new RegExp(/[0-9]/);""!==this.authCode?e.test(this.authCode)?(this.$store.commit("AWAITTRUE"),this.$store.dispatch("getVerifyCode",{templateCode:"SMS_123669047",mobile:this.$route.query.mobile,code:this.authCode}).then(function(e){t.$store.commit("AWAITFALSE"),e.success?(t.setCookie("whether",3),t.$router.replace({name:"setPasswordPage"})):t.MessageBox.alert(e.message,"失败")})):this.MessageBox.alert("请正确输入验证码"):this.MessageBox.alert("请输入验证码")},sendMsg:function(){this.num>0?this.MessageBox.alert("60s后在重新获取验证码","提示"):this.verificationShow=!0},verificationCancel:function(t,e){this.verificationShow=!1,t&&this.__phoneNote(e),this.$store.dispatch("changeTime")},changeShow:function(){this.verificationShow=!1,this.$store.dispatch("changeTime")}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"authentication"},[i("header",{staticClass:"authenticationHeader"},[i("p",[t._v("本次操作需要短信确认，请输入")]),t._v(" "),i("p",[t._v(t._s(t.mobilePhone)+"收到的短信验证码")])]),t._v(" "),i("div",{staticClass:"authenticationContent"},[i("p",{staticClass:"import"},[i("span",[t._v("验证码:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.authCode,expression:"authCode"}],attrs:{name:"authCode",type:"number",placeholder:"请输入验证码"},domProps:{value:t.authCode},on:{input:[function(e){e.target.composing||(t.authCode=e.target.value)},function(e){t.goodInput(t.authCode)}]}}),t._v(" "),i("button",{staticClass:"sendMsg",class:{color:!t.num},on:{click:t.sendMsg}},[t._v("\n        "+t._s(t.sendMsgText)+"\n      ")])]),t._v(" "),i("button",{staticClass:"submit",on:{click:t.submit}},[t._v("下一步")])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("verification",{directives:[{name:"show",rawName:"v-show",value:t.verificationShow,expression:"verificationShow"}],attrs:{changeShow:t.changeShow,verificationCancel:t.verificationCancel}})],1)],1)},staticRenderFns:[]};var u=i("VU/8")(c,r,!1,function(t){i("4Y99")},null,null);e.default=u.exports},"4Y99":function(t,e){},"6RLW":function(t,e,i){"use strict";var n=i("Dd8w"),o=i.n(n),a=i("NYxO"),s={props:["changeShow","verificationCancel"],data:function(){return{validateCode:""}},components:{},watch:{__newGuid:function(t){}},computed:o()({},Object(a.c)(["time"]),{key:{get:function(){return this.$store.getters.key},set:function(){}},verification:function(){return this.apiPrefix+"api/OfficialAccounts/ValidateCode?key="+this.key+this.time}}),mounted:function(){},methods:{touchstartMap:function(){this.$store.dispatch("changeTime")}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"verification",on:{click:function(e){e.stopPropagation(),t.changeShow(e)}}},[i("div",{staticClass:"verificationContent",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"verificationTitle"},[t._v("\n      请填写图片验证码\n    ")]),t._v(" "),i("div",{staticClass:"verificationMessage"},[i("div",{staticClass:"verificationImg",on:{click:function(e){e.stopPropagation(),t.touchstartMap(e)}}},[i("img",{attrs:{src:t.verification}})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.validateCode,expression:"validateCode"}],attrs:{type:"text",placeholder:"输入验证码",name:"verification"},domProps:{value:t.validateCode},on:{input:function(e){e.target.composing||(t.validateCode=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"verificationFooter"},[i("div",{staticClass:"verificationFooterLeft",on:{click:function(e){if(e.stopPropagation(),e.target!==e.currentTarget)return null;t.verificationCancel(!1)}}},[t._v("取消")]),t._v(" "),i("div",{staticClass:"verificationFooterRight",on:{click:function(e){if(e.stopPropagation(),e.target!==e.currentTarget)return null;t.verificationCancel(!0,t.validateCode)}}},[t._v("确定")])])])])},staticRenderFns:[]};var r=i("VU/8")(s,c,!1,function(t){i("okMw")},null,null);e.a=r.exports},okMw:function(t,e){}});
//# sourceMappingURL=15.5ed0bf624079f9321b76.js.map