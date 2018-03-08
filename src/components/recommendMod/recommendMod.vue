<template>
  <div>
    <ul class="recommendMod">
      <li v-for="(recommend, index) in recommendModDatas" :key="index" :class="{recommendModTop: index != 0 }">
        <router-link :to="recommend.url">
          <div class="recommendModLogo">
            <img :src="recommend.recommendModLogoUrl">
          </div>
          <img class="fanyonglog" src="../../../static/img/homeImg/content_fanyong.png" alt="">
          <div class="recommendModDescribe">
            <span class="title">{{recommend.title}}</span>
            <div class="interestRate">
              <span>月利率：{{recommend.interestRate}}</span>
              <span>月费率：{{recommend.rate}}</span>
            </div>
            <div class="describe">
              <span>额度：<span class="price">{{recommend.price}}</span></span>
              <span>成功率：<star :score="recommend.score" class="star"/></span>
            </div>
            <span class="asSecondLine">一天审核，闪电到款，当天到账</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import star from "../star/star.vue"
  export default {
    props:["recommendModDatas"],
    data () {
      return {}
    },

    components: {
      star
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .recommendMod
    li
      position relative
      box-sizing border-box
      border-bottom 1px solid #f2f2f2
      width (1080 /$rem)
      height (284 /$rem)
      &.recommendModTop
        margin-top (30/$rem)
      a
        width 100%
        height 100%
        .recommendModLogo
          position absolute
          top (10/$rem)
          left (30 /$rem)
          img
            width (150 /$rem)
        .fanyonglog
          position absolute
          left (130/$rem)
          bottom (255/$rem)
        .recommendModDescribe
          position absolute
          top (15 /$rem)
          left (210 /$rem)
          .title
            font-size (42/$rem)
            color #333
          .interestRate
            margin-top (20/$rem)
            font-size (34/$rem)
            color #bbb
          .describe
            margin-top (40/$rem)
            font-size (34/$rem)
            .price
              font-size (42/$rem)
              color #efca7d
            .star
              display inline-block
          .asSecondLine
            display block
            margin-top (20/$rem)
            font-size (36/$rem)
            color #bbb

</style>
