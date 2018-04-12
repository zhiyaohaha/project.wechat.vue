<template>
  <div>
    <scroll>
      <div>
        <div class="loanContent">
          <img src="./img/banner.png">
          <headline :headlineData="{title:'立刻申请贷款'}"/>
          <keep-alive>
            <ul class="mform">
              <li v-for="(mformData, index) in mformDatas" :key="index">
                <span class="description">{{mformData.description}}</span>
                <input type="text" v-model="mformData.model"
                       @blur="loseFocus" :readonly="mformData.purposeList"
                       @input="goodInput(mformData.reg,mformData.model,index)"
                       @focus="pullDown(true,index)"
                       :placeholder="mformData.placeholder"
                       :maxlength="mformData.maxlength"
                       :name="mformData.name">
                <span :class="{purposeList:mformData.purposeList}" v-if="!mformData.sendMsg && !mformData.units"
                      @touchstart="pullDown(true,index)">
                {{mformData.units}}
              </span>
                <a href="javascript:;" :class="{sendMsg:mformData.sendMsg,color:!num}" v-if="mformData.sendMsg && mformData.units"
                   @click="sendMsg()">
                  {{mformData.units}}
                </a>
              </li>
            </ul>
          </keep-alive>
          <div class="propertyCase">
            <span>资产情况</span>
            <propertyMod :propertyModDatas="propertyModDatas"/>
          </div>
        </div>
        <div class="footerOccupied">
        </div>
      </div>
    </scroll>
    <mt-popup v-model="shadeIsShow" position="bottom" @change="onValuesChange" class="maskLayer"
              showToolbar="true">
      <div class="shadeIsShowHeader">
          <span @touchstart="pullDown(false,mformDatasInd,false)" class="cancel">
            取消
          </span>
        <span @touchstart="pullDown(false,mformDatasInd,true)" class="ascertain">
            确定
          </span>
      </div>
      <pickerMod :pickerModDatas="pickerModDatas" :shadeIsShow="shadeIsShowInd" :onValuesChange="onValuesChange"/>
    </mt-popup>
    <verification v-show="verificationShow" :changeShow="changeShow" :verificationCancel="verificationCancel"/>
    <footer class="simulationSubmit" v-show="simulationSubmitIsShow" @click="submit">
      <a href="javascript:"></a>
    </footer>
  </div>
</template>

<script>
  import propertyMod from '../../components/propertyMod/propertyMod.vue'
  import verification from '../../components/verification/verification.vue'
  import {getLoanAmount, postLoanDemand} from '../../api'
  import {mapState, mapGetters} from "vuex"

  export default {
    data() {
      return {
        propertyModDatas: [
          {
            character: '我有房',
            imgUrlIsShow: false,
          },
          {
            character: '我有车',
            imgUrlIsShow: false,
          },
          {
            character: '我有信用卡',
            imgUrlIsShow: false,
          },
          {
            character: '我有公积金',
            imgUrlIsShow: false,
          },
          {
            character: '我有社保',
            imgUrlIsShow: false,
          }
        ],
        mformDatas: [
          {
            description: '贷款金额：',
            placeholder: '请选择贷款金额',
            name: 'money',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /[\s\S]/,
            regular: /[\s\S]/,
            errorColor: false,
          },
          {
            description: '贷款用途：',
            placeholder: '请选择贷款用途',
            name: 'purpose',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /[\s\S]*/,
            regular: /[\s\S]/,
            errorColor: false
          },
          {
            description: '贷款期限：',
            placeholder: '请选择贷款期限',
            name: 'timeLimit',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /[\s\S]*/,
            regular: /[\s\S]/,
            errorColor: false
          },
          {
            message: "请正确输入您的姓名",
            description: '贷款人姓名：',
            placeholder: '请输入您的姓名',
            name: 'username',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[\u4e00-\u9fa5]{1,15}$/,
            regular: /^[\u4e00-\u9fa5]{1,15}$/,
            errorColor: false,
            maxlength: '15'
          },
          {
            message: "请正确输入您的身份证号",
            description: '身份证号：',
            placeholder: '请输入您的身份证号',
            name: 'IDnumber',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[0-9xX]{1,}$/,
            regular: /^\d{17}[\d|xX]|\d{15}$/,
            errorColor: false,
            maxlength: '18'
          },
          {
            message: "请正确输入您的手机号",
            description: '手机号：',
            placeholder: '请输入您的手机号',
            name: 'phoneNum',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[0-9]{1,}$/,
            regular: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/,
            errorColor: false,
            maxlength: '11'
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
        shadeIsShow: false,
        mformDatasInd: 0,
        pickerModDatas: [],
        simulationSubmitIsShow: true,
        verificationShow: false,
        num: null,
        reveal: false,
        windowChange: 0
      }
    },

    components: {
      propertyMod, verification
    },
    watch: {
      num(val) {
        if (val) {
          let timer = setInterval(() => {
            val--
            if (val == 0) {
              this.mformDatas[6].units = '获取验证码'
              clearInterval(timer)
              this.num = null
            } else {
              this.mformDatas[6].units = val + 's后重发'
            }
          }, 1000)
        }
      },
      shadeIsShow(val) {
        if (!val && !this.reveal) {
          this.mformDatas[this.mformDatasInd].model = ""
        }
      },
      windowChange(val){
        if(val > 140){
          this.simulationSubmitIsShow = false
        }else {
          this.simulationSubmitIsShow = true
        }
      }
    },
    computed: {
      ...mapState(["time","lastOrderInfo"]),
      ...mapGetters(["key"]),
      shadeIsShowInd() {
        return this.shadeIsShow ? 3 : null
      }
    },
    beforeCreate() {

    },
    created() {
      if (this.getCookie("whether") * 1 > 0) {
        this.getLoanAmount("LoanAmount").then((res) => {
          this.moneyArr = res
        })

        this.getLoanAmount("LoanTerm").then((res) => {
          this.deadlineArr = res
        })
        this.getLoanAmount("LoanUse").then((res) => {
          this.consumeArr = res
        })
      }
      this.$store.dispatch("getLastOrderInfo").then(()=>{
        if(this.lastOrderInfo){
          this.__findModel("username").model = this.lastOrderInfo.name
          this.__findModel("IDnumber").model = this.lastOrderInfo.idCard
          this.__findModel("phoneNum").model = this.lastOrderInfo.mobilePhone
        }
      })
    },
    // 滑动事件
    mounted() {
      let that = this
      let winHeight = document.body.clientHeight
      window.onresize = function (e) {
        let thisHeight = document.body.clientHeight
        that.windowChange = winHeight - thisHeight
      }
    }
    ,
    updated() {

    }
    ,
    methods: {
      //获取用户输入的内容
      __findModel(value) {
        let mformDatas = this.mformDatas
        return mformDatas.find(val => val.name == value)
      },
      //发送图形验证码检查
      __SendVerifyCode(validateCode) {
        let that = this
        this.$store.dispatch('postSendMsg', {
          code: 'SMS_127153204',
          validateKey: that.key + that.time,
          mobilePhone: that.__findModel("phoneNum").model,
          validateCode: validateCode,
          needvalidateCode: true
        }).then((res) => {
          console.log(res);
          if (res.success) {
            this.num = 60
            this.MessageBox({
              title: '提示',
              message: '短信验证码已发送，有效时间5分钟',
              showCancelButton: false
            })
          } else {
            that.MessageBox({
              title: '提交失败',
              message: res.message,
              showCancelButton: false,
              closeOnClickModal: false
            })
          }
        })
      },
      //下拉列表数据
      async getLoanAmount(codes) {
        let url = this.apiPrefix + '/api/Values/GetSelectDataSourceLogin'
        this.Arr = await
          getLoanAmount(url, {codes: codes})
        let Arr = []
        Arr = this.Arr.data.map((item) => {
          return item.childrens
        })
        Arr.forEach((item) => {
          Arr = item
        })
        return Arr
      },
      //提交
      submit() {
        let propertyModDatas = this.propertyModDatas
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
        let that = this
        let url = this.apiPrefix + "api/OfficialAccounts/InsertLoanDemand"
        postLoanDemand(url, {
          loanDemand: {
            applyAmount: that.applyAmount, //贷款金额编码
            purpose: that.consume,//贷款用途编码
            applyTerm: that.applyTerm, //贷款期限编码
            name: that.__findModel("username").model,  //贷款人
            idCard: that.__findModel("IDnumber").model,  //身份证
            telphone: that.__findModel("phoneNum").model,  //手机
            house: propertyModDatas[0].imgUrlIsShow, //有房
            car: propertyModDatas[1].imgUrlIsShow,  //有车
            creditCard: propertyModDatas[2].imgUrlIsShow,//有信用卡
            providentFund: propertyModDatas[3].imgUrlIsShow, //有公积金
            socialSecurity: propertyModDatas[4].imgUrlIsShow //有社保
          },
          phone: that.__findModel("phoneNum").model,  //手机
          verifyCode: that.__findModel("authCode").model, //验证码
          source: "OfficialAccounts"
        }).then(res => {
          if (res.success) {
            this.MessageBox({
              title: '提示',
              message: '您的申请已提交,我们会立刻开始处理',
              showCancelButton: false
            }).then(() => {
              this.$router.replace("/homePage")
            })
          } else {
            this.MessageBox({
              title: '提交失败',
              message: res.message,
              showCancelButton: false
            })
          }
        })

      },
//      输入框焦点时底部消失
      isFooter() {
        this.simulationSubmitIsShow = false
      },
//      错误变色
      loseFocus() {
        this.simulationSubmitIsShow = true
      },
//      输入框值
      onValuesChange(index) {
//        debugger
        this.mformDatas[this.mformDatasInd].model = this.pickerModDatas[index].name
        switch (this.mformDatasInd) {
          case 0:
            this.applyAmount = this.moneyArr[index].code
            break
          case 1:
            this.consume = this.consumeArr[index].code
            break
          case 2:
            this.applyTerm = this.deadlineArr[index].code
            break
          default:
            break
        }
      },
//      输入正确变色
      goodInput(reg, flag, index) {
        if (index < 3) {
          this.mformDatas[index].model = ''
        }
        if (!reg.test(flag)) {
          this.mformDatas[index].model = flag.substring(0, flag.length - 1)
        }
      },
//      验证码逻辑
      sendMsg() {
        let mformData = this.mformDatas[5]
        if (mformData.model !== '' && mformData.model.length == 11) {
          this.verificationShow = true
        } else {
          this.MessageBox({
            title: '提示',
            message: '请正确输入手机号',
            showCancelButton: false
          })
        }
        if (this.num > 0) {
          this.verificationShow = false
          this.MessageBox({
            title: '提示',
            message: '请60秒后在请求验证码',
            showCancelButton: false
          })
        }
      }
      ,
//      三角点击
      pullDown(flag, index, inputValue) {

        this.mformDatasInd = index
        if (index < 3) {
          this.reveal = inputValue
          switch (index) {
            case 0:
              this.pickerModDatas = this.moneyArr
              break
            case 1:
              this.pickerModDatas = this.consumeArr
              break
            case 2:
              this.pickerModDatas = this.deadlineArr
              break
            default:
              this.pickerModDatas = []
              break
          }
          this.shadeIsShow = flag
          !inputValue ? this.mformDatas[index].model = '' : null
        } else {
          this.simulationSubmitIsShow = false
        }

      }
      ,
//     图片验证码
      changeShow() {
        this.verificationShow = false
      },
      //倒计时
      verificationCancel(flag, validateCode) {
        this.verificationShow = false

        if (flag) {
          this.__SendVerifyCode(validateCode)
          this.$store.dispatch("changeTime")
        }else {
          this.$store.dispatch("changeTime")
        }
      },
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .footerOccupied
    width (1080 /$rem)
    height (146 /$rem)

  .loanContent
    img
      width (1080 /$rem)
      height (520 /$rem)
    .mform
      margin: 0 (30 /$rem)
      li:first-child
        border-top 1px solid #f2f2f2
      li
        box-sizing border-box
        position relative
        line-height (119 /$rem)
        width (1020 /$rem)
        height (121 /$rem)
        font-size (42 /$rem)
        border-bottom 1px solid #f2f2f2
        text-align right
        span
          color #333333
        .description
          margin-left 0
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
        .purposeList
          width (40 /$rem)
          background: url("./img/fanhuiicon.png") no-repeat right center
          background-size 100%
          padding-right: (40 /$rem)
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

    .propertyCase
      width (1030 /$rem)
      margin (40 /$rem) (30 /$rem) (40 /$rem)
      span
        font-size (42 /$rem)
        color #333333

  .simulationSubmit
    position fixed
    bottom 0
    left 0
    z-index 11
    a
      width (1080 /$rem)
      height (146 /$rem)
      background-image url("./img/shenqing.png")
      background-repeat no-repeat
      background-size 100%

  .maskLayer
    font-family "Microsoft YaHei UI"
    box-sizing border-box
    width (1080 /$rem)
    height (674 /$rem)

  .shadeIsShowHeader
    font-size (42 /$rem)
    height (120 /$rem)
    line-height (120 /$rem)
    .cancel
      margin-left (59 /$rem)
      float left
      color #bbb
    .ascertain
      margin-right (50 /$rem)
      float right
      color #efca7d
</style>
