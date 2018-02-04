<template>
  <div class="wrap">
    <span>{{title}}</span>
  </div>
</template>

<script>
  export default {
    props:["title"],
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
  .wrap
    box-sizing border-box
    width (1080/$rem)
    height (106/$rem)
    font-size (45/$rem)
    color #515151
    padding (30/$rem) 0 (30/$rem) (48/$rem)
    border-bottom 1px solid #e4e4e4
</style>
