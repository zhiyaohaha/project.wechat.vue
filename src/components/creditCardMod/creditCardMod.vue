<template>
  <div>
    <ul class="creditCardModList">
      <li v-for="(creditCardModData, index) in creditCardModDatas">
          <img :src="creditCardModData.imgUrl">
          <div class="creditCardDescribe">
            <span class="firstLine">{{creditCardModData.title}}</span>
            <span class="secondLine">预估额度：{{creditCardModData.limit}}</span>
            <a href="javascript:;" class="applyFor"></a>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["creditCardModDatas"],

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
  .creditCardModList
    li
      position relative
      box-sizing border-box
      border 1px solid #f4f4f4
      height (342/$rem)
      img
        margin (60/$rem) (50/$rem) (60/$rem) (30/$rem)
        float left
        width (352/$rem)
      .creditCardDescribe
        position absolute
        top (66/$rem)
        left (432/$rem)
        .firstLine
          font-size (40/$rem)
          color #333
        .secondLine
          display block
          margin-top (40/$rem)
          font-size (36/$rem)
          color #bbb
        .applyFor
          display block
          margin-top (30/$rem)
          margin-left (174/$rem)
          width (250/$rem)
          height (64/$rem)
          background-image url("./img/lijishenqing.png")
          background-repeat no-repeat
          background-size 100%

</style>
