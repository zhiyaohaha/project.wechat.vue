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
              <span>提现费用 : </span>
              <span>{{drawMoneyData.cost}}</span>
              <span>元</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['drawMoneyDatas'],
    data () {
      return {}
    },

    components: {},

    computed: {},

    mounted () {},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .drawMoney
    width (1080 /$rem)
    .drawMoneyList
      box-sizing border-box
      padding 0 (30 /$rem)
      li
        box-sizing border-box
        height (200 /$rem)
        border-bottom 1px solid #f2f2f2
        padding (45 /$rem) 0 (35 /$rem)
        color #bbbbbb
        .state
          float left
        .describe
          float right
        .up
          font-size (34 /$rem)
        .down
          margin-top (48 /$rem)
          font-size (36 /$rem)
        .left
          color #bbb
        .right
          line-height (34 /$rem)
          text-align right
          .appearance
            float left
        .price
          font-size (42 /$rem)
          color #efca7d
</style>
