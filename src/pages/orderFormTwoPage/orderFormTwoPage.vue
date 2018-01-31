<template>
  <div>
    <orderFormList :orderFormListDatas="orderFormListDatas"/>
  </div>
</template>

<script>
  import orderFormList from "../../components/orderFormList/orderFormList.vue"
  export default {
    data () {
      return {
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
      }
    },

    components: {
      orderFormList
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
