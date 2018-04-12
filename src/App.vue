<template>
  <div>
    <keep-alive>
      <router-view v-if="!$route.meta.cache"/>
    </keep-alive>
    <router-view v-if="$route.meta.cache"/>
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
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        footerShow: true
      }
    },
    components: {},
    computed: {
      ...mapState(['openID', 'userinfo'])
    },
    beforeCreate() {
    },
    created() {
      let obj = this.__GetRequest()
      let userinfo = this.readTodos()
      if (userinfo.openid) {
        this.$store.dispatch('postOpenid', {
          data: {
            openId: userinfo.openid,
            // openId: "16573",
            thirdLoginType: 'ThirdPlatForm.WeChat',
            nickName: userinfo.nickname,
            head: userinfo.headimgurl,
          },
          cb: (va1, whether) => {
            this.setCookie('token', va1, 7)
            //存入cookie 判断是否实名
            this.setCookie('whether', whether, 7)
            this.setCookie('id', obj.id, 7)
          }
        }).then(() => {
          this.$store.dispatch('getBinBankCard', {
            cb: (whether) => {
              this.setCookie('whether', whether, 7)
            }
          })
        })
      } else {
        // alert(2)
        // alert(JSON.stringify(obj))
        this.$store.dispatch('getUserinfo', {
          obj,
          cb: (userinfo, id) => {
            this.saveTodos(userinfo)
            this.setCookie('id', id, 7)
          }
        }).then(() => {
          userinfo = this.readTodos()
          this.$store.dispatch('postOpenid', {
            data: {
              openId: userinfo.openid,
              // openId: "16573",
              thirdLoginType: 'ThirdPlatForm.WeChat',
              nickName: userinfo.nickname,
              head: userinfo.headimgurl
            },
            cb: (va1, whether) => {
              this.setCookie('token', va1, 7)
              //存入cookie 判断是否实名
              this.setCookie('whether', whether, 7)
            }
          }).then(() => {
            this.$store.dispatch('getBinBankCard', {
              cb: (whether) => {
                this.setCookie('whether', whether, 7)
              }
            })

          })
        })
      }
    },
    mounted() {

    },
    updated() {

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

  .mint-msgbox
    width (864 /$rem)
    height (450 /$rem)
    font-size (46 /$rem)
    border-radius (20 /$rem)
    .mint-msgbox-header
      box-sizing border-box
      height (86 /$rem)
      padding: (40 /$rem) 0 0
      .mint-msgbox-title
        color #333
        font-size (46 /$rem)
    .mint-msgbox-content
      height (234 /$rem)
      text-align center
      line-height (234 /$rem)
      .mint-msgbox-message
        display inline
        font-size (42 /$rem)
        color #333
    .mint-msgbox-btns
      height (130 /$rem)
      line-height (130 /$rem)
      .mint-msgbox-confirm
        font-size (46 /$rem)
        background-color #efca7d
      .mint-msgbox-cancel
        font-size (46 /$rem)
        color #333

</style>
