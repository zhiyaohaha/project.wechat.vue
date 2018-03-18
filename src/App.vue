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
  import { getListForApp } from './api'

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
      //获取用户信息
      let obj = this.__GetRequest()
      this.$store.dispatch('getUserinfo', {
        obj,
        cb: (userinfo, val) => {
          this.saveTodos(userinfo)
          this.setCookie('id', val, 7)
        }
      })
    },
    created () {

      setTimeout(() => {
        let userinfo = this.readTodos()
        let data = {
          openId: userinfo.openid,
          thirdLoginType: 'ThirdPlatForm.WeChat',
          nickName: userinfo.nickname,
          head: userinfo.headimgurl
        }
        this.$store.dispatch('postOpenid', {
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
      let data = {
        name: 'LoanProductType.Speed',
        id: this.__GetRequest().id,
        size: 10,
        hot:false
      }
      let apiPrefix = 'http://192.168.6.66:8001'
      let url = apiPrefix + '/api/LoanProduct/ListForApp'
      getListForApp(url, data)

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
    a:last-child
      padding-right (310 /$rem)
      text-align right
    a:first-child
      padding-left (310 /$rem)
    a
      float left
      box-sizing border-box
      border-top 1px solid #f2f2f2
      background-color #fff
      width (540 /$rem)
      height (146 /$rem)
      img
        display inline-block
        width (66 /$rem)
        height (108 /$rem)
        margin (21 /$rem) 0 0 0
</style>
