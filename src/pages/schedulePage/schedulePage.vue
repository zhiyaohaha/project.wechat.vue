<template>
  <div>
    <header class="scheduleTab">
      <a href="javascript:;" v-for="(item,index) in scheduleTabs" :key="index" :class="{active:index===scheduleTabInd}" @click="changeColor(index)">
        {{item.text}}
      </a>
    </header>
    <div ref="scheduleWrap">
      <div>
        <scheduleList :scheduleListDatas="scheduleListDatas" v-show="scheduleTabInd===0"/>
        <div class="bankBox" v-show="!(scheduleTabInd===0)">
          <div class="blankBox"></div>
          <headline :headlineData="{title:'请选择银行卡查询办卡进度'}"/>
          <bankInquireMod :allBankListDatas="allBankListDatas" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import scheduleList from '../../components/scheduleList/scheduleList.vue'
  import bankInquireMod from '../../components/bankInquireMod/bankInquireMod.vue'
  export default {
    data () {
      return {
        scheduleListDatas: [
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行白金IC航旅卡',
            time: '2013年3月13日 12:04:33',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
          {
            bankCard: '交通银行卡标准信用卡',
            time: '2013年3月13日',
            messageName: '程建',
            messageNum: '22028198208260001',
          },
        ],
        scheduleTabs: [
          {
            text: '我的进度'
          },
          {
            text: '银行查询'
          },
        ],
        scheduleTabInd:0,
        allBankListDatas: [
          {
            imgUrl: "../../../static/img/creditCardImg/communications.png",
            title: "交通银行",
            url:{path:'/homePage/creditCardPage/zhongXinCardPage',query: {name: "交通银行"}}
          },
          {
            imgUrl: "../../../static/img/creditCardImg/industrialbank.png",
            title: "兴业银行",
            url:{path:'/homePage/creditCardPage/zhongXinCardPage',query: {name: "兴业银行"}}
          },
          {
            imgUrl: "../../../static/img/creditCardImg/generalbanks.png",
            title: "光大银行",
            url:{path:'/homePage/creditCardPage/zhongXinCardPage',query: {name: "光大银行"}}
          },
          {
            imgUrl: "../../../static/img/creditCardImg/pudongdevelopmentbank.png",
            title: "浦发银行",
            url:{path:'/homePage/creditCardPage/zhongXinCardPage',query: {name: "浦发银行"}}
          },
        ],
      }
    },

    components: {
      scheduleList,bankInquireMod
    },

    computed: {},

    mounted () {
      this.__boxheight(this.$refs.scheduleWrap) //执行函数
      window.onresize = this.__boxheight(this.$refs.scheduleWrap) //窗口或框架被调整大小时执行
      this.scheduleWrap = new this.BScroll(this.$refs.scheduleWrap, {click: true,})
      this.scheduleWrap.refresh()
    },

    methods: {
      changeColor(index){
        this.scheduleTabInd = index
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .scheduleTab
    height (110 /$rem)
    border-bottom 1px solid #f2f2f2
    a
      text-align center
      line-height (110/$rem)
      float left
      width (50%)
      font-size (46/$rem)
      color #333333
      transition color 0.3s
      &.active
        color #efca7d
  .bankBox
    .blankBox
      height (10/$rem)
</style>
