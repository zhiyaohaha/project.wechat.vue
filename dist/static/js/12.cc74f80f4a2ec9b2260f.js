webpackJsonp([12],{"2SDX":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Au9i"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("span",[t._v(t._s(t.title))])])},staticRenderFns:[]};var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"authenticationList"},t._l(t.authenticationListDatas,function(e,i){return a("li",{key:i},[a("a",{attrs:{href:"javascript:;"}},[a("img",{attrs:{src:e.imgUrl}}),t._v(" "),a("span",[t._v(t._s(e.character))])])])}))])},staticRenderFns:[]};var o={data:function(){return{applyForListDatas:[{character:"1，年龄要求:23-25周岁"},{character:"2，本人需要有正在使用的信用卡"},{character:"3，本人需要有正在使用的淘宝(支付宝)账户"},{character:"4，本人需要有实名认证的手机号"}],authenticationListDatas:[{imgUrl:"../../../static/img/productImg/id.png",character:"身份证"},{imgUrl:"../../../static/img/productImg/xinyongka.png",character:"信用卡"},{imgUrl:"../../../static/img/productImg/zhifubao.png",character:"支付宝账号"},{imgUrl:"../../../static/img/productImg/shoujihao.png",character:"手机号"}],mformDatas:[{description:"姓名：",placeholder:"请输入姓名",name:"userName",model:"",reg:/^[\u4e00-\u9fa5_a-zA-Z]{0,}$/},{description:"身份证号：",placeholder:"请输入身份证号",name:"IDnumber",model:"",reg:/^[0-9xX]{0,18}$/,maxlength:"18"},{description:"手机号：",placeholder:"请输入手机号",name:"userName",model:"",reg:/^[0-9]{0,11}$/}],FooterShow:!0}},components:{productHeadLine:a("VU/8")({props:["title"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{}},s,!1,function(t){a("XUga")},null,null).exports,authenticationList:a("VU/8")({props:["authenticationListDatas"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{}},n,!1,function(t){a("DTzb")},null,null).exports},computed:{},created:function(){"0"===this.getCookie("whether")&&this.$router.push("/phoneApprove")},mounted:function(){},methods:{isFooter:function(){this.FooterShow=!1},loseFocus:function(){this.FooterShow=!0},goodInput:function(t,e,a){if(!t.test(e)){Object(i.Toast)({message:"格式错误",className:"ToastStyle",duration:2e3,position:"bottom"});for(var s=0;s<this.mformDatas.length;s++)this.mformDatas[a].model=""}}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"productDetailContent"},[a("headline",{attrs:{headlineData:{title:"申请条件",line:!0}}}),t._v(" "),a("div",{staticClass:"applyForCondition"},[a("ul",{staticClass:"applyForList"},t._l(t.applyForListDatas,function(e,i){return a("li",[a("span",[t._v(t._s(e.character))])])}))]),t._v(" "),a("headline",{attrs:{headlineData:{title:"认证材料",line:!0}}}),t._v(" "),a("authenticationList",{attrs:{authenticationListDatas:t.authenticationListDatas}}),t._v(" "),a("ul",{staticClass:"mform"},t._l(t.mformDatas,function(e,i){return a("li",{key:i},[a("span",{staticClass:"description"},[t._v(t._s(e.description))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"mformData.model"}],attrs:{type:"text",placeholder:e.placeholder,maxlength:e.maxlength,name:e.name},domProps:{value:e.model},on:{blur:function(e){t.loseFocus()},input:[function(a){a.target.composing||t.$set(e,"model",a.target.value)},function(a){t.goodInput(e.reg,e.model,i)}],focus:t.isFooter}})])}))],1),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.FooterShow,expression:"FooterShow"}],staticClass:"productDetailsFooter"},[a("a",{attrs:{href:"javascript:;"}},[t._v("\n      立即申请\n    ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"productDetailsHeader"},[i("div",{staticClass:"imgWrap"},[i("img",{attrs:{src:a("kHiM")}})]),t._v(" "),i("div",{staticClass:"describe"},[i("div",{staticClass:"productTitle"},[t._v("宜人极速 - 秒下款")]),t._v(" "),i("div",{staticClass:"limit"},[t._v("额度范围:1000-20000")]),t._v(" "),i("div",{staticClass:"lightspot"},[t._v("亮点:凭信用卡，10分钟轻松贷款10万元")])])])}]};var c=a("VU/8")(o,r,!1,function(t){a("w/qF")},null,null);e.default=c.exports},DTzb:function(t,e){},XUga:function(t,e){},kHiM:function(t,e,a){t.exports=a.p+"static/img/jisudai.26e07a2.png"},"w/qF":function(t,e){}});
//# sourceMappingURL=12.cc74f80f4a2ec9b2260f.js.map