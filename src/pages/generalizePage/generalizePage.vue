<template>
  <div>
    <scroll>
      <div>
        <header class="generalizeHeader">
          <img src="../../../static/img/homeImg/banner.png">
        </header>
        <headline :headlineData="{title:'赚佣金规则'}"/>
        <div class="generalizeContent">
          <p>
            <span>我们假设有ABCD4个人，返佣总金额100元，看看他们赚佣金的模式。</span>
          </p>
          <p>
            <span>A关注公众平台，实名认证，获得专属推广二维码；A申请办理业务，成功下卡/放款，可赚取50元佣金。</span><br>
            <span>A分享二维码给B，B扫码，申请办理业务，成功下卡/放款后，B可赚取50元佣金，A可赚取30元佣金；</span><br>
            <span>C扫B的二维码，申请办理业务，成功下卡/放款后，C赚取50元佣金，B可赚取30元佣金， A赚取20元佣金；</span><br>
            <span>D扫C的二维码，申请办理业务，成功下卡/放款后，D赚取50元佣金，C赚取30元佣金，B赚取20元佣金，A不赚取佣金。</span><br>
            <span>(部分放款需要提现才能获得佣金)</span>
          </p>
        </div>
        <div class="QRcodeWrap">
          <transition name="fade">
            <img :src="inviteurl" class="QRcode" v-show="QRcodeShow">
          </transition>
          <transition name="tran">
            <footer class="generalizeFooter" v-show="!QRcodeShow">
              <a href="javascript:;" @click="skip">
                获取我的推广二维码
              </a>
            </footer>
          </transition>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import {mapState} from "vuex"

  export default {
    data() {
      return {
        QRcodeShow: false,
      }
    },

    components: {},

    computed: {
      ...mapState(["inviteurl"]),
    },
    watch: {},
    created() {
      this.$store.dispatch("getInviteUrl")
    },
    mounted() {
      // console.log(this.getCookie('whether') === '1') ? this.QRcodeShow = true : this.QRcodeShow = false
      this.QRcodeShow = (this.getCookie('whether') === "1")
    },
    updated() {
    },

    methods: {
      skip() {
        let that = this
        console.log(1)
        if (this.getCookie('whether')*1 < 1) {
          this.$router.replace({name: "phoneApprove", params: {name1:that.$route.name,name2:""}})
        }
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .fade-enter-active, .fade-leave-active
    transition: all 0.5s;

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    transform translateY(100%)

  .tran-enter-active, .tran-leave-active
    transition: all 1s;

  .tran-enter, .tran-leave-to /* .fade-leave-active below version 2.1.8 */
    transform translateY(100%)

  .generalizeHeader
    height (520 /$rem)
    margin-bottom (10 /$rem)
    img
      width 100%
      height 100%

  .generalizeContent
    box-sizing border-box
    padding 0 (30 /$rem)
    color #999999
    .introduceHeadline
      height (130 /$rem)
      line-height (130 /$rem)
      border-bottom 1px solid #f4f4f4
    p
      line-height 0.75em
      margin: 0; /*去掉默认的段间距*/
      span
        font-size (40 /$rem)
        &:last-child
          font-size (36 /$rem)
      &:first-child
        text-indent: 1em
      &:last-child
        text-indent: 1em

  .QRcodeWrap
    overflow hidden
    box-sizing border-box
    position relative
    padding (50 /$rem) 0
    .generalizeFooter
      box-sizing border-box
      height (262 /$rem)
      width (1080 /$rem)
      padding (58 /$rem) 0
      a
        height (146 /$rem)
        width (1020 /$rem)
        background-color: #efca7d;
        color #ffffff
        text-align center
        line-height (146 /$rem)
        font-size (48 /$rem)
        border-radius (15 /$rem)
        margin 0 auto
    .QRcode
      margin 0 auto
      width (300 /$rem)
      height (300 /$rem)

</style>
