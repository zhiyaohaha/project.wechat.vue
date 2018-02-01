<template>
  <div>
    <header class="depositPageHeader">
      <div :class="{active:headerDatasIndex === index}"
           v-for="(headerData, index) in headerDatas" :key="index" @click="changeColor(index)">
        {{headerData.title}}
      </div>
    </header>
    <split/>
    <drawMoney :drawMoneyDatas="drawMoneyDatas1" v-show="conceal"/>
    <drawMoney :drawMoneyDatas="drawMoneyDatas2" v-show="!conceal"/>
  </div>
</template>

<script>
  import drawMoney from "../../components/drawMoney/drawMoney.vue"
  export default {
    data () {
      return {
        headerDatas:[
          {
            title:"已提现",
          },
          {
            title:"提现中"
          }
        ],
        drawMoneyDatas1:[
          {
            time:"20XX-XX-XX XX:XX:XX ",
            state:"提现中",
            sum:"1000000.00",
            cost:"10"
          },
          {
            time:"20XX-XX-XX XX:XX:XX",
            state:"提现中",
            sum:"1000000.00",
            cost:"10"
          },
          {
            time:"20XX-XX-XX XX:XX:XX",
            state:"提现中",
            sum:"1000000.00",
            cost:"10"
          },
          {
            time:"20XX-XX-XX XX:XX:XX",
            state:"提现中",
            sum:"1000000.00",
            cost:"10"
          },
        ],
        drawMoneyDatas2:[
          {
            time:"20XX-XX-XX XX:XX:XX",
            state:"已提现",
            sum:"1000000.00",
            cost:"10"
          },
          {
            time:"20XX-XX-XX XX:XX:XX",
            state:"已提现",
            sum:"1000000.00",
            cost:"10"
          },
          {
            time:"20XX-XX-XX XX:XX:XX",
            state:"已提现",
            sum:"1000000.00",
            cost:"10"
          },
          {
            time:"20XX-XX-XX XX:XX:XX",
            state:"已提现",
            sum:"1000000.00",
            cost:"10"
          },
          {
            time:"20XX-XX-XX XX:XX:XX",
            state:"已提现",
            sum:"1000000.00",
            cost:"10"
          },
        ],
        headerDatasIndex:0,
        conceal:true,
      }
    },

    components: {
      drawMoney
    },

    computed: {},

    mounted(){},

    methods: {
      changeColor(index){
        this.headerDatasIndex = index
        if(index === 1){
          this.conceal = false
        }else {
          this.conceal = true
        }
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .depositPageHeader
    width (1080/$rem)
    height (120/$rem)
    div
      box-sizing border-box
      border-right 1px solid #ffffff
      float left
      width (540/$rem)
      height (120/$rem)
      background-color #e8e8e8
      font-size (46/$rem)
      color #515151
      text-align center
      line-height (120/$rem)
      transition all 0.5s ease-in-out
      &.active
        background-color #c2181f
        color #ffffff
</style>
