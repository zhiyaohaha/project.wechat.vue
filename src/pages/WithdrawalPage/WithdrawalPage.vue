<template>
  <!--<div>
    <header class="WithdrawalHeader" v-if="binBankCard">
      <div class="fakeBankCard">
        <div class="BankNameWrap">
          <img src="./img/logo.png"><span class="BankName">{{binBankCard[0]._bank}}</span>
        </div>
        <div class="bankCardNumWrap">
          <span class="bankCardNum">{{binBankCard[0].number}}</span>
        </div>
      </div>
    </header>
    <div class="WithdrawalContent">
      <ul class="mform">
        <li v-for="(mformData, index) in mformDatas" :key="index">
          <span class="description">{{mformData.description}}</span>
          <input type="number" v-model="mformData.model"
                 :placeholder="mformData.placeholder"
                 :maxlength="mformData.maxlength" :readonly="mformData.readonly"
                 :name="mformData.name">
          <span :class="{purposeList:mformData.purposeList}" v-if="mformData.purposeList">
                {{mformData.units}}
              </span>
        </li>
      </ul>
      <div class="cost">
        提现费用 ：<span>100</span>元
      </div>
      <a href="javascript:;" class="affirm" @click="affirm">
        确认
      </a>
      <div class="notice">
        <img src="./img/icon.png">
        <span>提现须知 ：</span>
        <div>
          <span>每日最高提现额度50000元，最低提现额度100元。1-3个工作日到账，遇到节假日顺延；具体时间以银行信息为准。</span>
        </div>
      </div>
    </div>
  </div>-->
</template>

<script>
  import {mapState} from "vuex"

  export default {
    data() {
      return {
        mformDatas: [
          {
            description: '可提现金额：',
            placeholder: 'XXXXXX.XX',
            name: 'money',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '元',
            reg: /[\s\S]*/,
            errorColor: false,
            readonly: true
          },
          {
            description: '提现金额：',
            placeholder: '请输入提现金额',
            name: 'sum',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /^[0-9]$/,
            errorColor: false,
          },
        ]
      }
    },
    watch: {
      $route(val) {
        console.log(val.name);
        if (val.name === "WithdrawalPage") {
          this.MessageBox.alert(
            "功能正在制作中，提现请联系客服。在公众号主页回复“提现”，会收到客服联系方式，加客服即可人工提现。",
            '提示',
          ).then(() => {
            this.$router.go(-1)
          })
        }
      },
    },

    beforeCreate() {
      this.MessageBox.alert(
        "功能正在制作中，提现请联系客服。在公众号主页回复“提现”，会收到客服联系方式，加客服即可人工提现。",
        "提示",
      ).then((res) => {
        console.log(res);
        this.$router.go(-1)
      })
      // }
    },
    components: {},

    computed: {
      ...mapState(["binBankCard"])
    },
    mounted() {
    },
    methods: {
      affirm() {
        this.MessageBox({
          title: '提示',
          message: "功能未开放",
          showCancelButton: false
        })
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .WithdrawalHeader
    box-sizing border-box
    height (442 /$rem)
    width (1080 /$rem)
    padding-top (120 /$rem)
    .fakeBankCard
      position relative
      z-index 10
      border-radius (12 /$rem) (12 /$rem) 0 0
      width (880 /$rem)
      height (322 /$rem)
      background-color: #ef6355
      margin 0 auto
      box-sizing border-box
      padding (40 /$rem) 0 (88 /$rem) (30 /$rem)
      color #ffffff
      .BankNameWrap
        line-height (60 /$rem)
        img
          display inline-block
          width (60 /$rem)
          vertical-align middle
          margin-right (20 /$rem)
        .BankName
          font-size (42 /$rem)
      .bankCardNumWrap
        position absolute
        width (880 /$rem)
        left (0)
        bottom (88 /$rem)
        text-align center
        font-size (48 /$rem)

  .WithdrawalContent
    .mform
      box-sizing border-box
      background-color: #fff;
      padding 0 (30 /$rem)
      box-shadow: 0 (-30 /$rem) (60 /$rem) (10 /$rem) rgba(51, 51, 51, 0.1);
      li: first-child
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
          font-size (42 /$rem)
          color #bbb

    .cost
      margin-left (30 /$rem)
      height (116 /$rem)
      font-size (36 /$rem)
      color #bbbbbb
      line-height (116 /$rem)
    .affirm
      width (1020 /$rem)
      height (146 /$rem)
      background-color: #efca7d
      font-size (48 /$rem)
      color #fff
      border-radius (10 /$rem)
      margin 0 auto
      line-height (146 /$rem)
      text-align center
    .notice
      overflow hidden
      box-sizing border-box
      padding (35 /$rem) (30 /$rem)
      img
        display inline-block
        width (30 /$rem)
        vertical-align bottom
      span
        font-size (30 /$rem)
        color #efca7d
      div
        width (800 /$rem)
        float right

</style>
