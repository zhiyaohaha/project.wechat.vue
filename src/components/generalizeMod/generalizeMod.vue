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
      box-sizing border-box
      border 1px solid #f4f4f4
      height (226 /$rem)
      width (270 /$rem)
      float left
      &.icon
        background-image url("./img/fan.png")
        background-repeat no-repeat
        background-position top right
      a
        text-align center
        img
          display block
          margin (36 /$rem) (84 /$rem) (20 /$rem)
        span
          display block
          font-family "Microsoft YaHei"
          font-size (36 /$rem)
</style>
