<template>
  <div v-if="orderFormListDatas">
    <div class="orderFormListConttent">
      <header class="orderFormListHeader">
        <span class="font">订单列表</span>
        <a href="javascript:;" @click="screenIsShow(false)">
          <img src="../../../static/img/myImg/content_icon_shaixuan_normal.png"><span>筛选</span>
        </a>
      </header>
      <ul class="orderFormList">
        <li v-for="(orderFormListData, index) in orderFormListDatas.data" :key="index">
          <img :src="orderFormListData.head||'../../../static/img/myImg/touxiang.gif'">
          <div class="orderFormListDescribe">
            <div class="up">
              <span class="applyForTime">{{orderFormListData._createdDate}}</span>
              <span class="applyFor">申请</span>
            </div>
            <!--<div class="down">
              <span class="price">{{orderFormListData.money}}</span>
              <span class="unit">元</span>
            </div>-->
          </div>
          <div class="state">
            <span class="form">{{orderFormListData._product.name}}</span>
            <span class="stateDescribe">({{orderFormListData._rakeBack}}){{orderFormListData._status}}</span>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    props:["orderFormListDatas","screenIsShow"],
    data () {
      return {

      }
    },

    components: {
    },

    computed: {},

    mounted(){},

    methods: {
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .orderFormListConttent
    width (1080 /$rem)
    .orderFormListHeader
      box-sizing border-box
      height (92 /$rem)
      background-color #fff
      padding-top (50/$rem)
      padding-left (30/$rem)
      .font
        float left
        color #333
        font-size (42 /$rem)
      a
        position relative
        float right
        width (122/$rem)
        height (40/$rem)
        margin-right (30/$rem)
        img
          display inline-block
          width (40/$rem)
          vertical-align: top
        span
          position absolute
          top 0
          left (50/$rem)
          line-height (36/$rem)
          font-size (36/$rem)
          color #bbbbbb

    .orderFormList
      box-sizing border-box
      background-color #ffffff
      li
        box-sizing border-box
        overflow hidden
        position relative
        height (200 /$rem)
        border-bottom 1px solid #f2f2f2
        padding (35/$rem) (30/$rem)
        img
          float left
          width (130 /$rem)
        .orderFormListDescribe
          float left
          height (126 /$rem)
          margin (10/$rem) 0 0 (20/$rem)
          span
            display block
            float left
          .up
            overflow hidden
            color #bbbbbb
            .applyForTime
              font-size (34/$rem)
            .applyFor
              margin-left (5/$rem)
              font-size (34/$rem)
          .down
            display block
            margin-top (50/$rem)
            font-size (34/$rem)
            .price
              font-size (42/$rem)
              color #efca7d
            .unit
              margin-top (6/$rem)
              margin-left (5/$rem)
              color #bbbbbb

        .state
          position absolute
          top (45/$rem)
          right (30/$rem)
          font-size (34/$rem)
          text-align right
          .form
            display block
            color #bbbbbb
          .stateDescribe
            display block
            margin-top (50/$rem)
            color #333333

</style>
