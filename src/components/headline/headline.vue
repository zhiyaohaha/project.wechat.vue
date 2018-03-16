<template>
  <div class="headline" :class="{line:headlineData.line}">
    <span>{{headlineData.title}}</span>
    <span class="more" v-if="headlineData.more">{{headlineData.more}} ></span>
  </div>
</template>

<script>
  export default {
    props: ['headlineData'],
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
  .headline
    width (1080/$rem)
    box-sizing border-box
    height (126 /$rem)
    &.line
      border-bottom 1px solid #f2f2f2
    span
      float left
      font-family "Microsoft YaHei"
      line-height (126 /$rem)
      font-size (46 /$rem)
      color #333
      margin-left (30 /$rem)
      &.more
        float right
        margin-right (30/$rem)
        font-size (36/$rem)
        color #bbb
</style>
