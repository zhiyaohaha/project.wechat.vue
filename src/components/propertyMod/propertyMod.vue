<template>
  <div class="propertyMod">
    <ul class="propertyModList">
      <li v-for="(propertyModData, index) in propertyModDatas" :key="index"
          :class="{pitchOn:propertyModData.imgUrlIsShow}" @click="pitchOn(index)">
        <div>
          <img src="./img/xuanze.png" v-show="propertyModData.imgUrlIsShow">
          <img src="./img/huikuang.png" v-show="!propertyModData.imgUrlIsShow">
          <span :class="{pitchOnFont:propertyModData.imgUrlIsShow}">{{propertyModData.character}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["propertyModDatas"],
    data () {
      return {
        pitchOnIndex:0,
      }
    },

    components: {},

    computed: {},

    mounted(){
    },

    methods: {
      pitchOn(index){
        this.pitchOnIndex = index
        this.propertyModDatas.forEach((item, index)=>{
          if(this.pitchOnIndex == index){
            item.imgUrlIsShow = !item.imgUrlIsShow
          }
        })
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .propertyMod
    overflow hidden
    .propertyModList
      li
        box-sizing border-box
        position relative
        width (300/$rem)
        height (100/$rem)
        float left
        margin (40/$rem) (40/$rem) (40/$rem) 0
        background url("./img/huiseda.png") no-repeat scroll right center transparent
        border-radius (20/$rem)
        text-align center
        border 1px solid #f4f4f4
        &.pitchOn
          background-image url("./img/hongseda.png")
        div
          line-height (100/$rem)
          overflow hidden
          position absolute
          left (30/$rem)
          img
            float left
            margin-top (30/$rem)
            width (40/$rem)
            vertical-align: middle
          span
            float left
            margin-left (20/$rem)
            vertical-align: middle
            color #bbb
            font-size (36/$rem)
            &.pitchOnFont
              color #fff
</style>
