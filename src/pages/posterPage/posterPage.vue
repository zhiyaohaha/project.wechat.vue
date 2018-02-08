<template>
  <div ref="posterWrap">
    <div>
      <header class="posterHeader">
        <span>我的推广海报</span>
        <a href="javascript:;" @click="switchoverImg">换一种海报</a>
      </header>
      <div class="posterContent">
        <div class="imgWrap">
          <img :src="imgUrl">
        </div>
      </div>
      <split/>
      <footer class="posterFooter">
        <headline headlineTitle = "推广操作描述"/>
        <span>请输入描述内容</span>
      </footer>
    </div>
  </div>
</template>

<script>
  import headline from "../../components/headline/headline.vue"
  import BScroll from "better-scroll"
  export default {
    data () {
      return {
        num:1,
      }
    },

    components: {
      headline
    },

    computed: {
      imgUrl(){
        return `../../../static/img/posterImg/haibao${this.num}.png`
      }
    },

    mounted(){
      this.__boxheight(this.$refs.posterWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.posterWrap); //窗口或框架被调整大小时执行
      this.posterWrap = new BScroll(this.$refs.posterWrap, {click: true,})
      this.posterWrap.refresh()
    },

    methods: {
      switchoverImg(){
        this.num++
        if(this.num > 3){
          this.num = 1
        }
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .posterHeader
    box-sizing border-box
    width (1080/$rem)
    height (120/$rem)
    background-color #f4f4f4
    font-size (45/$rem)
    padding (37.5/$rem) (40/$rem)
    span
      float left
    a
      color #c2181f
      float right
  .posterContent
    width (1080/$rem)
    height (1330/$rem)
    .imgWrap
      border 1px solid #dddddd
      width (780/$rem)
      height (1220/$rem)
      margin (55/$rem) auto
      img
        width (780/$rem)
        height (1220/$rem)
  .posterFooter
    &>span
      margin-top (30/$rem)
      display block
      margin-left (30/$rem)
      color #bbbbbb
      font-size (40/$rem)
</style>
