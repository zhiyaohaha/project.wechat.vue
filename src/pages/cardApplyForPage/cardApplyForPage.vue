<template>
  <div>
    <header class="applyForHeader">
      <ul class="applyForList">
        <li>
          <div style="backgroundImage:url('../../../static/img/creditCardImg/tianxie.png')"></div>
          <span>填写资料</span>
        </li>
        <div></div>
        <li>
          <div style="backgroundImage:url('../../../static/img/creditCardImg/shengqing.png')"></div>
          <span>点击申请</span>
        </li>
        <div></div>
        <li>
          <div style="backgroundImage:url('../../../static/img/creditCardImg/shenghe.png')"></div>
          <span>审核发卡</span>
        </li>
      </ul>
    </header>
    <div class="applyForContent">
      <header class="firstTrialHeader">
        初审资料
      </header>
      <ul class="mform">
        <li v-for="(mformData, index) in mformDatas" :key="index">
          <span class="description">{{mformData.description}}</span>
          <input type="text" v-model="mformData.model"
                 @blur="loseFocus(mformData.reg,mformData.model,index)"
                 @input="goodInput(mformData.reg,mformData.model,index)"
                 @focus="isFooter"
                 :placeholder="mformData.placeholder"
                 :maxlength="mformData.maxlength"
                 :name="mformData.name">
          <!--<span :class="{purposeList:mformData.purposeList}" v-if="!mformData.sendMsg && !mformData.units"
                @touchstart="pullDown(true,index)">
                {{mformData.units}}
              </span>-->
          <!--<a href="javascript:;" :class="{sendMsg:mformData.sendMsg}" v-if="mformData.sendMsg && mformData.units"
             @touchstart="sendMsg()">
            {{mformData.units}}
          </a>-->
        </li>
      </ul>
    </div>
    <footer class="applyForFooter" v-show="applyForFooterShow">
      <a href="javascript:;">立即提交</a>
    </footer>
  </div>
</template>

<script>
  import {MessageBox ,Toast} from "mint-ui"
  export default {
    data () {
      return {
        mformDatas: [
          {
            description: "姓名：",
            placeholder: "请输入姓名",
            name: "userName",
            model: "",
            reg:/^[\u4e00-\u9fa5_a-zA-Z]{0,}$/,
          },
          {
            description: "身份证号：",
            placeholder: "请输入身份证号",
            name: "IDnumber",
            model: "",
            reg: /^[0-9xX]{0,18}$/,
            maxlength: "18"
          },
          {
            description: "手机号：",
            placeholder: "请输入手机号",
            name: "userName",
            model: "",
            reg: /^[0-9]{0,11}$/,
          },
        ],
        applyForFooterShow:true
      }
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
      //      输入框焦点时底部消失
      isFooter(){
        this.applyForFooterShow = false
      },
//      错误变色
      loseFocus(reg, flag, index){
        this.applyForFooterShow = true
      },
//      输入框值
      onValuesChange(picker, values) {
        this.mformDatas[this.mformDatasInd].model = picker.getValues()
      },
//      输入正确变色
      goodInput(reg, flag, index){
//        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (!reg.test(flag)) {
          Toast({
            message:"格式错误",
            className:"ToastStyle",
            duration:2000
          })
          for(let i=0;i<this.mformDatas.length;i++){
            this.mformDatas[index].model = ""
          }
        }
      },
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .applyForFooter
    position fixed
    bottom 0
    left 0
    width (1080/$rem)
    height (146/$rem)
    background-color #c2181f
    a
      height 100%
      font-size (56/$rem)
      color #ffffff
      text-align center
      line-height (146/$rem)
  .ToastStyle
    width (200/$rem)
    height (70/$rem)
    font-size (40/$rem)
    color #ffffff
    background-color #8a8a8a
    text-align center
    line-height (70/$rem)
  .applyForHeader
    width (1080 /$rem)
    height (280 /$rem)
    .applyForList
      height 100%
      box-sizing border-box
      padding (60 /$rem) (90/$rem)
      & > div
        float left
        width (230 /$rem)
        height (5 /$rem)
        background-color #c2181f
        margin-top (50 /$rem)
      li
        text-align center
        float left
        div
          display inline-block
          background-color: #c2181f;
          background-repeat no-repeat
          background-position center
          background-size (53 /$rem)
          width (100 /$rem)
          height (100 /$rem)
          border-radius 50%
        span
          margin-top (24 /$rem)
          display block
          font-size (36 /$rem)
          color #8a8a8a

  .applyForContent
    width (1080 /$rem)
    .firstTrialHeader
      box-sizing border-box
      height (100 /$rem)
      padding (32 /$rem) 0 (32 /$rem) (30 /$rem)
      background-color #dddddd
      color #8a8a8a
      font-size (36 /$rem)
    .mform
      margin: 0 (30 /$rem)
      li
        box-sizing border-box
        position relative
        line-height (120 /$rem)
        width (1020 /$rem)
        height (120 /$rem)
        font-size (42 /$rem)
        border-bottom 1px solid #ccc
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


</style>
