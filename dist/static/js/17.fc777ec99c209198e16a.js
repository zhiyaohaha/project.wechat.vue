webpackJsonp([17],{"7n9p":function(e,t,n){e.exports=n.p+"static/img/banner.36ef011.png"},oSu2:function(e,t){},t976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("NYxO"),r={data:function(){return{QRcodeShow:!1}},components:{},computed:s()({},Object(i.c)(["inviteurl"])),watch:{},created:function(){this.$store.dispatch("getInviteUrl")},mounted:function(){this.QRcodeShow="2"===this.getCookie("whether")},updated:function(){},methods:{skip:function(){1*this.getCookie("whether")<1&&this.$router.push({name:"phoneApprove",params:{name1:this.$route.name,name2:""}})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("scroll",[a("div",[a("header",{staticClass:"generalizeHeader"},[a("img",{attrs:{src:n("7n9p")}})]),e._v(" "),a("headline",{attrs:{headlineData:{title:"赚佣金规则"}}}),e._v(" "),a("div",{staticClass:"generalizeContent"},[a("p",[a("span",[e._v("我们假设有ABCD4个人，返佣总金额100元，看看他们赚佣金的模式。")])]),e._v(" "),a("p",[a("span",[e._v("A关注公众平台，实名认证，获得专属推广二维码；A申请办理业务，成功下卡/放款，可赚取50元佣金。")]),a("br"),e._v(" "),a("span",[e._v("A分享二维码给B，B扫码，申请办理业务，成功下卡/放款后，B可赚取50元佣金，A可赚取30元佣金；")]),a("br"),e._v(" "),a("span",[e._v("C扫B的二维码，申请办理业务，成功下卡/放款后，C赚取50元佣金，B可赚取30元佣金， A赚取20元佣金；")]),a("br"),e._v(" "),a("span",[e._v("D扫C的二维码，申请办理业务，成功下卡/放款后，D赚取50元佣金，C赚取30元佣金，B赚取20元佣金，A不赚取佣金。")]),a("br"),e._v(" "),a("span",[e._v("(部分放款需要提现才能获得佣金)")])])]),e._v(" "),a("div",{staticClass:"QRcodeWrap"},[a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.QRcodeShow,expression:"QRcodeShow"}],staticClass:"QRcode",attrs:{src:e.inviteurl}})]),e._v(" "),a("transition",{attrs:{name:"tran"}},[a("footer",{directives:[{name:"show",rawName:"v-show",value:!e.QRcodeShow,expression:"!QRcodeShow"}],staticClass:"generalizeFooter"},[a("a",{attrs:{href:"javascript:;"},on:{click:e.skip}},[e._v("\n              获取我的推广二维码\n            ")])])])],1)],1)])],1)},staticRenderFns:[]};var c=n("VU/8")(r,o,!1,function(e){n("oSu2")},null,null);t.default=c.exports}});
//# sourceMappingURL=17.fc777ec99c209198e16a.js.map