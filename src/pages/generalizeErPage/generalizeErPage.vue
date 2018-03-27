<template>
  <div>
    <header class="generalizeErPageHeader" v-if="erSubordinateNum">
      <div class="headPortrait">
        <img :src="erSubordinateNum.head||'../../../static/img/myImg/touxiang.png'">
      </div>
      <div class="userDescription">
        <span class="petName">{{erSubordinateNum.nickName||'微信昵称 ( 我的一级代理 )'}} </span>
        <span class="individual">个人代理</span>
      </div>
      <div class="agencyNum">
        <span class="describe">代理总数:</span>
        <span class="price">{{erSubordinateNum.totleSubordinateNum}}</span>
        <span class="unit">个</span>
      </div>
    </header>
    <usersListMod :usersListDatas="erSubordinateUserList"/>
  </div>
</template>

<script>
  import usersListMod from "../../components/usersListMod/usersListMod.vue"
  import {mapState} from "vuex"

  export default {
    data() {
      return {
        usersListDatas: [
          {
            imgUrl: "../../../static/img/myImg/touxiang.gif",
            userNum: "用户名1",
            userTime: "20XX-XX-XX XX:XX:XX",
            agencyNum: "XXX",
            url: "/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl: "../../../static/img/myImg/touxiang.gif",
            userNum: "用户名1",
            userTime: "20XX-XX-XX XX:XX:XX",
            agencyNum: "XXX",
            url: "/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl: "../../../static/img/myImg/touxiang.gif",
            userNum: "用户名1",
            userTime: "20XX-XX-XX XX:XX:XX",
            agencyNum: "XXX",
            url: "/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl: "../../../static/img/myImg/touxiang.gif",
            userNum: "用户名1",
            userTime: "20XX-XX-XX XX:XX:XX",
            agencyNum: "XXX",
            url: "/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl: "../../../static/img/myImg/touxiang.gif",
            userNum: "用户名1",
            userTime: "20XX-XX-XX XX:XX:XX",
            agencyNum: "XXX",
            url: "/myPage/generalizeYiPage/generalizeErPage"
          },
          {
            imgUrl: "../../../static/img/myImg/touxiang.gif",
            userNum: "用户名1",
            userTime: "20XX-XX-XX XX:XX:XX",
            agencyNum: "XXX",
            url: "/myPage/generalizeYiPage/generalizeErPage"
          },
        ]
      }
    },

    components: {
      usersListMod
    },

    computed: {
      ...mapState(["erSubordinateNum", "erSubordinateUserList"])

    },
    created() {
      let that = this
      this.$store.dispatch("getSubordinateNum", {
        thirdLoginType: "ThirdPlatForm.WeChat",
        userId: that.$route.query.id
      })
      this.$store.dispatch("getSubordinateUserList",{
        thirdLoginType: "ThirdPlatForm.WeChat",
        userId: that.$route.query.id,//不传则获取登录人的信息，传则获取传入人的信息
        id: "",//第一次不用传，以后传最后一条Id
        size: 10,//每页数量
      })
    },
    mounted() {
    },
    updated() {
    },
    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .generalizeErPageHeader
    box-sizing border-box
    background-image url("../../../static/img/generalizeImg/erjidaoli_banner.png")
    background-repeat no-repeat
    background-size 100%
    position relative
    color #ffffff
    width (1080 /$rem)
    height (320 /$rem)
    border-bottom 1px solid #bbbbbb
    padding (40 /$rem) (30 /$rem) 0
    .headPortrait
      float left
      width (140 /$rem)
      height (140 /$rem)
      img
        width 100%
    .userDescription
      float left
      margin-top (10 /$rem)
      margin-left (30 /$rem)
      span
        display: block
      .petName
        font-size (42 /$rem)
      .individual
        margin-top (20 /$rem)
        font-size (40 /$rem)
    .agencyNum
      position absolute
      right (30 /$rem)
      top (112 /$rem)
      span
        font-size (40 /$rem)
        &.price
          color #efca7d
</style>
