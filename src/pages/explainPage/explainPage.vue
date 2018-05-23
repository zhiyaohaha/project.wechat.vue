<template>
  <div class="explainPage">
    <p> 1、账户余额可以提现到微信钱包</p>
    <p> 2、每天最多提现1次，每次最多可以提现2w且不少于1元</p>
    <p> 3、提交提现申请后24小时内到账，如有问题联系客服</p>
    <p> 4、用户参与此活动默认接受掌金超的相关协议与规定</p>
    <p> 5、每日早9:00-16:00可提现</p>
    <p> 6、解释权以平台为准</p>
  </div>
</template>

<script>
  export default {
    name: "explain-page",
    data() {
      return {}
    },

    components: {},

    computed: {},

    mounted() {
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .explainPage
    box-sizing border-box
    padding (60/$rem) (30/$rem)
    p
      line-height (63/$rem)
      font-size (42/$rem)
      color #333
</style>
