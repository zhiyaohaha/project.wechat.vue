webpackJsonp([2],{"0tcr":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),o=i.n(s),n=i("Dd8w"),r=i.n(n),a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.orderFormListDatas?s("div",[s("div",{staticClass:"orderFormListConttent"},[s("header",{staticClass:"orderFormListHeader"},[s("span",{staticClass:"font"},[t._v("订单列表")]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.screenIsShow(!1)}}},[s("img",{attrs:{src:i("4AR8")}}),s("span",[t._v("筛选")])])]),t._v(" "),s("ul",{staticClass:"orderFormList"},t._l(t.orderFormListDatas.data,function(e,i){return s("li",{key:i},[s("img",{attrs:{src:e.head||"../../../static/img/myImg/touxiang.gif"}}),t._v(" "),s("div",{staticClass:"orderFormListDescribe"},[s("div",{staticClass:"up"},[s("span",{staticClass:"applyForTime"},[t._v(t._s(e._createdDate))]),t._v(" "),s("span",{staticClass:"applyFor"},[t._v("申请")])])]),t._v(" "),s("div",{staticClass:"state"},[s("span",{staticClass:"form"},[t._v(t._s(e._product.name))]),t._v(" "),s("span",{staticClass:"stateDescribe"},[t._v(t._s(e._status))])])])}))])]):t._e()},staticRenderFns:[]};var c=i("VU/8")({props:["orderFormListDatas","screenIsShow"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{}},a,!1,function(t){i("nkyP")},null,null).exports,l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.checkboxListDatas?s("div",{staticClass:"checkboxMod"},[s("ul",{staticClass:"checkboxList"},t._l(t.checkboxListDatas,function(e,o){return s("li",{key:o,on:{click:function(e){t.imgIsShow(o)}}},[s("div",[s("img",{directives:[{name:"show",rawName:"v-show",value:e.imgShow,expression:"item.imgShow"}],attrs:{src:i("gZlG")}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!e.imgShow,expression:"!item.imgShow"}],attrs:{src:i("B2k9")}}),t._v(" "),s("span",{class:{checkboxFont:e.imgShow}},[t._v(t._s(e.name))])])])}))]):t._e()},staticRenderFns:[]};var d=i("VU/8")({props:["checkboxListDatas"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{imgIsShow:function(t){this.checkboxListDatas[t].imgShow=!this.checkboxListDatas[t].imgShow}}},l,!1,function(t){i("QVS3")},null,null).exports,A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("span",[t._v(t._s(t.title))])])},staticRenderFns:[]};var m=i("VU/8")({props:["title"],data:function(){return{}},components:{},computed:{},mounted:function(){},methods:{}},A,!1,function(t){i("p7Sp")},null,null).exports,h=i("NYxO"),u={data:function(){return{orderFormTapDatas:[{title:"我的",manNumber:null},{title:"一级代理",manNumber:null},{title:"二级代理",manNumber:null}],orderFormInd:0,footlineTitle:"查看更多",checkboxListDatas1:[{name:"待处理",imgShow:!1,code:"Apply"},{name:"审核中",imgShow:!1,code:"Auditing"},{name:"已完结",imgShow:!1,code:"Loan,UserGiveUp,Refuse"}],screenShow:!1}},components:{orderFormList:c,checkboxList:d,checkboxHeadLine:m},computed:r()({},Object(h.c)(["userrelated"]),{orderListFor1:{get:function(){return this.$store.state.orderListFor1},set:function(){}}}),created:function(){var t=this;this.$store.dispatch("getOrderListFor",{status:"Apply, Auditing, Loan, UserGiveUp, Refuse",level:this.orderFormInd,products:"",id:"",size:10}).then(function(){t.orderFormTapDatas[t.orderFormInd].manNumber=t.orderListFor1.total}),this.$store.dispatch("getUserRelated",{level:this.orderFormInd})},watch:{orderFormInd:function(t){this.$store.dispatch("getUserRelated",{level:t})}},mounted:function(){},updated:function(){},methods:{screenIsShow:function(t){this.screenShow=!this.screenShow;var e="",i="";t&&(this.checkboxListDatas1.forEach(function(t){t.imgShow&&(e+=t.code+",")}),this.userrelated.forEach(function(t){t.imgShow&&(i+=t.product+",")}),e=e.substring(0,e.length-1)||"Apply, Auditing, Loan, UserGiveUp, Refuse",i=i.substring(0,i.length-1),console.log(i),this.$store.dispatch("getOrderListFor",{status:e,level:this.orderFormInd,products:i,id:"",size:10}))},changeColor:function(t){var e=this;this.footlineTitle="查看更多";this.orderFormInd=t,this.$store.dispatch("getOrderListFor",{status:"Apply, Auditing, Loan, UserGiveUp, Refuse",level:this.orderFormInd,products:"",id:"",size:10}).then(function(){e.orderFormTapDatas[e.orderFormInd].manNumber=e.orderListFor1.total})},loadData:function(){var t=this;"没有更多"!==this.footlineTitle&&(this.footlineTitle="加载中",this.$store.dispatch("getOrderListFor",{status:"Apply, Auditing, Loan, UserGiveUp, Refuse",level:this.orderFormInd,products:"",id:this.orderListFor1.data[this.orderListFor1.data.length-1].id,size:10}).then(function(e){if(e.length>0)var i=setTimeout(function(){var s;(s=t.orderListFor1.data).push.apply(s,o()(e)),t.footlineTitle="查看更多",clearTimeout(i)},1e3);else var s=setTimeout(function(){t.footlineTitle="没有更多",clearTimeout(s)},1e3)}))}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.orderListFor1?i("header",{staticClass:"orderFormHeader"},t._l(t.orderFormTapDatas,function(e,s){return i("a",{key:s,class:{active:t.orderFormInd===s},attrs:{href:"javascript:;"},on:{click:function(e){t.changeColor(s)}}},[t._v("\n      "+t._s(e.title)),e.manNumber?i("span",{staticClass:"manNumber"},[t._v("("+t._s(e.manNumber)+")")]):t._e()])})):t._e(),t._v(" "),t.orderListFor1?i("scroll",{staticClass:"wrapper",attrs:{data:t.orderListFor1.data,pullup:!0},on:{scrollToEnd:t.loadData}},[t.orderListFor1?i("orderFormList",{attrs:{orderFormListDatas:t.orderListFor1,screenIsShow:t.screenIsShow}}):t._e(),t._v(" "),i("footline",{attrs:{title:t.footlineTitle}})],1):t._e(),t._v(" "),i("mt-popup",{attrs:{position:"bottom"},model:{value:t.screenShow,callback:function(e){t.screenShow=e},expression:"screenShow"}},[i("header",{staticClass:"mintPopupHeader"},[i("span",{staticClass:"finish",on:{click:function(e){t.screenIsShow(!0)}}},[t._v("完成")])]),t._v(" "),i("div",{staticClass:"mintPopupContent"},[i("div",[i("checkboxHeadLine",{attrs:{title:"选择状态"}}),t._v(" "),i("checkboxList",{attrs:{checkboxListDatas:t.checkboxListDatas1}})],1),t._v(" "),i("div",{staticClass:"blankBox"}),t._v(" "),i("div",[i("checkboxHeadLine",{attrs:{title:"选择产品"}}),t._v(" "),i("checkboxList",{attrs:{checkboxListDatas:t.userrelated}})],1)]),t._v(" "),i("footer",{staticClass:"mintPopupFooter",on:{click:function(e){t.screenIsShow(!1)}}},[t._v("\n      取消\n    ")])])],1)},staticRenderFns:[]};var v=i("VU/8")(u,g,!1,function(t){i("Kd66")},null,null);e.default=v.exports},"4AR8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQUY3ODQyMjA1MjExRThCMEU1REE4RUY5NzAxOUY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEwQUY3ODQzMjA1MjExRThCMEU1REE4RUY5NzAxOUY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTBBRjc4NDAyMDUyMTFFOEIwRTVEQThFRjk3MDE5RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTBBRjc4NDEyMDUyMTFFOEIwRTVEQThFRjk3MDE5RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5JKmAnAAADu0lEQVR42syZT0gUURzH34yrSGYejMogBIm0S1B7CYpQXFo6pIcgsQ5BHbqsCJn9oXsS0kHaDkF6KzGoQ55qVxLLkCA7dEhBAiksIcG/+WeT+r74vnpts7NvxsHdH3zYnZ15877z5r3fn7dWIpEQPqwQHAERcAjUgB2ghOe/g69gHIyCF2AIpNJvFIlEXDsKeRS2F7SCZlDuct0WUEVOgBvgG3gAroJV0w5NBe4GnaAJFPA3OULPwCswBibBAs9tBZVgPzgKjoMKPtxj8DJIgRcprpTH/SAOBsB6hjaz4DMYBvf5UHVgD38TQQgsBj18ndJGQAy89TFn5YMk/Uz2TALLwFNwDPwA18Ft8FNssoUyjJwSNw8awaDIkTkJ7NHE1YJ3IodmOyyIZr7WxlyLSxeoXIngnBsUeWC6QOVKRrgg8sJCWoRo4vdYLlarsmQyaTOMvkEYXFUj2Epn2p/Fz90Ey3wAv8j2HS59nGPcvqVecaHmjOMuDSs4N4s3OEiy/TXez8k+8fMsRrNQDWc5Y+uAy43nmaVIawGWD1q1bGc+Qz8y8/kCtkt3ZzNlEgz86y4ClziCgoso7HHkwpqXuML7CYf0S2p4zsM6m/mcYFaSze6AJ6AIPGJINLEyXl/EbOZuluuVlrAUWM2DMYOO5CQ/Dz4y1+s2FNjN62W7CwbXf+DnPilwJw8mDTubA6fBGjhFt+RmMV63xnZzBn0oLbtsLU1f8DCfpCtqM5iPYc3pt3lI1RZVZm5vwF3EOZ/UfHQyfd7F/YY6tZpKfbRv4WdVhvNVadeZmtKyJAVO86DSh8DlgK8TaVqmbZaGgqVjvpjSMm6zbhWsvvLFlJZRWytmolpJmTND/C2glt+HNsvAGelzQH3A/b0ncx7a1FOL1DRsczuiV3OqQdoB4iW/VBp6EZdTyg92MVE46SMJCPL1hqlhnZr+pPwToE9zwFYOxFmaM+/D6E2k1yTtDHeHtTC2mdbGvheo5b+iaUo70cGaOJvNagthI6NXq5UB7Ri9KXXOctgffMgSYLMK94MscbdxYZxxK9wF870hNhg0HEm/VquJG2LfIpvAFdCgiZRDfDnghWPxnglNXANGb8VEoEpKo/SPIdYSrwNyQWHeq5P3ln1EIc7RmVsGe9R+NjDTrYARIkY/pxJkuSDuuQ614Sa61y3gUqZMNQz8UYYvwYfqo8eYyraJbnnc5TfdRHeyGb7OLgYGVWZ63h90swlmx5fEv39DVLP4KtFq6Gnx92+IJJOSlNcJ+0uAAQC0LQJRYC5IcQAAAABJRU5ErkJggg=="},B2k9:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzRjUxN0RFMjEyQzExRTg5QjAxOTdCREVDQTJDRTlCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzRjUxN0RGMjEyQzExRTg5QjAxOTdCREVDQTJDRTlCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDNGNTE3REMyMTJDMTFFODlCMDE5N0JERUNBMkNFOUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDNGNTE3REQyMTJDMTFFODlCMDE5N0JERUNBMkNFOUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7dXOewAAABwUlEQVR42uzZOyhFcRzA8b/35DGR12BSFgODRK6NEiGvUawmSowm78LIyuARIsX1CIOQ8piV8ty8BiKP76/zP3XjmFzuf/j/6jO43ZPvOfec/81fmN/vVx4TiVJUoABJSFDBmw/c4QL7mMYy3r++Mdzj4DIcoQ17qEYGwoIoAlloxCG6cAyf15VyRw7sQxWasKH+buQK3mgHGEElxjGMHq9AOYs85OBW/f/MYhcr+gR6AwPLUY9c3KvQzRVKdOg2duQejMaQ/lhDGeeOPDjt6HcfErnnTrGlzJkJvWr4wvXNOa3MGlluJuXiSWA2NpV5I59ojgSm4NLAQGlKk8BYPBgY+PzTN4lRYwNtoA20gTbQBtpAG2gDbaAN/G3go/67xLSJcQOvkWpgYDKuJFC2vQoNDCzCgQTOodawONkKrMGsBE4hE/kGBdbhCesS+IJWjCHegLg0DCpnh/fDXWbkKi5iPsRPdCKWlLPLuv11HezAiXL2pX0hiCvXv3sG3e6LgVvAb2hRzqb5KM6UswW2hnO8BjkoDukoRoP+uRmrgW+K9DhQzmBBP0Wyd9ip18moIAe+6BOXqzagV5Nv/4b4FGAA/gxZXF4GD8QAAAAASUVORK5CYII="},Kd66:function(t,e){},QVS3:function(t,e){},gZlG:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZGRjZEOTM2MjEyQjExRTg4MjI2QzIwNzg3OEZCMDBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZGRjZEOTM3MjEyQjExRTg4MjI2QzIwNzg3OEZCMDBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkZGNkQ5MzQyMTJCMTFFODgyMjZDMjA3ODc4RkIwMEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkZGNkQ5MzUyMTJCMTFFODgyMjZDMjA3ODc4RkIwMEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5+fnCXAAAChklEQVR42syZz08TQRTHX7ctpUhpI4kk9QAXwXDAg+HmhSOJQRFMDCfEizHxgidjuHgDvGi8YTAeCDFqBP0vCF44AFESNRqIGKlIW6HAlu9rd6CBnWW3dNh5ySfZdCc7n86PNzuzgdTMENlECHSCa+AKaAAJqmz8BatgFkyBaZCTyRyOq2AYtJLaSFg0gz7wHTwA7w4XNEquA+AJ+HgKgnbRCN6CZyAok3xs/RO/474lekSyCzwifeIeuFkqWQWeWt2tU4yAiJC8AZpIv2CnHiHZTfrGdSF5SWPJdiGZ1FgyKZJ5zI/ajchZOnOhj4xwjLLfpmk7NW9XjCd13PBLsPbiAAWj5ygQilJNU5dzeb8Ejaq6/d/M3IY+kvaC/yizNKmHpEwwvThO5taa/5InETwVyZMKKpe0E8zvZCnz+ZVrQdlLbzFB1bdRdbKDzO00Zb++9/RQJ8H04kva/f/b27NkN6LIXUZ1PYVijcXKUGllBH957xHZDXNr/aAQKnMrWmlBR8nMl4nCAPciqkLwmJZcK85Al6KqBI+d3SzKM5ErcxI1Igllgq5SEM9ErkwmWrhu6VcmWNjGpmaG8m4KBqMNELuNt5aag5ZGeqL8LgTjygR5b+46mXOlR1o0XKta0PuKYyeqWrCsZVGIcjfvC5o5ZYJlr90sw0sly+UxLtMLY8oExdq9Uc4+J/dnroDi4FO2dW7JFY13iyuiu+c0lvwkJKc0lvwgJN+AnxoK/gCvhSQPzkENJR+CzdIUxK05qpHgCzBhlyfZ/LkGguPgriyZ8xLCR8G9YMkHOT7YvwXuWC6OGzE+/efDfT4O5rPLy+A8CFdYagcsW2mGP49MkuQTyZ4AAwBxnjAZ1rkg+QAAAABJRU5ErkJggg=="},nkyP:function(t,e){},p7Sp:function(t,e){}});
//# sourceMappingURL=2.e822b402a17b3a1c9f12.js.map