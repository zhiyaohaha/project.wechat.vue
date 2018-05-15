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
        </div>
        <footer class="occupiedFooter"></footer>
      </div>
    </scroll>
    <footer class="productDetailsFooter" @click="applyFor">
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
        num: 0,
        data:null
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
      let that =this
      this.$store.dispatch("getDetailedFor", {id: this.$route.query.id})
      this.$store.dispatch("getLastOrderInfo").then(() => {
        if (this.lastOrderInfo) {
          this.data={
            mobilePhone: that.lastOrderInfo.mobilePhone,  //手机
            idCard: that.lastOrderInfo.idCard,  //身份证
            name:  that.lastOrderInfo.name,   //姓名
            product: that.$route.query.id,  //产品Id
            source: 'OfficialAccounts'  //来源
          }
        }
      })
    },
    mounted() {
    },
    updated() {
    },
    methods: {
      //申请
      applyFor() {
        let data = this.data,
          url=this.apiPrefix + "api/LoanOrder/SpeedOrderRecordForApp",
          that = this,
          num = this.getCookie('whether') * 1
        if(num === 1){
          this.MessageBox.confirm('请确认个人信息后继续办理业务',"提示").then(() => {
            this.$router.push({name:'personalDataPage',query:{id:that.$route.query.id},params:{urlIsSkip:true}})
          })
        }else {
          postSpeedOrder(url,data).then((res) => {
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
