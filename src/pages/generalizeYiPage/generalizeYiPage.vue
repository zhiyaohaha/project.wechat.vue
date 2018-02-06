<template>
  <div>
    <router-view/>
    <div v-show="$route.meta.isTop">
      <header class="generalizePageHeader">
        <div class="headPortrait">
          <img src="./img/touxiang.gif">
        </div>
        <div class="userDescription">
          <span class="petName">微信昵称 ( 我的一级代理 ) </span>
          <span class="individual">个人代理</span>
        </div>
        <div class="agencyNum">
          <span class="describe">代理总数:</span>
          <span class="price">XXXXX</span>
          <span class="unit">个</span>
        </div>
      </header>
      <div class="generalizeContent">
        <a href="javascript:;" class="generalIncome">
          <span class="describe">一级代理</span>
          <span class="price">XXXXX.XX人</span>
        </a>
        <router-link to="/myPage/generalizeYiPage/generalizeErPage" class="withdrawDeposit">
          <span class="describe">二级代理</span>
          <span class="price">XXXXX.XX人</span>
        </router-link>
      </div>
      <split />
      <usersListMod :usersListDatas="usersListDatas"/>
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
            userNum:2316556465789,
            userTime:"20XX-XX-XX XX:XX:XX",
            agencyNum:"XXX",
            url:"/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            userNum:2316556465789,
            userTime:"20XX-XX-XX XX:XX:XX",
            agencyNum:"XXX",
            url:"/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            userNum:2316556465789,
            userTime:"20XX-XX-XX XX:XX:XX",
            agencyNum:"XXX",
            url:"/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            userNum:2316556465789,
            userTime:"20XX-XX-XX XX:XX:XX",
            agencyNum:"XXX",
            url:"/myPage/generalizeYiPage/generalizeErPage"
          },
        ]
      }
    },

    components: {
      usersListMod
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .generalizePageHeader
    position relative
    width (1080/$rem)
    height (228/$rem)
    border-bottom 1px solid #bbbbbb
    .headPortrait
      float left
      width (168/$rem)
      height (168/$rem)
      margin (30/$rem)
      img
        width 100%
    .userDescription
      box-sizing border-box
      float left
      padding (60/$rem) 0 (55/$rem)
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
    .agencyNum
      position absolute
      right (30/$rem)
      bottom (55/$rem)
      span
        font-size (36/$rem)
        color #bbbbbb
        &.price
          color #c2181f
  .generalizeContent
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
</style>
