webpackJsonp([22],{"8ElF":function(e,t){},RS6c:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Au9i"),r={data:function(){return{mformDatas:[{description:"姓名：",placeholder:"请输入姓名",name:"userName",model:"",reg:/^[\u4e00-\u9fa5_a-zA-Z]{0,}$/},{description:"身份证号：",placeholder:"请输入身份证号",name:"IDnumber",model:"",reg:/^[0-9xX]{0,18}$/,maxlength:"18"},{description:"手机号：",placeholder:"请输入手机号",name:"userName",model:"",reg:/^[0-9]{0,11}$/}],applyForFooterShow:!0}},components:{},computed:{},mounted:function(){},methods:{isFooter:function(){this.applyForFooterShow=!1},loseFocus:function(e,t,a){this.applyForFooterShow=!0},onValuesChange:function(e,t){this.mformDatas[this.mformDatasInd].model=e.getValues()},goodInput:function(e,t,a){if(!e.test(t)){Object(o.Toast)({message:"格式错误",className:"ToastStyle",duration:2e3});for(var r=0;r<this.mformDatas.length;r++)this.mformDatas[a].model=""}}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._v(" "),a("div",{staticClass:"applyForContent"},[a("header",{staticClass:"firstTrialHeader"},[e._v("\n      初审资料\n    ")]),e._v(" "),a("ul",{staticClass:"mform"},e._l(e.mformDatas,function(t,o){return a("li",{key:o},[a("span",{staticClass:"description"},[e._v(e._s(t.description))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"mformData.model"}],attrs:{type:"text",placeholder:t.placeholder,maxlength:t.maxlength,name:t.name},domProps:{value:t.model},on:{blur:function(a){e.loseFocus(t.reg,t.model,o)},input:[function(a){a.target.composing||e.$set(t,"model",a.target.value)},function(a){e.goodInput(t.reg,t.model,o)}],focus:e.isFooter}})])}))]),e._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:e.applyForFooterShow,expression:"applyForFooterShow"}],staticClass:"applyForFooter"},[a("a",{attrs:{href:"javascript:;"}},[e._v("立即提交")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"applyForHeader"},[a("ul",{staticClass:"applyForList"},[a("li",[a("div",{staticStyle:{backgroundImage:"url('../../../static/img/creditCardImg/tianxie.png')"}}),e._v(" "),a("span",[e._v("填写资料")])]),e._v(" "),a("div"),e._v(" "),a("li",[a("div",{staticStyle:{backgroundImage:"url('../../../static/img/creditCardImg/shengqing.png')"}}),e._v(" "),a("span",[e._v("点击申请")])]),e._v(" "),a("div"),e._v(" "),a("li",[a("div",{staticStyle:{backgroundImage:"url('../../../static/img/creditCardImg/shenghe.png')"}}),e._v(" "),a("span",[e._v("审核发卡")])])])])}]};var n=a("VU/8")(r,s,!1,function(e){a("8ElF")},null,null);t.default=n.exports}});
//# sourceMappingURL=22.cf86f9c749a242797679.js.map