<template>
  <div>
    <header class="loanHeader">
      <span class="iconLogo"><</span>
      <span>申请贷款</span>
    </header>
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
</style>
