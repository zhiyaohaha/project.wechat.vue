<template>
  <div>
    <div ref="myWrap">
      <div>
        <!--<header class="myHeader">
          <span class="iconLogo" @click="$router.back()"><</span>
          <span>手机认证</span>
        </header>-->
        <div class="myContent">
          <img src="./img/banner.png">
          <split/>
          <ul class="cellphoneList">
            <li>
              <span class="description">手机号：</span>
              <input type="text" v-model="cellphoneNum" @blur="loseFocus(/^[1][3,4,5,7,8][0-9]{9}$/,cellphoneNum,0)"
                     @input="goodInput(/^[1][3,4,5,7,8][0-9]{9}$/,cellphoneNum,0)" maxlength="11"
                     @focus="isFooter"
                     :placeholder="phoneTooltip" :class="{errorColor}"
                     name="cellphoneNum">
            </li>
            <li>
              <span class="description">验证码：</span>
              <input type="text" v-model="authCode" @blur="loseFocus(/^\d{4}$/,authCode,1)"
                     @input="goodInput(/^\d{4}$/,authCode,1)" maxlength="4"
                     :placeholder="codeTooltip" :class="{errorColor:codeColor}"
                     @focus="isFooter"
                     name="authCode">
              <span class="sendMsg" @click="sendMsg">获取验证码</span>
            </li>
          </ul>
          <a href="javascript:;" class="protocol">
            <img src="./img/xuanze.png" v-show="imgIsShow" @click="notarize">
            <img src="./img/huisekuang.png" v-show="!imgIsShow" @click="notarize">
            <span>我已阅读并同意《XXXXXX协议》</span>
          </a>
          <a href="javascript:;" class="approve" @click="approve"></a>
        </div>
        <div class="footerOccupied"></div>
      </div>
    </div>
    <verification v-show="verificationShow" :changeShow="changeShow" :time="time"
                  :verificationCancel="verificationCancel"/>
    <footer class="myFooter" v-show="myFooterIsShow">
      <span>申请贷款前请进新手机认证，仅需认证一次</span>
    </footer>
  </div>
</template>
<script>
  import { MessageBox } from "mint-ui"
  import { mapState } from "vuex"
  import BScroll from "better-scroll"
  import verification from "../../components/verification/verification.vue"
  export default {
    data () {
      return {
        imgIsShow: true,
        cellphoneNum: '',
        authCode: '',
        codeTooltip: "请输入验证码",
        phoneTooltip: "请填写你的手机号",
        errorColor: false,
        codeColor: false,
        myFooterIsShow: true,
        verificationShow: false,
        time: new Date().getTime(),
      }
    },
    components: {
      verification
    },
    computed: {
      ...mapState(["verification", "phoneNote"])
    },
    mounted(){
      this.__boxheight(this.$refs.myWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.myWrap); //窗口或框架被调整大小时执行
      this.$nextTick(() => {
        this.myWrap = new BScroll(this.$refs.myWrap, {click: true, momentum: false})
        this.myWrap.refresh()
      })
      /*MessageBox({
       title: '提交失败',
       message: '短信验证码错误',
       showCancelButton: false
       })*/
    },
    updated(){
      this.__boxheight(this.$refs.myWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.myWrap);
    },
    methods: {
      //      发送短信验证码请求
      __phoneNote(){
        if (this.verification.success) {
          MessageBox({
            title: '提示',
            message: '短信验证码已发送，有效时间5分钟',
            showCancelButton: false
          })
          clearInterval(this.timer1)
        } else {
          MessageBox({
            title: '提交失败',
            message: '图片验证码输入错误',
            showCancelButton: false
          })
          clearInterval(this.timer1)
        }
      },
//    申请逻辑
      approve(){
        let data = {
          phone: this.cellphoneNum,
          verifyCode: this.authCode,
          firstLevelId: "",
          thirdPlatFormBind: true,//第三方绑定接口
          openId: "123456", //第三方OpenId
          thirdLoginType: "",  //第三方登录代号
          head: "",//第三方登录头像
          nickName: "",//第三方登录昵称
        }
        this.$store.dispatch("postPhone", {data})
        this.timer2 = setTimeout(() => {
          if (this.phoneNote.success) {
            clearInterval(this.timer2)
          } else {
            MessageBox({
              title: '提交失败',
              message: '短信验证码输入错误',
              showCancelButton: false
            })
            clearInterval(this.timer2)
          }
        }, 500)

      },
//      验证码
      changeShow(){
        this.verificationShow = false
      },

      //发送图片验证码请求
      verificationCancel(flag, validateCode, time){
        this.time = new Date().getTime()
        this.verificationShow = false
        if (flag) {
          let data = {
            code: 'LoginRegistVerifyCode',
            mobilePhone: this.cellphoneNum,
            validateCode: validateCode,
            needvalidateCode: true
          }
          this.$store.dispatch("postSendMsg", {data})
          this.timer1 = setTimeout(() => {
            this.__phoneNote()
          }, 500)
        }
      },
//      选中切换
      notarize(){
        this.imgIsShow = !this.imgIsShow
      },
//      错误变红
      loseFocus(reg, flag, num){
        this.myFooterIsShow = true
        if (!reg.test(flag)) {
          if (num == 1) {
            this.codeColor = true
          } else {
            this.errorColor = true
          }
        }
      },
      isFooter(){
        this.myFooterIsShow = false
      },
//      正确变色
      goodInput(reg, flag, num){
        if (reg.test(flag)) {
          if (num == 1) {
            this.codeColor = false
          } else {
            this.errorColor = false
          }
        }
      },
//      验证码逻辑
      sendMsg(){
        if (this.cellphoneNum && !this.errorColor) {
          this.verificationShow = true
        } else {
          MessageBox({
            title: '提示',
            message: '请正确输入手机号',
            showCancelButton: false
          })
        }
      },
    }
  }
</script>
<style lang='stylus' rel="stylesheet/stylus">
  .footerOccupied
    width (1080 /$rem)
    height (146 /$rem)

  /*头部*/
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

  /*内容区*/
  .myContent
    img
      width (1080 /$rem)
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
          margin-right (30 /$rem)
          width (500 /$rem)
          &.errorColor
            color #c2181f
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
          margin-top (17 /$rem)
          width (290 /$rem)
          height (86 /$rem)
          color #ffffff
          font-size (36 /$rem)
          background-image url("./img/huoquyanzhengma.png")
          background-repeat no-repeat
          background-size 100%
          text-align center
          line-height (86 /$rem)
          float right
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
    .approve
      width (996 /$rem)
      height (146 /$rem)
      background-image url("./img/lijirenzheng.png")
      background-repeat no-repeat
      background-size 100%
      margin 0 auto

  .myFooter
    width (1080 /$rem)
    height (150 /$rem)
    background-color #fff
    position fixed
    bottom 0px
    left 0px
    z-index 11
    line-height (150 /$rem)
    text-align center
    span
      font-size (36 /$rem)
      color #bbbbbb

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

</style>
