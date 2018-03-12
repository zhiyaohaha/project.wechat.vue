<template>
  <div>
    <header class="orderFormHeader">
      <a href="javascript:;" :class="{active:orderFormInd === index}"
         v-for="(orderFormTapData, index) in orderFormTapDatas" :key="index"
         @click="changeColor(index)">
        {{orderFormTapData.title}}<span class="manNumber">({{orderFormTapData.manNumber}})</span>
      </a>
    </header>
    <orderFormList v-for="(order, index) in orders" :orderFormListDatas = "order.orderFormListDatas"
                   :key="index" v-if="orderFormInd === index"/>
  </div>
</template>

<script>
  import orderFormList from "../../components/orderFormList/orderFormList.vue"
  export default {
    data () {
      return {
        orderFormTapDatas: [
          {
            title: "我的",
            manNumber:111
          },
          {
            title: "一级代理",
            manNumber:111
          },
          {
            title: "二级代理",
            manNumber:111
          },
        ],
        orders:[
          {
            orderFormListDatas:[
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
            ]
          },
          {
            orderFormListDatas:[
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
            ]
          },
          {
            orderFormListDatas:[
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
              {
                imgUrl:"../../../static/img/myImg/touxiang.gif",
                applyForTime:"20XX-XX-XX XX:XX:XX",
                money:"100000.00",
                form:"小赢卡贷",
                state:"待处理"
              },
            ]
          }
        ],
        orderFormInd:0
      }
    },

    components: {
      orderFormList
    },

    computed: {},

    mounted(){},

    methods: {
      changeColor(ind){
        this.orderFormInd = ind
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .orderFormHeader
    height (110/$rem)
    width (1080/$rem)
    a
      box-sizing border-box
      border-bottom 1px solid #f2f2f2
      height 100%
      width (360/$rem)
      background-color #ffffff
      float left
      font-size (46/$rem)
      text-align center
      line-height (110/$rem)
      transition all 0.5s
      .manNumber
        font-size (34/$rem)
      &.active
        color #efca7d
</style>
