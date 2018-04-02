<template>
  <div v-if="recommendModDatas">
    <ul class="recommendMod">
      <li v-for="(recommend, index) in recommendModDatas" :key="index" :class="{recommendModTop: index != 0 }">
        <router-link :to="{name:'productDetailsPage',query: {id: recommend.id}}">
          <div class="recommendModLogo">
            <img :src="recommend.basic._logo">
          </div>
          <img class="fanyonglog" src="../../../static/img/homeImg/content_fanyong.png">
          <div class="recommendModDescribe">
            <span class="title">{{recommend.summary}}</span>
            <div class="describe">
              <span><span
                class="price">{{recommend.filter.amount_min + '-'+ recommend.filter.amount_max}}</span></span>
            </div>
            <span class="asSecondLine">{{recommend.basic.name}}</span>
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
    },

    methods: {

    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .recommendMod
    li
      position relative
      box-sizing border-box
      border-bottom 1px solid #f2f2f2
      width (1080 /$rem)
      height (280 /$rem)
      &.recommendModTop
        margin-top (30 /$rem)
      a
        width 100%
        height 100%
        .recommendModLogo
          position absolute
          top (10 /$rem)
          left (30 /$rem)
          width (180/$rem)
          height (180/$rem)
          border (1/$rem) solid #bbb
          line-height (150/$rem)
          text-align center
          img
            margin (40/$rem)
            width (100 /$rem)
            height (100/$rem)
        .fanyonglog
          position absolute
          left (160 /$rem)
          bottom (255 /$rem)
        .recommendModDescribe
          position absolute
          top (10 /$rem)
          left (240 /$rem)
          .title
            display block
            font-size (42 /$rem)
            color #333
            line-height (42 /$rem)
          .describe
            display block
            margin-top (30 /$rem)
            font-size (34 /$rem)
            .price
              display block
              margin-right (55 /$rem)
              font-size (40 /$rem)
              color #efca7d
          .asSecondLine
            display block
            margin-top (30 /$rem)
            font-size (36 /$rem)
            color #bbb

</style>
