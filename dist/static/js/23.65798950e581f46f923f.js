webpackJsonp([23],{LXbr:function(t,e){},pF1S:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{num:1}},components:{headline:s("35/Y").a},computed:{imgUrl:function(){return"../../../static/img/posterImg/haibao"+this.num+".png"}},mounted:function(){this.__boxheight(this.$refs.posterWrap),window.onresize=this.__boxheight(this.$refs.posterWrap),this.posterWrap=new this.BScroll(this.$refs.posterWrap,{click:!0}),this.posterWrap.refresh()},methods:{switchoverImg:function(){this.num++,this.num>3&&(this.num=1)}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"posterWrap"},[s("div",[s("header",{staticClass:"posterHeader"},[s("span",[t._v("我的推广海报")]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:t.switchoverImg}},[t._v("换一种海报")])]),t._v(" "),s("div",{staticClass:"posterContent"},[s("div",{staticClass:"imgWrap"},[s("img",{attrs:{src:t.imgUrl}})])]),t._v(" "),s("split"),t._v(" "),s("footer",{staticClass:"posterFooter"},[s("headline",{attrs:{headlineTitle:"推广操作描述"}}),t._v(" "),s("span",[t._v("请输入描述内容")])],1)],1)])},staticRenderFns:[]};var n=s("VU/8")(r,i,!1,function(t){s("LXbr")},null,null);e.default=n.exports}});
//# sourceMappingURL=23.65798950e581f46f923f.js.map