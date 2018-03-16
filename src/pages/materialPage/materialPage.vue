<template>
  <div ref="materialWrap">
    <div>
      <header class="materialHeader">
        <ul class="authenticationList">
          <li v-for="(authenticationListData, index) in authenticationListDatas" :key="index">
            <a href="javascript:;" @click="$router.push('/homePage/strategyListPage')">
              <img :src="authenticationListData.imgUrl">
              <span>{{authenticationListData.character}}</span>
            </a>
          </li>
        </ul>
      </header>
      <div class="materialContent">
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
            imgUrl: "../../../static/img/strategyImg/jiaoxue.png",
            character: "教学"
          },
          {
            imgUrl: "../../../static/img/strategyImg/tuiguang.png",
            character: "推广"
          },
          {
            imgUrl: "../../../static/img/strategyImg/kouzi.png",
            character: "口子"
          },
          {
            imgUrl: "../../../static/img/strategyImg/qita.png",
            character: "其它"
          },
        ],
        strategyListDatas:[
          {
            title:"如何成为具有推广资格的代理",
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
      this.__boxheight(this.$refs.materialWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.materialWrap); //窗口或框架被调整大小时执行
      this.materialWrap = new this.BScroll(this.$refs.materialWrap, {click: true,})
      this.materialWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .materialHeader
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
