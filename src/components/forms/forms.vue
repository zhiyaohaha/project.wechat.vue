<template>
  <div class="froms" v-if="mformDatas">
    <ul class="mform">
      <li v-for="(mformData, index) in mformDatas" :key="index">
        <span class="description">{{mformData.description}}</span>
        <input type="text" v-model="mformData.model"
               @blur="loseFocus" :readonly="mformData.purposeList"
               @input="goodInput(mformData.reg,mformData.model,index)"
               @focus="pullDown(true,index)"
               :placeholder="mformData.placeholder"
               :maxlength="mformData.maxlength"
               :name="mformData.name">
        <span :class="{purposeList:mformData.purposeList}" v-if="!mformData.sendMsg && !mformData.units"
              @touchstart="pullDown(true,index)">
                {{mformData.units}}
              </span>
        <a href="javascript:;" :class="{sendMsg:mformData.sendMsg,color:!num}"
           v-if="mformData.sendMsg && mformData.units"
           @click="sendMsg()">
          {{mformData.units}}
        </a>
      </li>
    </ul>

    <verification v-show="verificationShow" :changeShow="changeShow" :verificationCancel="verificationCancel"/>
  </div>
</template>
<script>
  import verification from '../../components/verification/verification.vue'
  export default {
    name: "forms",
    props:{
      mformDatas:{
        type: Object,
        default: null
      },
      footerShow:{
        type:Boolean,
        default:true
      }
    },
    data() {
      return {
        num:0,
        verificationShow:false
      }
    },

    components: {
      verification,
    },

    computed: {},

    mounted() {

    },

    methods: {
      //查找数组
      __findModel(value) {
        let mformDatas = this.mformDatas
        return mformDatas.find(val => val.name == value)
      },
      //定时器
      setTime() {
        this.num = 60
        let time = setInterval(() => {
          this.num--
          if (this.num === 0) {
            this.__findModel("authCode").units = "获取验证码"
            clearInterval(time)
          } else {
            this.__findModel("authCode").units = this.num + 's后重发'
          }
        }, 1000)
      },
      //输入市判断输入的是正确
      goodInput(reg, flag, index) {
        if (this.mformDatas[index].purposeList) {
          this.mformDatas[index].model = ''
        }
        if (!reg.test(flag)) {
          this.mformDatas[index].model = flag.substring(0, flag.length - 1)
        }
      },
      //下拉滑动弹窗谈起
      pullDown(flag, index, inputValue) {
        this.mformDatasInd = index
        if (this.mformDatas[index].purposeList) {
          this.reveal = inputValue
          this.shadeIsShow = flag
          !inputValue ? this.mformDatas[index].model = '' : null
        } else {
          this.footerShow = false
        }
      },
    //  苹果手机底部出现
      loseFocus(){
        this.footerShow = true
      },
      changeShow() {
        this.verificationShow = false
      },
      //图片按扭
      verificationCancel(flag, validateCode) {
        this.verificationShow = false
        if (flag) {
          this.__SendVerifyCode(validateCode)
          this.$store.dispatch("changeTime")
        } else {
          this.$store.dispatch("changeTime")
        }
      },
      //发送短信验证||调出图形验证码
      sendMsg(){
        this.verificationShow = true
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .froms
    .mform
      margin: 0 (30 /$rem)
      li:first-child
        border-top 1px solid #f2f2f2
      li
        box-sizing border-box
        position relative
        line-height (119 /$rem)
        width (1020 /$rem)
        height (121 /$rem)
        font-size (42 /$rem)
        border-bottom 1px solid #f2f2f2
        text-align right
        span
          color #333333
        .description
          margin-left 0
          float left
        input
          font-size (42 /$rem)
          outline: none
          border: none
          text-align right
          margin-right (20 /$rem)
          width (540 /$rem)
          caret-color #000
          color #333
        input:
        :-moz-placeholder
          text-align right
          color #bbbbbb
        input:
        :-webkit-input-placeholder
          text-align right
          color #bbbbbb
        input:-ms-input-placeholder
          text-align right
          color #bbbbbb
        .purposeList
          width (40 /$rem)
          background: url("./img/fanhuiicon.png") no-repeat right center
          background-size 100%
          padding-right: (40 /$rem)
        .sendMsg
          border-radius (20 /$rem)
          float right
          margin-top (17 /$rem)
          width (290 /$rem)
          height (86 /$rem)
          background-color #bbb
          color #ffffff
          line-height (86 /$rem)
          text-align center
          &.color
            background-color #efca7d

</style>
