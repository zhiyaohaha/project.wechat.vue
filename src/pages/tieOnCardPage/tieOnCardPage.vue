<template>
  <div>
    <header class="tieOnCardHeader">
      <img src="../../../static/img/homeImg/xinyongkabanner.png">
    </header>
    <div class="tieOnCardContent">
      <ul class="mform">
        <li v-for="(mformData, index) in mformDatas" :key="index">
          <span class="description">{{mformData.description}}</span>
          <input type="text" v-model="mformData.model"
                 @blur="loseFocus"
                 @input="goodInput(mformData.reg,mformData.model,index)"
                 @focus="pullDown"
                 :readonly="mformData.readonly"
                 :placeholder="mformData.placeholder"
                 :maxlength="mformData.maxlength"
                 :name="mformData.name">
          <span :class="{purposeList:mformData.purposeList}" v-if="!mformData.sendMsg && !mformData.units"
                @click="pullDown()">
                {{mformData.units}}
              </span>
        </li>
      </ul>
      <a href="javascript:;" class="authentication" @click="approve">
        立即认证
      </a>
    </div>
    <footer class="tieOnCardFooter" v-show="tieOnFooterIsShow">
      实名认证仅用来确保您提交的需求真实有效，绝不泄露
    </footer>
  </div>
</template>
<script>
import  {mapState} from  "vuex"
  export default {
    data() {
      return {
        mformDatas: [
          {
            description: "姓名：",
            placeholder: "请输入姓名",
            message: "请正确输入姓名",
            readonly:false,
            name: "userName",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[\u4e00-\u9fa5]{1,}$/,
            regular: /^[\u4e00-\u9fa5]{1,}$/,
          },
          {
            description: "身份证号：",
            placeholder: "请输入身份证号",
            message: "请正确输入身份证号",
            readonly:false,
            name: "IDnumber",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[0-9_xX]{1,18}$/,
            regular: /^\d{17}[\d|xX]|\d{15}$/,
            maxlength: "18"
          },
          {
            description: "银行卡号：",
            placeholder: "请输入银行卡号",
            message: "请正确输入银行卡号",
            readonly:false,
            name: "bankCard",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[0-9]{1,21}$/,
            regular: /^[0-9]{1,21}$/,
            maxlength: "21"
          },
          {
            description: "银行预留手机号：",
            placeholder: "请填写您在银行预留的手机号",
            message: "请正确填写手机号",
            readonly:false,
            name: "phoneNum",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[0-9]{1,11}$/,
            regular: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/,
            maxlength: 11
          },
        ],
        mformDatasInd: 0,
        tieOnFooterIsShow: true
      }
    },

    components: {},

    computed: {
      ...mapState(["lastOrderInfo"])
    },
    created() {
      this.$store.dispatch("getLastOrderInfo").then(() => {
        if (this.lastOrderInfo) {
          if(this.lastOrderInfo.name !== ""){
            this.__findModel("userName").readonly = true
            this.__findModel("userName").model = this.lastOrderInfo.name
          }
          if(this.lastOrderInfo.idCard !== ""){
            this.__findModel("userName").readonly = true
            this.__findModel("IDnumber").model = this.lastOrderInfo.idCard
          }else {
            this.__findModel("userName").readonly = false
          }
        }
      })
    },
    mounted() {
      window.history.pushState(null, "", "#/myPage")
      window.history.pushState(null, "", "#/tieOnCardPage")
    },

    methods: {
      //用户输入
      __findModel(val) {
        let mformDatas = this.mformDatas
        return mformDatas.find((n) => n.name === val)
      },
      //底部显示逻辑失去焦点事件
      loseFocus() {
        this.tieOnFooterIsShow = true
      },
      goodInput(reg, flag, index) {
        if (!reg.test(flag)) {
          this.mformDatas[index].model = flag.substring(0, flag.length - 1)
        }
      },
      //弹窗挑起事件
      pullDown(flag, index) {
        this.tieOnFooterIsShow = false
      },
      //提交
      approve() {
        let that = this
        for (let i = 0; i < this.mformDatas.length; i++) {
          let mformDatas = this.mformDatas[i]
          if (mformDatas.model === "") {
            this.MessageBox.alert(mformDatas.placeholder, "提示")
            return
          }
          if (!mformDatas.regular.test(mformDatas.model)) {
            this.MessageBox.alert(mformDatas.message, "提示")
            return
          }
        }
        this.$store.commit("AWAITTRUE")
        this.$store.dispatch("postIdentify4Auth",{
          realName:that.__findModel("userName").model,//真实姓名
          idCard:that.__findModel("IDnumber").model,//身份证
          bankCard:that.__findModel("bankCard").model,//银行卡号
          mobile:that.__findModel("phoneNum").model//银行预留手机号
        }).then((res)=>{
          this.$store.commit("AWAITFALSE")
          if(!res.success){
            this.MessageBox.alert(res.message,"认证失败")
            return
          }
          if(res.data.isSame){
            this.$router.replace({name:"authenticationPage",query:{mobile:that.__findModel("phoneNum").model}})
          }else {
            this.MessageBox.alert(res.message,"认证失败")
          }
        })
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .tieOnCardHeader
    width (1080 /$rem)
    height (520 /$rem)
    img
      width 100%

  .tieOnCardContent
    width (1080 /$rem)
    .mform
      margin: 0 (30 /$rem)
      li
        box-sizing border-box
        position relative
        line-height (120 /$rem)
        width (1020 /$rem)
        height (120 /$rem)
        font-size (42 /$rem)
        border-bottom 1px solid #f2f2f2
        text-align right
        span
          color #333333
        .description
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
          background: url("../../../static/img/creditCardImg/dropdown.png") no-repeat right center
          background-size 100%
          padding-right: (40 /$rem)

    .authentication
      width (996 /$rem)
      height (146 /$rem)
      background-color #efca7d
      color #ffffff
      font-size (48 /$rem)
      text-align center
      line-height (146 /$rem)
      margin (100 /$rem) auto
      border-radius (20 /$rem)

  .maskLayer
    font-family "Microsoft YaHei UI"
    box-sizing border-box
    width (1080 /$rem)
    height (650 /$rem)
    .shadeIsShowHeader
      font-size (42 /$rem)
      height (120 /$rem)
      line-height (120 /$rem)
      .cancel
        margin-left (50 /$rem)
        float left
        color #bbb
      .ascertain
        margin-right (50 /$rem)
        float right
        color #efca7d

  .tieOnCardFooter
    width (1080 /$rem)
    height (150 /$rem)
    background-color #fff
    position fixed
    bottom 0
    left 0
    line-height (150 /$rem)
    text-align center
    font-size (36 /$rem)
    color #bbbbbb

</style>
