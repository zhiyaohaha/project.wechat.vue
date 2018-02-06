<template>
  <div ref="scheduleWrap">
    <div>
      <scheduleList :scheduleListDatas="scheduleListDatas"/>
    </div>
  </div>
</template>

<script>
  import scheduleList from "../../components/scheduleList/scheduleList.vue"
  import BScroll from "better-scroll"
  export default {
    data () {
      return {
        scheduleListDatas:[
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行白金IC航旅卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
          {
            bankCard:"交通银行卡标准信用卡",
            time:"2013年3月13日",
            messageName:"程建",
            messageNum:"22028198208260001",
          },
        ]
      }
    },

    components: {
      scheduleList
    },

    computed: {},

    mounted(){
      this.__boxheight(this.$refs.scheduleWrap); //执行函数
      window.onresize = this.__boxheight(this.$refs.scheduleWrap); //窗口或框架被调整大小时执行
      this.scheduleWrap = new BScroll(this.$refs.scheduleWrap, {click: true,})
      this.scheduleWrap.refresh()
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
