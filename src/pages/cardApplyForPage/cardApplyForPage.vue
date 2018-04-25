<template>
  <div>
    <header class="applyForHeader">
      <ul class="applyForList">
        <li>
          <img src="../../../static/img/creditCardImg/tianxie.png"/>
          <span>填写资料</span>
        </li>
        <li>
          <img src="../../../static/img/creditCardImg/shenqing.png"/>
          <span>点击申请</span>
        </li>
        <li>
          <img src="../../../static/img/creditCardImg/shenhe.png"/>
          <span>审核发卡</span>
        </li>
      </ul>
      <div class="transverseLine"></div>
    </header>
    <div class="applyForContent">
      <headline :headlineData="{title:'初审资料',line:true}"/>
      <ul class="mform">
        <li v-for="(mformData, index) in mformDatas" :key="index">
          <span class="description">{{mformData.description}}</span>
          <input type="text" v-model="mformData.model"
                 @blur="loseFocus(mformData.reg,mformData.model,index)"
                 @input="goodInput(mformData.reg,mformData.model,index)"
                 @focus="isFooter"
                 :placeholder="mformData.placeholder"
                 :maxlength="mformData.maxlength"
                 :name="mformData.name">
          <a href="javascript:;" :class="{sendMsg:mformData.sendMsg,color:!num}"
             v-if="mformData.sendMsg && mformData.units"
             @click="sendMsg()">
            {{mformData.units}}
          </a>
        </li>
      </ul>
    </div>
    <footer class="applyForFooter" v-show="applyForFooterShow" @click="applyFor">
      <a href="javascript:;">立即提交</a>
    </footer>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data() {
      return {
        mformDatas: [
          {
            message: "请正确输入姓名",
            description: "姓名：",
            placeholder: "请输入姓名",
            name: "userName",
            model: "",
            reg: /^[\u4e00-\u9fa5]{1,}$/,
            regular: /^[\u4e00-\u9fa5]{1,}$/,
            maxlength: "15"
          },
          {
            message: "请正确输入身份证号",
            description: "身份证号：",
            placeholder: "请输入身份证号",
            name: "IDnumber",
            model: "",
            reg: /^[0-9xX]{0,18}$/,
            regular: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            maxlength: "18"
          },
          {
            message: "请正确输入手机号",
            description: "手机号：",
            placeholder: "请输入手机号",
            name: "phoneNum",
            model: "",
            reg: /^[0-9]{0,11}$/,
            regular: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,
            maxlength: "11"
          },
          {
            message: "请正确输入您的验证码",
            description: '验证码：',
            placeholder: '请输入验证码',
            name: 'authCode',
            model: '',
            purposeList: false,
            sendMsg: true,
            units: '获取验证码',
            reg: /^\d{1,}$/,
            regular: /^\d{4}$/,
            errorColor: false,
            maxlength: 4
          },
        ],
        applyForFooterShow: true,
        winHeight:document.body.clientHeight,
        num:0
      }
    },

    components: {},

    computed: {
      ...mapState(["lastOrderInfo"])
    },
    beforeCreate() {

    },
    created(){
      this.$store.dispatch("getLastOrderInfo").then(()=>{
        if(this.lastOrderInfo){
          this.__findModel("userName").model = this.lastOrderInfo.name
          this.__findModel("IDnumber").model = this.lastOrderInfo.idCard
          this.__findModel("phoneNum").model = this.lastOrderInfo.mobilePhone
        }
      })
    },
    mounted() {

    },
    updated() {
      let that = this
      window.onresize = function (e) {
        let thisHeight = document.body.clientHeight
        if(that.winHeight - thisHeight > 140) {
          that.applyForFooterShow = false
        } else {
          that.applyForFooterShow = true
        }
      }
    },
    methods: {
      //定时器
      setTime() {
        this.num = 60
        let time = setInterval(() => {
          this.num--
          if (this.num === 0) {
            this.__findModel("authCode").units = "获取验证码"
            clearInterval(time)
          } else {
            this.__findModel("authCode").units = this.num + 's后重发'
          }
        }, 1000)
      },
      //获取验证码
      sendMsg() {
        let that = this
        //判断输入手机号
        if (this.__findModel("phoneNum").model === "") {
          this.MessageBox.alert(
            '请输入手机号',
            '提示',
            {
              closeOnClickModal: true
            }
          )
          return
        }
        if (!this.__findModel("phoneNum").regular.test(this.__findModel("phoneNum").model)) {
          this.MessageBox.alert(
            '请正确输入手机号',
            '提示',
            {
              closeOnClickModal: true
            }
          )
          return
        }
        if (this.num > 0) {
          this.MessageBox.alert(
            '请60秒后在请求验证码',
            '提示',
            {
              closeOnClickModal: true
            }
          )
          return
        }
        this.$store.dispatch('postSendMsg', {
          code: 'SMS_123669047',
          mobilePhone: that.__findModel("phoneNum").model,
          smsSign: "掌金超",
        }).then((res) => {
          console.log(res.success)
          if (res.success) {
            this.MessageBox.alert(
              '短信验证码已发送，有效时间5分钟',
              '提示',
              {
                closeOnClickModal: true
              }
            )
            this.setTime()
          } else {
            this.MessageBox.alert(
              res.message,
              '提交失败',
              {
                closeOnClickModal: true
              }
            )
          }
        })
      },
      //input的model
      __findModel(value) {
        let mformDatas = this.mformDatas
        return mformDatas.find(val => val.name == value)
      },
      //提交逻辑
      applyFor() {
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
        this.$store.commit("AWAITTRUE")
        let that = this
        this.$store.dispatch("getIdentify2Auth", {
          realName: that.__findModel("userName").model,
          idCard: that.__findModel("IDnumber").model
        }).then((res)=>{
          if (res.data.isSame){
            this.$store.dispatch("postRecordForApp", {
              creditCard: that.$route.query.id,//信用卡Id
              applyFormData: [
                {
                  key: "name",
                  value: that.__findModel("userName").model
                },
                {
                  key: "idCard",
                  value: that.__findModel("IDnumber").model
                },
                {
                  key: "mobilePhone",
                  value: that.__findModel("phoneNum").model
                },
              ],
              source: 'OfficialAccounts'//来源
            }).then((result) => {
              this.$store.commit("AWAITFALSE")
              if (result.success) {
                window.location.href = result.data.url
              } else {
                this.MessageBox.alert(
                  result.message,
                  "提示",
                  {
                    closeOnClickModal: true
                  }
                )
              }
            })
          }else {
            this.$store.commit("AWAITFALSE")
            this.MessageBox.alert(
              res.message,
              '提交失败',
              {
                closeOnClickModal: true
              }
            )
          }

        })


      },
      //      输入框焦点时底部消失
      isFooter() {
        this.applyForFooterShow = false
      },
//      错误变色
      loseFocus(reg, flag, index) {
        this.applyForFooterShow = true
      },
//      输入正确变色
      goodInput(reg, flag, index) {
//        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (!reg.test(flag)) {
          for (let i = 0; i < this.mformDatas.length; i++) {
            this.mformDatas[index].model = ""
          }
        }
      },
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .applyForFooter
    position fixed
    bottom 0
    left 0
    width (1080 /$rem)
    height (150 /$rem)
    background-color #efca7d
    a
      height 100%
      font-size (48 /$rem)
      color #ffffff
      text-align center
      line-height (150 /$rem)

  .ToastStyle
    width (200 /$rem)
    height (70 /$rem)
    font-size (40 /$rem)
    color #ffffff
    background-color #8a8a8a
    text-align center
    line-height (70 /$rem)

  .applyForHeader
    position relative
    width (1080 /$rem)
    height (276 /$rem)
    .applyForList
      position relative
      z-index 10
      height 100%
      box-sizing border-box
      padding (50 /$rem) (70 /$rem)
      display flex
      justify-content space-between
      li
        text-align center
        float left
        img
          display inline-block
          width (96 /$rem)
          height (96 /$rem)
        span
          margin-top (30 /$rem)
          display block
          font-size (36 /$rem)
          color #333333

    .transverseLine
      position absolute
      margin-left (-351.5 /$rem)
      top (88 /$rem)
      left 50%
      width (703 /$rem)
      height (6 /$rem)
      background-image url("../../../static/img/creditCardImg/huangxian.png")
      background-repeat no-repeat
      background-size 100%
  .applyForContent
    width (1080 /$rem)
    .firstTrialHeader
      box-sizing border-box
      height (100 /$rem)
      padding (32 /$rem) 0 (32 /$rem) (30 /$rem)
      background-color #dddddd
      color #8a8a8a
      font-size (36 /$rem)
    .mform
      margin: 0 (30 /$rem)
      li
        box-sizing border-box
        position relative
        line-height (120 /$rem)
        width (1020 /$rem)
        height (120 /$rem)
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
          background-color #bbb
          color #ffffff
          line-height (86 /$rem)
          text-align center
          &.color
            background-color #efca7d


</style>
