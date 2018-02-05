<template>
  <div>
    <ul class="recommendList">
      <li v-for="(recommendListData, index) in recommendListDatas" :key="index">
        <router-link :to="recommendListData.url">
          <img :src="recommendListData.imgUrl">
          <div class="describe">
            <span class="up">{{recommendListData.bankName}}</span>
            <div class="down">
              <span>成功开卡可赚</span>
              <span class="price">{{recommendListData.money}}</span>
            </div>
            <a href="javascript:;" class="button"
               @click.stop="$router.push(recommendListData.buttonUrl)"></a>
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
    width (1080/$rem)
    li
      position relative
      box-sizing border-box
      height (341/$rem)
      padding (60/$rem) (60/$rem) (60/$rem) (45/$rem)
      border-bottom 1px solid #cccccc
      a
        height 100%
      img
        float left
        width (352/$rem)
        margin-right (50/$rem)
      .describe
        float left
        margin-top (10/$rem)
        font-size (36/$rem)
        .up
          font-size (40/$rem)
          color #515151
        .down
          margin-top (40/$rem)
          margin-bottom (28/$rem)
          color #8a8a8a
          .price
            color #c2181f
        .button
          width (250/$rem)
          height (64/$rem)
          background-image url("../../../static/img/creditCardImg/transactimmediately.png")
          background-repeat no-repeat
          background-size 100%
      .smallLog
        position absolute
        right (60/$rem)
        top (60/$rem)
        width (86/$rem)
        height (86/$rem)
        img
          width 100%

</style>
