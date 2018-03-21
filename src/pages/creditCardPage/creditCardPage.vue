<template>
  <div class="creditCard">
    <router-view/>
    <div ref="creditWrap" v-show="$route.meta.isTop">
      <div>
        <div class="allBank">
          <allBankList :allBankListDatas="listBanks"/>
          <footer class="allBankFooter">
            <div class="line"></div>
            <div class="character">即将开发跟多信用卡</div>
            <div class="line"></div>
          </footer>
        </div>
        <div class="recommend">
          <header class="recommendHeader">
            <span>推荐信用卡</span>
          </header>
          <div class="line"></div>
          <recommendList :recommendListDatas="creditListBankCard"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headline from "../../components/headline/headline.vue"
  import allBankList from "../../components/allBankList/allBankList.vue"
  import recommendList from "../../components/recommendList/recommendList.vue"
  import {mapState} from "vuex"

  export default {
    data() {
      return {
        allBankListDatas: [
          {
            imgUrl: "../../../static/img/creditCardImg/communications.png",
            title: "交通银行",
            url: {path: '/homePage/creditCardPage/zhongXinCardPage', query: {name: "交通银行"}}
          },

          {
            imgUrl: "../../../static/img/creditCardImg/industrialbank.png",
            title: "兴业银行",
            url: {path: '/homePage/creditCardPage/zhongXinCardPage', query: {name: "兴业银行"}}
          },

          {
            imgUrl: "../../../static/img/creditCardImg/generalbanks.png",
            title: "光大银行",
            url: {path: '/homePage/creditCardPage/zhongXinCardPage', query: {name: "光大银行"}}
          },
          {
            imgUrl: "../../../static/img/creditCardImg/pudongdevelopmentbank.png",
            title: "浦发银行",
            url: {path: '/homePage/creditCardPage/zhongXinCardPage', query: {name: "浦发银行"}}
          },

        ],
        recommendListDatas: [
          {
            imgUrl: "../../../static/img/creditCardImg/kapian01.png",
            bankName: "交通银行标准信用卡",
            logImg: "../../../static/img/creditCardImg/redu01.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl: "/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            logImg: "../../../static/img/creditCardImg/redu02.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl: "/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            logImg: "../../../static/img/creditCardImg/redu03.png",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl: "/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            logImg: "",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl: "/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian.png",
            bankName: "交通银行标准信用卡",
            logImg: "",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl: "/homePage/creditCardPage/cardApplyForPage"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/kapian01.png",
            bankName: "交通银行标准信用卡",
            logImg: "",
            url: "/homePage/creditCardPage/cardDetailsPage",
            buttonUrl: "/homePage/creditCardPage/cardApplyForPage"
          },
        ],
        CardPageHeaderListDatas: [
          {
            imgUrl: "../../../static/img/creditCardImg/repayment.png",
            character: "帮你还款"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/speedofprogress.png",
            character: "进度查询"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/raiders.png",
            character: "用卡攻略"
          },
          {
            imgUrl: "../../../static/img/creditCardImg/bankingservices.png",
            character: "银行服务"
          },
        ]
      }
    },

    components: {
      headline, allBankList, recommendList
    },

    computed: {
      ...mapState(["listBanks", "creditListBankCard"])
    },
    created() {
      let bank = ""
      this.listBanks.forEach((item) => {
        bank += item.id + ","
      })
      this.$store.dispatch("getListBankCard", {
        data: {
          id: '',//最后一条Id，第一次请求不用传
          bank: bank,//银行id，多个则逗号分隔，不传则不进行筛选
          size: 10//每页展示数量
        },
        site:"credit"
      })
    },
    mounted() {
      this.__boxheight(this.$refs.creditWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.creditWrap); //窗口或框架被调整大小时执行
      this.creditWrap = new this.BScroll(this.$refs.creditWrap, {
        click: true,
        pullUpLoad: {
          threshold: 50,
          stop: 20,
          moreTxt:"加载更多",
          noMoreTxt:"没有跟多数据拉"
        }
      })
      this.creditWrap.refresh()
    },
    updated() {
      console.log(this.creditListBankCard)
    },
    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .creditCard
    background-color #ffffff

  .creditCardPageHeader
    width (1080 /$rem)
    height (330 /$rem)
    background-color #00aeff
    .CardPageHeaderList
      height (330 /$rem)
      display -webkit-flex
      display flex
      justify-content: space-around
      align-items: center;
      li
        text-align center
        font-size (36 /$rem)
        color #ffffff
        img
          display inline-block
          height (90 /$rem)
        span
          color #ffffff
          display block
          margin-top (60 /$rem)

  .allBank
    width (1080 /$rem)
    .allBankFooter
      height (101 /$rem)
      padding (0) (80 /$rem)
      box-sizing border-box
      border-bottom 1px solid #f2f2f2
      div
        float left
        &.line
          margin-top (50 /$rem)
          background-color #f2f2f2
          height 1px
          width (240 /$rem)
        &.character
          margin (36 /$rem) (50 /$rem)
          font-size (30 /$rem)
          color #bbbbbb

  .recommend
    .recommendHeader
      position relative
      height (126 /$rem)
      line-height (126 /$rem)
      width (1080 /$rem)
      span
        position absolute
        font-size (46 /$rem)
        color #333
        left (30 /$rem)
    .line
      width (1080 /$rem)
      height 1px
      background-color: #f2f2f2;
</style>
