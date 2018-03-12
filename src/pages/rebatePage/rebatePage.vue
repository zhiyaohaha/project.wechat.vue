<template>
  <div>
    <header class="orderFormTap">
      <a href="javascript:;" :class="{active:orderFormInd === index}"
         v-for="(orderFormTapData, index) in orderFormTapDatas" :key="index"
         @click="changeColor(index)">
        {{orderFormTapData.title}}<span class="manNumber">({{orderFormTapData.manNumber}})</span>
      </a>
    </header>
    <rebateList v-for="(rebate, index) in rebates" :key="index"
                :rebateListDatas="rebate.rebateListDatas" v-if="orderFormInd === index"/>
  </div>
</template>

<script>
  import rebateList from "../../components/rebateList/rebateList.vue"
  export default {
    data () {
      return {
        rebates: [
          {
            rebateListDatas: [
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
            ]
          },
          {
            rebateListDatas: [
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
            ]
          },
          {
            rebateListDatas: [
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
              {
                imgUrl: "../../../static/img/myImg/touxiang.gif",
                applyForTime: "20XX-XX-XX XX:XX:XX",
                money: "100000.00",
                form: "小赢卡贷",
                state: "100000.00"
              },
            ]
          }
        ],
        orderFormTapDatas: [
          {
            title: "我的",
            manNumber:111
          },
          {
            title: "一级代理",
            manNumber:111
          },
          {
            title: "二级代理",
            manNumber:111
          },
        ],
        orderFormInd: 0
      }
    },

    components: {
      rebateList
    },

    computed: {},

    mounted(){
      /*let sign = this.__getBack()*/
      /*if (sign) {
       //        removeEventListener("popstate",this.__callback)
       }*/
    },

    methods: {
//      点击变色
      changeColor(ind){
        this.orderFormInd = ind
      }
      /*__callback(e){
       let bool = true
       if (bool) {
       alert("我监听到了浏览器的返回按钮事件啦");
       //根据自己的需求实现自己的功能
       bool = false
       }
       bool = true
       },
       __getBack(){
       console.log(666)
       window.addEventListener("popstate", this.__callback)
       return true
       }*/
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .orderFormTap
    height (110 /$rem)
    width (1080 /$rem)
    border-bottom 1px solid #f2f2f2
    a
      box-sizing border-box
      height 100%
      width (360 /$rem)
      float left
      font-size (46 /$rem)
      color #333
      text-align center
      line-height (110 /$rem)
      transition all 0.5s
      .manNumber
        font-size (34/$rem)
        color #333
      &.active
        color #efca7d
        .manNumber
          color #efca7d
</style>
