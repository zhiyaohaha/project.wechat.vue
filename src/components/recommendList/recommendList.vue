<template>
  <div>
    <ul class="recommendList">
      <li v-for="(recommendListData, index) in recommendListDatas" :key="index">
        <router-link :to="recommendListData.url">
          <img :src="recommendListData.imgUrl">
          <div class="describe">
            <span class="up">{{recommendListData.bankName}}</span>
            <a href="javascript:;" class="button"
               @click.stop="$router.push(recommendListData.buttonUrl)">
            </a>
          </div>
          <div class="smallLog" v-if="recommendListData.logImg">
            <img :src="recommendListData.logImg" >
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["recommendListDatas"],
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
  .recommendList
    box-sizing border-box
    width (1080/$rem)
    padding 0 (30/$rem) 0
    li
      position relative
      box-sizing border-box
      height (308/$rem)
      padding (50/$rem) 0 (40/$rem) 0
      border-bottom 1px solid #f2f2f2
      a
        height 100%
      img
        float left
        width (350/$rem)
        margin-right (30/$rem)
      .describe
        float left
        margin-top (10/$rem)
        .up
          font-size (42/$rem)
          color #333
        .button
          position absolute
          bottom (40/$rem)
          right (30/$rem)
          width (250/$rem)
          height (90/$rem)
          background-image url("./img/shenqinganniu.png")
          background-repeat no-repeat
          background-size 100%
      .smallLog
        position absolute
        right (30/$rem)
        top (50/$rem)
        width (64/$rem)
        height (62/$rem)
        img
          width 100%
          height 100%

</style>
