webpackJsonp([19],{"2SDX":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Dd8w"),i=a.n(o),s=(a("Au9i"),a("NYxO")),n=a("gyMJ"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"authenticationList"},t._l(t.authenticationListDatas,function(e,o){return a("li",{key:o},[a("img",{attrs:{src:e._icon}}),t._v(" "),a("span",[t._v(t._s(e.name))])])}))])},staticRenderFns:[]};var l={data:function(){return{mformDatas:[{message:"请正确输入姓名",description:"姓名：",placeholder:"请输入姓名",name:"userName",model:"",reg:/^[\u4e00-\u9fa5]{1,}$/,regular:/^[\u4e00-\u9fa5]{1,}$/,maxlength:"15"},{message:"请正确输入身份证号",description:"身份证号：",placeholder:"请输入身份证号",name:"IDnumber",model:"",reg:/^[0-9xX]{0,18}$/,regular:/^\d{17}[\d|xX]|\d{15}$/,maxlength:"18"},{message:"请正确输入手机号",description:"手机号：",placeholder:"请输入手机号",name:"phoneNum",model:"",reg:/^[0-9]{0,11}$/,regular:/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,maxlength:"11"}],FooterShow:!0,winHeight:document.body.clientHeight}},components:{authenticationList:a("VU/8")({props:["authenticationListDatas"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{}},r,!1,function(t){a("6r5f")},null,null).exports},computed:i()({},Object(s.c)(["productDetailsPageData"])),watch:{},created:function(){this.$store.dispatch("getDetailedFor",{id:this.$route.query.id})},mounted:function(){},updated:function(){var t=this;window.onresize=function(e){var a=document.body.clientHeight;t.winHeight-a>140?t.FooterShow=!1:t.FooterShow=!0}},methods:{applyFor:function(){for(var t=0;t<this.mformDatas.length;t++){var e=this.mformDatas[t];if(""===e.model)return void this.MessageBox({title:"提交失败",message:e.placeholder,showCancelButton:!1});if(!e.regular.test(e.model))return void this.MessageBox({title:"提交失败",message:e.message,showCancelButton:!1})}var a={mobilePhone:this.mformDatas[2].model,idCard:this.mformDatas[1].model,name:this.mformDatas[0].model,product:this.productDetailsPageData.id,source:"OfficialAccounts"},o=this.apiPrefix+"api/LoanOrder/SpeedOrderRecordForApp";Object(n.E)(o,a).then(function(t){window.location.href=t.data.url})},isFooter:function(){this.FooterShow=!1},loseFocus:function(){this.FooterShow=!0},goodInput:function(t,e,a){if(!t.test(e))for(var o=0;o<this.mformDatas.length;o++)this.mformDatas[a].model=""}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.productDetailsPageData?a("div",[a("header",{staticClass:"productDetailsHeader"},[a("div",{staticClass:"imgWrap"},[a("img",{attrs:{src:t.productDetailsPageData.basic._logo}})]),t._v(" "),a("div",{staticClass:"describe"},[a("div",{staticClass:"productTitle"},[t._v(t._s(t.productDetailsPageData.basic.name))]),t._v(" "),a("div",{staticClass:"limit"},[t._v("\n        额度范围:"+t._s(t.productDetailsPageData.filter.amount_min+"-"+t.productDetailsPageData.filter.amount_max)+"\n      ")]),t._v(" "),a("div",{staticClass:"lightspot"},[t._v(t._s(t.productDetailsPageData.summary))])])]),t._v(" "),a("div",{staticClass:"productDetailContent"},[a("headline",{attrs:{headlineData:{title:"申请条件",line:!0}}}),t._v(" "),a("div",{staticClass:"applyForCondition"},[a("ul",{staticClass:"applyForList"},t._l(t.productDetailsPageData.filter.applicationConditions.split("\n"),function(e,o){return a("li",{key:o},[a("span",[t._v(t._s(e))])])}))]),t._v(" "),a("headline",{attrs:{headlineData:{title:"认证材料",line:!0}}}),t._v(" "),a("authenticationList",{attrs:{authenticationListDatas:t.productDetailsPageData.attachment}}),t._v(" "),a("ul",{staticClass:"mform"},t._l(t.mformDatas,function(e,o){return a("li",{key:o},[a("span",{staticClass:"description"},[t._v(t._s(e.description))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"mformData.model"}],attrs:{type:"text",placeholder:e.placeholder,maxlength:e.maxlength,name:e.name},domProps:{value:e.model},on:{blur:function(e){t.loseFocus()},input:[function(a){a.target.composing||t.$set(e,"model",a.target.value)},function(a){t.goodInput(e.reg,e.model,o)}],focus:t.isFooter}})])}))],1),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.FooterShow,expression:"FooterShow"}],staticClass:"productDetailsFooter",on:{click:t.applyFor}},[a("a",{attrs:{href:"javascript:"}},[t._v("\n      立即申请\n    ")])])]):t._e()},staticRenderFns:[]};var d=a("VU/8")(l,c,!1,function(t){a("P3qB")},null,null);e.default=d.exports},"6r5f":function(t,e){},P3qB:function(t,e){}});
//# sourceMappingURL=19.0cb79561f9a66a9c9880.js.map