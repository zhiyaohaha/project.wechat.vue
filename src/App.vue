<template>
  <div>
    <div class="content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    components: {},
    computed: {},
    mounted(){

    },
    methods: {

    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .footerTap
    position fixed
    bottom 0
    left 0
    z-index 10
    a
      float left
      img
        display block
        width (540/$rem)
        height (146/$rem)
</style>
