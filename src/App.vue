<template>
  <div>
    <div v-if="allIsShow">
      <keep-alive>
        <router-view v-if="!$route.meta.cache"/>
      </keep-alive>
      <router-view v-if="$route.meta.cache"/>
      <footer class="footerTap" v-if="$route.meta.keepAlive">
        <router-link to="/homePage">
          <img src="../static/img/homeImg/tab_icon_home_selected.png" v-show="$route.meta.footerShow">
          <img src="../static/img/homeImg/tab_icon_home_normal.png" v-show="!$route.meta.footerShow">
        </router-link>
        <router-link to="/myPage">
          <img src="../static/img/homeImg/tab_icon_mine_normal.png" v-show="$route.meta.footerShow">
          <img src="../static/img/homeImg/tab_icon_mine_selected.png" v-show="!$route.meta.footerShow">
        </router-link>
      </footer>
    </div>
    <div>
      <awaitMod v-if="awaitShow"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import awaitMod from "./components/awaitMod/awaitMod"

  export default {
    data() {
      return {
        footerShow: true,
        allIsShow: false
      }
    },
    components: {
      awaitMod
    },
    computed: {
      ...mapState(['openID', 'userinfo', 'awaitShow'])
    },
    beforeCreate() {
    },
    created() {
      this.$store.commit("AWAITTRUE")
      let obj = this.__GetRequest()
      let userinfo = this.readTodos()
      let that = this
      if (userinfo.openid) {
        console.log("这里是浏览器有");
        this.$store.dispatch('postOpenid', {
          data: {
            openId: userinfo.openid,
            // openId: "16573",//假帐号
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
          this.allIsShow = true
          this.$store.commit("AWAITFALSE")
          this.$store.dispatch('getBinBankCard', {
            cb: (whether) => {
              this.setCookie('whether', whether, 7)
            }
          })
        })
      } else {
        // alert(2)
        // alert(JSON.stringify(obj))
        console.log("这里是浏览器没有")
        this.$store.dispatch('getUserinfo', {
          obj,
          cb: (userinfo, id) => {
            this.saveTodos(userinfo)
            this.setCookie('id', id, 7)
          }
        }).then(() => {
          userinfo = this.readTodos()
          console.log(JSON.stringify(userinfo));
          this.$store.dispatch('postOpenid', {
            data: {
              openId: userinfo.openid,
              // openId: "16573",
              thirdLoginType: 'ThirdPlatForm.WeChat',
              nickName: userinfo.nickname,
              head: userinfo.headimgurl,
              firstLevelId: that.getCookie("id") === "undefined" ? "" : that.getCookie("id")
            },
            cb: (va1, whether) => {
              this.setCookie('token', va1, 7)
              //存入cookie 判断是否实名
              this.setCookie('whether', whether, 7)
            }
          }).then(() => {
            this.allIsShow = true
            this.$store.commit("AWAITFALSE")
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
      padding 0 (30 /$rem)
      .mint-msgbox-message
        display inline-block
        vertical-align: middle
        text-align left
        line-height (60 /$rem)
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
        color #fff
        background-color #efca7d

</style>
