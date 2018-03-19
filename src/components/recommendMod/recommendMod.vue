<template>
  <div>
    <ul class="recommendMod">
      <li v-for="(recommend, index) in recommendModDatas" :key="index" :class="{recommendModTop: index != 0 }" v-if="index>4">
        <router-link :to="getCookie('whether') === '0' ? '/phoneApprove':recommend.url">
          <div class="recommendModLogo">
            <img :src="recommend.basic._logo">
          </div>
          <img class="fanyonglog" src="../../../static/img/homeImg/content_fanyong.png">
          <div class="recommendModDescribe">
            <span class="title">{{1111}}</span>
            <div class="interestRate">
              <span>月利率：{{recommend.basic.monthlyRate_max}}</span>
              <span>月费率：{{recommend.basic.monthlyRate_min}}</span>
            </div>
            <div class="describe">
              <span>额度：<span class="price">{{recommend.filter.amount_min + '-'+ recommend.filter.amount_max}}</span></span>
              <span>成功率：<star :score="recommend.score" class="star"/></span>
            </div>
            <span class="asSecondLine">{{recommend.summary}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import star from '../star/star.vue'
  import { getListForApp } from '../../api'

  export default {
    data () {
      return {}
    },

    components: {
      star
    },

    computed: {
    },
    beforeCreate(){
      let data = {
        name: 'LoanProductType.Speed',
        id: this.__GetRequest().id,
        size: '',
        hot:false
      }
      let apiPrefix = 'http://192.168.6.66:8001'
      let url = apiPrefix + '/api/LoanProduct/ListForApp'
      getListForApp(url, data).then((res)=>{
        console.log(this)
        this.recommendModDatas = res.data
        console.log(this.recommendModDatas)
      })
    },
    mounted () {
      console.log(this.recommendModDatas[0].basic.name)
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
          .interestRate
            margin-top (20 /$rem)
            font-size (34 /$rem)
            color #bbb
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
