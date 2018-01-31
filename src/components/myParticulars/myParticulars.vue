<template>
  <div>
    <div class="myParticulars">
      <ul class="myParticularsList">
        <li v-for="(myParticularsData, index) in myParticularsDatas" :key="index">
          <a href="javascript:;">
            <img :src="myParticularsData.imgUrl">
            <span>{{myParticularsData.title}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:["myParticularsDatas"],
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
  .myParticulars
    width (1080 /$rem)
    height (684 /$rem)
    .myParticularsList
      li
        box-sizing border-box
        position relative
        float left
        width (360 /$rem)
        height (342 /$rem)
        border-right 1px solid #ccc
        border-bottom 1px solid #ccc
        text-align center
        a
          position absolute
          top 0
          left 0
          display block
          width 100%
          height 100%
          img
            width (120 /$rem)
            margin (78 /$rem) 0 (30 /$rem) (120 /$rem)
          span
            display block
            font-size (36 /$rem)
            color #515151
</style>
