<template>
  <div>
    <header class="productDetailsHeader">
      <div class="imgWrap">
        <img src="../../../static/img/productImg/yirendai.png">
      </div>
      <div class="describe">
        <div class="productTitle">宜人极速 - 秒下款</div>
        <div class="limit">额度范围:1000-20000</div>
        <div class="lightspot">亮点:凭信用卡，10分钟轻松贷款10万元</div>
      </div>
    </header>
    <split/>
    <div class="productDetailContent">
      <productHeadLine title="申请条件"/>
      <div class="applyForCondition">
        <ul class="applyForList">
          <li v-for="(applyForListDatas, index) in applyForListDatas">
            <span>{{applyForListDatas.character}}</span>
          </li>
        </ul>
      </div>
      <split/>
      <productHeadLine title="认证材料"/>
      <authenticationList :authenticationListDatas="authenticationListDatas"/>
    </div>
    <div class="setting"></div>
    <footer class="productDetailsFooter">
      <a href="javascript:;">
        立即申请
      </a>
    </footer>
  </div>
</template>

<script>
  import productHeadLine from "../../components/productHeadLine/productHeadLine.vue"
  import authenticationList from "../../components/authenticationList/authenticationList.vue"
  export default {
    data () {
      return {
        applyForListDatas:[
          {
            character:"1，年龄要求:23-25周岁",
          },
          {
            character:"2，本人需要有正在使用的信用卡",
          },
          {
            character:"3，本人需要有正在使用的淘宝(支付宝)账户",
          },
          {
            character:"4，本人需要有实名认证的手机号",
          },

        ],
        authenticationListDatas:[
          {
            imgUrl:"../../../static/img/productImg/id.png",
            character:"身份证"
          },
          {
            imgUrl:"../../../static/img/productImg/xinyongka.png",
            character:"信用卡"
          },
          {
            imgUrl:"../../../static/img/productImg/zhifubao.png",
            character:"支付宝账号"
          },
          {
            imgUrl:"../../../static/img/productImg/shoujihao.png",
            character:"手机号"
          },
        ]
      }
    },

    components: {
      productHeadLine,
      authenticationList
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .productDetailsHeader
    box-sizing border-box
    width (1080 /$rem)
    height (240 /$rem)
    padding (30 /$rem) 0 (30 /$rem) (30 /$rem)
    & > div
      float left
      &.imgWrap
        font-size (40 /$rem)
        width (180 /$rem)
        height (180 /$rem)
        box-sizing border-box
        border 1px solid #e4e4e4
        img
          width (120 /$rem)
          margin (29 /$rem)
      &.describe
        color #515151
        font-size (36/$rem)
        margin-top (8/$rem)
        margin-left (30/$rem)
        .productTitle
          font-size (40/$rem)
        .limit
          margin-top (24/$rem)
        .lightspot
          margin-top (28/$rem)
  .productDetailContent
    .applyForCondition
      box-sizing border-box
      padding (30/$rem) 0 (30/$rem) (48/$rem)
      .applyForList
        font-size (36/$rem)
        color #8a8a8a
        li:not(:first-child)
          margin-top (20/$rem)
  .setting
    height (600/$rem)
    background-color: #f6f6f6
  .productDetailsFooter
    width (1080/$rem)
    height (148/$rem)
    position fixed
    bottom 0
    left 0
    a
      height 100%
      background-color: #c2181f;
      font-size (60/$rem)
      color #f4f4f4
      text-align center
      line-height (148/$rem)
</style>
