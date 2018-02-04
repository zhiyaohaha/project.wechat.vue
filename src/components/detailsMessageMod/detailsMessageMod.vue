<template>
  <div>
    <ul class="messageList">
      <li v-for="(detailsMessageData, index) in detailsMessageDatas" :key="index">
        <div class="describe">{{detailsMessageData.describe}}</div>
        <span class="price">{{detailsMessageData.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["detailsMessageDatas"],
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
  .messageList
    box-sizing border-box
    width (1080/$rem)
    height (556/$rem)
    padding-left (45/$rem)
    overflow hidden
    li
      overflow hidden
      height (45/$rem)
      margin-top (40/$rem)
      font-size (45/$rem)
      color #8a8a8a
      .describe
        float left
        text-align justify
        width (180/$rem)
      .describe:after
        content: ""
        padding-left: 100%;
        display: inline-block
      .price
        float left
        margin-left (60/$rem)
        color #222
</style>
