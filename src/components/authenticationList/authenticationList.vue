<template>
  <div>
    <ul class="authenticationList">
      <li v-for="(authenticationListData, index) in authenticationListDatas" :key="index">
        <a href="javascript:;">
          <img :src="authenticationListData.imgUrl">
          <span>{{authenticationListData.character}}</span>
        </a>
      </li>
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
    border-bottom 1px solid #f2f2f2
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
