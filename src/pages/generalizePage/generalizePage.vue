<template>
  <div>
    <div class="generalizeContent">
      <div class="introduceHeadline">
        微信三级分销系统的商业模式
      </div>
      <p>
        赚佣金规则 <br>
        我们假设有ABCD4个人，返佣总金额100元，看看他们赚佣金的模式。 <br>
        A关注公众平台，实名认证，获得专属推广二维码；A申请办理业务，成功下卡/放款，可赚取50元佣金。<br>
        A分享二维码给B，B扫码，申请办理业务，成功下卡/放款后，B可赚取50元佣金，A可赚取30元佣金；<br>
        C扫B的二维码，申请办理业务，成功下卡/放款后，C赚取50元佣金，B可赚取30元佣金， A赚取20元佣金；<br>
        D扫C的二维码，申请办理业务，成功下卡/放款后，D赚取50元佣金，C赚取30元佣金，B赚取20元佣金，A不赚取佣金。
      </p>
      <div class="QRcodeWrap">
        <transition name="fade">
          <img src="./img/erweima.jpg" class="QRcode" v-show="QRcodeShow">
        </transition>
      </div>
    </div>
    <transition name="fade">
      <footer class="generalizeFooter" v-show="!QRcodeShow">
        <a href="javascript:;" @click="$router.push('/phoneApprove')">
          获取我的推广二维码
        </a>
      </footer>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        QRcodeShow:false,
      }
    },

    components: {},

    computed: {
      cookikeIf(){
        return this.getCookie('whether') === '1'
      }
    },
    watch: {

    },
    created () {

    },
    mounted () {
      // console.log(this.getCookie('whether') === '1') ? this.QRcodeShow = true : this.QRcodeShow = false
      this.QRcodeShow = this.cookikeIf
      console.log(this.QRcodeShow)
    },
    updated () {
    },

    methods: {
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .fade-enter-active, .fade-leave-active
    transition: all .5s;

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    transform translate(-100%)

  .generalizeContent
    box-sizing border-box
    padding (30 /$rem)
    font-size (46 /$rem)
    color #bbbbbb
    .introduceHeadline
      height (130 /$rem)
      line-height (130 /$rem)
      border-bottom 1px solid #f4f4f4
    p
      font-size: (46 /$rem); /*字体大小*/
      line-height: 1.5em; /*行距为1.5个单位*/
      margin: 0; /*去掉默认的段间距*/
      border-bottom 1px solid #f4f4f4
    .QRcodeWrap
      position relative
      height (400 /$rem)
      .QRcode
        position absolute
        top 50%
        left 50%
        margin-top -(150 /$rem)
        margin-left -(150 /$rem)
        width (300 /$rem)
        height (300 /$rem)

  .generalizeFooter
    position fixed
    bottom 0
    left 0
    height (146 /$rem)
    width (1080 /$rem)
    background-color: #c2181f;
    a
      height 100%
      color #ffffff
      text-align center
      line-height (146 /$rem)
      font-size (56 /$rem)
</style>
