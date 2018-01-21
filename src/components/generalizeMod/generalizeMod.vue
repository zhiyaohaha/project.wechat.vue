<template>
  <div>
    <ul class="generalizeModList">
      <li v-for="(generalizeModData, index) in generalizeModDatas" :key="index" :class="{'icon':index === 0}">
        <a href="javascript:;">
          <img :src="generalizeModData.imgUrl">
          <span>{{generalizeModData.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["generalizeModDatas"],
    data () {
      return {}
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .generalizeModList
    overflow hidden
    li
      position relative
      box-sizing border-box
      border 1px solid #f4f4f4
      height (226 /$rem)
      width (270 /$rem)
      float left
      &.icon
        background-image url("./img/fan.png")
        background-repeat no-repeat
        background-position top right
        background-size (80/$rem)
      a
        text-align center
        position absolute
        top 0
        left 0
        height 100%
        width 100%
        img
          display block
          width (100/$rem)
          margin (36 /$rem) (84 /$rem) (20 /$rem)
        span
          display block
          font-family "Microsoft YaHei"
          font-size (36 /$rem)
</style>
