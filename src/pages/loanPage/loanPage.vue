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
        <li>
          <span class="description">贷款金额：</span>
          <input type="text"
                 placeholder="请输入贷款金额"
                 name="money">
        </li>
        <li>
          <span class="description">贷款用途：</span>
          <input type="text"
                 placeholder="请输入贷款用途"
                 name="purpose">
          <span class="rightFont">
              <select name="purposeList"></select>
          </span>
        </li>
        <li>
          <span class="description">贷款期限：</span>
          <input type="text"
                 placeholder="请输入贷款期限"
                 name="timeLimit">
          <span class="rightFont">
              <select name="purposeList"></select>
          </span>
        </li>
        <li>
          <span class="description">贷款人姓名：</span>
          <input type="text"
                 placeholder="请输入您的姓名"
                 name="username">
        </li>
        <li>
          <span class="description">身份证件号：</span>
          <input type="text"
                 placeholder="请输入您的身份证件号"
                 name="IDnumber">
        </li>
        <li>
          <span class="description">手机号：</span>
          <input type="text"
                 placeholder="请输入您的手机号"
                 name="cell-phoneNum">
        </li>
        <li>
          <span class="description">验证码：</span>
          <input type="text"
                 placeholder="请输入验证码"
                 name="authCode">
        </li>
        <span class="sendMsg">获取验证码</span>
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
        money: ""
      }
    },

    components: {
      propertyMod
    },

    computed: {},

    mounted(){

    },

    methods: {}
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
        select
          outline: none
          border: none
          appearance: none
          -moz-appearance: none
          -webkit-appearance: none
          width (40 /$rem)
          background: url("./img/fanhuiicon.png") no-repeat scroll right center transparent
          background-size 100%
          padding-right: (40 /$rem)
        select:
        :-ms-expand
          display: none
      .sendMsg
        float right
        margin-top (24 /$rem)
        font-size (36 /$rem)
        color #00abf2
    .propertyCase
      width (1030 /$rem)
      margin (120 /$rem) (30 /$rem) (75 /$rem)
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
