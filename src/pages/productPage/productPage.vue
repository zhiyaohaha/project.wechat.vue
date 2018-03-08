<template>
  <div>
    <router-view/>
    <div v-if="$route.meta.isTop">
      <header class="productPageHeader">
        <img src="./img/banner.png">
      </header>
      <headline :headlineData="{title:'贷款产品',line:true}"/>
      <recommendMod :recommendModDatas="recommendModDatas"/>
    </div>
  </div>
</template>

<script>
  import recommendMod from "../../components/recommendMod/recommendMod.vue"
  export default {
    data () {
      return {
        cardHeadLineData:{
          title:"贷款产品",
          aFont:""
        },
        recommendModDatas:[
          {
            url:"/homePage/productPage/productDetailsPage",
            recommendModLogoUrl:"../../../static/img/homeImg/content_pic_jiuynengkai.png",
            title:"久亿-能卡",
            interestRate:"XX.XX%",
            rate:"XX.XX%",
            price:"1000-10万元",
            score:4,
          },
          {
            url:"/homePage/productPage/productDetailsPage",
            recommendModLogoUrl:"../../../static/img/homeImg/content_pic_xiaoyin.png",
            title:"小米卡贷-信用卡代还",
            interestRate:"XX.XX%",
            rate:"XX.XX%",
            price:"1000-10万元",
            score:4,

          },
        ],
      }
    },

    components: {
      recommendMod
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
