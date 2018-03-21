<template>
  <div>
    <router-view/>
    <div ref="productPageWrap">
      <div v-show="$route.meta.isTop">
        <header class="productPageHeader">
          <img src="./img/xinyongkabanner.png">
        </header>
        <headline :headlineData="{title:'贷款产品',line:true}"/>
        <div class="inanition"></div>
        <recommendMod :recommendModDatas="recommendDatas"/>
      </div>
    </div>
  </div>
</template>

<script>
  import recommendMod from "../../components/recommendMod/recommendMod.vue"
  import {mapState} from "vuex"

  export default {
    data() {
      return {
        cardHeadLineData: {
          title: "贷款产品",
          aFont: ""
        },
      }
    },

    components: {
      recommendMod
    },

    computed: {
      ...mapState(["recommendDatas"])
    },
    created() {
      let data = {
        name: 'LoanProductType.Speed',
        id: this.__GetRequest().id,
        size: 10,
        hot: false
      }
      this.$store.dispatch("getListForApp", {data})
    },
    mounted() {
      this.__boxheight(this.$refs.productPageWrap)
      window.onresize = this.__boxheight(this.$refs.productPageWrap)
      this.productPageWrap = new this.BScroll(this.$refs.productPageWrap, {click: true})
    },
    updated(){},
    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .productPageHeader
    img
      width 100%
      height (500 /$rem)

  .inanition
    height (30 /$rem)
</style>
