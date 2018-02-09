<template>
  <div>
    <header class="orderFormTap">
      <a href="javascript:;" :class="{active:orderFormInd === index}"
         v-for="(orderFormTapData, index) in orderFormTapDatas" :key="index"
         @click="changeColor(index)">
        {{orderFormTapData.title}}
      </a>
    </header>
    <orderFormList v-for="(order, index) in orders" :orderFormListDatas = "order.orderFormListDatas"
                   :key="index" v-show="orderFormInd === index"/>
  </div>
</template>

<script>
  import orderFormList from "../../components/orderFormList/orderFormList.vue"
  export default {
    data () {
      return {
        orderFormTapDatas: [
          {
            title: "我的"
          },
          {
            title: "一级代理"
          },
          {
            title: "二级代理"
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
  .orderFormTap
    height (123/$rem)
    width (1080/$rem)
    a
      box-sizing border-box
      border-right 1px solid #fff
      height 100%
      width (360/$rem)
      background-color #bbb
      float left
      font-size (46/$rem)
      color #515151
      text-align center
      line-height (123/$rem)
      transition all 0.5s
      &.active
        background-color #c2181f
        color #ffffff
</style>
