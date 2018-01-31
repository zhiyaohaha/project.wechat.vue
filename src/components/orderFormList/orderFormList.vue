<template>
  <div>
    <div class="orderFormListConttent">
      <header class="orderFormListHeader">
        <span>订单列表</span>
        <a href="javascript:;">筛选</a>
      </header>
      <ul class="orderFormList">
        <li v-for="(orderFormListData, index) in orderFormListDatas" :key="index">
          <img :src="orderFormListData.imgUrl">
          <div class="orderFormListDescribe">
            <div class="up">
              <span class="applyForTime">{{orderFormListData.applyForTime}}</span>
              <span class="applyFor">申请</span>
            </div>
            <div class="down">
              <span class="price">{{orderFormListData.money}}</span>
              <span class="unit">元</span>
            </div>
          </div>
          <div class="state">
            <span class="form">{{orderFormListData.form}}</span>
            <span class="stateDescribe">{{orderFormListData.state}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:["orderFormListDatas"],
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
  .orderFormListConttent
    width (1080 /$rem)
    .orderFormListHeader
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

    .orderFormList
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
        .orderFormListDescribe
          float left
          height (126 /$rem)
          margin (60 /$rem) 0 (50 /$rem)
          span
            display block
            float left
          .up
            color #333
            .applyForTime
              font-size (30/$rem)
            .applyFor
              margin-left (5/$rem)
              font-size (36/$rem)
          .down
            display block
            margin-top (78/$rem)
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
          .form
            display block
            color #bbbbbb
          .stateDescribe
            display block
            margin-top (45/$rem)
            color #333333
</style>
