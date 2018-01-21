<template>
  <div>
    <ul class="recommendMod">
      <li>
        <a href="javascript:;">
          <div class="recommendModLogo">
            <img src="./img/jiuyi.png">
          </div>
          <div class="recommendModDescribe">
            <span class="title">久亿-能卡</span>
            <span class="asSecondLine">一天审核，闪电到款，当天到账</span>
            <div class="detailsWrap">
              <div class="detailsList">
                <span class="details">成功率：<star :score="5"/></span>
                <span class="details secondLine">额度：<span class="price">10000-10万元</span></span>
              </div>
              <div class="detailsRight">
                <span class="details">月利率：<span class="price">XX.XX%</span></span>
                <span class="details secondLine">月费率：<span class="price">XX.XX%</span></span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <div class="recommendModLogo">
            <img src="./img/xiaoyingkadai.png">
          </div>
          <div class="recommendModDescribe">
            <span class="title">小赢卡贷-信用卡代还</span>
            <span class="asSecondLine">一天审核，闪电到款，当天到账</span>
            <div class="detailsWrap">
              <div class="detailsList">
                <span class="details">成功率：<star :score="5"/></span>
                <span class="details secondLine">额度：<span class="price">10000-10万元</span></span>
              </div>
              <div class="detailsRight">
                <span class="details">月利率：<span class="price">XX.XX%</span></span>
                <span class="details secondLine">月费率：<span class="price">XX.XX%</span></span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import star from "../star/star.vue"
  export default {
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
      border 1px solid #f4f4f4
      width (1080 /$rem)
      height (346 /$rem)
      background-image url("./img/fan.png")
      background-repeat no-repeat
      background-position right top
      background-size (80 /$rem)
      a
        width 100%
        height 100%
        .recommendModLogo
          position absolute
          top (30 /$rem)
          left (30 /$rem)
          img
            width (150 /$rem)

        .recommendModDescribe
          position absolute
          top (54 /$rem)
          right (216 /$rem)
          bottom (54 /$rem)
          left (210 /$rem)
          span
            font-family "Microsoft YaHei"
            &.title
              display block
              font-size (40 /$rem)
              color #333
            &.asSecondLine
              display block
              margin-top (30 /$rem)
              font-size (36 /$rem)
              color #bbb
          .detailsWrap
            margin-top (50 /$rem)
            font-size (30 /$rem)
            overflow hidden
            .secondLine
              display block
              margin-top (30 /$rem)
            .detailsList
              display block
              float left
              .details
                display block
                color: #bbb
              .price
                color #c2181f
                width (218 /$rem)
                height (40 /$rem)
            .detailsRight
              display block
              float right
              .details
                display block
                color: #bbb
              .price
                color #c2181f
</style>
