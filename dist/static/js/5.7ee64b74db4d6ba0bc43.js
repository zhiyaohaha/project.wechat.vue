webpackJsonp([5],{"1HVg":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3RDE0QTU1RkZFQzExRTdBNDM2QTdFQzY2RDg2NDIzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3RDE0QTU2RkZFQzExRTdBNDM2QTdFQzY2RDg2NDIzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDdEMTRBNTNGRkVDMTFFN0E0MzZBN0VDNjZEODY0MjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDdEMTRBNTRGRkVDMTFFN0E0MzZBN0VDNjZEODY0MjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4k3LRTAAAB0ElEQVR42mI8JCHPgASUgLgAiD2gbGYG4sBfIL4HxDuAeAKUDQZMSIpSgfgaEOcCsSoJhjNA1apC9YLMSINJsEDpdCCewUAdwA7EM6GOnwEi5KDeojboB5kNsqAYiDloYAHIzGKQBZ4MtAOeIAsUqWESt6YGg/n5Eww6KxYjCyuyIEU0RYbrrlnGwCokxPDv9x9kKRYmahr+68ULhivhMSjyTNQ0/FJQBMP3+w/wW8DMzc3AKihIFcOxWmB8eA+D+cVTDMLurhQbjtWCn0+eMTCysjJozp6O1RJeIwMGvfUriTIcqwVXYxIYPp+/CLSEBcMSkOG6K5YwsPDzE2U4CDACS9P/6IIsfLzA9LyEgddQn+E/MNldT81k+PX6NdhwZl4ehh8PHjJcColk+Pn0GcG4wmoBhiV//gAt+s3AxMkJMRzo8p/PnxOV0nAm0z+fPjNciYiBBBcLC8Twh49IMhxmwR9Clvx+/57hz4cPDJcCw0kyHGQEqJi4D60scFpyQsuQ3Lx4H+SD7TQsTbeDLOgF4h80MBxkZh/IgkdAXEgDC0BmPoSlohnQevkXFQz+hVzHIyfTWUCsBcRTgPg2tClCLPgL1TMFasYsmARAgAEAHxi1S7V/F4UAAAAASUVORK5CYII="},BCpk:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("Dd8w"),s=o.n(i),n=o("Au9i"),a=o("NYxO"),c=o("GQaK"),h={data:function(){return{imgIsShow:!0,cellphoneNum:"",authCode:"",codeTooltip:"请输入验证码",phoneTooltip:"请填写你的手机号",errorColor:!1,codeColor:!1,myFooterIsShow:!0,verificationShow:!1,time:(new Date).getTime()}},components:{verification:o("6RLW").a},computed:s()({},Object(a.b)(["verification","phoneNote","openID"])),beforeMount:function(){},mounted:function(){var e=this;this.openID&&(this.openID.success?(console.log(111),this.$router.replace("/myPage")):(this.__boxheight(this.$refs.myWrap),window.onresize=this.__boxheight(this.$refs.myWrap),this.$nextTick(function(){e.myWrap=new c.a(e.$refs.myWrap,{touchstart:!0,momentum:!1}),e.myWrap.refresh()})))},updated:function(){this.__boxheight(this.$refs.myWrap),window.onresize=this.__boxheight(this.$refs.myWrap)},methods:{__phoneNote:function(){this.verification.success?(Object(n.MessageBox)({title:"提示",message:"短信验证码已发送，有效时间5分钟",showCancelButton:!1}),clearInterval(this.timer1)):(Object(n.MessageBox)({title:"提交失败",message:"图片验证码输入错误",showCancelButton:!1}),clearInterval(this.timer1))},approve:function(){var e=this,t={phone:this.cellphoneNum,verifyCode:this.authCode,firstLevelId:"",thirdPlatFormBind:!0,openId:"123456",thirdLoginType:"ThirdPlatForm.WeChat",head:"",nickName:"",source:"OfficialAccounts"};this.$store.dispatch("postPhone",{data:t}),this.timer2=setTimeout(function(){e.phoneNote.success?(clearInterval(e.timer2),e.$router.replace("/myPage")):(Object(n.MessageBox)({title:"提交失败",message:"短信验证码输入错误",showCancelButton:!1}),clearInterval(e.timer2))},2e3)},changeShow:function(){this.verificationShow=!1},verificationCancel:function(e,t,o){var i=this;if(this.time=(new Date).getTime(),this.verificationShow=!1,e){var s={code:"SMS_123738830",mobilePhone:this.cellphoneNum,validateCode:t,needvalidateCode:!0};this.$store.dispatch("postSendMsg",{data:s}),this.timer1=setTimeout(function(){i.__phoneNote()},500)}},notarize:function(){this.imgIsShow=!this.imgIsShow},loseFocus:function(e,t,o){this.myFooterIsShow=!0,e.test(t)||(1==o?this.codeColor=!0:this.errorColor=!0)},isFooter:function(){this.myFooterIsShow=!1},goodInput:function(e,t,o){e.test(t)&&(1==o?this.codeColor=!1:this.errorColor=!1)},sendMsg:function(){this.cellphoneNum&&!this.errorColor?this.verificationShow=!0:Object(n.MessageBox)({title:"提示",message:"请正确输入手机号",showCancelButton:!1})}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{ref:"myWrap"},[i("div",[i("div",{staticClass:"myContent"},[i("img",{attrs:{src:o("NzuB")}}),e._v(" "),i("split"),e._v(" "),i("ul",{staticClass:"cellphoneList"},[i("li",[i("span",{staticClass:"description"},[e._v("手机号：")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.cellphoneNum,expression:"cellphoneNum"}],class:{errorColor:e.errorColor},attrs:{type:"text",maxlength:"11",placeholder:e.phoneTooltip,name:"cellphoneNum"},domProps:{value:e.cellphoneNum},on:{blur:function(t){e.loseFocus(/^[1][3,4,5,7,8][0-9]{9}$/,e.cellphoneNum,0)},input:[function(t){t.target.composing||(e.cellphoneNum=t.target.value)},function(t){e.goodInput(/^[1][3,4,5,7,8][0-9]{9}$/,e.cellphoneNum,0)}],focus:e.isFooter}})]),e._v(" "),i("li",[i("span",{staticClass:"description"},[e._v("验证码：")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.authCode,expression:"authCode"}],class:{errorColor:e.codeColor},attrs:{type:"text",maxlength:"4",placeholder:e.codeTooltip,name:"authCode"},domProps:{value:e.authCode},on:{blur:function(t){e.loseFocus(/^\d{4}$/,e.authCode,1)},input:[function(t){t.target.composing||(e.authCode=t.target.value)},function(t){e.goodInput(/^\d{4}$/,e.authCode,1)}],focus:e.isFooter}}),e._v(" "),i("span",{staticClass:"sendMsg",on:{touchstart:e.sendMsg}},[e._v("获取验证码")])])]),e._v(" "),i("a",{staticClass:"protocol",attrs:{href:"javascript:;"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.imgIsShow,expression:"imgIsShow"}],attrs:{src:o("1HVg")},on:{touchstart:e.notarize}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!e.imgIsShow,expression:"!imgIsShow"}],attrs:{src:o("Sgcw")},on:{touchstart:e.notarize}}),e._v(" "),i("span",[e._v("我已阅读并同意《XXXXXX协议》")])]),e._v(" "),i("a",{staticClass:"approve",attrs:{href:"javascript:;"},on:{touchstart:e.approve}})],1),e._v(" "),i("div",{staticClass:"footerOccupied"})])]),e._v(" "),i("verification",{directives:[{name:"show",rawName:"v-show",value:e.verificationShow,expression:"verificationShow"}],attrs:{changeShow:e.changeShow,time:e.time,verificationCancel:e.verificationCancel}}),e._v(" "),i("footer",{directives:[{name:"show",rawName:"v-show",value:e.myFooterIsShow,expression:"myFooterIsShow"}],staticClass:"myFooter"},[i("span",[e._v("申请贷款前请进新手机认证，仅需认证一次")])])],1)},staticRenderFns:[]};var l=o("VU/8")(h,r,!1,function(e){o("piqF")},null,null);t.default=l.exports},NzuB:function(e,t,o){e.exports=o.p+"static/img/banner.a2e601e.png"},Sgcw:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJCREMyNTQzMDAxQjExRTg4QjlFRDE0RDYzMDE2RjA4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJCREMyNTQ0MDAxQjExRTg4QjlFRDE0RDYzMDE2RjA4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkJEQzI1NDEwMDFCMTFFODhCOUVEMTRENjMwMTZGMDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkJEQzI1NDIwMDFCMTFFODhCOUVEMTRENjMwMTZGMDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz51g+8bAAABNUlEQVR42uyYS2oCQRCGe8bXFXwtc4PoIrcwoJ5CF7qIeIGAutBFPIVo9B6K4HZmafAAuokhkL+0BlozKChj16J/+GBomqmPpruhy/E8T4UkCUrMC8jy2K3ZgTVYgk8wA/vzSU6IzCvogicVXXzQAhN90NW+Y6DDE6IUUfz/MdeLBYNxbcI7eFOPTVCvpa9M2YCILlQOZGhj9pXZDMiDZCogb1gmB6ouH18JKZFMUYhMgWTSQmQyJJMSIpN0laBYGStjZayMlbEyVuaKzFaIy55kNkJkNiSzEiIzJ5mpEJkpyYz4UW4yX+ThcjegaVimAb6Do02r0zMk0uP6J/dMG3w8WGTIdf9der+gzo9wP2IJn5/VNa57iHOhc0WTqXH0zG/hxB3Ff3iTLtSxczVSIZ2rPwEGAKaeNu6K2IK5AAAAAElFTkSuQmCC"},piqF:function(e,t){}});
//# sourceMappingURL=5.7ee64b74db4d6ba0bc43.js.map