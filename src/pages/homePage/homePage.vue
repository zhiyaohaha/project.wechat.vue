<template>
  <div>
    <router-view/>
    <div class="homePageWrap" ref="homePageWrap" v-show="$route.meta.keepAlive">
      <div @click="changeTop" ref="homePage">
        <header class="homePageHeader">
          <img src="./img/xinyongkabanner.png">
        </header>
        <split/>
        <div class="homePageContent">
          <headline headlineTitle="贷款"/>
          <loanMod :loanModDatas="loanModDatas"/>
          <split/>
          <headline headlineTitle="推广返佣"/>
          <generalizeMod :generalizeModDatas="generalizeModDatas"/>
          <split/>
          <headline headlineTitle="信用卡"/>
          <generalizeMod :generalizeModDatas="visaDatas"/>
          <split/>
          <headline headlineTitle="热门贷款推荐"/>
          <recommendMod/>
          <footline footlineTitle="全部热门贷款>>"/>
          <split/>
          <headline headlineTitle="热门信用卡推荐"/>
          <creditCardMod :creditCardModDatas="creditCardModDatas"/>
          <footline footlineTitle="全部热门卡片>>"/>
          <split/>
        </div>
        <div class="footerOccupied">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { MessageBox } from "mint-ui"
  import { mapState } from "vuex"
  import headline from "../../components/headline/headline.vue"
  import loanMod from "../../components/loanMod/loanMod.vue"
  import generalizeMod from "../../components/generalizeMod/generalizeMod.vue"
  import recommendMod from "../../components/recommendMod/recommendMod.vue"
  import footline from "../../components/footline/footline.vue"
  import creditCardMod from "../../components/creditCardMod/creditCardMod.vue"
  export default {
    data () {
      return {
        loanModDatas: [
          {
            imgUrl: "../../static/img/homeImg/daikuanchanpin.png",
            title: "贷款产品",
            aUrl: "/homePage/productPage"
          },
          {
            imgUrl: "../../static/img/homeImg/kuaisudaikuan.png",
            title: "快速贷款",
            aUrl: "/homePage/loanPage"
          },
        ],
        generalizeModDatas: [
          {
            imgUrl: "../../static/img/homeImg/tuiguang.png",
            title: "我要推广",
            url: "/homePage/generalizePage"
          },
          {
            imgUrl: "../../static/img/homeImg/haibao.png",
            title: "推广海报",
            url: "/homePage/posterPage"
          },
          {
            imgUrl: "../../static/img/homeImg/sucai.png",
            title: "推广素材",
            url: "/homePage/strategyPage"
          },
          {
            imgUrl: "../../static/img/homeImg/jilu.png",
            title: "推广记录",
            url: "/myPage/generalizeYiPage"
          }
        ],
        visaDatas: [
          {
            imgUrl: "../../static/img/homeImg/xinyongka.png",
            title: "办信用卡",
            url: "/homePage/creditCardPage"
          },
          {
            imgUrl: "../../static/img/homeImg/jindu.png",
            title: "办卡进度",
            url: "/homePage/schedulePage"
          },
          {
            imgUrl: "../../static/img/homeImg/gonglie.png",
            title: "攻略专区",
            url: "/homePage/strategyPage"
          },
          {
            imgUrl: "../../static/img/homeImg/daihuan.png",
            title: "信用卡代还",
            url: "/homePage/productPage"
          }
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

    mounted(){
      this.__boxheight(this.$refs.homePageWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.homePageWrap); //窗口或框架被调整大小时执行
      this.$nextTick(()=>{
        this._initScroll()
      })

    },

    updated(){
      this.homePageWrap = new this.BScroll(this.$refs.homePageWrap, {click: true,startY:this.top})
    },
    methods: {
      _initScroll(){
        this.homePageWrap = new this.BScroll(this.$refs.homePageWrap, {click: true,})
        this.homePageWrap.refresh()
      },
      changeTop(){
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
    img
      width 100%
      height (500 /$rem)
</style>
