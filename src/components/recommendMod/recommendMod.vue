<template>
  <div v-if="recommendModDatas">
    <ul class="recommendMod">
      <li v-for="(recommend, index) in recommendModDatas" :key="index" :class="{recommendModTop: index != 0 }">
        <a href="javascript:;" @click="getCookie('whether') === '0' ? '/phoneApprove':'/homePage/productPage/productDetailsPage'">
          <div class="recommendModLogo">
            <img :src="recommend.basic._logo">
          </div>
          <img class="fanyonglog" src="../../../static/img/homeImg/content_fanyong.png">
          <div class="recommendModDescribe">
            <span class="title">{{recommend.basic.name}}</span>
            <div class="describe">
              <span>额度：<span
                class="price">{{recommend.filter.amount_min + '-'+ recommend.filter.amount_max}}</span></span>
            </div>
            <span class="asSecondLine">{{recommend.summary}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['recommendModDatas'],

    data() {
      return {}
    },

    components: {},

    computed: {},
    beforeCreate() {

    },
    mounted() {
      console.log(this.recommendModDatas)
    },

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
      height (286 /$rem)
      &.recommendModTop
        margin-top (30 /$rem)
      a
        width 100%
        height 100%
        .recommendModLogo
          position absolute
          top (10 /$rem)
          left (30 /$rem)
          img
            width (150 /$rem)
        .fanyonglog
          position absolute
          left (130 /$rem)
          bottom (255 /$rem)
        .recommendModDescribe
          position absolute
          top (10 /$rem)
          left (210 /$rem)
          .title
            display block
            font-size (42 /$rem)
            color #333
            line-height (42 /$rem)
          .describe
            margin-top (40 /$rem)
            font-size (34 /$rem)
            .price
              margin-right (55 /$rem)
              font-size (42 /$rem)
              color #efca7d
            .star
              display inline-block
          .asSecondLine
            display block
            margin-top (20 /$rem)
            font-size (36 /$rem)
            color #bbb

</style>
