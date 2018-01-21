<template>
  <div class="headline">
    <span>{{headlineTitle}}</span>
  </div>
</template>

<script>
  export default {
    props: ['headlineTitle'],
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
    width 100%
    height (120 /$rem)
    line-height (120 /$rem)
    span
      float left
      font-family "Microsoft YaHei"
      font-size (42 /$rem)
      color #333
      margin-left (30 /$rem)
</style>
