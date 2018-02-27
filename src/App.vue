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
      /*if (this.code === undefined) {
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3e7e9692d8fc4a4b&redirect_uri=http://wechat.cpf360.com/index.html&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
        return
      }*/
    },
    created () {
      let code = this.__GetRequest().code
      this.$store.dispatch('getUserinfo', {code})
      let data = {
        openId: '123456',
        thirdLoginType: 'ThirdPlatForm.WeChat'
      }
      this.$store.dispatch('getOpenid', {
        data,
        cb: (flag) => {
          !(this.getCookie('openId') === '') ? this.setCookie('openID', flag, 7) : null
        }
      })
    },
    mounted () {
      setTimeout(()=>{
        console.log(this.userinfo)
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
