<template>
  <div>
    <header class="productDetailsHeader">
      <div class="imgWrap">
        <img src="../../../static/img/productImg/jisudai.png">
      </div>
      <div class="describe">
        <div class="productTitle">宜人极速 - 秒下款</div>
        <div class="limit">额度范围:1000-20000</div>
        <div class="lightspot">亮点:凭信用卡，10分钟轻松贷款10万元</div>
      </div>
    </header>
    <div class="productDetailContent">
      <headline :headlineData="{title:'申请条件',line:true}"/>
      <div class="applyForCondition">
        <ul class="applyForList">
          <li v-for="(applyForListDatas, index) in applyForListDatas">
            <span>{{applyForListDatas.character}}</span>
          </li>
        </ul>
      </div>
      <headline :headlineData="{title:'认证材料',line:true}"/>
      <authenticationList :authenticationListDatas="authenticationListDatas"/>
      <ul class="mform">
        <li v-for="(mformData, index) in mformDatas" :key="index">
          <span class="description">{{mformData.description}}</span>
          <input type="text" v-model="mformData.model"
                 @blur="loseFocus()"
                 @input="goodInput(mformData.reg,mformData.model,index)"
                 @focus="isFooter"
                 :placeholder="mformData.placeholder"
                 :maxlength="mformData.maxlength"
                 :name="mformData.name">
        </li>
      </ul>
    </div>

    <footer class="productDetailsFooter" v-show="FooterShow">
      <a href="javascript:;">
        立即申请
      </a>
    </footer>
  </div>
</template>

<script>
  import {Toast} from "mint-ui"
  import authenticationList from "../../components/authenticationList/authenticationList.vue"

  export default {
    data() {
      return {
        applyForListDatas: [
          {
            character: "1，年龄要求:23-25周岁",
          },
          {
            character: "2，本人需要有正在使用的信用卡",
          },
          {
            character: "3，本人需要有正在使用的淘宝(支付宝)账户",
          },
          {
            character: "4，本人需要有实名认证的手机号",
          },

        ],
        authenticationListDatas: [
          {
            imgUrl: "../../../static/img/productImg/id.png",
            character: "身份证"
          },
          {
            imgUrl: "../../../static/img/productImg/xinyongka.png",
            character: "信用卡"
          },
          {
            imgUrl: "../../../static/img/productImg/zhifubao.png",
            character: "支付宝账号"
          },
          {
            imgUrl: "../../../static/img/productImg/shoujihao.png",
            character: "手机号"
          },
        ],
        mformDatas: [
          {
            description: "姓名：",
            placeholder: "请输入姓名",
            name: "userName",
            model: "",
            reg: /^[\u4e00-\u9fa5_a-zA-Z]{0,}$/,
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
        FooterShow: true
      }
    },

    components: {
      authenticationList
    },

    computed: {},
    created() {
      if (this.getCookie("whether") === "0") {
        this.$router.push("/phoneApprove")
      }
    },
    mounted() {
    },

    methods: {
      isFooter() {
        this.FooterShow = false
      },
      loseFocus() {
        this.FooterShow = true
      },
      goodInput(reg, flag, index) {
//        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (!reg.test(flag)) {
          Toast({
            message: "格式错误",
            className: "ToastStyle",
            duration: 2000,
            position: "bottom"
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
  .ToastStyle
    width (200 /$rem)
    height (70 /$rem)
    font-size (40 /$rem)
    color #ffffff
    background-color #8a8a8a
    text-align center
    line-height (70 /$rem)

  .productDetailsHeader
    box-sizing border-box
    width (1080 /$rem)
    height (261 /$rem)
    padding (40 /$rem) 0 (40 /$rem) (30 /$rem)
    border-bottom 1px solid #f2f2f2
    & > div
      float left
      &.imgWrap
        font-size (40 /$rem)
        width (180 /$rem)
        height (180 /$rem)
        box-sizing border-box
        border 1px solid #e4e4e4
        img
          width 100%
          height 100%
      &.describe
        color #333
        font-size (36 /$rem)
        margin-top (6 /$rem)
        margin-left (30 /$rem)
        .productTitle
          font-size (42 /$rem)
        .limit
          color #bbbbbb
          margin-top (30 /$rem)
        .lightspot
          color #bbbbbb
          margin-top (30 /$rem)

  .productDetailContent
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

    .applyForCondition
      box-sizing border-box
      padding (30 /$rem) 0 (30 /$rem) (30 /$rem)
      border-bottom 1px solid #f2f2f2
      .applyForList
        font-size (36 /$rem)
        color #bbbbbb
        li:not(:first-child)
          margin-top (20 /$rem)

  .setting
    height (600 /$rem)
    background-color: #f6f6f6

  .productDetailsFooter
    width (1080 /$rem)
    height (146 /$rem)
    position fixed
    bottom 0
    left 0
    a
      height 100%
      background-color: #efca7d;
      font-size (48 /$rem)
      color #ffffff
      text-align center
      line-height (146 /$rem)
</style>
