webpackJsonp([23],{G3P4:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Gu7T"),a=s.n(i),n={data:function(){return{authenticationListDatas:["../../../static/img/strategyImg/jiaoxue.png","../../../static/img/strategyImg/tuiguang.png","../../../static/img/strategyImg/kouzi.png","../../../static/img/strategyImg/qita.png"],footLineTitle:"查看更多",scene:"Scene.Spead"}},components:{strategyList:s("oa7F").a},computed:{newsListFor:{get:function(){return this.$store.state.newsListFor},set:function(){}}},created:function(){var t=this;this.$store.dispatch("getSelectDataSource",{codes:"SpreadNewsCategory"}).then(function(e){e.success?e.data.forEach(function(e){t.authenticationListDatas=e.childrens.map(function(e,s,i){return e.imgUrl=t.authenticationListDatas[s],e})}):t.MessageBox({title:"错误",message:e.message,showCancelButton:!1})}),this.$store.dispatch("getNewsListFor",{scene:this.scene,type:"",id:"",size:10})},mounted:function(){},updated:function(){},methods:{loadData:function(){var t=this,e=this;"没有啦"!==e.footLineTitle&&"查看更多"===this.footLineTitle&&(this.footLineTitle="加载中",e.$store.dispatch("getNewsListFor",{scene:"Scene.Spead",type:"",id:e.newsListFor[e.newsListFor.length-1].id,size:10}).then(function(s){if(s.length<1)t.footLineTitle="没有啦";else var i=setTimeout(function(){var n;(n=t.newsListFor).push.apply(n,a()(s)),e.footLineTitle="查看更多",clearTimeout(i)},1e3)}))}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.newsListFor?s("scroll",{staticClass:"wrapper",attrs:{data:t.newsListFor,pullup:!0},on:{scrollToEnd:t.loadData}},[s("div",[t.authenticationListDatas?s("header",{staticClass:"materialHeader"},[s("ul",{staticClass:"authenticationList"},t._l(t.authenticationListDatas,function(e,i){return s("li",{key:i},[s("router-link",{attrs:{to:{path:"/homePage/strategyListPage",query:{name:e.name,code:e.code,scene:t.scene}}}},[s("img",{attrs:{src:e.imgUrl}}),t._v(" "),s("span",[t._v(t._s(e.name))])])],1)}))]):t._e(),t._v(" "),s("div",{staticClass:"materialContent"},[s("strategyList",{attrs:{strategyListDatas:t.newsListFor}})],1),t._v(" "),s("footline",{attrs:{title:t.footLineTitle}})],1)]):t._e()},staticRenderFns:[]};var r=s("VU/8")(n,o,!1,function(t){s("oOzU")},null,null);e.default=r.exports},oOzU:function(t,e){}});
//# sourceMappingURL=23.1ee92b9124b5a7988dcf.js.map