<template>
  <div>
    <header class="orderFormTap">
      <a href="javascript:;" :class="{active:orderFormInd === index}"
         v-for="(orderFormTapData, index) in orderFormTapDatas" :key="index"
         @click="changeColor(index)">
        {{orderFormTapData.title}}<span class="manNumber" v-show="orderFormTapData.manNumber">({{orderFormTapData.manNumber}})</span>
      </a>
    </header>
    <scroll class="wrapper"
            :data="rakeBackInfo.result"
            :pullup="true"
            @scrollToEnd="loadData" v-if="rakeBackInfo">
      <rebateList :rebateListDatas="rakeBackInfo"/>
      <footline :title="footlineTitle"/>
    </scroll>

  </div>
</template>

<script>
  import rebateList from "../../components/rebateList/rebateList.vue"
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
        footlineTitle: "下拉加载更多"
      }
    },

    components: {
      rebateList
    },

    computed: {
      rakeBackInfo:{
        get(){
          return this.$store.state.rakeBackInfo
        },
        set(){}
      }
    },
    created() {
      this.$store.dispatch("getRakeBackInfo", {
        id:"",
        size:10,
        level: this.orderFormInd
      }).then(() => {
        this.orderFormTapDatas[this.orderFormInd].manNumber = this.rakeBackInfo.total
      })
    },
    mounted() {

    },

    methods: {
//      点击变色
      changeColor(ind) {
        this.footlineTitle = '查看更多'
        this.orderFormInd = ind
        this.$store.dispatch("getRakeBackInfo", {
          id:"",
          level: ind,
          size:10
        }).then(() => {
          this.orderFormTapDatas[this.orderFormInd].manNumber = this.rakeBackInfo.total
        })
      },
      //滑动加载
      loadData() {
        let that = this
        if (this.footlineTitle === "没有啦") {
          return
        } else {
          this.footlineTitle = "加载中"
          this.$store.dispatch("getRakeBackInfo", {
            id: that.rakeBackInfo.result[that.rakeBackInfo.result.length - 1].id,
            level:that.orderFormInd,
            size: 10
          }).then((res) => {
            if (res.length > 0) {
              let time = setTimeout(() => {
                this.rakeBackInfo.result.push(...res)
                this.footlineTitle = '查看更多'
                clearTimeout(time)
              }, 1000)
            } else {
              let time = setTimeout(() => {
                this.footlineTitle = "没有啦"
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
  .orderFormTap
    background-color #ffffff
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
        font-size (34 /$rem)
        color #333
      &.active
        color #efca7d
        .manNumber
          color #efca7d
  .wrapper
    overflow hidden
</style>
