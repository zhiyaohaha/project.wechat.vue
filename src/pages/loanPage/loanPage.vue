<template>
  <div>
    <header class="loanHeader">
      <span class="iconLogo" @click="$router.back()"><</span>
      <span>申请贷款</span>
    </header>
    <div class="loanContent">
      <img src="./img/banner.png">
      <div class="loanTitle">
        <span>立即申请贷款</span>
      </div>
      <ul class="mform">
        <li v-for="(mformData, index) in mformDatas" :key="index">
          <span class="description">{{mformData.description}}</span>
          <input type="text" v-model="mformData.model" :class="{errorColor:mformData.errorColor}"
                 @blur="loseFocus(mformData.reg,mformData.model,index)"
                 @input="goodInput(mformData.reg,mformData.model,index)"
                 :placeholder="mformData.placeholder"
                 :name="mformData.name">
          <span :class="{purposeList:mformData.purposeList,sendMsg:mformData.sendMsg}">{{mformData.units}}</span>
        </li>
      </ul>
      <div class="propertyCase">
        <span>资产情况</span>
        <propertyMod :propertyModDatas="propertyModDatas"/>
      </div>
      <split :splitHeight="true"/>
    </div>
    <footer class="simulationSubmit">
      <a href="javascript:"></a>
    </footer>
  </div>
</template>

<script>
  import propertyMod from "../../components/propertyMod/propertyMod.vue"
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
            purposeList: false,
            sendMsg: false,
            units: "元",
            reg: /^[1-9]\d*$/,
            errorColor: false
          },
          {
            description: "贷款用途：",
            placeholder: "请输入贷款用途",
            name: "purpose",
            model: "",
            purposeList: true,
            sendMsg: false,
            units: "",
            reg: /^[\u4e00-\u9fa5]{0,}$/,
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
            reg: /^\d{4}-\d{1,2}-\d{1,2}/,
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
            reg: /^[\u4e00-\u9fa5]{0,}$/,
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
            reg: /^\d{15}|\d{18}$/,
            errorColor: false
          },
          {
            description: "手机号：",
            placeholder: "请输入您的手机号",
            name: "cellPhoneNum",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[1][3,4,5,7,8][0-9]{9}$/,
            errorColor: false
          },
          {
            description: "验证码：",
            placeholder: "请输入验证码",
            name: "authCode",
            model: "",
            purposeList: false,
            sendMsg: true,
            units: "",
            reg: /^\d{4}$/,
            errorColor: false
          },
        ],
      }
    },

    components: {
      propertyMod
    },

    computed: {},

    mounted(){

    },

    methods: {
      loseFocus(reg, flag, index){
        if (!reg.test(flag)) {
          for (let i = 0; i < this.mformDatas.length; i++) {
            this.mformDatas[index].errorColor = true
          }
        }
      },
      goodInput(reg, flag, index){
        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (reg.test(flag)) {
          for (let i = 0; i < this.mformDatas.length; i++) {
            this.mformDatas[index].errorColor = false
          }
        }
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
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
          margin-top
          font-size (42 /$rem)
          outline: none
          border: none
          text-align right
          margin-right (30 /$rem)
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
        .purposeList
          width (40 /$rem)
          background: url("./img/fanhuiicon.png") no-repeat scroll right center transparent
          background-size 100%
          padding-right: (40 /$rem)
        .sendMsg
          display block
          margin-top (17 /$rem)
          width (290 /$rem)
          height (86 /$rem)
          background-image url("./img/huoquyanzhengma.png")
          background-repeat no-repeat
          background-size 100%
          text-align center
          float right
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
</style>
