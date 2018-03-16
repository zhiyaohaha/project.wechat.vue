<template>
  <div>
    <ul class="scheduleList">
      <li v-for="(scheduleListData, index) in scheduleListDatas">
        <div class="up">
          <span class="bankCard">{{scheduleListData.bankCard}}</span>
          <span class="time">{{scheduleListData.time}}</span>
        </div>
        <div class="down">
          <span>{{scheduleListData.messageName}}</span>
          <span>{{scheduleListData.messageNum}}</span>
        </div>
        <a href="javascript:;" class="button">查看进度</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["scheduleListDatas"],
    data () {
      return {

      }
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .scheduleList
    box-sizing border-box
    padding 0 (30/$rem)
    li
      box-sizing border-box
      height (200/$rem)
      padding-top (32/$rem)
      border-bottom 1px solid #f2f2f2
      position relative
      .up
        height (42/$rem)
        width 100%
        span
          float left
          font-size (42/$rem)
          &.time
            vertical-align:bottom
            font-size (34/$rem)
            color #bbb
            float right
      .down
        overflow hidden
        font-size (34/$rem)
        margin-top (62/$rem)
      .button
        position absolute
        bottom (30/$rem)
        right 0
        height (70/$rem)
        width (250/$rem)
        font-size (36/$rem)
        text-align center
        line-height (69/$rem)
        background-color #efca7d
        border-radius (15/$rem)
        color #ffffff
</style>
