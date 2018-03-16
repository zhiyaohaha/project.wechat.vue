<template>
  <div ref="strategyListWrap">
    <div>
      <strategyList :strategyListDatas="strategyListDatas"/>
    </div>
  </div>
</template>

<script>
  import strategyList from "../../components/strategyList/strategyList.vue"
  export default {
    data () {
      return {
        strategyListDatas:[
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag",
            imgUrl:"../../../static/img/strategyImg/creditcard01.png"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag",
            imgUrl:"../../../static/img/strategyImg/creditcard02.png"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag",
            imgUrl:"../../../static/img/strategyImg/creditcard03.png"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag",
            imgUrl:"../../../static/img/strategyImg/creditcard01.png"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag",
            imgUrl:"../../../static/img/strategyImg/creditcard01.png"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag",
            imgUrl:"../../../static/img/strategyImg/creditcard01.png"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag",
            imgUrl:"../../../static/img/strategyImg/creditcard01.png"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag",
            imgUrl:"../../../static/img/strategyImg/creditcard01.png"
          },

        ]
      }
    },

    components: {
      strategyList
    },

    computed: {},

    mounted(){
      this.__boxheight(this.$refs.strategyListWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.strategyListWrap); //窗口或框架被调整大小时执行
      this.strategyListWrap = new this.BScroll(this.$refs.strategyListWrap, {click: true,})
      this.strategyListWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
