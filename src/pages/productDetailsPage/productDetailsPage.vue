<template>
  <div v-if="productDetailsPageData">
    <header class="productDetailsHeader">
      <div class="imgWrap">
        <img :src="productDetailsPageData.basic._logo">
      </div>
      <div class="describe">
        <div class="productTitle">{{productDetailsPageData.basic.name}}</div>
        <div class="limit">
          额度范围:{{productDetailsPageData.filter.amount_min+'-'+productDetailsPageData.filter.amount_max}}
        </div>
        <div class="lightspot">{{productDetailsPageData.summary}}</div>
      </div>
    </header>
    <div class="productDetailContent">
      <headline :headlineData="{title:'申请条件',line:true}"/>
      <div class="applyForCondition">
        <ul class="applyForList">
          <li v-for="(applyForListData, index) in (productDetailsPageData.filter.applicationConditions.split('\n'))">
            <span>{{applyForListData}}</span>
          </li>
        </ul>
      </div>
      <headline :headlineData="{title:'认证材料',line:true}"/>
      <authenticationList :authenticationListDatas="productDetailsPageData.attachment"/>
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

    <footer class="productDetailsFooter" v-show="FooterShow" @click="applyFor">
      <a href="javascript:">
        立即申请
      </a>
    </footer>
  </div>
</template>

<script>
  import {Toast, MessageBox} from "mint-ui"
  import {mapState} from "vuex"
  import {postSpeedOrder} from "../../api"
  import authenticationList from "../../components/authenticationList/authenticationList.vue"

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
            name: "phoneNum",
            model: "",
            reg: /^[0-9]{0,11}$/,
            regular: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,
            maxlength: "11"
          },
        ],
        FooterShow: true
      }
    },

    components: {
      authenticationList
    },

    computed: {
      ...mapState(['productDetailsPageData'])
    },
    beforeCreate(){
      if(this.getCookie("whether")*1 < 1){
        let that = this
        this.$router.replace({name: "phoneApprove", query: {id: that.$route.query.id},params: {name1: that.$route.name}})
        that = null
      }
    },
    created() {
      this.$store.dispatch("getDetailedFor", {id: this.$route.query.id})
    },
    mounted() {
    },

    methods: {
      //申请
      applyFor() {
        let judge = this.mformDatas.filter((item) => {
          return item.regular.test(item.model)
        })
        if (judge.length === this.mformDatas.length) {
          let data = {
            mobilePhone: this.mformDatas[2].model,//手机
            idCard: this.mformDatas[1].model,  //身份证
            name: this.mformDatas[0].model,   //姓名
            product: this.productDetailsPageData.id, //产品Id
            source: 'OfficialAccounts'  //来源
          }
          let url = this.apiPrefix + "/api/LoanOrder/SpeedOrderRecordForApp"
          postSpeedOrder(url, data).then((res) => {
            window.location.href = res.data.url
          })
        } else {
          MessageBox({
            title: '提示',
            message: '请正确输入信息',
            showCancelButton: false
          })
        }

      },
      isFooter() {
        this.FooterShow = false
      },
      loseFocus() {
        this.FooterShow = true
      },
      goodInput(reg, flag, index) {
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
    background-color #333
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
          margin (35/$rem)
          width (110/$rem)
          height (110/$rem)
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
      background-color: #efca7d
      font-size (48 /$rem)
      color #ffffff
      text-align center
      line-height (146 /$rem)
</style>
