<template>
  <div class="WithdrawalPage" v-if="income">
    <header class="WithdrawalPageHeader"></header>
    <div class="WithdrawalPageContent">
      <p class="balance">
        <span class="describe">
          账户余额 <span class="price">{{income.balance}}</span>元
        </span>
      </p>
      <p class="deposit">提现金额</p>
      <div class="login">
        <p class="import"><span>￥</span><input name="txtUserName"
                                               @focus="gainFoucs"
                                               :placeholder="`可提现${income.balance}元`"
                                               type="number"
                                               v-model="money"/></p>
        <p class="hint"><span @click="withdrawDeposit">全部提现</span></p>
        <button class="submit" @click="submit" :class="{changColor :money!== ''}">立即提现</button>
      </div>
    </div>
    <transition name="fade">
      <keyboardMod :press="press" :letGo="letGo" v-show="keyboardShow"/>
    </transition>
    <transition name="fade">
      <passwordMod :money="money" :passwordModIsShow ="passwordModIsShow" v-if="passwordModShow"/>
    </transition>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import keyboardMod from "../../components/keyboardMod/keyboardMod"
  import passwordMod from "../../components/passwordMod/passwordMod"

  export default {
    data() {
      return {
        money: "",
        keyboardShow: false,
        passwordModShow: false
      }
    },
    watch: {
      money(val) {
        if (val * 1 > 20000) {
          this.MessageBox.alert(
            "单笔金额不能超过两万",
            '提交失败'
          )
          this.money = "20000"
        }
      }
    },
    beforeCreate() {

    },
    components: {
      keyboardMod, passwordMod
    },

    computed: {
      ...mapState(["income"])
    },
    created() {
      this.$store.dispatch("getAccountInfo")
    },
    mounted() {
      window.history.pushState(null, "", "#/myPage")
      window.history.pushState(null, "", "#/myPage/WithdrawalPage")
    },
    methods: {
      //隐藏密码键盘
      passwordModIsShow(){
        this.passwordModShow = false
      },
      //键盘触碰
      press(it, ev) {
        ev = ev || event
        ev.preventDefault()
        if (typeof it === "string") { //数字
          //点击变色
          ev.target.style.backgroundColor = "#ccc"
          //判断是数字还是x
          if (it === "x") {
            //如果是x 则全部删除
            this.money = ""
          } else {
            if (it === ".") {
              if (this.money.indexOf(".") != -1) {
                return
              }
            }
            this.money += it
          }
        } else {
          //判断是X还是完成
          it.active = true
          if (it.content.length > 2) {
            this.money = this.money.substring(0, this.money.length - 1)
          } else {
            this.keyboardShow = false
          }
        }
      },
      //键盘松手
      letGo(it, ev) {
        ev = ev || event
        ev.preventDefault()
        if (typeof it === "string") {
          ev.target.style.backgroundColor = "#fff"
        } else {
          it.active = false
        }
      },
      withdrawDeposit() {
        this.money = this.income.balance
      },
      //提交
      submit() {
        let money = this.money * 1, balance = this.income.balance * 1
        if (!money) {
          this.MessageBox.alert(
            "请输入金额",
            '提交失败'
          )
          return
        }
        if (money > balance) {
          this.MessageBox.alert(
            "提现金额不能大于账户余额",
            '提现失败'
          )
          return
        }
        this.passwordModShow = true
      },
      gainFoucs() {
        document.activeElement.blur()
        this.keyboardShow = true
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .WithdrawalPage
    position relative
    .fade-enter-active, .fade-leave-active {
      transition: all .3s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
    {
      transform translateY(100%)
    }
    input
      outline: none
      border: none
    .WithdrawalPageHeader
      height (600 /$rem)
      background-color #efca7d
    .WithdrawalPageContent
      width (1020 /$rem)
      height (888 /$rem)
      position absolute
      top (200 /$rem)
      left (30 /$rem)
      background-color #ffffff
      border-radius (20 /$rem)
      box-shadow 0 0 (70 /$rem) rgba(0, 0, 0, 0.19)
      box-sizing border-box
      padding 0 (60 /$rem)
      .balance
        box-sizing border-box
        padding (70 /$rem) 0 (70 /$rem)
        font-size (36 /$rem)
        width 100%
        height (230 /$rem)
        .describe
          .price
            font-size (60 /$rem)
            color #efca7d
      .deposit
        font-size (36 /$rem)
      .login
        box-sizing border-box
        .import
          padding (70 /$rem) 0 (30 /$rem)
          font-size (80 /$rem)
          border-bottom (1 /$rem) solid #f2f2f2
          input
            margin-left (40 /$rem)
            width (700 /$rem)
            font-size (90 /$rem)
            color #efca7d
          input:
          :-moz-placeholder
            font-size (42 /$rem)
            color #bbbbbb
          input:
          :-webkit-input-placeholder
            font-size (42 /$rem)
            color #bbbbbb
          input:-ms-input-placeholder
            font-size (42 /$rem)
            color #bbbbbb
        .hint
          box-sizing border-box
          height (156 /$rem)
          color #efca7d
          font-size (36 /$rem)
          padding-top (30 /$rem)
          span
            position relative
            z-index 11
        .submit
          position relative
          width (900 /$rem)
          height (146 /$rem)
          text-align center
          line-height (146 /$rem)
          background-color #ccc
          border-radius (15 /$rem)
          color #fff
          font-size (48 /$rem)
          outline: none
          border: none
          &.changColor
            z-index 11
            background-color #efca7d
</style>
