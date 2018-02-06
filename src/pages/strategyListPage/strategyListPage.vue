<template>
  <div ref="strategyListWrap">
    <div>
      <strategyList :strategyListDatas="strategyListDatas"/>
    </div>
  </div>
</template>

<script>
  import strategyList from "../../components/strategyList/strategyList.vue"
  import BScroll from "better-scroll"
  export default {
    data () {
      return {
        strategyListDatas:[
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
          },
          {
            title:"告急！大批信用卡被降额，被封卡！年底封杀潮",
            time:"2017-12-12",
            url:"http://mp.weixin.qq.com/s/WfT_NMEQ2o6b2b1xrDYwag"
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
      this.strategyListWrap = new BScroll(this.$refs.strategyListWrap, {click: true,})
      this.strategyListWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
