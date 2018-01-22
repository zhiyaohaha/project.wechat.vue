<template>
  <div>
    <ul class="loanModList">
      <li v-for="(loanMod,index) in loanModDatas" :key="index">
        <router-link to="/loanPage">
          <img :src="loanMod.imgUrl">
          <span>{{loanMod.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["loanModDatas"],
    data () {
      return {

      }
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .loanModList
    overflow hidden
    li
      float left
      box-sizing border-box
      border 1px solid #f4f4f4
      height (230/$rem)
      width (540/$rem)
      background-image url("./img/fanyong.png")
      background-repeat no-repeat
      background-position right top
      background-size (100/$rem)
      a
        overflow hidden
        line-height (230/$rem)
        height 100%
        width 100%
        img
          float left
          width (148/$rem)
          margin (40/$rem) (40/$rem) (40/$rem) (90/$rem)
        span
          float left
          color #333
          font-size (42/$rem)
</style>
