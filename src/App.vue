<template>
  <div>
    <div class="content">
      <router-view/>
    </div>
    <footer class="footerTap" v-if="$route.meta.keepAlive">
      <router-link to="/homePage">
        <img src="../static/img/homeImg/shouye1.png" v-show="$route.meta.footerShow">
        <img src="../static/img/homeImg/shouye.png" v-show="!$route.meta.footerShow">
      </router-link>
      <router-link to="/myPage">
        <img src="../static/img/homeImg/wode.png" v-show="$route.meta.footerShow">
        <img src="../static/img/homeImg/wode1.png" v-show="!$route.meta.footerShow">
      </router-link>
    </footer>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        footerShow: true
      }
    },
    components: {},
    computed: {
      ...mapState(['openID', 'userinfo'])
    },
    beforeCreate () {
      let obj = this.__GetRequest()
      this.$store.dispatch('getUserinfo', {
        obj,
        cb:(userinfo, val)=>{
          this.saveTodos(userinfo)
          this.setCookie("id", val, 7)
        }
      })
    },
    created () {
      setTimeout(() => {
        let userinfo = this.readTodos()
        let data = {
          openId: userinfo.openid,
          thirdLoginType: 'ThirdPlatForm.WeChat'
        }
        this.$store.dispatch('getOpenid', {
          data,
          cb: (va1, whether) => {
            this.setCookie('openId', va1, 7)
            //存入cookie 判断是否实名
            this.setCookie('whether', whether, 7)
          }
        })
      }, 1000)
    },
    mounted () {
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
      background-color #fff
      width (540 /$rem)
      height (146 /$rem)
      float left
      img
        margin (21/$rem) auto
</style>
