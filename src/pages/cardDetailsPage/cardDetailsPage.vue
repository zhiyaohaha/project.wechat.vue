<template>
  <div>
    <div ref="CardDetailsWrap" v-if="bankCardDetail">
      <div>
        <header class="CardDetailsHeader">
          <img :src="bankCardDetail._logo">
        </header>
        <headline :headlineData="{title:bankCardDetail.name,line:true}"/>
        <div class="CardDetailsContent">
          <headline :headlineData="{title:'专享特权',line:true}"/>
          <privilegeMod :privilegeModDatas="bankCardDetail.exclusivePrivilege"/>
          <headline :headlineData="{title:'基本信息',line:true}"/>
          <detailsMessageMod :detailsMessageDatas="detailsMessageDatas"/>
        </div>
        <footer class="occupiedFooter">
        </footer>
      </div>
    </div>
    <footer class="CardDetailsFooter">
      <a href="javascript:;"
         @click.stop="$router.push({path:'/homePage/cardApplyForPage',query:{id:bankCardDetail.id}})">立即申请</a>
    </footer>
  </div>
</template>

<script>
  import cardHeadLine from '../../components/cardHeadLine/cardHeadLine.vue'
  import privilegeMod from '../../components/privilegeMod/privilegeMod.vue'
  import detailsMessageMod from '../../components/detailsMessageMod/detailsMessageMod.vue'
  import {mapState} from "vuex"

  export default {
    data() {
      return {
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
      }
    },

    components: {
      cardHeadLine, privilegeMod, detailsMessageMod
    },

    computed: {
      ...mapState(["bankCardDetail"]),

      detailsMessageDatas() {
        let that = this
        let Arr = []
        Arr = Arr.concat(
          [
            {
              describe: "等级",
              price: that.bankCardDetail._level
            },
            {
              describe: "币种",
              price: that.bankCardDetail._currency
            },
            {
              describe: "发卡组织",
              price: that.bankCardDetail._issuingOrg
            },
            {
              describe: "免息期限",
              price: `最短${that.bankCardDetail.interestFreePeriodMin}天，最长${that.bankCardDetail.interestFreePeriodMax}天`
            },
            {
              describe: "申请条件",
              price: that.bankCardDetail.applicationConditions
            },
          ]
        )

        return Arr

      }
    },
    created() {

      let that = this
      console.log(that.$route.query.id);

      this.$store.dispatch("getListBankCardDetail", {
        id: that.$route.query.id
      }).then(()=>{
        this.__boxheight(this.$refs.CardDetailsWrap) //执行函数
        window.onresize = this.__boxheight(this.$refs.CardDetailsWrap) //窗口或框架被调整大小时执行
        this.$nextTick(()=>{
          this.CardDetailsWrap = new this.BScroll(this.$refs.CardDetailsWrap, {click: true})
          this.CardDetailsWrap.refresh()
        })
      })

    },
    mounted() {

    },

    methods: {
      __slide() {
        console.log(this.bankCardDetail)

      }
    }
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
      line-height (150 /$rem)
      width (1080 /$rem)
      height (150 /$rem)
      background-color #efca7d
      color #ffffff
      font-size (48 /$rem)
</style>
