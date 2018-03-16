<template>
  <div>
    <div class="loanWrap" ref="loanWrap">
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
    </div>
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
      <pickerMod :pickerModDatas="pickerModDatas" :shadeIsShow="shadeIsShow" :onValuesChange="onValuesChange"/>
    </mt-popup>
    <verification v-show="verificationShow" :changeShow="changeShow" :verificationCancel="verificationCancel"
                  :time="time"/>
    <footer class="simulationSubmit" v-show="simulationSubmitIsShow">
      <a href="javascript:"></a>
    </footer>
  </div>
</template>

<script>
  import propertyMod from '../../components/propertyMod/propertyMod.vue'
  import verification from '../../components/verification/verification.vue'
  import { getLoanAmount } from '../../api'
  import { MessageBox, Toast } from 'mint-ui'

  export default {
    data () {
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
            reg: /[\s\S]*/,
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
            reg: /^[\u4e00-\u9fa5_A-Za-z]{1,}$/,
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
            reg: /^[0-9]{1,}$/,
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
            errorColor: false,
            maxlength: '4'
          },
        ],
        shadeIsShow: false,
        mformDatasInd: 0,
        pickerModDatas: [
          {
            name: '装修',
            code: 'LoanUse.Renovation'
          },
          {
            name: '日常生活消费',
            code: 'LoanUse.DailyConsumption'
          },
          {
            name: '教育支出',
            code: 'LoanUse.EducationalExpenditure'
          },
          {
            name: '医疗',
            code: 'LoanUse.MedicalCare'
          },
          {
            name: '支付员工工资',
            code: 'LoanUse.PayWages'
          },
          {
            name: '扩大生产/经营',
            code: 'LoanUse.ExpandingProductionOperation'
          },
          {
            name: '购买货物/原材料/设备',
            code: 'LoanUse.PurchaseGoodsRawMaterialsEquipment'
          },
          {
            name: '资金周转',
            code: 'LoanUse.CapitalTurnover'
          },
          {
            name: '购车',
            code: 'LoanUse.BuyCar'
          },
          {
            name: '购房',
            code: 'LoanUse.Purchase'
          },
          {
            name: '物流运输',
            code: 'LoanUse.LogisticsTransportation'
          },
          {
            name: '旅游',
            code: 'LoanUse.Tourism'
          },
          {
            name: '婚丧嫁娶',
            code: 'LoanUse.MarriageFuneral'
          },
          {
            name: '租房',
            code: 'LoanUse.Rental'
          },
          {
            name: '其他',
            code: 'LoanUse.Other'
          }
        ],
        // Arr:[],
        // moneyArr: ['1000元', '1万元', '10万元', '60万元'],
        consumeArr:
          ['买车', '买房', '消费', '娱乐'],
        deadlineArr:
          ['1个月', '3个月', '5个月', '半年', '8个月', '1年'],
        simulationSubmitIsShow:
          true,
        verificationShow:
          false,
        time:
          new Date().getTime()
      }
    }
    ,

    components: {
      propertyMod, verification
    }
    ,

    computed: {}
    ,
    created () {
      this.getLoanAmount("LoanAmount").then(()=>{
        this.moneyArr = this.Arr
      })
      this.getLoanAmount("LoanTerm").then(()=>{
        this.deadlineArr = this.Arr
      })
      this.getLoanAmount("LoanUse").then(()=>{
        this.consumeArr = this.Arr
      })
    }
    ,
    // 滑动事件
    mounted () {
      this.__boxheight(this.$refs.loanWrap) //执行函数
      window.onresize = this.__boxheight(this.$refs.loanWrap) //窗口或框架被调整大小时执行
      this.$nextTick(() => {
        this.loanWrap = new this.BScroll(this.$refs.loanWrap, {click:true,touchstart: true, momentum: true})
        this.loanWrap.refresh()
      })
    }
    ,
    updated () {

    }
    ,
    methods: {
      async getLoanAmount (codes) {
        let apiPrefix = 'http://192.168.6.66:8001'
        let url = apiPrefix + '/api/Values/GetSelectDataSourceLogin'
        this.Arr = await
          getLoanAmount(url, {codes: codes})
        console.log(this.Arr)
        let Arr = []
        Arr = this.Arr.data.map((item) => {
          return item.childrens
        })
        Arr.forEach((item) => {
          this.Arr = item
          console.log(item)
        })
      }
      ,
      /*importS(){
        Toast({
          message: event.keyCode,
          className: "ToastStyle"
        })
      },*/
//      输入框焦点时底部消失
      isFooter () {
        this.simulationSubmitIsShow = false
      }
      ,
//      错误变色
      loseFocus () {
        this.simulationSubmitIsShow = true
      }
      ,
//      输入框值
      onValuesChange (index) {
//        debugger
        this.mformDatas[this.mformDatasInd].model = this.pickerModDatas[index].name
      }
      ,
//      输入正确变色
      goodInput (reg, flag, index) {
//        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (index < 3) {
          this.mformDatas[index].model = ''
        }
        if (!reg.test(flag)) {
          Toast({
            message: '格式错误',
            className: 'ToastStyle'
          })
          this.mformDatas[index].model = flag.substring(0, flag.length - 1)
        }
      }
      ,
//      验证码逻辑
      sendMsg () {
        let mformData = this.mformDatas[5]
        if (mformData.model !== '' && mformData.model.length == 11) {
          this.verificationShow = true
        } else {
          MessageBox({
            title: '提示',
            message: '请正确输入手机号',
            showCancelButton: false
          })
        }
        if (this.num > 0) {
          this.verificationShow = false
          MessageBox({
            title: '提示',
            message: '请60秒后在请求验证码',
            showCancelButton: false
          })
        }
      }
      ,
//      三角点击
      pullDown (flag, index, inputValue) {
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
          !inputValue ? this.mformDatas[index].model = '' : ''
        } else {
          this.simulationSubmitIsShow = false
        }

      }
      ,
//     图片验证码
      changeShow () {
        this.verificationShow = false
      }
      ,
      verificationCancel (flag) {
        this.verificationShow = false
        if (flag) {
          this.num = 60
          let timer = setInterval(() => {
            this.num--
            if (this.num == 0) {
              this.mformDatas[6].units = '获取验证码'
              clearInterval(timer)
              this.num = null
            } else {
              if (flag) {
                this.mformDatas[6].units = this.num + 's后重发'
              }
            }
          }, 1000)
        }
      }
      ,
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
      .mint-msgbox-input
        position relative
        margin-top (64 /$rem)
        box-sizing border-box
        float left
        display inline-block
        margin-left (50 /$rem)
        width (200 /$rem)
        height (100 /$rem)
        & > input
          height (100 /$rem)
          position absolute
          top 0
          left 0
    .mint-msgbox-btns
      height (136 /$rem)
      line-height (136 /$rem)
      .mint-msgbox-confirm
        font-size (46 /$rem)
      .mint-msgbox-cancel
        font-size (46 /$rem)
        color #333

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
        line-height (120 /$rem)
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
