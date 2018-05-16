<template>
  <div class="authentication">
    <header class="authenticationHeader">
      <p>本次操作需要短信确认，请输入</p>
      <p>{{mobilePhone.substr(0, 3)+"******"+mobilePhone.substr(9)}}收到的短信验证码</p>
    </header>
    <div class="authenticationContent">
      <p class="import">
        <span>验证码:</span><input name="authCode"
                               type="number"/>
        <button class="sendMsg" :class="{color:!num}">
          获取验证码
        </button>
      </p>
      <button class="submit">下一步</button>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"

  export default {
    name: "authentication-page",
    data() {
      return {
        num:0
      }
    },

    components: {},

    computed: {
      ...mapState(["mobilePhone"])
    },

    mounted() {
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .authentication
    .authenticationHeader
      box-sizing border-box
      padding (90 /$rem) 0
      text-align center
      font-size (36 /$rem)
      color #bbb
      p:last-child
        margin-top (20 /$rem)
    .authenticationContent
      button
        outline: none
        border: none
      .import
        padding 0 ( 30/$rem)
        height (120/$rem)
        font-size (42 /$rem)
        border-bottom (1 /$rem) solid #f2f2f2
        color #333
        line-height (120/$rem)
        input
          margin-left (40 /$rem)
          width (500 /$rem)
          font-size (42 /$rem)
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
        .sendMsg
          border-radius (20 /$rem)
          width (290 /$rem)
          height (86 /$rem)
          background-color #cdcdcd
          color #ffffff
          font-size (36/$rem)
          line-height (86 /$rem)
          text-align center
          &.color
            background-color #efca7d
</style>
