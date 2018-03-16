<template>
  <div>
    <div ref="CardDetailsWrap">
      <div>
        <header class="CardDetailsHeader">
          <img src="../../../static/img/creditCardImg/kapian.png">
        </header>
        <headline :headlineData="{title:'交通银行标准信用卡金卡',line:true}"/>
        <div class="CardDetailsContent">
          <headline :headlineData="{title:'专享特权',line:true}"/>
          <privilegeMod :privilegeModDatas="privilegeModDatas"/>
          <headline :headlineData="{title:'基本信息',line:true}"/>
          <detailsMessageMod :detailsMessageDatas="detailsMessageDatas"/>
        </div>
        <footer class="occupiedFooter">
        </footer>
      </div>
    </div>
    <footer class="CardDetailsFooter">
      <a href="javascript:;" @touchstart.stop="$router.push('/homePage/creditCardPage/cardApplyForPage')">立即申请</a>
    </footer>
  </div>
</template>

<script>
  import cardHeadLine from '../../components/cardHeadLine/cardHeadLine.vue'
  import privilegeMod from '../../components/privilegeMod/privilegeMod.vue'
  import detailsMessageMod from '../../components/detailsMessageMod/detailsMessageMod.vue'

  export default {
    data () {
      return {
        cardHeadLineData: {
          title: '专享特权',
          aFont: ''
        },
        message: {
          title: '基本信息',
          aFont: ''
        },
        privilegeModDatas: [
          {
            bgUrl: '../../../static/img/creditCardImg/qian.png',
            title: '每个月账单首笔取现交易费全免'
          },
          {
            bgUrl: '../../../static/img/creditCardImg/youhui.png',
            title: '至尊租车最低5折优惠'
          },
          {
            bgUrl: '../../../static/img/creditCardImg/youhui.png',
            title: '赠送200万航空业务险'
          },
        ],
        detailsMessageDatas: [
          {
            describe: '等级',
            price: '金卡'
          },
          {
            describe: '币种',
            price: '人民币'
          },
          {
            describe: '发卡组织',
            price: '银联'
          },
          {
            describe: '免息期限',
            price: '最短20天，最长50天'
          },
          {
            describe: '积分规则',
            price: '取现1元1积分，消费1元1积分'
          },
          {
            describe: '申请条件',
            price: '18岁 有工作'
          },
        ]
      }
    },

    components: {
      cardHeadLine, privilegeMod, detailsMessageMod
    },

    computed: {},

    mounted () {
      this.__boxheight(this.$refs.CardDetailsWrap) //执行函数
      window.onresize = this.__boxheight(this.$refs.CardDetailsWrap) //窗口或框架被调整大小时执行
      this.CardDetailsWrap = new this.BScroll(this.$refs.CardDetailsWrap, {click: true,})
      this.CardDetailsWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .CardDetailsHeader
    box-sizing border-box
    width (1080 /$rem)
    height (664 /$rem)
    padding (60 /$rem) (60 /$rem) (70 /$rem) (60 /$rem)
    img
      width (960 /$rem)
      height (606 /$rem)

  .occupiedFooter
    width (1080 /$rem)
    height (150 /$rem)

  .CardDetailsFooter
    position fixed
    bottom 0
    left 0
    a
      text-align center
      line-height (150/$rem)
      width (1080 /$rem)
      height (150 /$rem)
      background-color #efca7d
      color #ffffff
      font-size (48/$rem)
</style>
