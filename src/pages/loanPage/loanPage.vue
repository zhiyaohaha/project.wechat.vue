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
            <input type="text" v-model="username"
                   placeholder="请输入贷款金额"
                   name="username">
            <span class="rightFont">元</span>
          </li>
          <li>
            <span class="description">贷款金额：</span>
            <input type="text" v-model="username"
                   placeholder="请输入贷款用途"
                   name="username">
            <span class="rightFont">元</span>
          </li>
          <li>
            <span class="description">贷款金额：</span>
            <input type="text" v-model="username"
                   placeholder="请输入贷款期限"
                   name="username">
            <span class="rightFont">
              <select name="贷款"></select>
            </span>
          </li>
          <li>
            <span class="description">贷款金额：</span>
            <input type="text" v-model="username"
                   placeholder="请输入贷款金额"
                   name="username">
            <span class="rightFont">元</span>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .loanHeader
    width (1080/$rem)
    height (130/$rem)
    background-color #292929
    font-size (60/$rem)
    color #fff
    text-align center
    line-height (130/$rem)
    .iconLogo
      float left
      margin-left (30/$rem)
  .loanContent
    img
      width (1080/$rem)
    .loanTitle
      background-color #f4f4f4
      color #bbbbbb
      font-size (36/$rem)
      width (1080/$rem)
      height (90/$rem)
      line-height (90/$rem)
      span
        margin-left (30/$rem)
    .mform
      margin: 0 (30/$rem)
      li
        box-sizing border-box
        position relative
        line-height (120/$rem)
        width (1020/$rem)
        height (120/$rem)
        font-size (42/$rem)
        border-bottom 1px solid #ccc
        text-align right
        span
          color #333333
        .description
          float left
        input
          margin-top
          font-size (42/$rem)
          outline: none
        input::-moz-placeholder
          text-align right
          color #bbbbbb
        input::-webkit-input-placeholder
          text-align right
          color #bbbbbb
        input:-ms-input-placeholder
          text-align right
          color #bbbbbb

        select
          appearance:none
          -moz-appearance:none
          -webkit-appearance:none
          width (40/$rem)
          border: solid 1px #fff;
          background: url("./img/fanhuiicon.png") no-repeat scroll right center transparent;
</style>
