webpackJsonp([12],{FFwQ:function(e,t,s){e.exports=s.p+"static/img/xinyongkabanner.28ecd88.png"},KeTv:function(e,t){},hmB4:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Gu7T"),a=s.n(n),i=s("Au9i"),o={props:["linkageModDatas","mformDatasInd","onValuesChange"],data:function(){return{select1:0,pitchOn:0}},components:{},computed:{cities:function(){return this.linkageModDatas[this.select1]?this.linkageModDatas[this.select1].c:[]}},watch:{mformDatasInd:function(e){var t=this;if(4===e){this.select1=0,this.pitchOn=0,this.onValuesChange(this.select1,this.pitchOn),this.linkageWrap=new this.BScroll(this.$refs.linkageWrap,{momentum:!1,probeType:1}),this.linkageWrap.refresh(),this.citiesWrap=new this.BScroll(this.$refs.citiesWrap,{momentum:!1,probeType:1});var s=this.$refs.pickerSingle[0].clientHeight;this.citiesWrap.on("touchEnd",function(e){var n=Math.round(e.y/s);t.citiesWrap.scrollTo(0,s*n,100),-n>t.cities.length-1?t.pitchOn=t.cities.length-1:t.pitchOn=-n<0?0:-n,t.onValuesChange(t.select1,t.pitchOn)}),this.linkageWrap.on("touchEnd",function(e){var n=Math.round(e.y/s);t.linkageWrap.scrollTo(0,s*n,100),-n>t.linkageModDatas.length-1?t.select1=t.linkageModDatas.length-1:t.select1=-n<0?0:-n,t.onValuesChange(t.select1,t.pitchOn)})}else this.linkageWrap&&this.linkageWrap.destroy()},cities:function(e){var t=this;if(4===this.mformDatasInd){var s=this.$refs.pickerSingle[0].clientHeight,n=0;this.citiesWrap.destroy(),this.citiesWrap=new this.BScroll(this.$refs.citiesWrap,{momentum:!1,probeType:1}),this.citiesWrap.refresh(),this.citiesWrap.on("touchEnd",function(e){n=Math.round(e.y/s)||0,t.citiesWrap.scrollTo(0,s*n,100),-n>t.cities.length-1?t.pitchOn=t.cities.length-1:t.pitchOn=-n<0?0:-n,t.onValuesChange(t.select1,t.pitchOn)})}else this.citiesWrap&&this.citiesWrap.destroy(),this.pitchOn=0},select1:function(e){this.pitchOn=0,this.citiesWrap.refresh(),this.onValuesChange(e,this.pitchOn)}},created:function(){},mounted:function(){},updated:function(){},methods:{}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"linkageModDatas"},[s("div",{ref:"linkageWrap",staticClass:"linkageWrap"},[s("ul",{staticClass:"linkageModDatas"},e._l(e.linkageModDatas,function(t,n){return s("li",{key:n,ref:"pickerSingle",refInFor:!0,staticClass:"province",class:{select1:e.select1===n}},[e._v("\n        "+e._s(t.b)+"\n      ")])}))]),e._v(" "),s("div",{ref:"citiesWrap",staticClass:"citiesWrap"},[s("ul",{staticClass:"citiesList"},e._l(e.cities,function(t,n){return s("li",{key:n,staticClass:"city",class:{pitchOn:e.pitchOn===n}},[e._v("\n        "+e._s(t.b)+"\n      ")])}))]),e._v(" "),s("div",{staticClass:"selectLine"})])},staticRenderFns:[]};var c={data:function(){return{mformDatas:[{description:"姓名：",placeholder:"请输入姓名",name:"userName",model:"",purposeList:!1,sendMsg:!1,units:"",reg:/^[\u4e00-\u9fa5_A-Za-z]{1,}$/,regular:/^[A-Za-z\u4e00-\u9fa5]{1,}$/},{description:"身份证号：",placeholder:"请输入身份证号",name:"IDnumber",model:"",purposeList:!1,sendMsg:!1,units:"",reg:/^[0-9_xX]{1,18}$/,regular:/^\d{17}[\d|xX]|\d{15}$/,maxlength:"18"},{description:"银行卡号：",placeholder:"请输入银行卡号",name:"bankCard",model:"",purposeList:!1,sendMsg:!1,units:"",reg:/^[0-9]{1,21}$/,regular:/^[0-9]{1,21}$/,maxlength:"21"},{description:"所属银行：",placeholder:"请选择所属银行",name:"bank",model:"",purposeList:!0,sendMsg:!1,units:"",reg:/^[\u4e00-\u9fa5]{0,}$/,regular:/[\s\S]/},{description:"开户行省市",placeholder:"请选择开户行省市",name:"bankCity",model:"",purposeList:!0,sendMsg:!1,units:"",reg:/^[\u4e00-\u9fa5]{0,}$/,regular:/[\s\S]/},{description:"银行预留手机号：",placeholder:"请填写您在银行预留的手机号",name:"phoneNum",model:"",purposeList:!1,sendMsg:!1,units:"",reg:/^[0-9]{1,11}$/,regular:/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/,maxlength:11}],mformDatasInd:0,shadeIsShow:!1,bankArr:[],provinceAndCity:[],tieOnFooterIsShow:!0}},components:{linkageMod:s("VU/8")(o,r,!1,function(e){s("KeTv")},null,null).exports},computed:{shadeIsShowInd:function(){return this.shadeIsShow?this.mformDatasInd:null}},created:function(){var e=this;this.$store.dispatch("getBanks").then(function(t){var s;(s=e.bankArr).push.apply(s,a()(t))}),this.$store.dispatch("getAdCodes").then(function(t){var s;(s=e.provinceAndCity).push.apply(s,a()(t))})},mounted:function(){},methods:{__findModel:function(e){return this.mformDatas.find(function(t){return t.name===e}).model},loseFocus:function(){this.tieOnFooterIsShow=!0},goodInput:function(e,t,s){3!==s&&4!==s||(this.mformDatas[s].model=""),e.test(t)||(Object(i.Toast)({message:"格式错误",className:"ToastStyle"}),this.mformDatas[s].model=t.substring(0,t.length-1))},pullDown:function(e,t,s){this.mformDatasInd=t,3!==t&&4!==t||(!s&&(this.mformDatas[t].model=""),this.shadeIsShow=e)},onValuesChange:function(e){this.mformDatas[this.mformDatasInd].model=this.bankArr[e].text},ValuesChange:function(e,t){var s=void 0;s=this.provinceAndCity[e].c[t]?this.provinceAndCity[e].c[t].b:this.provinceAndCity[e].c[0].b,this.mformDatas[this.mformDatasInd].model=this.provinceAndCity[e].b+" "+s},approve:function(){var e=this,t=this,s=this.mformDatas.filter(function(e){return e.regular.test(e.model)}),n=t.__findModel("bankCity");console.log(s),s.length===this.mformDatas.length?this.$store.dispatch("postPeopleFiveReal",{name:t.__findModel("userName"),idCard:t.__findModel("IDnumber"),bankCard:t.__findModel("bankCard"),fuiouBankArea:t.provinceAndCity.find(function(e){return e.b===n.substr(0,n.indexOf(" ")+1).trim()}).c.find(function(e){return e.b===n.substr(n.indexOf(" ")+1).trim()}).a,fuiouBank:t.bankArr.find(function(e){return e.text===t.__findModel("bank")}).value,mobilePhone:t.__findModel("phoneNum")}).then(function(s){console.log(s),s.success?s.data.real?(e.setCookie("whether",2,7),e.$router.replace({name:t.$route.params.name})):e.$router.push({name:"verifyPage",query:{id:s.data.id},params:{name:t.$route.params.name}}):Object(i.MessageBox)({title:"提示",message:s.message,showCancelButton:!1})}):Object(i.MessageBox)({title:"提示",message:"请正确输入信息",showCancelButton:!1})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),e._v(" "),s("div",{staticClass:"tieOnCardContent"},[s("ul",{staticClass:"mform"},e._l(e.mformDatas,function(t,n){return s("li",{key:n},[s("span",{staticClass:"description"},[e._v(e._s(t.description))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"mformData.model"}],attrs:{type:"text",readonly:t.purposeList,placeholder:t.placeholder,maxlength:t.maxlength,name:t.name},domProps:{value:t.model},on:{blur:e.loseFocus,input:[function(s){s.target.composing||e.$set(t,"model",s.target.value)},function(s){e.goodInput(t.reg,t.model,n)}],focus:function(t){e.pullDown(!0,n)}}}),e._v(" "),t.sendMsg||t.units?e._e():s("span",{class:{purposeList:t.purposeList},on:{click:function(t){e.pullDown(!0,n)}}},[e._v("\n              "+e._s(t.units)+"\n            ")])])})),e._v(" "),s("a",{staticClass:"authentication",attrs:{href:"javascript:;"},on:{click:e.approve}},[e._v("\n      立即认证\n    ")])]),e._v(" "),s("mt-popup",{staticClass:"maskLayer",attrs:{position:"bottom",showToolbar:"true"},model:{value:e.shadeIsShow,callback:function(t){e.shadeIsShow=t},expression:"shadeIsShow"}},[s("div",{staticClass:"shadeIsShowHeader"},[s("span",{staticClass:"cancel",on:{touchstart:function(t){e.pullDown(!1,e.mformDatasInd,!1)}}},[e._v("\n          取消\n        ")]),e._v(" "),s("span",{staticClass:"ascertain",on:{touchstart:function(t){e.pullDown(!1,e.mformDatasInd,!0)}}},[e._v("\n          确定\n        ")])]),e._v(" "),s("pickerMod",{directives:[{name:"show",rawName:"v-show",value:3===e.mformDatasInd,expression:"mformDatasInd === 3"}],attrs:{shadeIsShow:e.shadeIsShowInd,pickerModDatas:e.bankArr,onValuesChange:e.onValuesChange}}),e._v(" "),s("linkageMod",{directives:[{name:"show",rawName:"v-show",value:4===e.mformDatasInd,expression:"mformDatasInd === 4"}],attrs:{linkageModDatas:e.provinceAndCity,mformDatasInd:e.shadeIsShowInd,onValuesChange:e.ValuesChange}})],1),e._v(" "),s("footer",{directives:[{name:"show",rawName:"v-show",value:e.tieOnFooterIsShow,expression:"tieOnFooterIsShow"}],staticClass:"tieOnCardFooter"},[e._v("\n    实名认证仅用来确保您提交的需求真实有效，绝不泄露\n  ")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"tieOnCardHeader"},[t("img",{attrs:{src:s("FFwQ")}})])}]};var u=s("VU/8")(c,l,!1,function(e){s("iLH7")},null,null);t.default=u.exports},iLH7:function(e,t){}});
//# sourceMappingURL=12.dc8664b076a63d54ddd8.js.map