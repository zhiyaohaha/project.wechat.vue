<template>
  <div>
    <router-view/>

    <div class="homePageWrap" ref="homePageWrap" v-show="$route.meta.keepAlive">
      <div @click="changeTop" ref="homePage">
        <header class="homePageHeader">
          <mt-swipe :auto="3000">
            <mt-swipe-item><img src="./img/xinyongkabanner.png"></mt-swipe-item>
            <mt-swipe-item><img src="./img/banner1.png"></mt-swipe-item>
            <mt-swipe-item><img src="./img/banner2.png"></mt-swipe-item>
          </mt-swipe>
        </header>
        <div class="homePageContent">
          <loanMod :loanModDatas="loanModDatas"/>
          <generalizeMod :generalizeModData="generalizeModData"/>
          <generalizeMod :generalizeModData="visaDatas"/>
          <headline :headlineData="{title:'热门贷款推荐',more:'更多贷款推荐'}"/>
          <recommendMod :recommendModDatas="recommendModDatas"/>
          <headline :headlineData="{title:'热门信用卡推荐',more:'更多信用卡推荐'}"/>
          <creditCardMod :creditCardModDatas="creditCardModDatas"/>
          <footline footlineTitle="我是有底线的~"/>
        </div>
        <div class="footerOccupied">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {MessageBox} from "mint-ui"
  import {mapState} from "vuex"
  import loanMod from "../../components/loanMod/loanMod.vue"
  import generalizeMod from "../../components/generalizeMod/generalizeMod.vue"
  import recommendMod from "../../components/recommendMod/recommendMod.vue"
  import footline from "../../components/footline/footline.vue"
  import creditCardMod from "../../components/creditCardMod/creditCardMod.vue"
  import headline from "../../components/headline/headline.vue"

  export default {
    data() {
      return {
        loanModDatas: [
          {
            imgUrl: "../../static/img/homeImg/conten_icon_daikuanchanpin_.png",
            title: "贷款产品",
            aUrl: "/homePage/productPage"
          },
          {
            imgUrl: "../../static/img/homeImg/conten_icon_kusudaikuan.png",
            title: "快速贷款",
            aUrl: "/homePage/loanPage"
          },
        ],
        generalizeModData: {
          name:{
            title:"推广返佣",
            more:""
          },
          datas: [
            {
              imgUrl: "../../static/img/homeImg/content_icon_woyaotuiguang.png",
              title: "我要推广",
              url: "/homePage/generalizePage"
            },
            {
              imgUrl: "../../static/img/homeImg/content_icon_tuiguanghaibao.png",
              title: "推广海报",
              url: "/homePage/posterPage"
            },
            {
              imgUrl: "../../static/img/homeImg/content_icon_tuiguangsucai.png",
              title: "推广素材",
              url: "/homePage/strategyPage"
            },
            {
              imgUrl: "../../static/img/homeImg/content_icon_tuiguangjilu.png",
              title: "推广记录",
              url: "/myPage/generalizeYiPage"
            },
          ]
        },
        visaDatas: {
          name:{
            title:"信用卡",
            more:""
          },
          datas : [
          {
            imgUrl: "../../static/img/homeImg/content_icon_banxinyongka.png",
            title: "办信用卡",
            url: "/homePage/creditCardPage"
          },
          {
            imgUrl: "../../static/img/homeImg/content_icon_bankajindu.png",
            title: "办卡进度",
            url: "/homePage/schedulePage"
          },
          {
            imgUrl: "../../static/img/homeImg/content_icon_gongluezhuanqu.png",
            title: "攻略专区",
            url: "/homePage/strategyPage"
          },
          {
            imgUrl: "../../static/img/homeImg/content_icon_xinyongkadaihuan.png",
            title: "信用卡代还",
            url: "/homePage/productPage"
          }
        ]},
        recommendModDatas:[
          {
            url:"/homePage/productPage/productDetailsPage",
            recommendModLogoUrl:"../../../static/img/homeImg/content_pic_jiuynengkai.png",
            title:"久亿-能卡",
            interestRate:"XX.XX%",
            rate:"XX.XX%",
            price:"1000-10万元",
            score:4,
          },
          {
            url:"/homePage/productPage/productDetailsPage",
            recommendModLogoUrl:"../../../static/img/homeImg/content_pic_xiaoyin.png",
            title:"小米卡贷-信用卡代还",
            interestRate:"XX.XX%",
            rate:"XX.XX%",
            price:"1000-10万元",
            score:4,

          },
        ],
        creditCardModDatas: [
          {
            url: "/homePage/creditCardPage/cardDetailsPage",
            imgUrl: "../../static/img/homeImg/kapian.png",
            title: "信用卡名称",
            limit: "10000-100000元",
            applyForUrl: "/homePage/creditCardPage/cardApplyForPage"
          },
          {
            url: "/homePage/creditCardPage/cardDetailsPage",
            imgUrl: "../../static/img/homeImg/kapian.png",
            title: "信用卡名称",
            limit: "10000-100000元",
            applyForUrl: "/homePage/creditCardPage/cardApplyForPage"
          }
        ],
        top: 0
      }
    },

    components: {
      headline, loanMod, generalizeMod, recommendMod, footline, creditCardMod
    },

    computed: {
      ...mapState(["openID"])
    },

    mounted() {
      this.__boxheight(this.$refs.homePageWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.homePageWrap); //窗口或框架被调整大小时执行
      this.$nextTick(() => {
        this._initScroll()
      })

    },

    updated() {
      if(this.$route.meta.homeShow){
        this.homePageWrap = new this.BScroll(this.$refs.homePageWrap, {click: true,startY: this.top})
        this.homePageWrap.refresh()
      }
    },
    methods: {
      _initScroll() {
        this.homePageWrap = new this.BScroll(this.$refs.homePageWrap, {click: true})
        this.homePageWrap.refresh()
      },
      changeTop() {
        this.top = this.homePageWrap.y
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .footerOccupied
    width (1080 /$rem)
    height (146 /$rem)

  .homePageHeader
    width 100%
    height (520 /$rem)
    .mint-swipe-items-wrap
      transform translateZ(0)
    img
      width 100%
      height 100%

  .homePageContent
    background-color #fff
    position relative
    padding-top (266/$rem)
  .fanyonglog
    transform translateZ(0)
    width (70/$rem)
    height (34/$rem)
</style>
