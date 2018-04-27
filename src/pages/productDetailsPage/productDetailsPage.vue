<template>
  <div v-if="productDetailsPageData">
    <scroll>
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
              <li v-for="(applyForListData, index) in (productDetailsPageData.filter.applicationConditions.split('\n'))"
                  :key="index">
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
              <a href="javascript:;" :class="{sendMsg:mformData.sendMsg,color:!num}"
                 v-if="mformData.sendMsg && mformData.units"
                 @click="sendMsg()">
                {{mformData.units}}
              </a>
            </li>
          </ul>
        </div>
        <footer class="occupiedFooter"></footer>
      </div>
    </scroll>
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
            message: "请正确输入姓名",
            description: "姓名：",
            placeholder: "请输入姓名",
            name: "userName",
            model: "",
            reg: /^[\u4e00-\u9fa5]{1,}$/,
            regular: /^[\u4e00-\u9fa5]{1,}$/,
            maxlength: "15"
          },
          {
            message: "请正确输入身份证号",
            description: "身份证号：",
            placeholder: "请输入身份证号",
            name: "IDnumber",
            model: "",
            reg: /^[0-9xX]{0,18}$/,
            regular: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            maxlength: "18"
          },
          {
            message: "请正确输入手机号",
            description: "手机号：",
            placeholder: "请输入手机号",
            name: "phoneNum",
            model: "",
            reg: /^[0-9]{0,11}$/,
            regular: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,
            maxlength: "11"
          },
          {
            message: "请正确输入您的验证码",
            description: '验证码：',
            placeholder: '请输入验证码',
            name: 'authCode',
            model: '',
            purposeList: false,
            sendMsg: true,
            units: '获取验证码',
            reg: /^\d{1,}$/,
            regular: /^\d{4}$/,
            errorColor: false,
            maxlength: 4
          },
        ],
        FooterShow: true,
        winHeight: document.body.clientHeight,
        num: 0
      }
    },

    components: {
      authenticationList
    },

    computed: {
      ...mapState(['productDetailsPageData', 'lastOrderInfo']),
    },
    watch: {},
    created() {
      this.$store.dispatch("getDetailedFor", {id: this.$route.query.id})
      this.$store.dispatch("getLastOrderInfo").then(() => {
        if (this.lastOrderInfo) {
          this.__findModel("userName").model = this.lastOrderInfo.name
          this.__findModel("IDnumber").model = this.lastOrderInfo.idCard
          this.__findModel("phoneNum").model = this.lastOrderInfo.mobilePhone
        }
      })
    },
    mounted() {
    },
    updated() {
      let that = this
      window.onresize = function (e) {
        let thisHeight = document.body.clientHeight
        if (that.winHeight - thisHeight > 140) {
          that.FooterShow = false
        } else {
          that.FooterShow = true
        }
      }
    },
    methods: {
      //定时器
      setTime() {
        this.num = 60
        let time = setInterval(() => {
          this.num--
          if (this.num === 0||this.num < 0) {
            this.__findModel("authCode").units = "获取验证码"
            this.num = 0
            clearInterval(time)
          } else {
            this.__findModel("authCode").units = this.num + 's后重发'
          }
        }, 1000)
      },
      //短信验证码
      sendMsg() {
        let that = this
        //判断输入手机号
        if (this.__findModel("phoneNum").model === "") {
          this.MessageBox.alert(
            '请输入手机号',
            '提示',
            {
              closeOnClickModal: true
            }
          )
          return
        }
        if (!this.__findModel("phoneNum").regular.test(this.__findModel("phoneNum").model)) {
          this.MessageBox.alert(
            '请正确输入手机号',
            '提示',
            {
              closeOnClickModal: true
            }
          )
          return
        }
        if (this.num > 0) {
          this.MessageBox.alert(
            '请60秒后在请求验证码',
            '提示',
            {
              closeOnClickModal: true
            }
          )
          return
        }
        this.$store.dispatch('postSendMsg', {
          code: 'SMS_123669047',
          mobilePhone: that.__findModel("phoneNum").model,
          smsSign: "掌金超",
        }).then((res) => {
          console.log(res.success)
          if (res.success) {
            this.MessageBox.alert(
              '短信验证码已发送，有效时间5分钟',
              '提示',
              {
                closeOnClickModal: true
              }
            )
            this.setTime()
          } else {
            this.MessageBox.alert(
              res.message,
              '提交失败',
              {
                closeOnClickModal: true
              }
            )
          }
        })
      },
      //input的model
      __findModel(value) {
        let mformDatas = this.mformDatas
        return mformDatas.find(val => val.name == value)
      },
      //申请
      applyFor() {
        let that = this
        for (let i = 0; i < this.mformDatas.length; i++) {
          let item = this.mformDatas[i]
          if (item.model === "") {
            this.MessageBox({
              title: '提交失败',
              message: item.placeholder,
              showCancelButton: false
            })
            return
          } else if (!item.regular.test(item.model)) {
            this.MessageBox({
              title: '提交失败',
              message: item.message,
              showCancelButton: false
            })
            return
          }
        }
        this.$store.commit("AWAITTRUE")
        //请求
        let data = {
          mobilePhone: that.__findModel("phoneNum").model,//手机
          idCard: that.__findModel("IDnumber").model,//身份证
          name: that.__findModel("userName").model,//姓名
          verifyCode: that.__findModel("authCode").model,//验证码
          product: that.productDetailsPageData.id,//产品Id
          source: 'OfficialAccounts'  //来源
        }
        // alert(JSON.stringify(data))
        let url = this.apiPrefix + "api/LoanOrder/SpeedOrderRecordForApp"
        this.$store.dispatch("getIdentify2Auth", {
          realName: that.__findModel("userName").model,
          idCard: that.__findModel("IDnumber").model
        }).then((res) => {
          if (res.data.isSame) {
            postSpeedOrder(url, data).then((res) => {
              this.$store.commit("AWAITFALSE")
              if (res.success) {
                window.location.href = res.data.url
              } else {
                this.MessageBox({
                  title: '提交失败',
                  message: res.message,
                  showCancelButton: false
                })
              }
            })
          } else {
            this.$store.commit("AWAITFALSE")
            this.MessageBox.alert(
              res.message,
              '提交失败',
              {
                closeOnClickModal: true
              }
            )
          }
        })
      },
      isFooter() {
        this.FooterShow = false
      },
      loseFocus() {
        this.FooterShow = true
      },
      goodInput(reg, flag, index) {
        if (!reg.test(flag)) {
          for (let i = 0; i < this.mformDatas.length; i++) {
            this.mformDatas[index].model = ""
          }
        }
      },
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">

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

    .applyForCondition
      box-sizing border-box
      padding (30 /$rem) (30 /$rem) (30 /$rem) (30 /$rem)
      border-bottom 1px solid #f2f2f2
      .applyForList
        font-size (36 /$rem)
        color #bbbbbb
        li:not(:first-child)
          margin-top (20 /$rem)

  .setting
    height (600 /$rem)
    background-color: #f6f6f6

  .occupiedFooter
    width (1080 /$rem)
    height (146 /$rem)

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
