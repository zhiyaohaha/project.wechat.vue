<template>
  <div>
    <div class="drawMoney">
      <ul class="drawMoneyList">
        <li v-for="(drawMoneyData, index) in drawMoneyDatas" :key="index">
          <div class="state">
            <div class="up left">
              <span>{{drawMoneyData.time}} </span>
              <span class="appearance"> 申请提现</span>
            </div>
            <div class="down">
              <span class="appearance">提现状态 : </span>
              <span>{{drawMoneyData.state}}</span>
            </div>
          </div>
          <div class="describe">
            <div class="up right">
              <span class="appearance">提现金额 : </span>
              <span class="price">{{drawMoneyData.sum}}</span>
              <span>元</span>
            </div>
            <div class="down right">
              <span class="appearance">提现费用 : </span>
              <span class="price">{{drawMoneyData.cost}}</span>
              <span class="unit">元</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:["drawMoneyDatas"],
    data () {
      return {

      }
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .drawMoney
    width (1080/$rem)
    .drawMoneyList
      li
        box-sizing border-box
        height (234/$rem)
        border-bottom 1px solid #bbbbbb
        padding (50/$rem) (30/$rem)
        color #bbbbbb
        .state
          float left
        .describe
          float right
        .up
          font-size (30/$rem)
          overflow hidden
          font-size (30/$rem)
        .down
          overflow hidden
          font-size (30/$rem)
          margin-top (65/$rem)
          font-size (30/$rem)
        .left
          color #333333
        .right
          line-height (36/$rem)
          text-align right
          .appearance
            float left
            text-align left
        .appearance
          font-size (36/$rem)
        .price
          color #c2181f

</style>
