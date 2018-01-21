<template>
  <div>
    <div>
      <header class="homePageHeader">
        <img src="./img/banner.png">
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
    </div>
  </div>
</template>
<script>
  import split from "../../components/split/split.vue"
  import headline from "../../components/headline/headline.vue"
  import loanMod from "../../components/loanMod/loanMod.vue"
  import generalizeMod from "../../components/generalizeMod/generalizeMod.vue"
  import recommendMod from "../../components/recommendMod/recommendMod.vue"
  import footline from "../../components/footline/footline.vue"
  import creditCardMod from "../../components/creditCardMod/creditCardMod.vue"
  export default {
    data () {
      return {
        loanModDatas:[
          {
            imgUrl:"../../static/img/daikuanchanpin.png",
            title:"贷款产品"
          },
          {
            imgUrl:"../../static/img/kuaisudaikuan.png",
            title:"快速贷款"
          },
        ],
        generalizeModDatas:[
          {
            imgUrl:"../../static/img/tuiguang.png",
            title:"我要推广"
          },
          {
            imgUrl:"../../static/img/haibao.png",
            title:"推广海报"
          },
          {
            imgUrl:"../../static/img/sucai.png",
            title:"推广素材"
          },
          {
            imgUrl:"../../static/img/jilu.png",
            title:"推广记录"
          }
        ],
        visaDatas:[
          {
            imgUrl:"../../static/img/xinyongka.png",
            title:"办信用卡"
          },
          {
            imgUrl:"../../static/img/jindu.png",
            title:"办卡进度"
          },
          {
            imgUrl:"../../static/img/gonglie.png",
            title:"攻略专区"
          },
          {
            imgUrl:"../../static/img/daihuan.png",
            title:"信用卡代还"
          }
        ],
        creditCardModDatas:[
          {
            imgUrl:"../../static/img/kapian.png",
            title:"信用卡名称",
            limit:"10000-100000元"
          },
          {
            imgUrl:"../../static/img/kapian.png",
            title:"信用卡名称",
            limit:"10000-100000元"
          }
        ],
      }
    },

    components: {
        split,headline,loanMod,generalizeMod,recommendMod,footline,creditCardMod
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .homePageHeader
    img
      display block
      width 100%
      height (500/$rem)
</style>
