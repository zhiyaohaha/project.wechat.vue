<template>
  <div>
    <div class="usersListModContent">
      <ul class="usersList">
        <li v-for="(usersListData, index) in usersListDatas" :key="index">
          <router-link :to="usersListData.url">
            <img :src="usersListData.imgUrl">
            <div class="message">
              <span class="userNum">{{usersListData.userNum}}</span>
              <div>
                <span class="scheduleTime">{{usersListData.userTime}}</span>
                <span class="fixation">成为我的代理</span>
              </div>
            </div>
            <div class="agencyMessage">
              <span>他的代理</span>
              <span class="price">{{usersListData.agencyNum}}</span>
              <span>个</span>
            </div>
            <div class="triangle">
              <img src="../../../static/img/generalizeImg/content_icon_more_normal.png">
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  export default {
    props:["usersListDatas"],
    data () {
      return {}
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .usersListModContent
    .usersList
      li
        position relative
        box-sizing border-box
        overflow hidden
        width (1080 /$rem)
        height (200 /$rem)
        border-bottom 1px solid #f2f2f2
        padding (35/$rem) (30/$rem)
        a
          height (130/$rem)
        img
          float left
          height (130 /$rem)
          width (130 /$rem)
        /*用户信息*/
        .message
          float left
          margin-top (10 /$rem)
          margin-left (20/$rem)
          .userNum
            display block
            margin-bottom (48/$rem)
            font-size (42 /$rem)
            color #333
          .scheduleTime
            font-size (34 /$rem)
            color #bbbbbb
          .fixation
            font-size (34 /$rem)
            color #bbbbbb

        .agencyMessage
          position absolute
          top (50 /$rem)
          right (30 /$rem)
          span
            font-size (40 /$rem)
            color #bbbbbb
        .triangle
          position absolute
          right (30/$rem)
          bottom (35/$rem)
          img
            width (16/$rem)
            height (30/$rem)

</style>
