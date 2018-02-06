<template>
  <div ref="strategyWrap">
    <div>
      <header class="strategyHeader">
        <ul class="authenticationList">
          <li v-for="(authenticationListData, index) in authenticationListDatas" :key="index">
            <a href="javascript:;" @click="$router.push('/homePage/strategyListPage')">
              <img :src="authenticationListData.imgUrl">
              <span>{{authenticationListData.character}}</span>
            </a>
          </li>
        </ul>
      </header>
      <div class="strategyContent">
        <strategyList :strategyListDatas="strategyListDatas"/>
      </div>
    </div>
  </div>
</template>

<script>
  import strategyList from "../../components/strategyList/strategyList.vue"
  import BScroll from "better-scroll"
  export default {
    data () {
      return {
        authenticationListDatas: [
          {
            imgUrl: "../../../static/img/strategyImg/card.png",
            character: "办卡"
          },
          {
            imgUrl: "../../../static/img/strategyImg/increasethequota.png",
            character: "提额"
          },
          {
            imgUrl: "../../../static/img/strategyImg/bystages.png",
            character: "分期"
          },
          {
            imgUrl: "../../../static/img/strategyImg/other.png",
            character: "其他"
          },
        ],
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
        ]
      }
    },

    components: {
      strategyList
    },

    computed: {},

    mounted(){
      this.__boxheight(this.$refs.strategyWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.strategyWrap); //窗口或框架被调整大小时执行
      this.strategyWrap = new BScroll(this.$refs.strategyWrap, {click: true,})
      this.strategyWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .strategyHeader
    width (1080 /$rem)
    height (328 /$rem)
    background-color #00aeff
    .authenticationList
      height 100%
      display -webkit-flex
      display flex
      justify-content: space-around
      align-items: center
      li
        a
          text-align center
          font-size (36 /$rem)
          color #ffffff
          img
            height (89 /$rem)
          span
            margin-top (62/$rem)
            display block

</style>
