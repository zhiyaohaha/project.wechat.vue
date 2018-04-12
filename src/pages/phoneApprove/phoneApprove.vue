<template>
  <div class="phoneApprove">
    <div>
      <div class="myContent">
        <img src="./img/banner.png">
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
            <a href="javascript:;" :class="{sendMsg:mformData.sendMsg}" @click="sendMsg(index)">
              {{mformData.units}}
            </a>
          </li>
        </ul>
        <a href="javascript:;" class="protocol">
          <img src="./img/xuanze.png" v-show="imgIsShow" @touchstart="notarize">
          <img src="./img/huisekuang.png" v-show="!imgIsShow" @touchstart="notarize">
          <span>我已阅读并同意《XXXXXX协议》</span>
        </a>
        <a href="javascript:;" class="approve" @click="approve"></a>
      </div>
      <div class="footerOccupied"></div>
    </div>
    <verification v-show="verificationShow" :changeShow="changeShow"
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
  import {mapState, mapGetters} from 'vuex'
  import verification from '../../components/verification/verification.vue'

  export default {
    data() {
      return {
        mformDatas: [
          {
            message: '请正确输入您的姓名',
            description: '贷款人姓名：',
            placeholder: '请输入您的姓名',
            name: 'username',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[\u4e00-\u9fa5]{1,}$/,
            regular: /^[\u4e00-\u9fa5]{1,}$/,
            errorColor: false,
            maxlength: "15"
          },
          {
            message: '请正确输入您的手机号',
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
            message: '请正确输入您的验证码',
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
        isFlag: null,
        forbid:0
      }
    },
    components: {
      verification
    },
    computed: {
      ...mapState(["time"]),
      ...mapGetters(["key"])
    },
    beforeMount() {

    },
    mounted() {

    },
    watch:{

    },
    updated() {
    },
    methods: {
      //查找
      __findModel(value) {
        let mformDatas = this.mformDatas
        return mformDatas.find(val => val.name == value)
      },
      //      发送短信验证码请求
      __phoneNote(res) {
        if (res.success) {
          this.MessageBox({
            title: '提示',
            message: "短信验证码已发送，5分钟内有效",
            showCancelButton: false
          })
          this.num = 60
          let timer = setInterval(() => {
            this.num--
            if (this.num == 0) {
              this.__findModel('authCode').units = '获取验证码'
              clearInterval(timer)
              this.num = null
            } else {
              if (this.isFlag) {
                this.__findModel('authCode').units = this.num + 's后重发'
              }
            }
          }, 1000)
        } else {
          this.MessageBox({
            title: '提交失败',
            message: res.message,
            showCancelButton: false
          })
        }
      },
//      底部消失
      pullDown() {
        this.myFooterIsShow = false
      },
//    申请逻辑
      approve() {
        alert(this.forbid)
        if(this.forbid > 0 ){
          return
        }
        this.forbid++
        let userinfo = this.readTodos()
        let that = this
        for (let i = 0; i < this.mformDatas.length; i++) {
          let item = this.mformDatas[i]
          if (item.model === "") {
            this.MessageBox({
              title: '提交失败',
              message: item.placeholder,
              showCancelButton: false
            })
            return
          } else if (!item.regular.test(item.model)) {
            this.MessageBox({
              title: '提交失败',
              message: item.message,
              showCancelButton: false
            })
            return
          }
        }
        let data = {
          phone: that.__findModel("cellPhoneNum").model,
          verifyCode: that.__findModel("authCode").model,
          name: that.__findModel("username").model,
          firstLevelId: that.getCookie('id'),
          thirdPlatFormBind: true,//第三方绑定接口
          openId: userinfo.openid, //第三方OpenId
          // openId: "16573", //第三方OpenId
          thirdLoginType: 'ThirdPlatForm.WeChat',  //第三方登录代号
          head: userinfo.headimgurl,//第三方登录头像
          nickName: userinfo.nickname,//第三方登录昵称
          source: 'OfficialAccounts',
        }
        // alert(JSON.stringify(data))
        this.$store.dispatch('postPhone', {
          data,
          cb: (flag, whether) => {
            this.setCookie('token', flag, 7)
            this.setCookie('whether', whether, 7)
          }
        }).then((res) => {
          let that = this
          this.forbid = 0
          if (res.success) {
            this.$router.replace({
              name: that.$route.params.name1,
              query: {id: that.$route.query.id},
              params: {name: that.$route.params.name2}
            })
            that = null
          } else {
            this.MessageBox({
              title: '提交失败',
              message: res.message,
              showCancelButton: false
            })
          }
        })

      },
//      验证码
      changeShow() {
        this.verificationShow = false
      },

      //发送图片验证码核实请求
      verificationCancel(flag, validateCode) {
        this.isFlag = flag
        this.verificationShow = false
        let that = this
        if (flag) {
          this.$store.dispatch('postSendMsg', {
            code: 'SMS_123738830',
            validateKey: that.key + that.time,
            mobilePhone: that.__findModel("cellPhoneNum").model,
            validateCode: validateCode,
            needvalidateCode: true
          }).then((res) => {
            this.__phoneNote(res)
            this.$store.dispatch("changeTime")
          })
        } else {
          this.$store.dispatch("changeTime")
        }
      },
//      选中切换
      notarize() {
        this.imgIsShow = !this.imgIsShow
      },
//      错误变红
      loseFocus() {
        this.myFooterIsShow = true
      },
      isFooter() {
        this.myFooterIsShow = false
      },
//      正确变色
      goodInput(reg, flag, index) {
        if (!reg.test(flag)) {
          this.mformDatas[index].model = flag.substring(0, flag.length - 1)
        }
      },
//      验证码逻辑
      sendMsg(index) {
        let mformData = this.mformDatas[index - 1]
        if (this.num > 0) {
          this.MessageBox({
            title: '提示',
            message: '60s后在从新获取验证码',
            showCancelButton: false
          })
          return false
        }
        if (mformData.model !== '' && mformData.regular.test(mformData.model)) {
          this.verificationShow = true
        } else {
          this.MessageBox({
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
  .phoneApprove
    background-color: #fff

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
        line-height (116 /$rem)
        width (1020 /$rem)
        height (121 /$rem)
        font-size (42 /$rem)
        border-bottom 1px solid #f2f2f2
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
          border-radius (20 /$rem)
          float right
          margin-top (17 /$rem)
          width (290 /$rem)
          height (86 /$rem)
          background-color #cdcdcd
          color #ffffff
          line-height (86 /$rem)
          text-align center
    .protocol
      box-sizing border-box
      height (155 /$rem)
      text-align center
      line-height (155 /$rem)
      img
        display inline-block
        width (36 /$rem)
        height (35 /$rem)
        vertical-align middle
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
</style>
