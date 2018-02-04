<template>
  <div>
    <ul class="authenticationList">
      <li v-for="(authenticationListData, index) in authenticationListDatas" :key="index">
        <a href="javascript:;">
          <img :src="authenticationListData.imgUrl">
          <span>{{authenticationListData.character}}</span>
        </a>
      </li>
      <!--<li>
        <a href="javascript:;">
          <img src="../../../static/img/productImg/xinyongka.png">
          <span>信用卡</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../../static/img/productImg/zhifubao.png">
          <span>支付宝账号</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../../static/img/productImg/shoujihao.png">
          <span>手机号</span>
        </a>
      </li>-->
    </ul>
  </div>
</template>

<script>
  export default {
    props:["authenticationListDatas"],
    data () {
      return {}
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .authenticationList
    display -webkit-flex
    display flex
    justify-content: space-around
    align-items: center;
    width (1080 /$rem)
    height (286 /$rem)
    li
      font-size (36/$rem)
      color #515151
      text-align center
      img
        display inline-block
        height (100/$rem)
      span
        display block
        margin-top (30/$rem)
</style>
