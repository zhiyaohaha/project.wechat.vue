webpackJsonp([19],{"7h/x":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Gu7T"),n=a.n(s),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.rebateListDatas?a("div",{staticClass:"rebateListConttent"},[a("ul",{staticClass:"rebateList"},t._l(t.rebateListDatas.result,function(e,s){return a("li",{key:s},[a("img",{attrs:{src:e.head||"../../../static/img/myImg/touxiang.gif"}}),t._v(" "),a("div",{staticClass:"rebateListDescribe"},[a("div",{staticClass:"up"},[a("span",{staticClass:"userName"},[t._v(t._s(e.username.length>3?e.username.slice(0,3)+"...":e.username))]),t._v(" "),a("span",{staticClass:"applyForTime"},[t._v(t._s(e.dealUserIdTime))])]),t._v(" "),a("div",{staticClass:"down"},[a("span",[t._v("返佣总额 ：")]),t._v(" "),a("span",{staticClass:"price"},[t._v(" "+t._s(e.totalValue))]),t._v(" "),a("span",{staticClass:"unit"},[t._v("元")])])]),t._v(" "),a("div",{staticClass:"state"},[a("span",{staticClass:"form"},[t._v(t._s(e.proName))]),t._v(" "),a("div",{staticClass:"down"},[a("span",[t._v("我的返佣:")]),t._v(" "),a("span",{staticClass:"stateDescribe"},[t._v(t._s(e.value))]),t._v(" "),a("span",[t._v("元")])])])])}))]):t._e()])},staticRenderFns:[]};var o=a("VU/8")({props:["rebateListDatas"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{}},r,!1,function(t){a("qb3O")},null,null).exports,i=(a("NYxO"),{data:function(){return{orderFormTapDatas:[{title:"一级代理",manNumber:null},{title:"二级代理",manNumber:null},{title:"三级代理",manNumber:null}],orderFormInd:0,footlineTitle:"上拉加载更多"}},components:{rebateList:o},computed:{rakeBackInfo:{get:function(){return this.$store.state.rakeBackInfo},set:function(){}}},watch:{},created:function(){var t=this;this.$store.dispatch("getRakeCount").then(function(e){t.orderFormTapDatas[0].manNumber=e.level1Total,t.orderFormTapDatas[1].manNumber=e.level2Total,t.orderFormTapDatas[2].manNumber=e.level3Total}),this.$store.dispatch("getRakeBackInfo",{id:"",size:10,level:this.orderFormInd+1}).then(function(){t.orderFormTapDatas[t.orderFormInd].manNumber=t.rakeBackInfo?t.rakeBackInfo.total:0})},mounted:function(){this.rakeBackInfo&&this.rakeBackInfo.result.length<1&&(this.footlineTitle="暂无数据")},methods:{changeColor:function(t){var e=this;this.footlineTitle="上拉加载更多",this.orderFormInd=t,this.$store.dispatch("getRakeBackInfo",{id:"",level:t+1,size:10}).then(function(){e.rakeBackInfo&&0!==e.rakeBackInfo.result.length||(e.footlineTitle="暂无数据"),e.orderFormTapDatas[e.orderFormInd].manNumber=e.rakeBackInfo?e.rakeBackInfo.total:0})},loadData:function(){var t=this,e=this;"上拉加载更多"===this.footlineTitle&&(this.footlineTitle="加载中",this.$store.dispatch("getRakeBackInfo",{id:e.rakeBackInfo.result[e.rakeBackInfo.result.length-1].id,level:e.orderFormInd+1,size:10}).then(function(e){if(e.length>0)var a=setTimeout(function(){var s;(s=t.rakeBackInfo.result).push.apply(s,n()(e)),t.footlineTitle="上拉加载更多",clearTimeout(a)},1e3);else var s=setTimeout(function(){t.footlineTitle="没有啦",clearTimeout(s)},1e3)}))}}}),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"orderFormTap"},t._l(t.orderFormTapDatas,function(e,s){return a("a",{key:s,class:{active:t.orderFormInd===s},attrs:{href:"javascript:;"},on:{click:function(e){t.changeColor(s)}}},[t._v("\n      "+t._s(e.title)),e.manNumber>=0?a("span",{staticClass:"manNumber"},[t._v("("+t._s(e.manNumber)+")")]):t._e()])})),t._v(" "),a("scroll",{staticClass:"wrapper",attrs:{data:t.rakeBackInfo?t.rakeBackInfo.result:[],pullup:!0},on:{scrollToEnd:t.loadData}},[a("div",[a("rebateList",{attrs:{rebateListDatas:t.rakeBackInfo}}),t._v(" "),a("footline",{attrs:{title:t.footlineTitle}})],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(i,l,!1,function(t){a("Dl/N")},null,null);e.default=c.exports},"Dl/N":function(t,e){},qb3O:function(t,e){}});
//# sourceMappingURL=19.7166a1fb2a606200fa07.js.map