<template>
  <div class="verification" @click.stop="changeShow">
    <div class="verificationContent" @click.stop>
      <div class="verificationTitle">
        请填写图片验证码
      </div>
      <div class="verificationMessage">
        <div class="verificationImg" @click.stop="clickMap">
          <img :src="verification">
        </div>
        <input type="text" placeholder="输入验证码"
               v-model="validateCode"
               name="verification">
      </div>
      <div class="verificationFooter">
        <div class="verificationFooterLeft" @click.stop="verificationCancel(false)">取消</div>
        <div class="verificationFooterRight" @click.stop="verificationCancel(true,validateCode)">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["changeShow","verificationCancel","time"],
    data () {
      return {
        validateCode:""
      }
    },

    components: {

    },

    computed: {
      verification(){
        let url = "http://192.168.6.66:8001/api/OfficialAccounts/ValidateCode?time="
        let src = url+ this.time
        return src
      },
    },

    mounted(){},

    methods: {
      clickMap(){
        this.time = new Date().getTime()
      },
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .verification
    top 0
    left 0
    position fixed
    width (1080 /$rem)
    height 100%
    background-color rgba(159, 159, 159, 0.7)
    z-index 100
    .verificationContent
      position absolute
      top 50%
      left 50%
      margin-top (-225 /$rem)
      margin-left (-432 /$rem)
      width (864 /$rem)
      height (450 /$rem)
      background-color #fff
      border-radius (20 /$rem)
      .verificationTitle
        text-align center
        margin-top (40 /$rem)
        font-size (46 /$rem)
        color #333
        font-weight 500
      .verificationMessage
        width (864/$rem)
        height (228/$rem)
        .verificationImg
          margin-top (70/$rem)
          margin-left (184.5/$rem)
          float left
          img
            width (250/$rem)
        input
          margin-top (70/$rem)
          box-sizing border-box
          float left
          outline: none
          margin-left (45/$rem)
          border 2px solid #bbb
          font-size (36/$rem)
          height (87.5/$rem)
          width (200/$rem)
      .verificationFooter
        box-sizing border-box
        width (864/$rem)
        height (136/$rem)
        border-top 1px solid #bbbbbb
        font-size (46/$rem)
        div
          float left
          width 50%
          height 100%
          text-align center
          line-height (136/$rem)
          &.verificationFooterLeft
            color #333333
          &.verificationFooterRight
            color #c2181f
</style>
