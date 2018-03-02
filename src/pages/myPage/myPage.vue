<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div v-if="$route.meta.keepAlive">
      <header class="myPageHeader">
        <div class="headPortrait">
          <img :src=this.readTodos().headimgurl>
        </div>
        <div class="userDescription">
          <span class="petName">微信昵称</span>
          <span class="individual">个人代理</span>
        </div>
        <div class="brokerage">
          <router-link to="/homePage/generalizePage">我要赚佣金</router-link>
        </div>
      </header>
      <split/>
      <div class="myPageContent">
        <a href="javascript:;" class="generalIncome">
          <span class="describe">总收入</span>
          <span class="price">XXXXX.XX元</span>
        </a>
        <router-link to="/myPage/tieOnCardPage" class="withdrawDeposit">
          <span class="describe">可提现</span>
          <span class="price">XXXXX.XX元</span>
        </router-link>
      </div>
      <split/>
      <myParticulars :myParticularsDatas="myParticularsDatas"/>
      <div class="grayChunk"></div>
    </div>
  </div>
</template>

<script>
  import myParticulars from "../../components/myParticulars/myParticulars.vue"
  export default {
    data () {
      return {
        myParticularsDatas:[
          {
            imgUrl:"../../../static/img/myImg/gonggao1.png",
            title:"推广明细",
            url:"/myPage/generalizeYiPage"
          },
          {
            imgUrl:"../../../static/img/myImg/gonggao2.png",
            title:"订单明细",
            url:"/myPage/orderFormPage"
          },
          {
            imgUrl:"../../../static/img/myImg/gonggao3.png",
            title:"返佣明细",
            url:"/myPage/rebatePage"
          },
          {
            imgUrl:"../../../static/img/myImg/gonggao4.png",
            title:"提现明细",
            url:"/myPage/depositPage"

          },
          {},
          {},
        ]
      }
    },

    components: {
      myParticulars
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .myPageHeader
    width (1080/$rem)
    height (290/$rem)
    .headPortrait
      float left
      width (168/$rem)
      height (168/$rem)
      margin (60/$rem) (30/$rem)
      img
        width 100%
    .userDescription
      box-sizing border-box
      float left
      height (290/$rem)
      padding (90/$rem) 0
      span
        display: block
      .petName
        color #515151
        font-size (46/$rem)
        font-weight 600
      .individual
        margin-top (30/$rem)
        color #bbb
        font-size (36/$rem)
    .brokerage
      float right
      width (286/$rem)
      height (88/$rem)
      border-radius (20/$rem)
      background-color #c2181f
      margin (86/$rem)(30/$rem)
      text-align center
      line-height (88/$rem)
      a
        font-size (43/$rem)
        color #ffffff
  .myPageContent
    height (247/$rem)
    a
      box-sizing border-box
      float left
      width 50%
      height 100%
      text-align center
      padding (75/$rem) 0 (80/$rem) 0
      span
        display block
        &.describe
          font-size (36/$rem)
        &.price
          margin-top (24/$rem)
          font-size (46/$rem)
          color #c2181f
      &.withdrawDeposit
        border-left 1px solid #bbb
  .grayChunk
    width (1080/$rem)
    height (600/$rem)
    background-color #f4f4f4
</style>
