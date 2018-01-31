<template>
  <div>
    <rebateList :rebateListDatas="rebateListDatas"/>
  </div>
</template>
<script>
  import rebateList from "../../components/rebateList/rebateList.vue"
  export default {
    data () {
      return {
        rebateListDatas:[
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            applyForTime:"20XX-XX-XX XX:XX:XX",
            money:"100000.00",
            form:"小赢卡贷",
            state:"100000.00"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            applyForTime:"20XX-XX-XX XX:XX:XX",
            money:"100000.00",
            form:"小赢卡贷",
            state:"100000.00"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            applyForTime:"20XX-XX-XX XX:XX:XX",
            money:"100000.00",
            form:"小赢卡贷",
            state:"100000.00"
          },
          {
            imgUrl:"../../../static/img/myImg/touxiang.gif",
            applyForTime:"20XX-XX-XX XX:XX:XX",
            money:"100000.00",
            form:"小赢卡贷",
            state:"100000.00"
          },
        ]
      }
    },

    components: {
      rebateList
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
