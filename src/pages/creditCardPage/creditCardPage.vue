<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div ref="creditWrap" v-show="$route.meta.isTop">
      <!--<header class="creditCardPageHeader">
        <div class="headerEach">
          <img src="../../../static/img/creditCardImg/applyforacard.png">
          <span>申请办卡</span>
        </div>
      </header>-->
      <div>
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
            logImg:"../../../static/img/creditCardImg/degreeofheat.png"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:""
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:""
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:""
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            money: "75元",
            logImg:""
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
  /*.creditCardPageHeader
    width (1080/$rem)
    height (330/$rem)
    background-color #292929
    .headerEach
      overflow hidden
      img
        width (118/$rem)
        height (89/$rem)
        margin (84/$rem) (74/$rem) (62/$rem) (72/$rem)
      span
        display block
        font-size (36/$rem)
        color #ffffff
        margin-left (58/$rem)
        margin-bottom (66/$rem)*/
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
