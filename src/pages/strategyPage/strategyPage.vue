<template>
  <div ref="strategyWrap">
    <div>
      <header class="strategyHeader">
        <ul class="authenticationList">
          <li v-for="(authenticationListData, index) in authenticationListDatas" :key="index">
            <router-link to="/homePage/strategyListPage">
              <img :src="authenticationListData.imgUrl">
              <span>{{authenticationListData.character}}</span>
            </router-link>
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
  export default {
    data () {
      return {
        authenticationListDatas: [
          {
            imgUrl: "../../../static/img/strategyImg/banka.png",
            character: "办卡"
          },
          {
            imgUrl: "../../../static/img/strategyImg/tie.png",
            character: "提额"
          },
          {
            imgUrl: "../../../static/img/strategyImg/fenqi.png",
            character: "分期"
          },
          {
            imgUrl: "../../../static/img/strategyImg/qita.png",
            character: "其他"
          },
        ],
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
      this.__boxheight(this.$refs.strategyWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.strategyWrap); //窗口或框架被调整大小时执行
      this.strategyWrap = new this.BScroll(this.$refs.strategyWrap, {click: true,})
      this.strategyWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .strategyHeader
    width (1080 /$rem)
    height (266 /$rem)
    .authenticationList
      box-sizing border-box
      height 100%
      display -webkit-flex
      display flex
      justify-content: space-around
      padding (50/$rem) 0
      border-bottom 1px solid #f2f2f2
      li
        a
          text-align center
          font-size (42 /$rem)
          color #333333
          img
            height (96 /$rem)
          span
            display block
            margin-top (28/$rem)
</style>
