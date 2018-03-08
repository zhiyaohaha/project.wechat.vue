<template>
  <div>
    <div ref="recommendListWrap">
      <div>
        <cardHeadLine :cardHeadLineData="cardHeadLineData"/>
        <recommendList :recommendListDatas="recommendListDatas"/>
      </div>
    </div>
  </div>
</template>

<script>
  import cardHeadLine from "../../components/cardHeadLine/cardHeadLine.vue"
  import recommendList from "../../components/recommendList/recommendList.vue"
  export default {
    data () {
      return {
        cardHeadLineData: {
          title: "全部信用卡",
          aFont: ""
        },
        recommendListDatas:[
          {
            imgUrl: "../../../static/img/creditCardImg/kapian01.png",
            bankName: "交通银行标准信用卡",
            logImg:"../../../static/img/creditCardImg/redu01.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian02.png",
            bankName: "交通银行凤凰之音金卡",
            logImg:"../../../static/img/creditCardImg/redu02.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian03.png",
            bankName: "交通银行东方航空金卡",
            logImg:"../../../static/img/creditCardImg/redu03.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian04.png",
            bankName: "交通银行凤凰之音普卡",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian05.png",
            bankName: "交通银行power黑卡",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian01.png",
            bankName: "广发淘宝联名信用卡",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian02.png",
            bankName: "广发淘宝联名信用卡",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "广发淘宝联名信用卡",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "广发淘宝联名信用卡",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },

        ]
      }
    },

    components: {
      cardHeadLine,recommendList
    },

    computed: {

    },
    created(){
    },
    mounted(){
      this.__boxheight(this.$refs.recommendListWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.recommendListWrap); //窗口或框架被调整大小时执行
      this.recommendListWrap = new this.BScroll(this.$refs.recommendListWrap, {click: true,})
      this.recommendListWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
