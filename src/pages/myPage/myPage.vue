<template>
  <div>
    <header class="myHeader">
      <span class="iconLogo" @click="$router.back()"><</span>
      <span>手机认证</span>
    </header>
    <div class="myContent">
      <img src="./img/banner.png">
      <split/>
      <ul class="cellphoneList">
        <li>
          <span class="description">手机号：</span>
          <input type="text"
                 placeholder="请填写你的手机号"
                 name="money">
        </li>
        <li>
          <span class="description">手机号：</span>
          <input type="text"
                 placeholder="请填写你的手机号"
                 name="money">
          <span class="sendMsg">获取验证码</span>
        </li>
      </ul>
      <a href="javascript:;" class="protocol">
        <img src="./img/xuanze.png" v-show="imgIsShow" @click="notarize">
        <img src="./img/huisekuang.png" v-show="!imgIsShow" @click="notarize">
        <span>我已阅读并同意《XXXXXX协议》</span>
      </a>
      <a href="javascript:;" class="approve"></a>
    </div>
    <footer class="myFooter">
      <span>申请贷款前请进新手机认证，仅需认证一次</span>
    </footer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        imgIsShow:true
      }
    },
    components: {},
    computed: {},
    mounted(){},
    methods: {
      notarize(){
        this.imgIsShow = !this.imgIsShow
      }
    }
  }
</script>
<style lang='stylus' rel="stylesheet/stylus">
  .myHeader
    width (1080 /$rem)
    height (130 /$rem)
    background-color #292929
    font-size (60 /$rem)
    color #fff
    text-align center
    line-height (130 /$rem)
    .iconLogo
      float left
      margin-left (30 /$rem)
  .myContent
    img
      width (1080/$rem)
    .cellphoneList
      margin: 0 (30 /$rem)
      li
        box-sizing border-box
        position relative
        line-height (120 /$rem)
        width (1020 /$rem)
        height (120 /$rem)
        font-size (42 /$rem)
        border-bottom 1px solid #ccc
        text-align right
        span
          color #333333
        .description
          float left
        input
          margin-top
          font-size (42 /$rem)
          outline: none
          border: none
          text-align right
          margin-right (30/$rem)
        input:
        :-moz-placeholder
          text-align right
          color #bbbbbb
        input:
        :-webkit-input-placeholder
          text-align right
          color #bbbbbb
        input:-ms-input-placeholder
          text-align right
          color #bbbbbb
        .sendMsg
          display block
          margin-top (17/$rem)
          width (290/$rem)
          height (86/$rem)
          color #ffffff
          font-size (36/$rem)
          background-image url("./img/huoquyanzhengma.png")
          background-repeat no-repeat
          background-size 100%
          text-align center
          line-height (86/$rem)
          float right
    .protocol
      box-sizing border-box
      height (155/$rem)
      width (1080/$rem)
      text-align center
      line-height (155/$rem)
      img
        display inline-block
        width (35/$rem)
      span
        font-size (36/$rem)
        color #333333
    .approve
      width (996/$rem)
      height (146/$rem)
      background-image url("./img/lijirenzheng.png")
      background-repeat no-repeat
      background-size 100%
      margin 0 auto
  .myFooter
    width (1080/$rem)
    height (150/$rem)
    background-color #fff
    position fixed
    bottom 0px
    left 0px
    z-index 11
    line-height (150/$rem)
    text-align center
    span
      font-size (36/$rem)
      color #bbbbbb
</style>
