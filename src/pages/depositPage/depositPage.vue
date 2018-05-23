<template>
  <div class="depositPage" v-if="data">
    <header class="depositPageHeader">
      <div :class="{active:headerDatasIndex === index}"
           v-for="(headerData, index) in headerDatas" :key="index" @click="changeColor(index)">
        {{headerData.title}}
      </div>
    </header>
    <scroll :scrollReset="conceal"
            :data="data"
            :pullup="true"
            @scrollToEnd="loadData(conceal)" style="overflow: hidden">
      <div>
        <div class="drawMoneyWrap">
          <transition name="succeed">
            <drawMoney :drawMoneyDatas="succeedWithDrawRecord" v-show="conceal" class="drawMoney"/>
          </transition>
          <transition name="fold">
            <drawMoney :drawMoneyDatas="defeatedWithDrawRecord" v-show="!conceal" class="drawMoney"/>
          </transition>
        </div>
        <footline :title="footlineTitle"/>
      </div>
    </scroll>
  </div>
</template>

<script>
  import drawMoney from "../../components/drawMoney/drawMoney.vue"

  export default {
    data() {
      return {
        headerDatas: [
          {
            title: "提现成功",
          },
          {
            title: "提现失败"
          }
        ],
        headerDatasIndex: 0,
        conceal: true,
        footlineTitle: "查看更多",
        data: null,
      }
    },

    components: {
      drawMoney
    },
    computed: {
      succeedWithDrawRecord: {
        get() {
          return this.$store.state.succeedWithDrawRecord
        },
        set() {

        }
      },
      defeatedWithDrawRecord: {
        get() {
          return this.$store.state.defeatedWithDrawRecord
        },
        set() {
        }
      }
    },
    watch: {
      conceal(val) {
        if (val) {
          if (this.succeedWithDrawRecord.length < 1) {
            this.footlineTitle = "暂无数据"
          } else {
            this.footlineTitle = "查看更多"
          }
        }
      }
    },
    created() {
      this.$store.dispatch("getWithDrawRecord", {
        id: "",
        tradeStatus: "TradeState.Success",
        size: 10
      }).then(() => {
        this.data = this.succeedWithDrawRecord
        this.succeedWithDrawRecord.length < 1 ? this.footlineTitle = "暂无数据" : this.footlineTitle = "查看更多"
      })
    },

    mounted() {

    },
    updated() {


    },
    methods: {
      //tab切换
      changeColor(index) {
        this.headerDatasIndex = index
        index === 0 ? this.conceal = true : this.conceal = false
        if (!this.conceal) {
          this.$store.dispatch("getWithDrawRecord", {
            id: "",
            tradeStatus: "TradeState.Fail",
            size: 10
          }).then(() => {
            this.data = this.defeatedWithDrawRecord
            this.defeatedWithDrawRecord.length < 1 ? this.footlineTitle = "暂无数据" : this.footlineTitle = "查看更多"
          })
        } else {
          this.data = this.succeedWithDrawRecord
        }
      },
      //下拉加载
      loadData(flag) {
        let time, Arr, tradeStatus
        if (flag) {
          tradeStatus = "TradeState.Success"
          Arr = this.succeedWithDrawRecord
        } else {
          tradeStatus = "TradeState.Fail"
          Arr = this.defeatedWithDrawRecord
        }
        //判断是交易失败还是成功
        if (this.footlineTitle === "查看更多") {
          this.footlineTitle = "加载中"
          this.$store.dispatch("getWithDrawRecord", {
            id: Arr[Arr.length - 1].id,
            tradeStatus: tradeStatus,
            size: 10
          }).then((res) => {
            if (res.length > 0) {
              time = setTimeout(() => {
                Arr.push(...res)
                this.footlineTitle = "查看更多"
                clearTimeout(time)
              }, 500)
            } else {
              time = setTimeout(() => {
                this.footlineTitle = "没有更多数据啦"
                clearTimeout(time)
              }, 500)
            }
          })
        }
      }
    },
  }


</script>
<style lang='stylus' rel="stylesheet/stylus">
  .depositPage
    .drawMoneyWrap
      width (2160 /$rem)
      overflow hidden
      .drawMoney
        float left
        width (1080 /$rem)
    .depositPageHeader
      border-bottom 1px solid #f2f2f2
      width (1080 /$rem)
      height (110 /$rem)
      div
        box-sizing border-box
        float left
        width (540 /$rem)
        height (110 /$rem)
        background-color #fff
        font-size (46 /$rem)
        color #333
        text-align center
        line-height (110 /$rem)
        transition all 0.5s
        &.active
          color #efca7d
    .fold-enter-active, .fold-leave-active {
      transition: all 0.3s
    }
    .fold-enter, .fold-leave-active {
      transform: translateX(100%)
    }
    .succeed-enter-active {
      transition: all .3s
    }
    .succeed-enter {
      transform: translateX(-100%)
    }
</style>
