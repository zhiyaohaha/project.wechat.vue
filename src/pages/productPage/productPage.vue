<template>
  <div>
    <router-view/>
    <div v-if="$route.meta.isTop">
      <header class="productPageHeader">
        <img src="./img/banner.png">
      </header>
      <cardHeadLine :cardHeadLineData="cardHeadLineData"/>
      <recommendMod/>
    </div>
  </div>
</template>

<script>
  import cardHeadLine from "../../components/cardHeadLine/cardHeadLine.vue"
  import recommendMod from "../../components/recommendMod/recommendMod.vue"
  export default {
    data () {
      return {
        cardHeadLineData:{
          title:"贷款产品",
          aFont:""
        }
      }
    },

    components: {
      cardHeadLine,recommendMod
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .productPageHeader
    img
      width 100%
      height (500 /$rem)
</style>
