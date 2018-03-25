<template>
  <div class="myPage">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div v-if="$route.meta.keepAlive">
      <header class="myPageHeader">
        <div class="headPortrait">
          <img :src="this.readTodos().headimgurl||'../../../static/img/myImg/touxiang.png'">
        </div>
        <div class="userDescription">
          <span class="petName">{{this.readTodos().nickname||'微信昵称'}}</span>
          <span class="individual">个人代理</span>
        </div>
        <div class="brokerage">
          <router-link to="/homePage/generalizePage">我要赚佣金</router-link>
        </div>
      </header>
      <div class="myPageContent">
        <a href="javascript:;" class="generalIncome">
          <span class="describe">总收入</span>
          <span class="unit">￥<span class="price">0000.00元</span></span>

        </a>
        <div class="line"></div>
        <router-link to="/myPage/tieOnCardPage" class="withdrawDeposit">
          <span class="describe">可提现</span>
          <span class="unit">￥<span class="price">0000.00元</span></span>
        </router-link>
      </div>
      <myParticulars :myParticularsDatas="myParticularsDatas"/>
      <div class="feignButton" @click="quit">退出</div>
    </div>
  </div>
</template>

<script>
  import myParticulars from '../../components/myParticulars/myParticulars.vue'

  export default {
    data() {
      return {
        myParticularsDatas: [
          {
            imgUrl: '../../../static/img/myImg/wode_content_icon_tuiguangmingxi.png',
            title: '推广明细',
            url: '/myPage/generalizeYiPage'
          },
          {
            imgUrl: '../../../static/img/myImg/wode_content_icon_dingdanmingxi.png',
            title: '订单明细',
            url: '/myPage/orderFormPage'
          },
          {
            imgUrl: '../../../static/img/myImg/wode_content_icon_fanyongmingxi.png',
            title: '返佣明细',
            url: '/myPage/rebatePage'
          },
          {
            imgUrl: '../../../static/img/myImg/wode_content_icon_tixian.png',
            title: '提现',
            url: '/myPage/tieOnCardPage'

          },
          {
            imgUrl: '../../../static/img/myImg/wode_content_icon_tixianmingxi.png',
            title: '提现明细',
            url: '/myPage/depositPage'
          },
          {}
        ]
      }
    },

    components: {
      myParticulars
    },

    computed: {},

    mounted() {
    },

    methods: {
      quit() {
        this.$store.dispatch('postLoginout', {
          data:{},
          cb:()=>{
            this.setCookie('whether', 0, 7)
          }
        }).then((res)=>{

        })
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .myPage
    position relative
    .myPageHeader
      box-sizing border-box
      background-image url("../../../static/img/myImg/erjidaoli_banner.png")
      background-repeat no-repeat
      background-size: 100%
      width (1080 /$rem)
      height (320 /$rem)
      padding (40 /$rem) (30 /$rem) 0
      .headPortrait
        float left
        width (140 /$rem)
        height (140 /$rem)
        img
          width 100%
      .userDescription
        box-sizing border-box
        float left
        margin-top (10 /$rem)
        margin-left (30 /$rem)
        color #ffffff
        span
          display: block
        .petName
          font-size (42 /$rem)
        .individual
          margin-top (20 /$rem)
          font-size (40 /$rem)
      .brokerage
        float right
        width (250 /$rem)
        height (90 /$rem)
        border-radius (15 /$rem)
        background-color #EFCA7D
        margin-top (40 /$rem)
        text-align center
        line-height (90 /$rem)
        a
          font-size (43 /$rem)
          color #ffffff

    .myPageContent
      box-sizing border-box
      position absolute
      width (790 /$rem)
      height (230 /$rem)
      top (240 /$rem)
      left (145 /$rem)
      padding 0 (105 /$rem)
      background-color: #fff;
      border-radius (10 /$rem)
      box-shadow 0 0 (64 /$rem) rgba(0, 0, 0, 0.19)
      z-index 1

      a
        box-sizing border-box
        float left
        text-align center
        margin-top (60 /$rem)
        span
          font-size (34 /$rem)
          &.describe
            display block
            font-size (40 /$rem)
          &.unit
            text-align bottom
          &.price
            margin-top (30 /$rem)
            font-size (42 /$rem)
            color #efca7d
      .line
        float left
        margin (65 /$rem) (54 /$rem)
        height (100 /$rem)
        width 1px
        background-color: #f2f2f2;
    .feignButton
      border-radius (15 /$rem)
      width (985 /$rem)
      height (140 /$rem)
      background-color #efca7d
      color #fff
      margin (100 /$rem) auto
      text-align center
      line-height (140 /$rem)
</style>
