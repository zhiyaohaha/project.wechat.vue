webpackJsonp([0],{GQaK:function(t,i,e){"use strict";var s=function(){return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],s=!0,o=!1,r=void 0;try{for(var n,h=t[Symbol.iterator]();!(s=(n=h.next()).done)&&(e.push(n.value),!i||e.length!==i);s=!0);}catch(t){o=!0,r=t}finally{try{!s&&h.return&&h.return()}finally{if(o)throw r}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)};var r=navigator.userAgent.toLowerCase(),n=/wechatdevtools/.test(r),h=r.indexOf("android")>0;function a(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function l(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var r=e[o];for(var n in r)t[n]=r[n]}return t}var c=document.createElement("div").style,p=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==c[t[i]])return i;return!1}();function d(t){return!1!==p&&("standard"===p?"transitionEnd"===t?"transitionend":t:p+t.charAt(0).toUpperCase()+t.substr(1))}function u(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s})}function m(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s})}function f(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return{left:i,top:e}}var g=d("transform"),v=d("perspective")in c,y="ontouchstart"in window||n,w=!1!==g,x=d("transition")in c,T={transform:g,transitionTimingFunction:d("transitionTimingFunction"),transitionDuration:d("transitionDuration"),transitionProperty:d("transitionProperty"),transitionDelay:d("transitionDelay"),transformOrigin:d("transformOrigin"),transitionEnd:d("transitionEnd")},b=1,S={touchstart:b,touchmove:b,touchend:b,mousedown:2,mousemove:2,mouseup:2};function _(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function M(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}function P(t,i){t.removeChild(i)}var X={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:700,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.001,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:y,disableTouch:!y,observeDOM:!0,autoBlur:!0,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,mouseWheel:!1};var Y={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}};function D(t,i,e,s,o,r){var n=t-i,h=Math.abs(n)/e,a=r.deceleration,l=r.itemHeight,c=r.swipeBounceTime,p=r.wheel,d=r.swipeTime,u=p?4:15,m=t+h/a*(n<0?-1:1);return p&&l&&(m=Math.round(m/l)*l),m<s?(m=o?s-o/u*h:s,d=c):m>0&&(m=o?o/u*h:0,d=c),{destination:Math.round(m),duration:d}}var E=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)},k=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)},W=1,H=-1,O=1,L=-1;function z(t){console.error("[BScroll warn]: "+t)}var C,A,I,F,R,B,N,U,V;function q(t){var i=document.createElement("div"),e=document.createElement("div");return i.style.cssText="position:absolute;z-index:9999;pointerEvents:none",e.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",e.className="bscroll-indicator","horizontal"===t?(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",e.style.height="100%",i.className="bscroll-horizontal-scrollbar"):(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",e.style.width="100%",i.className="bscroll-vertical-scrollbar"),i.style.cssText+=";overflow:hidden",i.appendChild(e),i}function j(t,i){this.wrapper=i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.direction=i.direction,i.fade?(this.visible=0,this.wrapperStyle.opacity="0"):this.visible=1,this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.x=0,this.y=0,i.interactive&&this._addDOMEvents()}function Z(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||z("can not resolve the wrapper dom"),this.scroller=this.wrapper.children[0],this.scroller||z("the wrapper need at least one child element to be scroller"),this.scrollerStyle=this.scroller.style,this._init(t,i)}j.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t)}},j.prototype.refresh=function(){this.transitionTime(),this._calculate(),this.updatePosition()},j.prototype.fade=function(t,i){var e=this;if(!i||this.visible){var s=t?250:500;t=t?"1":"0",this.wrapperStyle[T.transitionDuration]=s+"ms",clearTimeout(this.fadeTimeout),this.fadeTimeout=setTimeout(function(){e.wrapperStyle.opacity=t,e.visible=+t},0)}},j.prototype.updatePosition=function(){if("vertical"===this.direction){var t=Math.round(this.sizeRatioY*this.scroller.y);if(t<0){this.transitionTime(500);var i=Math.max(this.indicatorHeight+3*t,8);this.indicatorStyle.height=i+"px",t=0}else if(t>this.maxPosY){this.transitionTime(500);var e=Math.max(this.indicatorHeight-3*(t-this.maxPosY),8);this.indicatorStyle.height=e+"px",t=this.maxPosY+this.indicatorHeight-e}else this.indicatorStyle.height=this.indicatorHeight+"px";this.y=t,this.scroller.options.useTransform?this.indicatorStyle[T.transform]="translateY("+t+"px)"+this.scroller.translateZ:this.indicatorStyle.top=t+"px"}else{var s=Math.round(this.sizeRatioX*this.scroller.x);if(s<0){this.transitionTime(500);var o=Math.max(this.indicatorWidth+3*s,8);this.indicatorStyle.width=o+"px",s=0}else if(s>this.maxPosX){this.transitionTime(500);var r=Math.max(this.indicatorWidth-3*(s-this.maxPosX),8);this.indicatorStyle.width=r+"px",s=this.maxPosX+this.indicatorWidth-r}else this.indicatorStyle.width=this.indicatorWidth+"px";this.x=s,this.scroller.options.useTransform?this.indicatorStyle[T.transform]="translateX("+s+"px)"+this.scroller.translateZ:this.indicatorStyle.left=s+"px"}},j.prototype.transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.indicatorStyle[T.transitionDuration]=t+"ms"},j.prototype.transitionTimingFunction=function(t){this.indicatorStyle[T.transitionTimingFunction]=t},j.prototype.destroy=function(){this._removeDOMEvents(),this.wrapper.parentNode.removeChild(this.wrapper)},j.prototype._start=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=a(),this._handleMoveEvents(u),this.scroller.trigger("beforeScrollStart")},j.prototype._move=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.moved||this.scroller.trigger("scrollStart"),this.moved=!0;var e=i.pageX-this.lastPointX;this.lastPointX=i.pageX;var s=i.pageY-this.lastPointY;this.lastPointY=i.pageY;var o=this.x+e,r=this.y+s;this._pos(o,r)},j.prototype._end=function(t){if(this.initiated){this.initiated=!1,t.preventDefault(),t.stopPropagation(),this._handleMoveEvents(m);var i=this.scroller.options.snap;if(i){var e=i.speed,s=i.easing,o=void 0===s?Y.bounce:s,r=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),n=e||Math.max(Math.max(Math.min(Math.abs(this.scroller.x-r.x),1e3),Math.min(Math.abs(this.scroller.y-r.y),1e3)),300);this.scroller.x===r.x&&this.scroller.y===r.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=r,this.scroller.scrollTo(r.x,r.y,n,o))}this.moved&&this.scroller.trigger("scrollEnd",{x:this.scroller.x,y:this.scroller.y})}},j.prototype._pos=function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=Math.round(t/this.sizeRatioX),i=Math.round(i/this.sizeRatioY),this.scroller.scrollTo(t,i),this.scroller.trigger("scroll",{x:this.scroller.x,y:this.scroller.y})},j.prototype._calculate=function(){if("vertical"===this.direction){var t=this.wrapper.clientHeight;this.indicatorHeight=Math.max(Math.round(t*t/(this.scroller.scrollerHeight||t||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=t-this.indicatorHeight,this.sizeRatioY=this.maxPosY/this.scroller.maxScrollY}else{var i=this.wrapper.clientWidth;this.indicatorWidth=Math.max(Math.round(i*i/(this.scroller.scrollerWidth||i||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=i-this.indicatorWidth,this.sizeRatioX=this.maxPosX/this.scroller.maxScrollX}},j.prototype._addDOMEvents=function(){var t=u;this._handleDOMEvents(t)},j.prototype._removeDOMEvents=function(){var t=m;this._handleDOMEvents(t),this._handleMoveEvents(t)},j.prototype._handleMoveEvents=function(t){this.scroller.options.disableTouch||t(window,"touchmove",this),this.scroller.options.disableMouse||t(window,"mousemove",this)},j.prototype._handleDOMEvents=function(t){this.scroller.options.disableTouch||(t(this.indicator,"touchstart",this),t(window,"touchend",this)),this.scroller.options.disableMouse||(t(this.indicator,"mousedown",this),t(window,"mouseup",this))},(C=Z).prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.options.observeDOM&&this._initDOMObserver(),this.options.autoBlur&&this._handleAutoBlur(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable()},C.prototype._handleOptions=function(t){this.options=l({},X,t),this.translateZ=this.options.HWCompositing&&v?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&x,this.options.useTransform=this.options.useTransform&&w,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap")},C.prototype._addDOMEvents=function(){var t=u;this._handleDOMEvents(t)},C.prototype._removeDOMEvents=function(){var t=m;this._handleDOMEvents(t)},C.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),y&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,T.transitionEnd,this)},C.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel(),this.options.mouseWheel&&this._initMouseWheel()},C.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var t=this,i=!1;Object.defineProperty(this,"isInTransition",{get:function(){return i},set:function(e){i=e;for(var s=t.scroller.children.length?t.scroller.children:[t.scroller],o=i&&!t.pulling?"none":"auto",r=0;r<s.length;r++)s[r].style.pointerEvents=o}})}},C.prototype._handleAutoBlur=function(){this.on("beforeScrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()})},C.prototype._initDOMObserver=function(){var t=this;if("undefined"!=typeof MutationObserver){var i=void 0,e=new MutationObserver(function(e){if(!t._shouldNotRefresh()){for(var s=!1,o=!1,r=0;r<e.length;r++){var n=e[r];if("attributes"!==n.type){s=!0;break}if(n.target!==t.scroller){o=!0;break}}s?t.refresh():o&&(clearTimeout(i),i=setTimeout(function(){t._shouldNotRefresh()||t.refresh()},60))}});e.observe(this.scroller,{attributes:!0,childList:!0,subtree:!0}),this.on("destroy",function(){e.disconnect()})}else this._checkDOMUpdate()},C.prototype._shouldNotRefresh=function(){var t=this.x>0||this.x<this.maxScrollX||this.y>0||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},C.prototype._checkDOMUpdate=function(){var t=_(this.scroller),i=t.width,e=t.height;function s(){var o=this;setTimeout(function(){(function(){if(!this.destroyed){var o=(t=_(this.scroller)).width,r=t.height;i===o&&e===r||this.refresh(),i=o,e=r,s.call(this)}}).call(o)},1e3)}s.call(this)},C.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(M(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation()));break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._onMouseWheel(t)}},C.prototype.refresh=function(){var t=_(this.wrapper);this.wrapperWidth=t.width,this.wrapperHeight=t.height;var i=_(this.scroller);this.scrollerWidth=i.width,this.scrollerHeight=i.height;var e=this.options.wheel;e?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=e.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=f(this.wrapper),this.trigger("refresh"),this.resetPosition()},C.prototype.enable=function(){this.enabled=!0},C.prototype.disable=function(){this.enabled=!1},(A=Z).prototype._start=function(t){var i=S[t.type];if((i===b||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!M(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=a(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart")}},A.prototype._move=function(t){if(this.enabled&&!this.destroyed&&S[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,s=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=s;var o=Math.abs(this.distX),r=Math.abs(this.distY),n=a();if(!(n-this.endTime>this.options.momentumLimitTime&&r<this.options.momentumLimitDistance&&o<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(o>r+this.options.directionLockThreshold?this.directionLocked="h":r>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);s=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0}e=this.hasHorizontalScroll?e:0,s=this.hasVerticalScroll?s:0,this.movingDirectionX=e>0?L:e<0?O:0,this.movingDirectionY=s>0?H:s<0?W:0;var h=this.x+e,l=this.y+s;(h>0||h<this.maxScrollX)&&(h=this.options.bounce?this.x+e/3:h>0?0:this.maxScrollX),(l>0||l<this.maxScrollY)&&(l=this.options.bounce?this.y+s/3:l>0?0:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(h,l),n-this.startTime>this.options.momentumLimitTime&&(this.startTime=n,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>1&&this.trigger("scroll",{x:this.x,y:this.y});var c=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,p=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,d=this.pointX-c,u=this.pointY-p;(d>document.documentElement.clientWidth-this.options.momentumLimitDistance||d<this.options.momentumLimitDistance||u<this.options.momentumLimitDistance||u>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},A.prototype._end=function(t){if(this.enabled&&!this.destroyed&&S[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!M(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),e=Math.round(this.y),s=i-this.absStartX,o=e-this.absStartY;if(this.directionX=s>0?L:s<0?O:0,this.directionY=o>0?H:o<0?W:0,!this.options.pullDownRefresh||!this._checkPullDown())if(this._checkClick(t))this.trigger("scrollCancel");else if(!this.resetPosition(this.options.bounceTime,Y.bounce)){this.scrollTo(i,e),this.endTime=a();var r=this.endTime-this.startTime,n=Math.abs(i-this.startX),h=Math.abs(e-this.startY);if(this._events.flick&&r<this.options.flickLimitTime&&n<this.options.flickLimitDistance&&h<this.options.flickLimitDistance)this.trigger("flick");else{var l=0;if(this.options.momentum&&r<this.options.momentumLimitTime&&(h>this.options.momentumLimitDistance||n>this.options.momentumLimitDistance)){var c=this.hasHorizontalScroll?D(this.x,this.startX,r,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options):{destination:i,duration:0},p=this.hasVerticalScroll?D(this.y,this.startY,r,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options):{destination:e,duration:0};i=c.destination,e=p.destination,l=Math.max(c.duration,p.duration),this.isInTransition=!0}else this.options.wheel&&(e=Math.round(e/this.itemHeight)*this.itemHeight,l=this.options.wheel.adjustTime||400);var d=Y.swipe;if(this.options.snap){var u=this._nearestSnap(i,e);this.currentPage=u,l=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-u.x),1e3),Math.min(Math.abs(e-u.y),1e3)),300),i=u.x,e=u.y,this.directionX=0,this.directionY=0,d=this.options.snap.easing||Y.bounce}if(i!==this.x||e!==this.y)return(i>0||i<this.maxScrollX||e>0||e<this.maxScrollY)&&(d=Y.swipeBounce),void this.scrollTo(i,e,l,d);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y})}}}},A.prototype._checkClick=function(t){var i,e,s,o=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,!this.moved){if(this.options.wheel){if(this.target&&this.target.className===this.options.wheel.wheelWrapperClass){var r=Math.abs(Math.round(this.y/this.itemHeight)),n=Math.round((this.pointY+f(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[r+n]}return this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,Y.swipe),!0}return!o&&(this.options.tap&&(i=t,e=this.options.tap,(s=document.createEvent("Event")).initEvent(e,!0,!0),s.pageX=i.pageX,s.pageY=i.pageY,i.target.dispatchEvent(s)),this.options.click&&!M(t.target,this.options.preventDefaultException)&&function(t){var i=void 0;"mouseup"===t.type||"mousecancel"===t.type?i=t:"touchend"!==t.type&&"touchcancel"!==t.type||(i=t.changedTouches[0]);var e={};i&&(e.screenX=i.screenX||0,e.screenY=i.screenY||0,e.clientX=i.clientX||0,e.clientY=i.clientY||0);var s=void 0;"undefined"!=typeof MouseEvent?s=new MouseEvent("click",l({bubbles:!0,cancelable:!1},e)):((s=document.createEvent("Event")).initEvent("click",!0,!1),l(s,e)),s._constructed=!0,t.target.dispatchEvent(s)}(t),!0)}return!1},A.prototype._resize=function(){var t=this;this.enabled&&(h&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))},A.prototype._startProbe=function(){k(this.probeTimer),this.probeTimer=E(function i(){var e=t.getComputedPosition();t.trigger("scroll",e),t.isInTransition?t.probeTimer=E(i):t.trigger("scrollEnd",e)});var t=this},A.prototype._transitionProperty=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";this.scrollerStyle[T.transitionProperty]=t},A.prototype._transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[T.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[T.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t)},A.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[T.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[T.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t)},A.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.pulling||this.resetPosition(this.options.bounceTime,Y.bounce)||(this.isInTransition=!1,3!==this.options.probeType&&this.trigger("scrollEnd",{x:this.x,y:this.y})))},A.prototype._translate=function(t,i){if(this.options.useTransform?this.scrollerStyle[T.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var e=this.options.wheel.rotate,s=void 0===e?25:e,o=0;o<this.items.length;o++){var r=s*(i/this.itemHeight+o);this.items[o].style[T.transform]="rotateX("+r+"deg)"}if(this.x=t,this.y=i,this.indicators)for(var n=0;n<this.indicators.length;n++)this.indicators[n].updatePosition()},A.prototype._animate=function(t,i,e,s){var o=this,r=this.x,n=this.y,h=a(),l=h+e;this.isAnimating=!0,k(this.animateTimer),function c(){var p=a();if(p>=l)return o.isAnimating=!1,o._translate(t,i),void(o.pulling||o.resetPosition(o.options.bounceTime)||o.trigger("scrollEnd",{x:o.x,y:o.y}));var d=s(p=(p-h)/e),u=(t-r)*d+r,m=(i-n)*d+n;o._translate(u,m),o.isAnimating&&(o.animateTimer=E(c)),3===o.options.probeType&&o.trigger("scroll",{x:o.x,y:o.y})}()},A.prototype.scrollBy=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Y.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s)},A.prototype.scrollTo=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Y.bounce;this.isInTransition=this.options.useTransition&&e>0&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionProperty(),this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&3===this.options.probeType&&this._startProbe(),this.options.wheel&&(i>0?this.selectedIndex=0:i<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn)},A.prototype.scrollToElement=function(t,i,e,s,o){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.className===this.options.wheel.wheelItemClass)){var r=f(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=e||0,r.top-=s||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,this.options.wheel&&(r.top=Math.round(r.top/this.itemHeight)*this.itemHeight),this.scrollTo(r.left,r.top,i,o)}},A.prototype.resetPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y.bounce,e=this.x,s=Math.round(e);!this.hasHorizontalScroll||s>0?e=0:s<this.maxScrollX&&(e=this.maxScrollX);var o=this.y,r=Math.round(o);return!this.hasVerticalScroll||r>0?o=0:r<this.maxScrollY&&(o=this.maxScrollY),(e!==this.x||o!==this.y)&&(this.scrollTo(e,o,t,i),!0)},A.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return this.options.useTransform?(i=+((t=t[T.transform].split(")")[0].split(", "))[12]||t[4]),e=+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),e=+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},A.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0)},A.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),this._removeDOMEvents(),this._events={}},(I=Z).prototype.on=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e])},I.prototype.once=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;function s(){this.off(t,s),i.apply(e,arguments)}s.fn=i,this.on(t,s)},I.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&(e[s][0]=void 0)},I.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,r=[].concat(o(i)),n=0;n<e;n++){var h=r[n],a=s(h,2),l=a[0],c=a[1];l&&l.apply(c,[].slice.call(arguments,1))}},(F=Z).prototype._initSnap=function(){var t=this;this.currentPage={};var i,e,s,o,r=this.options.snap;if(r.loop){var n=this.scroller.children;n.length>0&&(i=n[n.length-1].cloneNode(!0),(e=this.scroller).firstChild?(s=i,(o=e.firstChild).parentNode.insertBefore(s,o)):e.appendChild(i),this.scroller.appendChild(n[1].cloneNode(!0)))}var h=r.el;"string"==typeof h&&(h=this.scroller.querySelectorAll(h)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var i=r.stepX||t.wrapperWidth,e=r.stepY||t.wrapperHeight,s=0,o=void 0,n=void 0,a=void 0,l=0,c=void 0,p=0,d=void 0,u=void 0;if(h)for(c=h.length,d=-1;l<c;l++)u=_(h[l]),(0===l||u.left<=_(h[l-1]).left)&&(p=0,d++),t.pages[p]||(t.pages[p]=[]),s=Math.max(-u.left,t.maxScrollX),o=Math.max(-u.top,t.maxScrollY),n=s-Math.round(u.width/2),a=o-Math.round(u.height/2),t.pages[p][d]={x:s,y:o,width:u.width,height:u.height,cx:n,cy:a},s>t.maxScrollX&&p++;else for(n=Math.round(i/2),a=Math.round(e/2);s>-t.scrollerWidth;){for(t.pages[l]=[],c=0,o=0;o>-t.scrollerHeight;)t.pages[l][c]={x:Math.max(s,t.maxScrollX),y:Math.max(o,t.maxScrollY),width:i,height:e,cx:s-n,cy:o-a},o-=e,c++;s-=i,l++}var m=r.loop?1:0;t._goToPage(t.currentPage.pageX||m,t.currentPage.pageY||0,0);var f=r.threshold;f%1==0?(t.snapThresholdX=f,t.snapThresholdY=f):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*f),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*f))}}),this.on("scrollEnd",function(){r.loop&&(0===t.currentPage.pageX&&t._goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t._goToPage(1,t.currentPage.pageY,0))}),!1!==r.listenFlick&&this.on("flick",function(){var i=r.speed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t._goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,i)}),this.on("destroy",function(){if(r.loop){var i=t.scroller.children;i.length>2&&(P(t.scroller,i[i.length-1]),P(t.scroller,i[0]))}})},F.prototype._nearestSnap=function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0;if(Math.abs(t-this.absStartX)<=this.snapThresholdX&&Math.abs(i-this.absStartY)<=this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);for(var s=this.pages.length;e<s;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}s=this.pages[e].length;for(var o=0;o<s;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return e===this.currentPage.pageX&&((e+=this.directionX)<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),o===this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:e,pageY:o}},F.prototype._goToPage=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments[2],s=arguments[3],o=this.options.snap;if(o&&this.pages&&(s=s||o.easing||Y.bounce,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),this.pages[t])){i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var r=this.pages[t][i].x,n=this.pages[t][i].y;e=void 0===e?o.speed||Math.max(Math.max(Math.min(Math.abs(r-this.x),1e3),Math.min(Math.abs(n-this.y),1e3)),300):e,this.currentPage={x:r,y:n,pageX:t,pageY:i},this.scrollTo(r,n,e,s)}},F.prototype.goToPage=function(t,i,e,s){var o=this.options.snap;if(o){if(o.loop){var r=this.pages.length-2;t>=r?t=r-1:t<0&&(t=0),t+=1}this._goToPage(t,i,e,s)}},F.prototype.next=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;++e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this._goToPage(e,s,t,i)},F.prototype.prev=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;--e<0&&this.hasVerticalScroll&&(e=0,s--),this._goToPage(e,s,t,i)},F.prototype.getCurrentPage=function(){var t=this.options.snap;return t?t.loop?l({},this.currentPage,{pageX:this.currentPage.pageX-1}):this.currentPage:null},(R=Z).prototype.wheelTo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))},R.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},R.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,z("wheel option selectedIndex is required!"))},(B=Z).prototype._initScrollbar=function(){var t=this,i=this.options.scrollbar,e=i.fade,s=void 0===e||e,o=i.interactive,r=void 0!==o&&o;this.indicators=[];var n=void 0;this.options.scrollX&&(n={el:q("horizontal"),direction:"horizontal",fade:s,interactive:r},this._insertScrollBar(n.el),this.indicators.push(new j(this,n))),this.options.scrollY&&(n={el:q("vertical"),direction:"vertical",fade:s,interactive:r},this._insertScrollBar(n.el),this.indicators.push(new j(this,n))),this.on("refresh",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].refresh()}),s&&(this.on("scrollEnd",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollCancel",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0)}),this.on("beforeScrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0,!0)})),this.on("destroy",function(){t._removeScrollBars()})},B.prototype._insertScrollBar=function(t){this.wrapper.appendChild(t)},B.prototype._removeScrollBars=function(){for(var t=0;t<this.indicators.length;t++)this.indicators[t].destroy()},(N=Z).prototype._initPullDown=function(){this.options.probeType=3},N.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,e=void 0===i?90:i,s=t.stop,o=void 0===s?40:s;return!(this.directionY!==H||this.y<e)&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,o,this.options.bounceTime,Y.bounce),this.pulling)},N.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,Y.bounce)},(U=Z).prototype._initPullUp=function(){this.options.probeType=3,this.pullupWatching=!1,this._watchPullUp()},U.prototype._watchPullUp=function(){this.pullupWatching=!0;var t=this.options.pullUpLoad.threshold,i=void 0===t?0:t;this.on("scroll",function t(e){var s=this;this.movingDirectionY===W&&e.y<=this.maxScrollY+i&&(this.once("scrollEnd",function(){s.pullupWatching=!1}),this.trigger("pullingUp"),this.off("scroll",t))})},U.prototype.finishPullUp=function(){var t=this;this.pullupWatching?this.once("scrollEnd",function(){t._watchPullUp()}):this._watchPullUp()},(V=Z).prototype._initMouseWheel=function(){var t=this;this._handleMouseWheelEvent(u),this.on("destroy",function(){clearTimeout(t.mouseWheelTimer),t._handleMouseWheelEvent(m)}),this.firstWheelOpreation=!0},V.prototype._handleMouseWheelEvent=function(t){t(this.wrapper,"wheel",this),t(this.wrapper,"mousewheel",this),t(this.wrapper,"DOMMouseScroll",this)},V.prototype._onMouseWheel=function(t){var i=this;if(this.enabled){t.preventDefault(),this.firstWheelOpreation&&this.trigger("scrollStart"),this.firstWheelOpreation=!1,clearTimeout(this.mouseWheelTimer),this.mouseWheelTimer=setTimeout(function(){i.options.snap||i.trigger("scrollEnd",{x:i.x,y:i.y}),i.firstWheelOpreation=!0},400);var e=this.options.mouseWheel,s=e.speed,o=void 0===s?20:s,r=e.invert,n=void 0!==r&&r,h=void 0,a=void 0;switch(!0){case"deltaX"in t:1===t.deltaMode?(h=-t.deltaX*o,a=-t.deltaY*o):(h=-t.deltaX,a=-t.deltaY);break;case"wheelDeltaX"in t:h=t.wheelDeltaX/120*o,a=t.wheelDeltaY/120*o;break;case"wheelDelta"in t:h=a=t.wheelDelta/120*o;break;case"detail"in t:h=a=-t.detail/3*o;break;default:return}var l=n?-1:1;h*=l,a*=l,this.hasVerticalScroll||(h=a,a=0);var c=void 0,p=void 0;if(this.options.snap)return c=this.currentPage.pageX,p=this.currentPage.pageY,h>0?c--:h<0&&c++,a>0?p--:a<0&&p++,void this._goToPage(c,p);c=this.x+Math.round(this.hasHorizontalScroll?h:0),p=this.y+Math.round(this.hasVerticalScroll?a:0),this.directionX=h>0?-1:h<0?1:0,this.directionY=a>0?-1:a<0?1:0,c>0?c=0:c<this.maxScrollX&&(c=this.maxScrollX),p>0?p=0:p<this.maxScrollY&&(p=this.maxScrollY),this.scrollTo(c,p),this.trigger("scroll",{x:this.x,y:this.y})}},Z.Version="1.8.0",i.a=Z}});
//# sourceMappingURL=0.38b8e95bb65c3a2079c1.js.map