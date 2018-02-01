<template>
  <div>
    <header class="orderFormTap">
      <router-link to="/myPage/rebatePage/rebatePageMyPage">我的</router-link>
      <router-link to="/myPage/rebatePage/rebatePageStairPage">一级代理</router-link>
      <router-link to="/myPage/rebatePage/rebatePageTwoPage">二级代理</router-link>
    </header>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

    components: {},

    computed: {},

    mounted(){
      /*let sign = this.__getBack()*/
      /*if (sign) {
//        removeEventListener("popstate",this.__callback)
      }*/
    },

    methods: {
      /*__callback(e){
        let bool = true
        if (bool) {
          alert("我监听到了浏览器的返回按钮事件啦");
          //根据自己的需求实现自己的功能
          bool = false
        }
        bool = true
      },
      __getBack(){
        console.log(666)
        window.addEventListener("popstate", this.__callback)
        return true
      }*/
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .orderFormTap
    height (123 /$rem)
    width (1080 /$rem)
    a
      box-sizing border-box
      border-right 1px solid #fff
      height 100%
      width (360 /$rem)
      background-color #bbb
      float left
      font-size (46 /$rem)
      color #515151
      text-align center
      line-height (123 /$rem)
      &.router-link-active
        background-color #c2181f
        color #ffffff
</style>
