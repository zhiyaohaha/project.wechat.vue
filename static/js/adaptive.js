(function () {
  //求元素像素比
  var dpr = window.devicePixelRatio || 1;
//求比值    0.5
  var scale = 1/dpr;
//375px
//获取meta标签
  var metaNode = document.querySelector('meta[name="viewport"]');
  metaNode.setAttribute('content','initial-scale='+ scale +',user-scalable=no')
//以rem单位为元素，需要把缩小的比例乘回来 （2）
  var width = document.documentElement.clientWidth/16;
  var styleNode = document.createElement('style');
  styleNode.innerHTML = 'html{font-size: '+ (width) +'px !important;}'
  document.head.appendChild(styleNode)
})()
