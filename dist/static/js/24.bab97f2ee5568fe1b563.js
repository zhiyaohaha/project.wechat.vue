webpackJsonp([24],{B3XP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),s=a.n(i),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"myParticulars"},[a("ul",{staticClass:"myParticularsList"},t._l(t.myParticularsDatas,function(e,i){return a("li",{key:i},[e.url?a("router-link",{attrs:{to:e.url}},[a("img",{attrs:{src:e.imgUrl}}),t._v(" "),a("span",[t._v(t._s(e.title))])]):t._e()],1)}))])])},staticRenderFns:[]};var r=a("VU/8")({props:["myParticularsDatas"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{}},n,!1,function(t){a("Tvo8")},null,null).exports,c=a("NYxO"),o={data:function(){return{myParticularsDatas:[{imgUrl:"../../../static/img/myImg/wode_content_icon_tuiguangmingxi.png",title:"推广明细",url:"/myPage/generalizeYiPage"},{imgUrl:"../../../static/img/myImg/wode_content_icon_dingdanmingxi.png",title:"订单明细",url:"/myPage/orderFormPage"},{imgUrl:"../../../static/img/myImg/wode_content_icon_fanyongmingxi.png",title:"返佣明细",url:"/myPage/rebatePage"},{imgUrl:"../../../static/img/myImg/wode_content_icon_tixian.png",title:"提现",url:"/myPage/WithdrawalPage"},{imgUrl:"../../../static/img/myImg/wode_content_icon_tixianmingxi.png",title:"提现明细",url:"/myPage/depositPage"},{imgUrl:"../../../static/img/myImg/wode_content_icon_customer-service.png",title:"客服",url:"/myPage/customerServicePage"}]}},components:{myParticulars:r},computed:s()({},Object(c.c)(["userName","serviceQrCodeShow","income"])),watch:{$route:function(t,e){"myPage"===t.name&&(window.history.pushState(null,"","#/homePage"),window.history.pushState(null,"","#/myPage"))}},beforeCreate:function(){},created:function(){this.$store.dispatch("getAccountInfo")},mounted:function(){"myPage"===this.$route.name&&(window.history.pushState(null,"","#/homePage"),window.history.pushState(null,"","#/myPage"))},methods:{isShow:function(){this.$store.commit("QRCODEISSHOW",!1)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myPage"},[a("keep-alive",[t.$route.meta.cache?t._e():a("router-view")],1),t._v(" "),t.$route.meta.cache?a("router-view"):t._e(),t._v(" "),t.$route.meta.keepAlive&&t.userName?a("div",[a("header",{staticClass:"myPageHeader"},[a("div",{staticClass:"headPortrait"},[a("router-link",{attrs:{to:{name:"headChoicePage"}}},[a("img",{attrs:{src:t.readTodos().headimgurl||"../../../static/img/myImg/touxiang.png"}})])],1),t._v(" "),a("div",{staticClass:"userDescription"},[a("span",{staticClass:"petName"},[t._v(t._s(t.readTodos().nickname||t.userName))]),t._v(" "),a("span",{staticClass:"individual"},[t._v("个人代理")])]),t._v(" "),a("div",{staticClass:"brokerage"},[a("router-link",{attrs:{to:"/homePage/generalizePage"}},[t._v("我要赚佣金")])],1)]),t._v(" "),t.income?a("div",{staticClass:"myPageContent"},[a("a",{staticClass:"generalIncome",attrs:{href:"javascript:;"}},[a("span",{staticClass:"describe"},[t._v("累计收入")]),t._v(" "),a("span",{staticClass:"unit"},[t._v("￥"),a("span",{staticClass:"price"},[t._v(t._s(t.income.totalBalance)+"元")])])]),t._v(" "),a("a",{staticClass:"withdrawDeposit",attrs:{href:"javascript:;"}},[a("span",{staticClass:"describe"},[t._v("账户余额")]),t._v(" "),a("span",{staticClass:"unit"},[t._v("￥"),a("span",{staticClass:"price"},[t._v(t._s(t.income.withdrawBalance)+"元")])])])]):t._e(),t._v(" "),a("myParticulars",{attrs:{myParticularsDatas:t.myParticularsDatas}})],1):t._e()],1)},staticRenderFns:[]};var l=a("VU/8")(o,m,!1,function(t){a("CfNP")},null,null);e.default=l.exports},CfNP:function(t,e){},Tvo8:function(t,e){}});
//# sourceMappingURL=24.bab97f2ee5568fe1b563.js.map