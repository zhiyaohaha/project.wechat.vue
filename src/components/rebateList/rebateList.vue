<template>
  <div>
    <div class="rebateListConttent">
      <ul class="rebateList">
        <li v-for="(rebateListData, index) in rebateListDatas" :key="index">
          <img :src="rebateListData.imgUrl">
          <div class="rebateListDescribe">
            <div class="up">
              <span class="applyForTime">{{rebateListData.applyForTime}}</span>
              <span class="applyFor">返佣</span>
            </div>
            <div class="down">
              <span>返佣总额 ：</span>
              <span class="price"> {{rebateListData.money}}</span>
              <span class="unit">元</span>
            </div>
          </div>
          <div class="state">
            <span class="form">{{rebateListData.form}}</span>
            <div class="down">
              <span>我的返佣 ：</span>
              <span class="stateDescribe">{{rebateListData.state}}</span>
              <span>元</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:["rebateListDatas"],
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
  .rebateListConttent
    width (1080 /$rem)
    .rebateListHeader
      height (122 /$rem)
      background-color #eee
      span
        float left
        color #bbbbbb
        margin (42 /$rem) 0 (42 /$rem) (30 /$rem)
        font-size (38 /$rem)
      a
        float right
        width (120 /$rem)
        height (68 /$rem)
        background-color #c2181f
        border-radius (10 /$rem)
        color #ffffff
        font-size (30 /$rem)
        margin-right (30 /$rem)
        margin-top (27 /$rem)
        text-align center
        line-height (68 /$rem)

    .rebateList
      box-sizing border-box
      li
        overflow hidden
        position relative
        height (236 /$rem)
        border-bottom 1px solid #bbbbbb

        img
          float left
          width (156 /$rem)
          margin (40 /$rem) (36 /$rem) (40 /$rem) (40 /$rem)
        .rebateListDescribe
          float left
          height (126 /$rem)
          margin (60 /$rem) 0 (50 /$rem)
          span
            display block
            float left
            color #bbbbbb
          .up
            overflow hidden
            color #333
            line-height (36/$rem)
            .applyForTime
              font-size (30/$rem)
            .applyFor
              margin-left (5/$rem)
              font-size (36/$rem)
          .down
            display block
            margin-top (40/$rem)
            font-size (30/$rem)
            .price
              color #c2181f
            .unit
              margin-left (5/$rem)
              color #bbbbbb

        .state
          position absolute
          top (60/$rem)
          right (30/$rem)
          font-size (36/$rem)
          text-align right
          .form
            display block
            color #bbbbbb
          .down
            font-size (30/$rem)
            color #bbbbbb
            margin-top (40/$rem)
            .stateDescribe
              font-size (30/$rem)
              color #c2181f

</style>
