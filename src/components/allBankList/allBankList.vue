<template>
  <div>
    <ul class="allBankList">
      <li v-for="(allBankListData, index) in allBankListDatas" :key="index">
        <a href="javascript:;">
          <img :src="allBankListData.imgUrl">
          <span>{{allBankListData.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["allBankListDatas"],
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
  .allBankList
    overflow hidden
    width (1080/$rem)
    li
      box-sizing border-box
      float left
      width (270/$rem)
      height (270/$rem)
      padding (67/$rem) (67/$rem) 0
      img
        width (136/$rem)
        height (136/$rem)
      span
        display block
        font-size (30/$rem)
        color #515151
        margin-left (5/$rem)
        margin-top (32/$rem)
</style>
