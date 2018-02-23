<template>
  <div>
    <div class="loanWrap" ref="loanWrap">
      <div>
        <!--<header class="loanHeader">
          <span class="iconLogo" @touchstart="$router.back()"><</span>
          <span>申请贷款</span>
        </header>-->
        <div class="loanContent">
          <img src="./img/banner.png">
          <div class="loanTitle">
            <span>立即申请贷款</span>
          </div>
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
                 @touchstart="sendMsg()">
                {{mformData.units}}
              </a>
            </li>
          </ul>
          <div class="propertyCase">
            <span>资产情况</span>
            <propertyMod :propertyModDatas="propertyModDatas"/>
          </div>
          <split :splitHeight="true"/>
        </div>
        <div class="footerOccupied">
        </div>
      </div>
    </div>
    <mt-popup v-model="shadeIsShow" position="bottom" @change="onValuesChange" class="maskLayer"
              showToolbar="true">
      <div class="shadeIsShowHeader">
          <span @touchstart="pullDown(false,mformDatasInd)" class="cancel">
            取消
          </span>
        <span @touchstart="pullDown(false,mformDatasInd)" class="ascertain">
            确定
          </span>
      </div>
      <mt-picker :itemHeight="70" :slots="slots" @change="onValuesChange"
                 class="shadeIsShowContent"></mt-picker>
    </mt-popup>
    <verification v-show="verificationShow" :changeShow="changeShow" :verificationCancel="verificationCancel" :time="time"/>
    <footer class="simulationSubmit" v-show="simulationSubmitIsShow">
      <a href="javascript:"></a>
    </footer>
  </div>
</template>

<script>
  import propertyMod from "../../components/propertyMod/propertyMod.vue"
  import verification from "../../components/verification/verification.vue"
  import BScroll from "better-scroll"
  import { MessageBox, Toast } from "mint-ui"
  export default {
    data () {
      return {
        propertyModDatas: [
          {
            character: "我有房",
            imgUrlIsShow: false,
          },
          {
            character: "我有车",
            imgUrlIsShow: false,
          },
          {
            character: "我有信用卡",
            imgUrlIsShow: false,
          },
          {
            character: "我有公积金",
            imgUrlIsShow: false,
          },
          {
            character: "我有社保",
            imgUrlIsShow: false,
          }
        ],
        mformDatas: [
          {
            description: "贷款金额：",
            placeholder: "请输入贷款金额",
            name: "money",
            model: "",
            purposeList: true,
            sendMsg: false,
            units: "",
            reg: /[\s\S]*/,
            errorColor: false,
          },
          {
            description: "贷款用途：",
            placeholder: "请输入贷款用途",
            name: "purpose",
            model: "",
            purposeList: true,
            sendMsg: false,
            units: "",
            reg: /[\s\S]*/,
            errorColor: false
          },
          {
            description: "贷款期限：",
            placeholder: "请输入贷款期限",
            name: "timeLimit",
            model: "",
            purposeList: true,
            sendMsg: false,
            units: "",
            reg: /[\s\S]*/,
            errorColor: false
          },
          {
            description: "贷款人姓名：",
            placeholder: "请输入您的姓名",
            name: "username",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[\u4e00-\u9fa5_A-Za-z]{1,}$/,
            errorColor: false
          },
          {
            description: "身份证号：",
            placeholder: "请输入您的身份证号",
            name: "IDnumber",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[0-9xX]{1,}$/,
            errorColor: false,
            maxlength: "18"
          },
          {
            description: "手机号：",
            placeholder: "请输入您的手机号",
            name: "cellPhoneNum",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[0-9]{1,}$/,
            errorColor: false,
            maxlength: "11"
          },
          {
            description: "验证码：",
            placeholder: "请输入验证码",
            name: "authCode",
            model: "",
            purposeList: false,
            sendMsg: true,
            units: "获取验证码",
            reg: /^\d{1,}$/,
            errorColor: false,
            maxlength: "4"
          },
        ],
//        readonly: false,
        shadeIsShow: false,
        mformDatasInd: 0,
        slots: [
          {
            defaultIndex: 1,
            flex: 1,
            className: "slots1",
            values: [0],
            textAlign: 'center'
          }
        ],
        moneyArr: ["1000元", "1万元", "10万元", "60万元"],
        consumeArr: ["买车", "买房", "消费", "娱乐"],
        deadlineArr: ['1个月', '3个月', '5个月', '半年', '8个月', '1年'],
        simulationSubmitIsShow: true,
        verificationShow: false,
        time: new Date().getTime()
      }
    },

    components: {
      propertyMod, verification
    },

    computed: {

    },
// 滑动事件
    mounted(){
      this.__boxheight(this.$refs.loanWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.loanWrap); //窗口或框架被调整大小时执行
      this.$nextTick(() => {
        this.loanWrap = new BScroll(this.$refs.loanWrap, {touchstart: true, momentum: true})
        this.loanWrap.refresh()
        this.$route.meta.keepAlive = false
      })
    },
    updated(){
      /*this.__boxheight(this.$refs.loanWrap); //执行函数
       window.onresize = this.__boxheight(this.$refs.loanWrap)*/
//      this.loanWrap = new BScroll(this.$refs.loanWrap, {touchstart: true, momentum: true})
//      this.loanWrap.refresh()
    },
    methods: {
      /*importS(){
        Toast({
          message: event.keyCode,
          className: "ToastStyle"
        })
      },*/
//      输入框焦点时底部消失
      isFooter(){
        this.simulationSubmitIsShow = false
      },
//      错误变色
      loseFocus(){
        this.simulationSubmitIsShow = true
      },
//      输入框值
      onValuesChange(picker, values) {
//        debugger
        console.log(picker.getSlotValue(0))
        this.mformDatas[this.mformDatasInd].model = picker.getSlotValue(0)
      },
//      输入正确变色
      goodInput(reg, flag, index){
//        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (index < 3) {
          this.mformDatas[index].model = ""
        }
        if (!reg.test(flag)) {
          Toast({
            message: "格式错误",
            className: "ToastStyle"
          })
          this.mformDatas[index].model = flag.substring(0,flag.length - 1)
        }
      },
//      验证码逻辑
      sendMsg(){
        let mformData = this.mformDatas[5]
        if (mformData.model !== "" && mformData.model.length == 11) {
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
      },
//      三角点击
      pullDown(flag, index){
        this.mformDatasInd = index
        this.simulationSubmitIsShow = false
        if (index < 3) {
          switch (index) {
            case 0:
              this.slots[0].values = this.moneyArr
              break
            case 1:
              this.slots[0].values = this.consumeArr
              break
            case 2:
              this.slots[0].values = this.deadlineArr
              break
            default:this.slots[0].values = []
              break
          }
          this.shadeIsShow = flag
        }

      },
//     图片验证码
      changeShow(){
        this.verificationShow = false
      },
      verificationCancel(flag){
        this.verificationShow = false
        if (flag) {
          this.num = 60
          let timer = setInterval(() => {
            this.num--
            if (this.num == 0) {
              this.mformDatas[6].units = "获取验证码"
              clearInterval(timer)
              this.num = null
            } else {
              if (flag) {
                this.mformDatas[6].units = this.num + "s后重发"
              }
            }
          }, 1000)
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

  .footerTap
    position fixed
    bottom 0
    left 0
    z-index 10
    a
      float left
      img
        display block
        width (540 /$rem)
        height (146 /$rem)

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

  .loanHeader
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

  .loanContent
    img
      width (1080 /$rem)
    .loanTitle
      background-color #f4f4f4
      color #bbbbbb
      font-size (36 /$rem)
      width (1080 /$rem)
      height (98 /$rem)
      line-height (90 /$rem)
      span
        margin-left (30 /$rem)
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
        .purposeList
          width (40 /$rem)
          background: url("./img/fanhuiicon.png") no-repeat right center
          background-size 100%
          padding-right: (40 /$rem)
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
    height (650 /$rem)
    .shadeIsShowHeader
      font-size (42 /$rem)
      background-color #e8e8e8
      height (120 /$rem)
      line-height (120 /$rem)
      .cancel
        margin-left (50 /$rem)
        float left
        color #bbb
      .ascertain
        margin-right (50 /$rem)
        float right
        color #c2181f
    .shadeIsShowContent
      font-size (52 /$rem)
      .picker-slot
        div
          font-size (52 /$rem)
          color #ddd
          &.picker-selected
            color #333
</style>
