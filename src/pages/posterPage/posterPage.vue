<template>
  <div class="posterPage" ref="posterWrap">
    <div class="posterContent" :style="{backgroundImage:imgUrl}">
      <div class="switchoverImg" @click="switchoverImg">
        <span>换一种海报</span>
        <img src="./img/tuiguanghaibao_icon_moreone_normal.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1,
      }
    },

    components: {},

    computed: {
      imgUrl() {
        return `url(../../../static/img/posterImg/haibao${this.num}.png)`
      }
    },
    beforeCreate() {
      let that = this
      if (this.getCookie('whether')*1 < 1) {
        this.$router.replace({name: "phoneApprove", params: {name1: that.$route.name, name2:""}})
      }
      that = null
    },
    mounted() {
      this.__boxheight(this.$refs.posterWrap)
    },

    methods: {
      switchoverImg() {
        this.num++
        if (this.num > 3) {
          this.num = 1
        }
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .posterPage
    height 100%
    .posterContent
      width 100%
      height 100%
      background-repeat no-repeat
      background-size 100%
      .switchoverImg
        position absolute
        top 40px
        right 30px
        line-height (36/$rem)
        span
          font-size (36/$rem)
          color #333
          text-decoration underline
        img
          display inline-block
          vertical-align middle

</style>
