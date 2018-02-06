<template>
  <div>
    <ul class="scheduleList">
      <li v-for="(scheduleListData, index) in scheduleListDatas">
        <span class="bankCard">{{scheduleListData.bankCard}}</span>
        <span class="time">{{scheduleListData.time}}</span>
        <span class="message">
          <span>{{scheduleListData.messageName}}</span>
          <span>{{scheduleListData.messageNum}}</span>
        </span>
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
    li
      box-sizing border-box
      position relative
      height (245/$rem)
      padding (60/$rem) (48/$rem)
      border-bottom 1px solid #dddddd
      &>span
        font-size (40/$rem)
        color #515151
        position absolute
        &.bankCard
          top (60/$rem)
          left (48/$rem)
        &.time
          font-size (36/$rem)
          top (60/$rem)
          right (60/$rem)
        &.message
          font-size (36/$rem)
          color #8a8a8a
          bottom (60/$rem)
          left (48/$rem)
          span:last-child
            margin-left (40/$rem)
          span
            float left
      .button
        position absolute
        height (69/$rem)
        width (300/$rem)
        font-size (40/$rem)
        text-align center
        line-height (69/$rem)
        background-color #c2181f
        border-radius (15/$rem)
        color #ffffff
        bottom (46/$rem)
        right (48/$rem)

</style>
