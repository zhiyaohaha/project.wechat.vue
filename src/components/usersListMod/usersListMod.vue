<template>
  <div>
    <div class="usersListModContent">
      <ul class="usersList">
        <li v-for="(usersListData, index) in usersListDatas" :key="index">
          <img :src="usersListData.imgUrl">
          <div class="message">
            <span class="userNum">用户编号:{{usersListData.userNum}}</span>
            <div>
              <span class="scheduleTime">{{usersListData.userTime}}</span>
              <span class="fixation">成为我的代理</span>
            </div>
          </div>
          <div class="agencyMessage">
            <span>TA的代理</span>
            <span class="price">{{usersListData.agencyNum}}</span>
            <span>个</span>
          </div>
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
        height (234 /$rem)
        border-bottom 1px solid #bbbbbb
        img
          float left
          height (156 /$rem)
          width (156 /$rem)
          margin (38 /$rem) (36 /$rem) (38 /$rem) (30 /$rem)
        /*用户信息*/
        .message
          float left
          margin (50 /$rem) 0
          .userNum
            font-size (40 /$rem)
            color #515151
          .scheduleTime
            font-size (30 /$rem)
            color #bbbbbb
          .fixation
            font-size (36 /$rem)
            color #bbbbbb

        .agencyMessage
          position absolute
          top (50 /$rem)
          right (30 /$rem)
          span
            font-size (30 /$rem)
            color #bbbbbb
            &.price
              color #c2181f
</style>
