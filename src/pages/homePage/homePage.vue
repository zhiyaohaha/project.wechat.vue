<template>
  <div>
    <div class="homePageWrap" ref="homePageWrap">
      <div>
        <header class="homePageHeader">
          <img src="./img/banner.png">
        </header>
        <split/>
        <div class="homePageContent">
          <headline headlineTitle="贷款"/>
          <loanMod :loanModDatas="loanModDatas" />
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
    <footer class="footerTap" v-if="$route.meta.keepAlive">
      <router-link to="/homePage">
        <img src="../../../static/img/homeImg/shouye.png">
      </router-link>
      <router-link to="/myPage">
        <img src="../../../static/img/homeImg/wode.png">
      </router-link>
    </footer>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import { MessageBox } from "mint-ui"
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
            aUrl: "/product"
          },
          {
            imgUrl: "../../static/img/homeImg/kuaisudaikuan.png",
            title: "快速贷款",
            aUrl: "/loanPage"
          },
        ],
        generalizeModDatas: [
          {
            imgUrl: "../../static/img/homeImg/tuiguang.png",
            title: "我要推广"
          },
          {
            imgUrl: "../../static/img/homeImg/haibao.png",
            title: "推广海报"
          },
          {
            imgUrl: "../../static/img/homeImg/sucai.png",
            title: "推广素材"
          },
          {
            imgUrl: "../../static/img/homeImg/jilu.png",
            title: "推广记录"
          }
        ],
        visaDatas: [
          {
            imgUrl: "../../static/img/homeImg/xinyongka.png",
            title: "办信用卡"
          },
          {
            imgUrl: "../../static/img/homeImg/jindu.png",
            title: "办卡进度"
          },
          {
            imgUrl: "../../static/img/homeImg/gonglie.png",
            title: "攻略专区"
          },
          {
            imgUrl: "../../static/img/homeImg/daihuan.png",
            title: "信用卡代还"
          }
        ],
        creditCardModDatas: [
          {
            imgUrl: "../../static/img/homeImg/kapian.png",
            title: "信用卡名称",
            limit: "10000-100000元"
          },
          {
            imgUrl: "../../static/img/homeImg/kapian.png",
            title: "信用卡名称",
            limit: "10000-100000元"
          }
        ],
      }
    },

    components: {
      headline, loanMod, generalizeMod, recommendMod, footline, creditCardMod
    },

    computed: {},

    mounted(){

      this.__boxheight(this.$refs.homePageWrap); //执行函数
      window.onresize =this.boxheight; //窗口或框架被调整大小时执行
      this.homePageWrap = new BScroll(this.$refs.homePageWrap, {click: true, momentum: true})
      this.homePageWrap.refresh()
      this.$store.dispatch("getOpenid",{})
    },
    methods: {

    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .footerOccupied
    width (1080 /$rem)
    height (146 /$rem)
  .homePageHeader
    img
      display block
      width 100%
      height (500 /$rem)
</style>
