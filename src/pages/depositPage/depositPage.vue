<template>
  <div>
    <!--<header class="depositPageHeader">
      <div :class="{active:headerDatasIndex === index}"
           v-for="(headerData, index) in headerDatas" :key="index" @touchstart="changeColor(index)">
        {{headerData.title}}
      </div>
    </header>
    <drawMoney :drawMoneyDatas="drawMoneyDatas1" v-show="conceal"/>
    <drawMoney :drawMoneyDatas="drawMoneyDatas2" v-show="!conceal"/>-->
  </div>
</template>

<script>
  import drawMoney from "../../components/drawMoney/drawMoney.vue"

  export default {
    data() {
      return {
        headerDatas: [
          {
            title: "已提现",
          },
          {
            title: "提现中"
          }
        ],
        drawMoneyDatas1: [
          {
            time: "20XX-XX-XX XX:XX:XX ",
            state: "提现中",
            sum: "1000000.00",
            cost: "10"
          },
          {
            time: "20XX-XX-XX XX:XX:XX",
            state: "提现中",
            sum: "1000000.00",
            cost: "10"
          },
          {
            time: "20XX-XX-XX XX:XX:XX",
            state: "提现中",
            sum: "1000000.00",
            cost: "10"
          },
          {
            time: "20XX-XX-XX XX:XX:XX",
            state: "提现中",
            sum: "1000000.00",
            cost: "10"
          },
        ],
        drawMoneyDatas2: [
          {
            time: "20XX-XX-XX XX:XX:XX",
            state: "已提现",
            sum: "1000000.00",
            cost: "10"
          },
          {
            time: "20XX-XX-XX XX:XX:XX",
            state: "已提现",
            sum: "1000000.00",
            cost: "10"
          },
          {
            time: "20XX-XX-XX XX:XX:XX",
            state: "已提现",
            sum: "1000000.00",
            cost: "10"
          },
          {
            time: "20XX-XX-XX XX:XX:XX",
            state: "已提现",
            sum: "1000000.00",
            cost: "10"
          },
          {
            time: "20XX-XX-XX XX:XX:XX",
            state: "已提现",
            sum: "1000000.00",
            cost: "10"
          },
        ],
        headerDatasIndex: 0,
        conceal: true,
      }
    },

    components: {
      drawMoney
    },
    watch: {
      $route(val) {
        if (val.name === "depositPage") {
          this.MessageBox.alert(
            "功能正在制作中，提现请联系客服。在公众号主页回复“提现”，会收到客服联系方式，加客服即可人工提现。",
            '提示',
          ).then(() => {
            this.$router.go(-1)
          })
        }
      }
    },
    computed: {},

    mounted() {
      this.MessageBox.alert(
        "功能正在制作中，提现请联系客服。在公众号主页回复“提现”，会收到客服联系方式，加客服即可人工提现。",
        '提示',
      ).then(() => {
        this.$router.go(-1)
      })
    },
    updated() {


    },
    methods: {
      /*changeColor(index){
        this.headerDatasIndex = index
        if(index === 1){
          this.conceal = false
        }else {
          this.conceal = true
        }
      }*/
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
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
</style>
