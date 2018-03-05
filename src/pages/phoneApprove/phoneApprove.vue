<template>
  <div>
    <div>
      <div>
        <!--<header class="myHeader">
          <span class="iconLogo" @touchstart="$router.back()"><</span>
          <span>手机认证</span>
        </header>-->
        <div class="myContent">
          <img src="./img/banner.png">
          <split/>
          <ul class="mform">
            <li v-for="(mformData, index) in mformDatas" :key="index">
              <span class="description">{{mformData.description}}</span>
              <input type="text" v-model="mformData.model"
                     @blur="loseFocus"
                     @input="goodInput(mformData.reg,mformData.model,index)"
                     @focus="pullDown"
                     :placeholder="mformData.placeholder"
                     :maxlength="mformData.maxlength"
                     :name="mformData.name">
              <a href="javascript:;" :class="{sendMsg:mformData.sendMsg}" @touchstart="sendMsg(index)">
                {{mformData.units}}
              </a>
            </li>
          </ul>
          <a href="javascript:;" class="protocol">
            <img src="./img/xuanze.png" v-show="imgIsShow" @touchstart="notarize">
            <img src="./img/huisekuang.png" v-show="!imgIsShow" @touchstart="notarize">
            <span>我已阅读并同意《XXXXXX协议》</span>
          </a>
          <a href="javascript:;" class="approve" @touchstart="approve"></a>
        </div>
        <div class="footerOccupied"></div>
      </div>
    </div>
    <verification v-show="verificationShow" :changeShow="changeShow" :time="time"
                  :verificationCancel="verificationCancel"/>
    <footer class="myFooter" v-show="myFooterIsShow">
      <span>
        实名认证仅用来确保您提交的需求真实有效，绝不会被泄露。
        认证后，不仅能获取提交贷款需求的资格，还可以获取专属二维码。
        专属二维码可以用来推广，别人通过扫你的二维码办理参与返佣的业务，成功放款/批卡，您就可以获取返佣。真正的躺着赚钱
      </span>
    </footer>
  </div>
</template>
<script>
  import { MessageBox, Toast } from 'mint-ui'
  import { mapState } from 'vuex'
  import verification from '../../components/verification/verification.vue'

  export default {
    data () {
      return {
        mformDatas: [
          {
            description: '姓名：',
            placeholder: '请输入您的姓名',
            name: 'username',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[\u4e00-\u9fa5_A-Za-z]{1,}$/,
            regular: /^[\u4e00-\u9fa5_A-Za-z]{0,}$/,
            errorColor: false
          },
          {
            description: '身份证号：',
            placeholder: '请输入您的身份证号',
            name: 'IDnumber',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[0-9xX]{1,18}$/,
            regular: /^([0-9]){15,18}(x|X)?$/,
            errorColor: false,
            maxlength: '18'
          },
          {
            description: '手机号：',
            placeholder: '请输入您的手机号',
            name: 'cellPhoneNum',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[0-9]{1,11}$/,
            regular: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/,
            errorColor: false,
            maxlength: '11'
          },
          {
            description: '验证码：',
            placeholder: '请输入验证码',
            name: 'authCode',
            model: '',
            purposeList: false,
            sendMsg: true,
            units: '获取验证码',
            reg: /^\d{1,4}$/,
            regular: /^\d{4}$/,
            errorColor: false,
            maxlength: '4'
          },
        ],
        imgIsShow: true,
        myFooterIsShow: true,
        verificationShow: false,
        time: new Date().getTime(),
        isFlag: null
      }
    },
    components: {
      verification
    },
    computed: {
      ...mapState(['verification', 'phoneNote', 'openID'])
    },
    beforeMount () {

    },
    mounted () {

    },
    updated () {
    },
    methods: {
      //      发送短信验证码请求
      __phoneNote () {
        if (this.verification.success) {
          MessageBox({
            title: '提示',
            message: '短信验证码已发送，有效时间5分钟',
            showCancelButton: false
          })
          clearInterval(this.timer1)
          this.num = 60
          let timer = setInterval(() => {
            this.num--
            if (this.num == 0) {
              this.mformDatas[3].units = '获取验证码'
              clearInterval(timer)
              this.num = null
            } else {
              if (this.isFlag) {
                this.mformDatas[3].units = this.num + 's后重发'
              }
            }
          }, 1000)
        } else {
          MessageBox({
            title: '提交失败',
            message: '图片验证码输入错误',
            showCancelButton: false
          })
          clearInterval(this.timer1)
        }
      },
//      底部消失
      pullDown () {
        this.myFooterIsShow = false
      },
//    申请逻辑
      approve () {
        let userinfo = this.readTodos()
        let Arr = this.mformDatas.filter(item => item.reg.test(item.model))
        if (Arr.length === this.mformDatas.length) {
          let data = {
            phone: this.mformDatas[2].model,
            verifyCode: this.mformDatas[3].model,
            firstLevelId: this.getCookie("id"),
            thirdPlatFormBind: true,//第三方绑定接口
            openId:this.getCookie("openId"), //第三方OpenId
            thirdLoginType: 'ThirdPlatForm.WeChat',  //第三方登录代号
            head: userinfo.headimgurl,//第三方登录头像
            nickName: userinfo.nickname,//第三方登录昵称
            source: 'OfficialAccounts'
          }
          this.$store.dispatch('postPhone', {
            data,
            cb: (whether) => {
              this.setCookie('whether', whether, 7)
            }
          })

          this.timer2 = setTimeout(() => {
            //短信验证码
            if (this.phoneNote.success) {
              clearInterval(this.timer2)
              this.$router.go(-1)
            } else {
              MessageBox({
                title: '提交失败',
                message: '短信验证码输入错误',
                showCancelButton: false
              })
              clearInterval(this.timer2)
            }
          }, 2000)
        } else {
          MessageBox({
            title: '提交失败',
            message: '请正确输入信息',
            showCancelButton: false
          })
        }
      },
//      验证码
      changeShow () {
        this.verificationShow = false
      },

      //发送图片验证码核实请求
      verificationCancel (flag, validateCode) {
        this.isFlag = flag
        this.time = new Date().getTime()
        this.verificationShow = false
        if (flag) {
          let data = {
            code: 'SMS_123738830',
            mobilePhone: this.mformDatas[2].model,
            validateCode: validateCode,
            needvalidateCode: true
          }
          this.$store.dispatch('postSendMsg', {data})
          this.timer1 = setTimeout(() => {
            this.__phoneNote()
          }, 500)
        }
      },
//      选中切换
      notarize () {
        this.imgIsShow = !this.imgIsShow
      },
//      错误变红
      loseFocus () {
        this.myFooterIsShow = true
      },
      isFooter () {
        this.myFooterIsShow = false
      },
//      正确变色
      goodInput (reg, flag, index) {
        if (!reg.test(flag)) {
          Toast({
            message: '格式错误',
            className: 'ToastStyle'
          })
          this.mformDatas[index].model = flag.substring(0, flag.length - 1)
        }
      },
//      验证码逻辑
      sendMsg (index) {
        let mformData = this.mformDatas[index - 1]
        if (this.num > 0) {
          MessageBox({
            title: '提示',
            message: '60s后在从新获取验证码',
            showCancelButton: false
          })
          return false
        }
        if (mformData.model !== '' && mformData.regular.test(mformData.model)) {
          this.verificationShow = true
        } else {
          MessageBox({
            title: '提示',
            message: '手机号码输入不正确',
            showCancelButton: false
          })
        }
      },
    }
  }
</script>
<style lang='stylus' rel="stylesheet/stylus">
  .ToastStyle
    width (200 /$rem)
    height (70 /$rem)
    font-size (40 /$rem)
    color #ffffff
    background-color #8a8a8a
    text-align center
    line-height (70 /$rem)

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
          border-radius (40 /$rem)
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
