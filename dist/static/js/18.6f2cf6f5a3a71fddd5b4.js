webpackJsonp([18],{"2SDX":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Dd8w"),s=a.n(o),i=a("Au9i"),n=a("NYxO"),r=a("gyMJ"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"authenticationList"},t._l(t.authenticationListDatas,function(e,o){return a("li",{key:o},[a("img",{attrs:{src:e._icon}}),t._v(" "),a("span",[t._v(t._s(e.name))])])}))])},staticRenderFns:[]};var c={data:function(){return{mformDatas:[{description:"姓名：",placeholder:"请输入姓名",name:"userName",model:"",reg:/^[\u4e00-\u9fa5_a-zA-Z]{0,}$/,regular:/^[\u4e00-\u9fa5_a-zA-Z]{1,}$/},{description:"身份证号：",placeholder:"请输入身份证号",name:"IDnumber",model:"",reg:/^[0-9xX]{0,18}$/,regular:/^[0-9xX]{15,18}$/,maxlength:"18"},{description:"手机号：",placeholder:"请输入手机号",name:"phoneNum",model:"",reg:/^[0-9]{0,11}$/,regular:/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,maxlength:"11"}],FooterShow:!0}},components:{authenticationList:a("VU/8")({props:["authenticationListDatas"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{}},l,!1,function(t){a("6r5f")},null,null).exports},computed:s()({},Object(n.b)(["productDetailsPageData"])),created:function(){this.$store.dispatch("getDetailedFor",{id:this.$route.query.id})},mounted:function(){},methods:{applyFor:function(){this.mformDatas;if(this.mformDatas.filter(function(t){return t.regular.test(t.model)}).length===this.mformDatas.length){var t={mobilePhone:this.mformDatas[2].model,idCard:this.mformDatas[1].model,name:this.mformDatas[0].model,product:this.productDetailsPageData.id,source:"OfficialAccounts"};Object(r.l)("http://192.168.6.66:8001/api/LoanOrder/SpeedOrderRecordForApp",t).then(function(t){console.log(t.data.url),window.location.href=t.data.url})}else Object(i.MessageBox)({title:"提示",message:"请正确输入信息",showCancelButton:!1})},isFooter:function(){this.FooterShow=!1},loseFocus:function(){this.FooterShow=!0},goodInput:function(t,e,a){if(!t.test(e)){Object(i.Toast)({message:"格式错误",className:"ToastStyle",duration:2e3,position:"bottom"});for(var o=0;o<this.mformDatas.length;o++)this.mformDatas[a].model=""}}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.productDetailsPageData?a("div",[a("header",{staticClass:"productDetailsHeader"},[a("div",{staticClass:"imgWrap"},[a("img",{attrs:{src:t.productDetailsPageData.basic._logo}})]),t._v(" "),a("div",{staticClass:"describe"},[a("div",{staticClass:"productTitle"},[t._v(t._s(t.productDetailsPageData.basic.name))]),t._v(" "),a("div",{staticClass:"limit"},[t._v("\n        额度范围:"+t._s(t.productDetailsPageData.filter.amount_min+"-"+t.productDetailsPageData.filter.amount_max)+"\n      ")]),t._v(" "),a("div",{staticClass:"lightspot"},[t._v(t._s(t.productDetailsPageData.summary))])])]),t._v(" "),a("div",{staticClass:"productDetailContent"},[a("headline",{attrs:{headlineData:{title:"申请条件",line:!0}}}),t._v(" "),a("div",{staticClass:"applyForCondition"},[a("ul",{staticClass:"applyForList"},t._l(t.productDetailsPageData.filter.applicationConditions.split("\n"),function(e,o){return a("li",[a("span",[t._v(t._s(e))])])}))]),t._v(" "),a("headline",{attrs:{headlineData:{title:"认证材料",line:!0}}}),t._v(" "),a("authenticationList",{attrs:{authenticationListDatas:t.productDetailsPageData.attachment}}),t._v(" "),a("ul",{staticClass:"mform"},t._l(t.mformDatas,function(e,o){return a("li",{key:o},[a("span",{staticClass:"description"},[t._v(t._s(e.description))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"mformData.model"}],attrs:{type:"text",placeholder:e.placeholder,maxlength:e.maxlength,name:e.name},domProps:{value:e.model},on:{blur:function(e){t.loseFocus()},input:[function(a){a.target.composing||t.$set(e,"model",a.target.value)},function(a){t.goodInput(e.reg,e.model,o)}],focus:t.isFooter}})])}))],1),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.FooterShow,expression:"FooterShow"}],staticClass:"productDetailsFooter",on:{click:t.applyFor}},[a("a",{attrs:{href:"javascript:"}},[t._v("\n      立即申请\n    ")])])]):t._e()},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(t){a("ymGs")},null,null);e.default=d.exports},"6r5f":function(t,e){},ymGs:function(t,e){}});
//# sourceMappingURL=18.6f2cf6f5a3a71fddd5b4.js.map