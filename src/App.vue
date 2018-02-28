<template>
  <div>
    <div class="content">
      <router-view/>
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
  import { mapState } from 'vuex'
  import ajax from './api/ajax.js'

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
      /*if (this.code === undefined) {
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3e7e9692d8fc4a4b&redirect_uri=http://wechat.cpf360.com/index.html&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
        return
      }*/
    },
    created () {

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
      float left
      img
        display block
        width (540 /$rem)
        height (146 /$rem)
</style>
