<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div ref="creditWrap" v-show="$route.meta.isTop">
      <div>
        <header class="creditCardPageHeader">
          <ul class="CardPageHeaderList">
            <li v-for="(CardPageHeaderListDatas, index) in CardPageHeaderListDatas">
              <a href="javascript:;">
                <img :src="CardPageHeaderListDatas.imgUrl">
                <span>{{CardPageHeaderListDatas.character}}</span>
              </a>
            </li>
          </ul>
        </header>
        <div class="allBank">
          <cardHeadLine :cardHeadLineData="cardHeadLineData1"/>
          <allBankList :allBankListDatas="allBankListDatas"/>
          <footer class="allBankFooter">
            <a href="javascript:;">
              <span>展开更多</span><span class="icon"></span>
            </a>
          </footer>
          <split/>
        </div>
        <div class="recommend">
          <cardHeadLine :cardHeadLineData="cardHeadLineData2"/>
          <recommendList :recommendListDatas="recommendListDatas"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cardHeadLine from "../../components/cardHeadLine/cardHeadLine.vue"
  import allBankList from "../../components/allBankList/allBankList.vue"
  import recommendList from "../../components/recommendList/recommendList.vue"
  import BScroll from "better-scroll"
  export default {
    data () {
      return {
        cardHeadLineData1: {
          title: "按银行卡找卡",
          aFont: "全部银行"
        },
        cardHeadLineData2: {
          title: "推荐信用卡",
          aFont: ""
        },
        allBankListDatas: [
          {
            imgUrl: "../../../static/img/creditCardImg/citic.png",
            title: "中信银行",
            url:"/homePage/creditCardPage/zhongXinCardPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/communications.png",
            title: "交通银行",
            url:"/homePage/creditCardPage/zhongXinCardPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/guangfabank.png",
            title: "广发银行",
            url:"/homePage/creditCardPage/zhongXinCardPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/industrialbank.png",
            title: "兴业银行",
            url:"/homePage/creditCardPage/zhongXinCardPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/pinganbank.png",
            title: "平安银行",
            url:"/homePage/creditCardPage/zhongXinCardPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/pudongdevelopmentbank.png",
            title: "浦发银行",
            url:"/homePage/creditCardPage/zhongXinCardPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/generalbanks.png",
            title: "光大银行",
            url:"/homePage/creditCardPage/zhongXinCardPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/merchantsbank.png",
            title: "招商银行",
            url:"/homePage/creditCardPage/zhongXinCardPage"
          },
        ],
        recommendListDatas: [
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:"../../../static/img/creditCardImg/degreeofheat.png",
            url:"/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:"",
            url:"/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:"",
            url:"/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:"",
            url:"/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:"",
            url:"/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:"",
            url:"/homePage/creditCardPage/cardDetailsPage",
            buttonUrl:"/homePage/creditCardPage/cardApplyForPage"
          },
        ],
        CardPageHeaderListDatas:[
          {
            imgUrl:"../../../static/img/creditCardImg/repayment.png",
            character:"帮你还款"
          },
          {
            imgUrl:"../../../static/img/creditCardImg/speedofprogress.png",
            character:"进度查询"
          },
          {
            imgUrl:"../../../static/img/creditCardImg/raiders.png",
            character:"用卡攻略"
          },
          {
            imgUrl:"../../../static/img/creditCardImg/bankingservices.png",
            character:"银行服务"
          },
        ]
      }
    },

    components: {
      cardHeadLine, allBankList, recommendList
    },

    computed: {},

    mounted(){
      this.__boxheight(this.$refs.creditWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.creditWrap); //窗口或框架被调整大小时执行
      this.creditWrap = new BScroll(this.$refs.creditWrap, {click: true,})
      this.creditWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .creditCardPageHeader
    width (1080/$rem)
    height (330/$rem)
    background-color #00aeff
    .CardPageHeaderList
      height (330/$rem)
      display -webkit-flex
      display flex
      justify-content: space-around
      align-items: center;
      li
        text-align center
        font-size (36/$rem)
        color #ffffff
        img
          display inline-block
          height (90/$rem)
        span
          color #ffffff
          display block
          margin-top (60/$rem)
  .allBank
    width (1080 /$rem)
    .allBankFooter
      box-sizing border-box
      height (156 /$rem)
      padding (76 /$rem) (444 /$rem) (52 /$rem)
      span
        float left
        font-size (30 /$rem)
        color #bbbbbb
        &.icon
          background-image url("../../../static/img/creditCardImg/dropdown.png")
          background-repeat no-repeat
          background-size 100%
          margin-left (32 /$rem)
          width (37 /$rem)
          height (18 /$rem)
</style>
