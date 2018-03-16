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
                 @blur="loseFocus" :readonly="mformData.purposeList"
                 @input="goodInput(mformData.reg,mformData.model,index)"
                 @focus="pullDown(true,index)"
                 :placeholder="mformData.placeholder"
                 :maxlength="mformData.maxlength"
                 :name="mformData.name">
          <span :class="{purposeList:mformData.purposeList}" v-if="!mformData.sendMsg && !mformData.units"
                @click="pullDown(true,index)">
                {{mformData.units}}
              </span>
        </li>
      </ul>
      <a href="javascript:;" class="authentication" @click="approve">
        立即认证
      </a>
    </div>
    <mt-popup v-model="shadeIsShow" position="bottom" class="maskLayer"
              showToolbar="true">
      <div class="shadeIsShowHeader">
          <span @touchstart="pullDown(false,mformDatasInd,false)" class="cancel">
            取消
          </span>
        <span @touchstart="pullDown(false,mformDatasInd,true)" class="ascertain">
            确定
          </span>
      </div>
      <pickerMod :shadeIsShow="shadeIsShow" :pickerModDatas="bankArr" :onValuesChange="onValuesChange"/>
    </mt-popup>
    <footer class="tieOnCardFooter" v-show="tieOnFooterIsShow">
      实名认证仅用来确保您提交的需求真实有效，绝不泄露
    </footer>
  </div>
</template>
<script>
  import { Toast, MessageBox } from "mint-ui"
  export default {
    data () {
      return {
        mformDatas: [
          {
            description: "姓名：",
            placeholder: "请输入姓名",
            name: "userName",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[\u4e00-\u9fa5_A-Za-z]{1,}$/,
          },
          {
            description: "身份证号：",
            placeholder: "请输入身份证号",
            name: "IDnumber",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[0-9_xX]{1,18}$/,
            maxlength: "18"
          },
          {
            description: "银行卡号：",
            placeholder: "请输入银行卡号",
            name: "bankCard",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[0-9]{1,21}$/,
            maxlength: "21"
          },
          {
            description: "所属银行：",
            placeholder: "请输入所属银行",
            name: "bank",
            model: "",
            purposeList: true,
            sendMsg: false,
            units: "",
            reg: /^[\u4e00-\u9fa5]{0,}$/,
          },
          {
            description: "银行预留手机号：",
            placeholder: "请填写您在银行预留的手机号",
            name: "phoneNum",
            model: "",
            purposeList: false,
            sendMsg: false,
            units: "",
            reg: /^[0-9]{1,11}$/,
          },
        ],
        mformDatasInd:0,
        shadeIsShow: false,
        bankArr: [
          {name:"中信银行",code:1},
          {name:"工商银行",code:2},
          {name:"农业银行",code:3},
          {name:"邮政银行",code:4},
          {name:"建设银行",code:5},
          {name:"兴业银行",code:6},
          {name:"北京银行",code:7},
        ],
        tieOnFooterIsShow:true
      }
    },

    components: {},

    computed: {},

    mounted(){

    },

    methods: {
      loseFocus(){
        this.tieOnFooterIsShow = true
      },
      goodInput(reg, flag, index){
        if (index == 3) {
          this.mformDatas[index].model = ""
        }
        if (!reg.test(flag)) {
          Toast({
            message: "格式错误",
            className: "ToastStyle"
          })
          this.mformDatas[index].model = flag.substring(0,flag.length - 1)
        }
      },
      pullDown(flag, index, inputVal){
        this.mformDatasInd = index
        if (index === 3) {
          inputVal ? '' : this.mformDatas[index].model = ""
          this.shadeIsShow = flag
        }
      },
      onValuesChange(index) {
        this.mformDatas[this.mformDatasInd].model = this.bankArr[index].name
      },
      approve(){
        let Arr = this.mformDatas.filter((item)=>{
          return item.reg.test(item.model)
        })
        Array.from(Arr)
        console.log(Arr)
        if(Arr.length < 5){
          MessageBox({
            title: '提示',
            message: '请正确输入信息',
            showCancelButton: false
          })
        }else {
          this.$router.replace("/myPage/verifyPage")
        }
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .mint-msgbox
    height (450 /$rem)
    font-size (46 /$rem)
    border-radius (20 /$rem)
    .mint-msgbox-header
      padding: (40 /$rem) 0 0
      .mint-msgbox-title
        font-size (46 /$rem)
    .mint-msgbox-content
      height (228 /$rem)
      text-align center
      line-height (228 /$rem)
      .mint-msgbox-message
        font-size (42 /$rem)
    .mint-msgbox-btns
      height (136 /$rem)
      line-height (136 /$rem)
      .mint-msgbox-confirm
        font-size (46 /$rem)
      .mint-msgbox-cancel
        font-size (46 /$rem)
        color #333

  .ToastStyle
    width (200 /$rem)
    height (70 /$rem)
    font-size (40 /$rem)
    color #ffffff
    background-color #333
    text-align center
    line-height (70 /$rem)

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
