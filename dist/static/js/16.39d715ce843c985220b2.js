webpackJsonp([16],{Ovv7:function(t,e){},XVtM:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAeCAYAAADzXER0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBNjE1OEVBMzYxRDExRTg5QjE4QTFDNzc2NEFCQzkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBNjE1OEVCMzYxRDExRTg5QjE4QTFDNzc2NEFCQzkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEE2MTU4RTgzNjFEMTFFODlCMThBMUM3NzY0QUJDOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEE2MTU4RTkzNjFEMTFFODlCMThBMUM3NzY0QUJDOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lqDvpAAABBUlEQVR42pyUuQ7CMAyGU3MsPABQZk4x0SeACcEDI5ayMjFy7dCWBfEG2JIjRVEPO5Z+qYe+T7GbNEqS5GyM6WB2mMIoCjA9zAqTYvpaeIt5YhaYk0ZA8AuzYcGcBQMpbFiwdgSpRADO9ZsFD6kAvPs3t/CQtAAlz9wVzFgwlMJUmSdIywRQ05IV3KtWAA0DzXgGJJj6AhB8TncFVhBLYaqcBTcW0AxiUGzlnFuwgoMGdgUXzFcLU7UwXUykhUfc75KOMgSAE8wVs4dAkPouIBSkF20BSJti7INNm6QWrIMbwSpYBJbBYtAfmA/SQfhI/mFq0MJBoIWPIaCFf3zEVCDVX4ABAMa1UNVCOCLWAAAAAElFTkSuQmCC"},pF1S:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var A={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{ref:"posterWrap",staticClass:"posterPage"},[A("div",{staticClass:"posterContent",style:{backgroundImage:t.imgUrl}},[A("div",{staticClass:"switchoverImg",on:{click:t.switchoverImg}},[A("span",[t._v("换一种海报")]),t._v(" "),A("img",{attrs:{src:i("XVtM")}})])])])},staticRenderFns:[]};var n=i("VU/8")({data:function(){return{num:1}},components:{},computed:{imgUrl:function(){return"url(../../../static/img/posterImg/haibao"+this.num+".png)"}},beforeCreate:function(){var t=this;1*this.getCookie("whether")<1&&this.$router.replace({name:"phoneApprove",params:{name1:t.$route.name,name2:""}}),t=null},mounted:function(){this.__boxheight(this.$refs.posterWrap)},methods:{switchoverImg:function(){this.num++,this.num>3&&(this.num=1)}}},A,!1,function(t){i("Ovv7")},null,null);e.default=n.exports}});
//# sourceMappingURL=16.39d715ce843c985220b2.js.map