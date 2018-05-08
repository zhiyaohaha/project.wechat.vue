<template>
  <div class="customerService">
    <header class="customerServiceHeader">
      <img src="../../../static/img/myImg/kefu_yuantouxiang.png">
      <span>掌金超客服多多</span>
    </header>
    <div class="customerServiceContent">
      <h1 class="title">提现、咨询请扫码联系客服</h1>
      <img src="./img/kefuerweima.jpg">
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "customer-service-page",
    data() {
      return {}
    },

    components: {

    },

    computed: {
      ...mapState(["userName"])
    },

    mounted() {
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .customerService
    .customerServiceHeader
      box-sizing border-box
      padding-top (110/$rem)
      margin-bottom (244/$rem)
      text-align center
      img
        width (160/$rem)
        height (160/$rem)
        border-radius 50%
        margin 0 auto (10/$rem)
      span
        font-size (40/$rem)
        color #333
    .customerServiceContent
      h1
        width 100%
        text-align center
        font-size (42/$rem)
        margin-bottom (50/$rem)
      img
        width (880/$rem)
        height (880/$rem)
        margin 0 auto

</style>
