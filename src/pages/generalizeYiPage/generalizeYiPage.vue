<template>
  <div class="generalizeYiPage">
    <router-view/>
    <div v-show="$route.meta.isTop">
      <header class="generalizePageHeader">
        <div class="headPortrait">
          <img src="../../../static/img/myImg/touxiang.png">
        </div>
        <div class="userDescription">
          <span class="petName">微信昵称</span>
          <span class="individual">个人代理</span>
        </div>
        <div class="agencyNum">
          <span class="describe">代理总数:</span>
          <span class="price">11111</span>
          <span class="unit">个</span>
        </div>
      </header>
      <div class="generalizeYiContent">
        <a href="javascript:;" class="generalIncome">
          <span class="describe">一级代理</span>
          <span class="price">00000</span>
          <span class="unit">人</span>
        </a>
        <div class="line"></div>
        <router-link to="/myPage/generalizeYiPage/generalizeErPage" class="withdrawDeposit">
          <span class="describe">二级代理</span>
          <span class="price">00000</span>
          <span class="unit">人</span>
        </router-link>
      </div>
      <usersListMod :usersListDatas="usersListDatas" class="usersListMod"/>
    </div>
  </div>
</template>

<script>
  import usersListMod from "../../components/usersListMod/usersListMod.vue"
  export default {
    data () {
      return {
        usersListDatas:[
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            userNum:"用户名1",
            userTime:"20XX-XX-XX XX:XX:XX",
            agencyNum:"2222",
            url:"/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            userNum:"用户名1",
            userTime:"20XX-XX-XX XX:XX:XX",
            agencyNum:"1111",
            url:"/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            userNum:"用户名1",
            userTime:"20XX-XX-XX XX:XX:XX",
            agencyNum:"1111",
            url:"/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            userNum:"用户名1",
            userTime:"20XX-XX-XX XX:XX:XX",
            agencyNum:"111",
            url:"/myPage/generalizeYiPage/generalizeErPage"
          },
        ]
      }
    },

    components: {
      usersListMod
    },

    computed: {
    },
    created(){

    },
    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .generalizeYiPage
    background-color #ffffff
    position relative
    .generalizePageHeader
      background-image url("../../../static/img/generalizeImg/erjidaoli_banner.png")
      background-repeat no-repeat
      background-size 100%
      position relative
      width (1080/$rem)
      height (320/$rem)
      color #fff
      .headPortrait
        float left
        width (140/$rem)
        height (140/$rem)
        margin (40/$rem) 0 0 (30/$rem)
        img
          width 100%
      .userDescription
        box-sizing border-box
        float left
        margin-left (30/$rem)
        padding (50/$rem) 0 (55/$rem)
        span
          display: block
        .petName
          font-size (42/$rem)
        .individual
          margin-top (20/$rem)
          font-size (36/$rem)
      .agencyNum
        position absolute
        right (30/$rem)
        top (112/$rem)
        span
          font-size (36/$rem)
          &.price
            color #efca7d
    .generalizeYiContent
      position absolute
      background-color #ffffff
      top (240/$rem)
      left (146/$rem)
      width (790/$rem)
      height (230/$rem)
      border-radius (10/$rem)
      z-index 1
      box-shadow 0 0 (62/$rem) rgba(0 , 0 ,0 ,0.19)
      a:first-child
        padding-left (152/$rem)
      a:last-child
        padding-right (152/$rem)
        text-align right
      a
        box-sizing border-box
        float left
        width (394/$rem)
        height 100%
        padding-top (67/$rem)
        span
          color #333
          &.describe
            display block
            font-size (40/$rem)
            margin-bottom (30/$rem)
          &.price
            margin-top (24/$rem)
            font-size (42/$rem)
            color #efca7d
          &.unit
            font-size (34/$rem)
      .line
        float left
        background-color #f2f2f2
        height (100/$rem)
        width (1/$rem)
        margin-top (65/$rem)
        margin-left 0
    .usersListMod
      margin-top (150/$rem)
      background-color #ffffff
</style>
