<template>
  <div>
    <header class="verifyHeader">
      <img src="../../../static/img/homeImg/banner.png">
    </header>
    <div class="verifyContent">
      <ul class="mform">
        <li>
          <span class="description">验证码：</span>
          <input type="text" v-model="authCode"
                 @input="goodInput(mformData.reg,mformData.model,index)"
                 placeholder="请输入短信验证码"
                 maxlength="4"
                 name="authCode">
          <a href="javascript:;" class="sendMsg"
             @click="sendMsg">
            {{units}}
          </a>
        </li>
      </ul>
      <a href="javascript:;" class="protocol">
        <img src="./img/xuanze.png" v-show="imgIsShow" @touchstart="notarize">
        <img src="./img/huisekuang.png" v-show="!imgIsShow" @touchstart="notarize">
        <span>我已阅读并同意《XXXXXX协议》</span>
      </a>
      <a href="javascript:;" class="authentication">
        立即认证
      </a>
    </div>
    <verification v-show="verificationShow" :changeShow="changeShow" :time="time" :verificationCancel="verificationCancel"/>
  </div>
</template>

<script>
  import verification from "../../components/verification/verification.vue"
  import {MessageBox} from  "mint-ui"
  export default {
    data () {
      return {
        authCode:"",
        reg:/^\d{0,4}$/,
        verificationShow:false,
        imgIsShow:true,
        units:"获取验证码",
        time:new Date().getTime()
      }
    },

    components: {
      verification
    },

    computed: {
    },

    mounted(){

    },

    methods: {
      notarize(){
        this.imgIsShow = !this.imgIsShow
      },
//      图形验证码
      changeShow(){
        this.verificationShow = false
      },
      sendMsg(){
        this.verificationShow = true
        if(this.num && this.num > 0){
          this.verificationShow = false
          MessageBox({
            title: '提示',
            message: '请60秒后在请求验证码',
            showCancelButton: false
          })
        }
      },
      verificationCancel(flag){
        this.time = new Date().getTime()
        this.verificationShow = false
        if(flag){
          this.num = 60
          let timer = setInterval(()=>{
            this.num--
            if (this.num < 1){
              this.units = "获取验证码"
              clearInterval(timer)
              this.num = null
            }else {
              if(flag){
                this.units = this.num + "s后重发"
              }
            }
          },1000)
        }
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .mint-msgbox
    height (450 /$rem)
    font-size (46 /$rem)
    border-radius (20 /$rem)
    .mint-msgbox-header
      padding: (40 /$rem) 0 0
      .mint-msgbox-title
        font-size (46 /$rem)
    .mint-msgbox-content
      height (228 /$rem)
      text-align center
      line-height (228 /$rem)
      .mint-msgbox-message
        font-size (42 /$rem)
    .mint-msgbox-btns
      height (136 /$rem)
      line-height (136 /$rem)
      .mint-msgbox-confirm
        font-size (46 /$rem)
      .mint-msgbox-cancel
        font-size (46 /$rem)
        color #333

  .verifyHeader
    width (1080 /$rem)
    height (500 /$rem)
    img
      width 100%
  .verifyContent
    .mform
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
          font-size (42 /$rem)
          outline: none
          border: none
          text-align right
          margin-right (20 /$rem)
          width (540 /$rem)
          caret-color #000
          color #333
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
          border-radius (40/$rem)
          float right
          margin-top (17 /$rem)
          width (290 /$rem)
          height (86 /$rem)
          background-color #bbb
          color #ffffff
          line-height (86 /$rem)
          text-align center
    .protocol
      box-sizing border-box
      height (155 /$rem)
      width (1080 /$rem)
      text-align center
      line-height (155 /$rem)
      img
        display inline-block
        width (35 /$rem)
      span
        font-size (36 /$rem)
        color #333333
    .authentication
      width (996 /$rem)
      height (146 /$rem)
      background-color #c2181f
      color #ffffff
      font-size (56 /$rem)
      text-align center
      line-height (146 /$rem)
      margin (100 /$rem) auto
      border-radius (20 /$rem)

</style>
