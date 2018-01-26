<template>
  <div>
    <div class="content">
      <router-view />
    </div>
    <footer class="footerTap">
      <router-link to="/homePage">
        <img src="../static/img/homeImg/shouye.png">
      </router-link>
      <router-link to="/myPage">
        <img src="../static/img/homeImg/wode.png">
      </router-link>
    </footer>
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
    methods: {}
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
