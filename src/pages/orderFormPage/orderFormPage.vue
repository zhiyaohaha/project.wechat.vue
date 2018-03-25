<template>
  <div>
    <header class="orderFormHeader" v-if="orderListFor1">
      <a href="javascript:;" :class="{active:orderFormInd === index}"
         v-for="(orderFormTapData, index) in orderFormTapDatas" :key="index"
         @click="changeColor(index)">
        {{orderFormTapData.title}}<span class="manNumber" v-if="orderFormTapData.manNumber">({{orderFormTapData.manNumber}})</span>
      </a>
    </header>
    <scroll class="wrapper"
            :data="orderListFor1.data"
            :pullup="true"
            @scrollToEnd="loadData"
            v-if="orderListFor1"
    >
      <orderFormList :orderFormListDatas="orderListFor1" v-if="orderListFor1" :screenIsShow="screenIsShow"/>
      <footline :title="footlineTitle"/>
    </scroll>
    <mt-popup v-model="screenShow" position="bottom">
      <header class="mintPopupHeader">
        <span class="finish" @click="screenIsShow(true)">完成</span>
      </header>
      <div class="mintPopupContent">
        <div>
          <checkboxHeadLine title="选择状态"/>
          <checkboxList :checkboxListDatas="checkboxListDatas1"/>
        </div>
        <div class="blankBox"></div>
        <div>
          <checkboxHeadLine title="选择产品"/>
          <checkboxList :checkboxListDatas="userrelated"/>
        </div>
      </div>
      <footer class="mintPopupFooter" @click="screenIsShow(false)">
        取消
      </footer>
    </mt-popup>
  </div>
</template>

<script>
  import orderFormList from "../../components/orderFormList/orderFormList.vue"
  import checkboxList from "../../components/checkboxList/checkboxList.vue"
  import checkboxHeadLine from "../../components/checkboxHeadLine/checkboxHeadLine.vue"
  import {mapState} from "vuex"

  export default {
    data() {
      return {
        orderFormTapDatas: [
          {
            title: "我的",
            manNumber: null
          },
          {
            title: "一级代理",
            manNumber: null
          },
          {
            title: "二级代理",
            manNumber: null
          },
        ],
        orderFormInd: 0,
        footlineTitle: "查看更多",
        checkboxListDatas1: [
          {
            name: "待处理",
            imgShow: false,
            code: "Apply"
          },
          {
            name: "审核中",
            imgShow: false,
            code: "Auditing"
          },
          {
            name: "已完结",
            imgShow: false,
            code: "Loan,UserGiveUp,Refuse"
          },
        ],
        screenShow: false
      }
    },

    components: {
      orderFormList, checkboxList, checkboxHeadLine
    },

    computed: {
      ...mapState(["userrelated"]),
      orderListFor1: {
        get() {
          return this.$store.state.orderListFor1
        },
        set() {
        }
      }
    },
    created() {
      let that = this
      this.$store.dispatch("getOrderListFor", {
        status: "Apply, Auditing, Loan, UserGiveUp, Refuse",
        level: that.orderFormInd,
        products: "",
        id: "",
        size: 10
      })
      this.$store.dispatch("getUserRelated", {
        level: that.orderFormInd
      })
    },
    watch: {
      orderFormInd(val) {
        let that = this
        this.$store.dispatch("getUserRelated", {
          level: that.orderFormInd
        })
      }
    },
    mounted() {
    },
    updated() {
      if (this.orderListFor1) {
        this.orderFormTapDatas[this.orderFormInd].manNumber = this.orderListFor1.total
      }
    },
    methods: {
      //赛选弹框
      screenIsShow(flag) {
        this.screenShow = !this.screenShow
        let code = ""
        let products = ""
        if (flag) {
          this.checkboxListDatas1.forEach((item, index, input) => {
            if (item.imgShow) {
              code += item.code + ","
            }
            if (code === "") {
              code += item.code + ","
            }
          })
          this.userrelated.forEach((item) => {
            if (item.imgShow) {
              products += item.product + ","
            }
          })
          code = code.substring(0, code.length - 1)
          products = products.substring(0, products.length - 1)
          this.$store.dispatch("getOrderListFor", {
            status: code,
            level: this.orderFormInd,
            products: products,
            id: "",
            size: 10
          })
        }
      },
      //tab切换
      changeColor(index) {
        this.footlineTitle = '查看更多'
        let that = this
        this.orderFormInd = index
        this.$store.dispatch("getOrderListFor", {
          status: "Apply, Auditing, Loan, UserGiveUp, Refuse",
          level: that.orderFormInd,
          products: "",
          id: "",
          size: 10
        })
      },
      //下拉加载
      loadData() {
        let that = this
        if (this.footlineTitle === "没有更多") {
          return
        } else {
          this.footlineTitle = "加载中"
          this.$store.dispatch("getOrderListFor", {
            status: "Apply, Auditing, Loan, UserGiveUp, Refuse",
            level: that.orderFormInd,
            products: "",
            id: that.orderListFor1.data[that.orderListFor1.data.length - 1].id,
            size: 10
          }).then((res) => {
            if (res.length > 0) {
              let time = setTimeout(() => {
                this.orderListFor1.data.push(...res)
                this.footlineTitle = '查看更多'
                clearTimeout(time)
              }, 1000)

            } else {
              let time = setTimeout(() => {
                this.footlineTitle = "没有更多"
                clearTimeout(time)
              }, 1000)
            }
          })
        }

      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .orderFormHeader
    height (110 /$rem)
    width (1080 /$rem)
    a
      box-sizing border-box
      border-bottom 1px solid #f2f2f2
      height 100%
      width (360 /$rem)
      background-color #ffffff
      float left
      font-size (46 /$rem)
      text-align center
      line-height (110 /$rem)
      transition all 0.5s
      .manNumber
        font-size (34 /$rem)
      &.active
        color #efca7d

  .blankBox
    height (10 /$rem)

  .mint-popup-bottom
    box-sizing border-box
    width (1080 /$rem)
    padding 0 (30 /$rem)
    .mintPopupHeader
      box-sizing border-box
      height (124 /$rem)
      text-align right
      font-size (46 /$rem)
      color #333333
      padding (40 /$rem) 0
    .mintPopupFooter
      height (146 /$rem)
      font-size (42 /$rem)
      color #333333
      text-align center
      line-height (146 /$rem)
</style>
