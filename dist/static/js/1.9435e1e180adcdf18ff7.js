webpackJsonp([1],{"06OY":function(t,e,s){var r=s("3Eo+")("meta"),n=s("EqjI"),o=s("D2L2"),i=s("evD5").f,a=0,u=Object.isExtensible||function(){return!0},c=!s("S82l")(function(){return u(Object.preventExtensions({}))}),f=function(t){i(t,r,{value:{i:"O"+ ++a,w:{}}})},d=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return c&&d.NEED&&u(t)&&!o(t,r)&&f(t),t}}},"0iBC":function(t,e){},"4WTo":function(t,e,s){var r=s("NWt+");t.exports=function(t,e){var s=[];return r(t,!1,s.push,s,e),s}},"7Doy":function(t,e,s){var r=s("EqjI"),n=s("7UMu"),o=s("dSzd")("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},"7UMu":function(t,e,s){var r=s("R9M2");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"9Bbf":function(t,e,s){"use strict";var r=s("kM2E");t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},"9C8M":function(t,e,s){"use strict";var r=s("evD5").f,n=s("Yobk"),o=s("xH/j"),i=s("+ZMJ"),a=s("2KxR"),u=s("NWt+"),c=s("vIB/"),f=s("EGZi"),d=s("bRrM"),h=s("+E39"),l=s("06OY").fastKey,v=s("LIJb"),p=h?"_s":"size",w=function(t,e){var s,r=l(e);if("F"!==r)return t._i[r];for(s=t._f;s;s=s.n)if(s.k==e)return s};t.exports={getConstructor:function(t,e,s,c){var f=t(function(t,r){a(t,f,e,"_i"),t._t=e,t._i=n(null),t._f=void 0,t._l=void 0,t[p]=0,void 0!=r&&u(r,s,t[c],t)});return o(f.prototype,{clear:function(){for(var t=v(this,e),s=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete s[r.i];t._f=t._l=void 0,t[p]=0},delete:function(t){var s=v(this,e),r=w(s,t);if(r){var n=r.n,o=r.p;delete s._i[r.i],r.r=!0,o&&(o.n=n),n&&(n.p=o),s._f==r&&(s._f=n),s._l==r&&(s._l=o),s[p]--}return!!r},forEach:function(t){v(this,e);for(var s,r=i(t,arguments.length>1?arguments[1]:void 0,3);s=s?s.n:this._f;)for(r(s.v,s.k,this);s&&s.r;)s=s.p},has:function(t){return!!w(v(this,e),t)}}),h&&r(f.prototype,"size",{get:function(){return v(this,e)[p]}}),f},def:function(t,e,s){var r,n,o=w(t,e);return o?o.v=s:(t._l=o={i:n=l(e,!0),k:e,v:s,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[p]++,"F"!==n&&(t._i[n]=o)),t},getEntry:w,setStrong:function(t,e,s){c(t,e,function(t,s){this._t=v(t,e),this._k=s,this._l=void 0},function(){for(var t=this,e=t._k,s=t._l;s&&s.r;)s=s.p;return t._t&&(t._l=s=s?s.n:t._t._f)?f(0,"keys"==e?s.k:"values"==e?s.v:[s.k,s.v]):(t._t=void 0,f(1))},s?"entries":"values",!s,!0),d(e)}}},ALrJ:function(t,e,s){var r=s("+ZMJ"),n=s("MU5D"),o=s("sB3e"),i=s("QRG4"),a=s("oeOm");t.exports=function(t,e){var s=1==t,u=2==t,c=3==t,f=4==t,d=6==t,h=5==t||d,l=e||a;return function(e,a,v){for(var p,w,_=o(e),y=n(_),m=r(a,v,3),g=i(y.length),x=0,C=s?l(e,g):u?l(e,0):void 0;g>x;x++)if((h||x in y)&&(w=m(p=y[x],x,_),t))if(s)C[x]=w;else if(w)switch(t){case 3:return!0;case 5:return p;case 6:return x;case 2:C.push(p)}else if(f)return!1;return d?-1:c||f?f:C}}},BDhv:function(t,e,s){var r=s("kM2E");r(r.P+r.R,"Set",{toJSON:s("m9gC")("Set")})},HpRW:function(t,e,s){"use strict";var r=s("kM2E"),n=s("lOnJ"),o=s("+ZMJ"),i=s("NWt+");t.exports=function(t){r(r.S,t,{from:function(t){var e,s,r,a,u=arguments[1];return n(this),(e=void 0!==u)&&n(u),void 0==t?new this:(s=[],e?(r=0,a=o(u,arguments[2],2),i(t,!1,function(t){s.push(a(t,r++))})):i(t,!1,s.push,s),new this(s))}})}},LIJb:function(t,e,s){var r=s("EqjI");t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},OBU7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("lHA8"),n=s.n(r),o=s("c/Tr"),i=s.n(o),a=s("Dd8w"),u=s.n(a),c=s("NYxO"),f={name:"set-password-page",data:function(){return{passwordCase:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],keyboardShow:!1,password:"",verifyPassword:"",passwordCaseIndex:0,verify:!0,submitColor:!1}},components:{keyboardMod:s("Qrrh").a},computed:u()({},Object(c.c)(["mobilePhone"])),watch:{password:function(t){var e=this;if(6===t.length){var s=t.split(""),r=[],o=i()(new n.a(s));if(s.forEach(function(t,e,s){1*t+1==s[e+1]&&r.push(t)}),1===o.length||5===r.length)return this.MessageBox.alert("密码不能为相同或连续的数字"),this.passwordCaseIndex=0,this.__eliminate(),void(this.password="");var a=setTimeout(function(){e.verify=!1,e.__eliminate(),e.passwordCaseIndex=0,clearTimeout(a)},400)}},verifyPassword:function(t){var e=this;if(6===t.length){if(t!==this.password)return void this.MessageBox.alert("两次输入的密码不同，请重新设置").then(function(){e.verify=!0,e.password="",e.__eliminate(),e.verifyPassword="",e.passwordCaseIndex=0});this.submitColor=!0}else this.submitColor=!1},verify:function(t){t?(window.removeEventListener("popstate",this.__goBack,!1),window.history.pushState(null,"","#/homePage"),window.history.pushState(null,"","#/myPage")):(this.pushHistory(),window.addEventListener("popstate",this.__goBack,!1))}},mounted:function(){window.history.pushState(null,"","#/tieOnCardPage"),window.history.pushState(null,"","#/setPasswordPage")},methods:{__goBack:function(){this.verify=!0,this.verifyPassword="",this.password="",this.passwordCaseIndex=0,this.__eliminate()},__eliminate:function(){this.passwordCase.forEach(function(t,e){t.show=!1})},submit:function(){var t=this;this.$store.commit("AWAITTRUE"),this.$store.dispatch("getSetPayPassword",{password:this.password,confimPassword:this.verifyPassword}).then(function(e){e.success?(t.$store.commit("POST_OPENID",{result:{data:{hasPayPassword:!0}}}),window.history.replaceState(null,"title","#"),t.$router.replace({name:"WithdrawalPage"})):t.MessageBox.alert(e.message,"提示")})},keyboardIsShow:function(){this.keyboardShow=!0},press:function(t,e){if((e=e||event).preventDefault(),"string"==typeof t)if(e.target.style.backgroundColor="#ccc","x"===t)this.__eliminate(),this.verify?this.password="":this.verifyPassword="",this.passwordCaseIndex=0;else{if(this.passwordCaseIndex>5)return!1;if("."===t)return void this.MessageBox.alert("密码中不能设置符号","提示");this.verify?this.password+=t:this.verifyPassword+=t,this.passwordCase[this.passwordCaseIndex].show=!0,this.passwordCaseIndex++}else if(t.active=!0,t.content.length>2){if(0===this.passwordCaseIndex)return!1;this.passwordCaseIndex--,this.passwordCase[this.passwordCaseIndex].show=!1,this.verify?this.password=this.password.substring(0,this.password.length-1):this.verifyPassword=this.verifyPassword.substring(0,this.verifyPassword.length-1)}else this.keyboardShow=!1},letGo:function(t,e){(e=e||event).preventDefault(),"string"==typeof t?e.target.style.backgroundColor="#fff":t.active=!1}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"setPassword"},[s("header",{staticClass:"setPasswordHeader"},[t.verify?s("p",{staticClass:"account"},[t._v("请为账号"+t._s(t.mobilePhone.substr(0,3)+"******"+t.mobilePhone.substr(9)))]):t._e(),t._v(" "),t.verify?s("p",{staticClass:"passwordText"},[t._v("设置六位数的提现密码")]):t._e(),t._v(" "),t.verify?t._e():s("p",{staticClass:"verify"},[t._v("请再次输入")])]),t._v(" "),s("ul",{staticClass:"setPasswordContent",on:{click:t.keyboardIsShow}},t._l(t.passwordCase,function(t,e){return s("li",{key:e},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"it.show"}],staticClass:"dot"})])})),t._v(" "),t.verify?s("p",{staticClass:"reminder"},[t._v("提现密码不能重复、连续数字")]):t._e(),t._v(" "),t.verify?t._e():s("footer",{staticClass:"setPasswordFooter"},[s("button",{staticClass:"submit",class:{active:t.submitColor},on:{click:t.submit}},[t._v("下一步")])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("keyboardMod",{directives:[{name:"show",rawName:"v-show",value:t.keyboardShow,expression:"keyboardShow"}],attrs:{press:t.press,letGo:t.letGo}})],1)],1)},staticRenderFns:[]};var h=s("VU/8")(f,d,!1,function(t){s("eNOm")},null,null);e.default=h.exports},Qrrh:function(t,e,s){"use strict";var r={name:"keyboard-mod",props:{press:{type:Function,default:null},letGo:{type:Function,default:null}},data:function(){return{numArr:["1","2","3","4","5","6","7","8","9","x","0","."],affirmList:[{content:"../../../static/img/keybpardImg/shezhitixianmima_icon_delete1.png",active:!1},{content:"完成",active:!1}]}},components:{},computed:{},mounted:function(){},methods:{}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keyboard"},[s("div",{staticClass:"keyboardContent"},[s("ul",{staticClass:"keyboardList"},t._l(t.numArr,function(e,r){return s("li",{on:{touchstart:function(s){s.stopPropagation(),t.press(e)},touchend:function(s){s.stopPropagation(),t.letGo(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),s("ul",{staticClass:"affirmList"},t._l(t.affirmList,function(e,r){return s("li",{key:r,class:{active:e.active},on:{touchstart:function(s){s.stopPropagation(),t.press(e)},touchend:function(s){s.stopPropagation(),t.letGo(e)}}},[e.content.length>2?s("img",{attrs:{src:e.content}}):t._e(),t._v(" "),2===e.content.length?s("span",[t._v(t._s(e.content))]):t._e()])}))])])},staticRenderFns:[]};var o=s("VU/8")(r,n,!1,function(t){s("0iBC")},null,null);e.a=o.exports},eNOm:function(t,e){},ioQ5:function(t,e,s){s("HpRW")("Set")},lHA8:function(t,e,s){t.exports={default:s("pPW7"),__esModule:!0}},m9gC:function(t,e,s){var r=s("RY/4"),n=s("4WTo");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return n(this)}}},oNmr:function(t,e,s){s("9Bbf")("Set")},oeOm:function(t,e,s){var r=s("7Doy");t.exports=function(t,e){return new(r(t))(e)}},pPW7:function(t,e,s){s("M6a0"),s("zQR9"),s("+tPU"),s("ttyz"),s("BDhv"),s("oNmr"),s("ioQ5"),t.exports=s("FeBl").Set},qo66:function(t,e,s){"use strict";var r=s("7KvD"),n=s("kM2E"),o=s("06OY"),i=s("S82l"),a=s("hJx8"),u=s("xH/j"),c=s("NWt+"),f=s("2KxR"),d=s("EqjI"),h=s("e6n0"),l=s("evD5").f,v=s("ALrJ")(0),p=s("+E39");t.exports=function(t,e,s,w,_,y){var m=r[t],g=m,x=_?"set":"add",C=g&&g.prototype,b={};return p&&"function"==typeof g&&(y||C.forEach&&!i(function(){(new g).entries().next()}))?(g=e(function(e,s){f(e,g,t,"_c"),e._c=new m,void 0!=s&&c(s,_,e[x],e)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in C&&(!y||"clear"!=t)&&a(g.prototype,t,function(s,r){if(f(this,g,t),!e&&y&&!d(s))return"get"==t&&void 0;var n=this._c[t](0===s?0:s,r);return e?this:n})}),y||l(g.prototype,"size",{get:function(){return this._c.size}})):(g=w.getConstructor(e,t,_,x),u(g.prototype,s),o.NEED=!0),h(g,t),b[t]=g,n(n.G+n.W+n.F,b),y||w.setStrong(g,t,_),g}},ttyz:function(t,e,s){"use strict";var r=s("9C8M"),n=s("LIJb");t.exports=s("qo66")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(n(this,"Set"),t=0===t?0:t,t)}},r)}});
//# sourceMappingURL=1.9435e1e180adcdf18ff7.js.map