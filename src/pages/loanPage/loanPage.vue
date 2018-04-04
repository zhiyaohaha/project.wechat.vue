<template>
  <div>
    <scroll>
      <div>
        <div class="loanContent">
          <img src="./img/xinyongkabanner.png">
          <headline :headlineData="{title:'立刻申请贷款'}"/>
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
              <a href="javascript:;" :class="{sendMsg:mformData.sendMsg}" v-if="mformData.sendMsg && mformData.units"
                 @click="sendMsg()">
                {{mformData.units}}
              </a>
            </li>
          </ul>
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
          <span @touchstart="pullDown(false,mformDatasInd,false )" class="cancel">
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
  import {getLoanAmount, postSendVerifyCode, postLoanDemand} from '../../api'

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
            placeholder: '请输入贷款金额',
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
            placeholder: '请输入贷款用途',
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
            placeholder: '请输入贷款期限',
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
            description: '贷款人姓名：',
            placeholder: '请输入您的姓名',
            name: 'username',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[A-Za-z\u4e00-\u9fa5]{1,}$/,
            regular: /^[A-Za-z\u4e00-\u9fa5]{1,}$/,
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
            reg: /^[0-9xX]{1,}$/,
            regular: /^\d{17}[\d|xX]|\d{15}$/,
            errorColor: false,
            maxlength: '18'
          },
          {
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
            maxlength: '4'
          },
        ],
        shadeIsShow: false,
        mformDatasInd: 0,
        pickerModDatas: [],
        simulationSubmitIsShow: true,
        verificationShow: false,
        num: null,
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
      }
    },
    computed: {
      shadeIsShowInd() {
        return this.shadeIsShow ? 3 : null
      }
    },
    beforeCreate(){
      let that = this
      if(this.getCookie("whether")*1 < 1){
        this.$router.replace({name:"phoneApprove",params: {name1:that.$route.name}})
        that =null
      }
    },
    created() {
      this.getLoanAmount("LoanAmount").then((res) => {
        this.moneyArr = res
      })

      this.getLoanAmount("LoanTerm").then((res) => {
        this.deadlineArr = res
      })
      this.getLoanAmount("LoanUse").then((res) => {
        this.consumeArr = res
      })
    },
    // 滑动事件
    mounted() {

    }
    ,
    updated() {

    }
    ,
    methods: {
      //获取用户输入的内容
      __findModel(value) {
        let mformDatas = this.mformDatas
        return mformDatas.find(val => val.name == value).model
      },
      //发送图形验证码检查
      __SendVerifyCode(validateCode) {
        let that = this
        let url = this.apiPrefix + "api/SMS/SendVerifyCode"
        postSendVerifyCode(url, {
          code: "SMS_127153204",
          mobilePhone: that.__findModel("phoneNum"),
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
              closeOnClickModal:false
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
        let judge = this.mformDatas.filter((item) => {
          return (item.regular.test(item.model) && (item.model !== ''))
        })
        if (judge.length == this.mformDatas.length) {
          let that = this
          let url = this.apiPrefix + "api/OfficialAccounts/InsertLoanDemand"
          postLoanDemand(url, {
            loanDemand: {
              applyAmount: that.applyAmount, //贷款金额编码
              purpose: that.consume,//贷款用途编码
              applyTerm: that.applyTerm, //贷款期限编码
              name: that.__findModel("username"),  //贷款人
              idCard: that.__findModel("IDnumber"),  //身份证
              telphone: that.__findModel("phoneNum"),  //手机
              house: propertyModDatas[0].imgUrlIsShow, //有房
              car: propertyModDatas[1].imgUrlIsShow,  //有车
              creditCard: propertyModDatas[2].imgUrlIsShow,//有信用卡
              providentFund: propertyModDatas[3].imgUrlIsShow, //有公积金
              socialSecurity: propertyModDatas[4].imgUrlIsShow //有社保
            },
            phone: that.__findModel("phoneNum"),  //手机
            verifyCode: that.__findModel("authCode"), //验证码
            source: "OfficialAccounts"
          }).then(res => {
            if (res.success) {
              this.MessageBox({
                title: '提示',
                message: '恭喜您报单成功,等待审核',
                showCancelButton: false
              })
            } else {
              this.MessageBox({
                title: '提交失败',
                message: res.message,
                showCancelButton: false
              })
            }
          })
        } else {
          this.MessageBox({
            title: '提示',
            message: '请正确输入您的信息',
            showCancelButton: false
          })
        }
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
//        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (index < 3) {
          this.mformDatas[index].model = ''
        }
        if (!reg.test(flag)) {
          this.Toast({
            message: '格式错误',
            className: 'ToastStyle'
          })
          this.mformDatas[index].model = flag.substring(0, flag.length - 1)
        }
      }
      ,
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
        this.$store.dispatch("changeTime")
        if (flag) {
          this.__SendVerifyCode(validateCode)
        }
      },
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .ToastStyle
    width (200 /$rem)
    height (70 /$rem)
    font-size (36 /$rem)
    border-radius (15 /$rem)
    color #ffffff
    background-color #000
    text-align center
    line-height (70 /$rem)
    overflow: hidden

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
