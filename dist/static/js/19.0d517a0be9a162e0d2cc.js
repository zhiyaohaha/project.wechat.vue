webpackJsonp([19],{X8Sm:function(e,t,n){e.exports=n.p+"static/img/erweima.48a6a8c.jpg"},rJB7:function(e,t){},t976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),r=n("NYxO"),i={data:function(){return{QRcodeShow:!1}},components:{},computed:a()({},Object(r.b)(["openID"])),mounted:function(){var e=this;this.__QRcode;this.$store.dispatch("getOpenid",{data:{openId:"123456",thirdLoginType:"ThirdPlatForm.WeChat"}}),setTimeout(function(){e.QRcodeShow=e.openID},150)},updated:function(){},methods:{__QRcode:function(){this.QRcodeShow=this.openID}}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"generalizeContent"},[o("div",{staticClass:"introduceHeadline"},[e._v("\n      微信三级分销系统的商业模式\n    ")]),e._v(" "),e._m(0),e._v(" "),o("div",{staticClass:"QRcodeWrap"},[o("transition",{attrs:{name:"fade"}},[o("img",{directives:[{name:"show",rawName:"v-show",value:e.QRcodeShow,expression:"QRcodeShow"}],staticClass:"QRcode",attrs:{src:n("X8Sm")}})])],1)]),e._v(" "),o("transition",{attrs:{name:"fade"}},[o("footer",{directives:[{name:"show",rawName:"v-show",value:!e.QRcodeShow,expression:"!QRcodeShow"}],staticClass:"generalizeFooter"},[o("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.$router.replace("/phoneApprove")}}},[e._v("\n        获取我的推广二维码\n      ")])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n      赚佣金规则 "),n("br"),e._v("\n      我们假设有ABCD4个人，返佣总金额100元，看看他们赚佣金的模式。 "),n("br"),e._v("\n      A关注公众平台，实名认证，获得专属推广二维码；A申请办理业务，成功下卡/放款，可赚取50元佣金。"),n("br"),e._v("\n      A分享二维码给B，B扫码，申请办理业务，成功下卡/放款后，B可赚取50元佣金，A可赚取30元佣金；"),n("br"),e._v("\n      C扫B的二维码，申请办理业务，成功下卡/放款后，C赚取50元佣金，B可赚取30元佣金， A赚取20元佣金；"),n("br"),e._v("\n      D扫C的二维码，申请办理业务，成功下卡/放款后，D赚取50元佣金，C赚取30元佣金，B赚取20元佣金，A不赚取佣金。\n    ")])}]};var c=n("VU/8")(i,s,!1,function(e){n("rJB7")},null,null);t.default=c.exports}});
//# sourceMappingURL=19.0d517a0be9a162e0d2cc.js.map