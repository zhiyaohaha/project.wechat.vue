<template>
  <div>
    <div class="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <footer class="footerTap" v-if="$route.meta.keepAlive">
      <router-link to="/homePage">
        <img src="../static/img/homeImg/shouye.png" v-show="$route.meta.footerShow">
        <img src="../static/img/homeImg/shouye1.png" v-show="!$route.meta.footerShow">
      </router-link>
      <router-link to="/myPage">
        <img src="../static/img/homeImg/wode.png" v-show="$route.meta.footerShow">
        <img src="../static/img/homeImg/wode1.png" v-show="!$route.meta.footerShow">
      </router-link>
    </footer>
  </div>
</template>
<script>
  import { mapState } from "vuex"
  export default {
    data () {
      return {
        footerShow: true
      }
    },
    components: {},
    computed: {
      ...mapState(["openID"])
    },
    created(){
      let data = {
        openId: "123456",
        thirdLoginType: "ThirdPlatForm.WeChat"
      }
      this.$store.dispatch("getOpenid", {data})
    },
    mounted(){
      setTimeout(()=>{
        /*let exp = new Date();
         exp.setTime(exp.getTime() + 1000 * 60 * 60 * 24 * 7); //这里表示保存24小时
         if(this.openID){
         document.cookie = "openID="+ true + ";expires=" + exp.toGMTString();
         }
         console.log(document.cookie)*/
        this.setCookie("openID", true, 7)
      },100)
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
