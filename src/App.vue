<template>
  <div>
    <div class="content">
      <!--<keep-alive>-->
      <router-view/>
      <!--</keep-alive>-->
    </div>
    <footer class="footerTap" v-if="$route.meta.keepAlive">
      <router-link to="/homePage">
        <img src="../static/img/homeImg/shouye.png">
      </router-link>
      <router-link to="/phoneApprove">
        <img src="../static/img/homeImg/wode.png">
      </router-link>
    </footer>
  </div>

</template>

<script>
  import {mapState} from "vuex"
  export default {
    data () {
      return {}
    },
    components: {},
    computed: {
      ...mapState(["openID"])
    },
    mounted(){
      /*this.$router.beforeEach((to, from, next) => {
        /!* 路由发生变化修改页面title *!/
        if (to.name) {
          console.log(555)
          document.title = to.name
        }
        next()
      })*/
      /*this.$router.beforeEach((to, from, next) => {
        console.log(111)
        if(to == "myPage"){
          if(!this.openID.success){
            this.$router.replace('/myPage/phoneApprove')
          }
        }
      })*/
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
        width (540 /$rem)
        height (146 /$rem)
</style>
