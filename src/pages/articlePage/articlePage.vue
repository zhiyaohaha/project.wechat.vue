<template>
  <div ref="articlePageWrap">
    <div class="articlePage" v-if="detailForApp">
      <header class="articlePageHeader">
        <p class="headerTitle">
          {{detailForApp.title}}奥斯打击打击乐不拿手机大家考虑离开撒娇的就！大陆上空。
        </p>
        <div class="articleDescribe">
          <div class="timeAddress">
            <span class="source">peter来源:{{detailForApp.source}}</span>
            <span class="time">{{detailForApp.createdDate}}</span>
          </div>
          <div class="humanCount">
            <img src="./img/yuedu.png">
            <span>{{detailForApp.browseCount}}阅读</span>
          </div>
        </div>
      </header>
      <div class="detailForAppContent" v-html="detailForApp.content"></div>
      <headline :headlineData="{line:true,title:'相关资讯'}"/>
      <strategyList :strategyListDatas="detailForApp.news"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import strategyList from "../../components/strategyList/strategyList.vue"

  export default {
    name: "articlePage",
    data() {
      return {}
    },

    components: {
      strategyList,
    },

    computed: {
      ...mapState(["detailForApp"])
    },
    created() {
      this.$store.dispatch("getDetailForApp", {
        id: this.$route.query.id
      }).then(() => {
        this.__boxheight(this.$refs.articlePageWrap); //执行函数
        window.onresize = this.__boxheight(this.$refs.articlePageWrap); //窗口或框架被调整大小时执行
        this.$nextTick(() => {
          this.articlePageWrap = new this.BScroll(this.$refs.articlePageWrap, {
            click: true,
          })
          this.articlePageWrap.refresh()
        })
      })
    },
    mounted() {

    },
    updated() {
    },
    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .articlePage
    box-sizing border-box
    padding 0 (30 /$rem)
    .articlePageHeader
      .headerTitle
        box-sizing border-box
        padding (60 /$rem) 0
        font-size (72 /$rem)
        color #333
        line-height (100 /$rem)
    .articleDescribe
      font-size (36 /$rem)
      height (40 /$rem)
      color #bbbbbb
      .timeAddress
        float left
        width (615 /$rem)
        .source
          text-align left
          float left
        .time
          float right
      .humanCount
        float right
        width (208 /$rem)
        img
          float left
          width (52 /$rem)
        span
          float left
          margin-left (16 /$rem)

    .detailForAppContent
      p
        font-size (40 /$rem)
        color #666 !important

      img
        width 100%
</style>
