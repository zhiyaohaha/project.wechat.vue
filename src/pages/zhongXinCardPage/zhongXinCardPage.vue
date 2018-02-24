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
          title: "推荐信用卡",
          aFont: ""
        },
        recommendListDatas:[
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:"../../../static/img/creditCardImg/degreeofheat1.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "中信银行标准信用卡",
            money: "75元",
            logImg:"../../../static/img/creditCardImg/degreeofheat2.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "兴业星夜星座信用卡",
            money: "75元",
            logImg:"../../../static/img/creditCardImg/degreeofheat3.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "广发淘宝联名信用卡",
            money: "75元",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "广发淘宝联名信用卡",
            money: "75元",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "广发淘宝联名信用卡",
            money: "75元",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "广发淘宝联名信用卡",
            money: "75元",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "广发淘宝联名信用卡",
            money: "75元",
            logImg:"",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "广发淘宝联名信用卡",
            money: "75元",
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

    computed: {},

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
