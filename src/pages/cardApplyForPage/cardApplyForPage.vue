<template>
  <div>
    <header class="applyForHeader">
      <ul class="applyForList">
        <li>
          <img src="../../../static/img/creditCardImg/tianxie.png"/>
          <span>填写资料</span>
        </li>
        <li>
          <img src="../../../static/img/creditCardImg/shenqing.png"/>
          <span>点击申请</span>
        </li>
        <li>
          <img src="../../../static/img/creditCardImg/shenhe.png"/>
          <span>审核发卡</span>
        </li>
      </ul>
      <div class="transverseLine"></div>
    </header>
    <div class="applyForContent">
      <headline :headlineData="{title:'初审资料',line:true}"/>
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
        </li>
      </ul>
    </div>
    <footer class="applyForFooter" v-show="applyForFooterShow" @click="applyFor">
      <a href="javascript:;">立即提交</a>
    </footer>
  </div>
</template>

<script>
  import {MessageBox, Toast} from "mint-ui"

  export default {
    data() {
      return {
        mformDatas: [
          {
            description: "姓名：",
            placeholder: "请输入姓名",
            name: "userName",
            model: "",
            reg: /^[\u4e00-\u9fa5_a-zA-Z]{0,}$/,
            regular: /^[\u4e00-\u9fa5_a-zA-Z]{1,}$/
          },
          {
            description: "身份证号：",
            placeholder: "请输入身份证号",
            name: "IDnumber",
            model: "",
            reg: /^[0-9xX]{0,18}$/,
            regular: /^[0-9xX]{15,18}$/,
            maxlength: "18"
          },
          {
            description: "手机号：",
            placeholder: "请输入手机号",
            name: "userName",
            model: "",
            reg: /^[0-9]{0,11}$/,
            regular: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,
            maxlength: "11"
          },
        ],
        applyForFooterShow: true
      }
    },

    components: {},

    computed: {},

    mounted() {
    },

    methods: {
      //提交逻辑
      applyFor() {
        let judge = this.mformDatas.filter((item)=>{
          return item.regular.test(item.model)
        })
        console.log(judge);
        if(judge.length === this.mformDatas.length){
          let that = this
          this.$store.dispatch("postRecordForApp", {
            creditCard: that.$route.query.id,//信用卡Id
            applyFormData:[
              {
                key: "name",
                value: that.mformDatas[0].model
              },
              {
                key: "idCard",
                value: that.mformDatas[1].model
              },
              {
                key: "mobilePhone",
                value: that.mformDatas[2].model
              },
            ],
            source: 'OfficialAccounts'//来源
          }).then((res)=>{
            if(res.success){
              window.location.href = res.data.url
            }else {
              MessageBox({
                title: '提示',
                message: '网络不正常请稍后再试',
                showCancelButton: false
              })
            }

          })
        }else {
          MessageBox({
            title: '提示',
            message: '请正确输入信息',
            showCancelButton: false
          })
        }
      },
      //      输入框焦点时底部消失
      isFooter() {
        this.applyForFooterShow = false
      },
//      错误变色
      loseFocus(reg, flag, index) {
        this.applyForFooterShow = true
      },
//      输入框值
      onValuesChange(picker, values) {
        this.mformDatas[this.mformDatasInd].model = picker.getValues()
      },
//      输入正确变色
      goodInput(reg, flag, index) {
//        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (!reg.test(flag)) {
          Toast({
            message: "格式错误",
            className: "ToastStyle",
            duration: 2000
          })
          for (let i = 0; i < this.mformDatas.length; i++) {
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
    width (1080 /$rem)
    height (150 /$rem)
    background-color #efca7d
    a
      height 100%
      font-size (48 /$rem)
      color #ffffff
      text-align center
      line-height (150 /$rem)

  .ToastStyle
    width (200 /$rem)
    height (70 /$rem)
    font-size (40 /$rem)
    color #ffffff
    background-color #8a8a8a
    text-align center
    line-height (70 /$rem)

  .applyForHeader
    position relative
    width (1080 /$rem)
    height (276 /$rem)
    .applyForList
      position relative
      z-index 10
      height 100%
      box-sizing border-box
      padding (50 /$rem) (70 /$rem)
      display flex
      justify-content space-between
      li
        text-align center
        float left
        img
          display inline-block
          width (96 /$rem)
          height (96 /$rem)
        span
          margin-top (30 /$rem)
          display block
          font-size (36 /$rem)
          color #333333

    .transverseLine
      position absolute
      margin-left (-351.5 /$rem)
      top (88 /$rem)
      left 50%
      width (703 /$rem)
      height (6 /$rem)
      background-image url("../../../static/img/creditCardImg/huangxian.png")
      background-repeat no-repeat

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


</style>
