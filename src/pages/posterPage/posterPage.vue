<template>
  <div class="posterPage" ref="posterWrap">
    <div class="posterContent">
      <img :src="imgUrl" class="bGI">
      <div class="switchoverImg" @click="switchoverImg">
        <span>换一种海报</span>
        <img src="./img/sanjiao.png">
      </div>
      <div class="QRcode">
        <img :src="inviteurl">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"

  export default {
    data() {
      return {
        num: 1,
      }
    },

    components: {},
    watch: {

    },
    computed: {
      ...mapState(["inviteurl"]),
      imgUrl() {
        return `../../../static/img/posterImg/haibao${this.num}.png`
      }
    },
    beforeCreate() {
      let that = this
      if (this.getCookie('whether') * 1 < 1) {
        this.$router.replace({name: "phoneApprove", params: {name1: that.$route.name, name2: ""}})
      }
      that = null
    },
    created() {
      this.$store.dispatch("getInviteUrl")
    },
    mounted() {
      this.__boxheight(this.$refs.posterWrap)
    },

    methods: {
      switchoverImg() {
        this.num++
        if (this.num > 2) {
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
      .bGI
        display inline-block
        width 100%
      .switchoverImg
        position absolute
        top 40px
        right 30px
        line-height (36 /$rem)
        span
          font-size (36 /$rem)
          color #fff
          text-decoration underline
        img
          width (18 /$rem)
          display inline-block
          vertical-align bottom
      .QRcode
        position absolute
        top (1310 /$rem)
        left 50%
        margin-left (-150 /$rem)
        width (300 /$rem)
        height (300 /$rem)
        img
          width 100%
          height 100%
</style>
