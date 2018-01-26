/**
 * Created by Administrator on 2018/1/25.
 */
export default function __boxheight(ele){ //函数：获取尺寸
  //获取浏览器窗口高度
  let winHeight = 0;
  if (window.innerHeight)
    winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
    winHeight = document.body.clientHeight;
  //通过Document对body进行检测，获取浏览器可视化高度
  if (document.documentElement && document.documentElement.clientHeight)
    winHeight = document.documentElement.clientHeight
  //DIV高度为浏览器窗口高度
  if(ele) {
    ele.style.height = winHeight + "px"
  }
}
