<template>
  <div class="redEnvelopeMod" @click.self = "redEnvelopeModIsShow">
    <div class="redEnvelopeModCentre">
      <button class="receive"></button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "red-envelope-mod",
    props:{
      redEnvelopeModIsShow:{
        type: Function,
        default: null
      }
    },
    data() {
      return {}
    },

    components: {},

    computed: {},

    mounted() {
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .redEnvelopeMod
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    background-color rgba(0,0,0,.3)
    z-index 100
    .redEnvelopeModCentre
      position absolute
      top 50%
      left 50%
      width (840/$rem)
      height (1035/$rem)
      margin-top (-517/$rem)
      margin-left (-420/$rem)
      background-image url("./img/hongbao_close.png")
      background-repeat no-repeat
      background-size 100%
      .receive
        width (490/$rem)
        height (120/$rem)
        position absolute
        top (785/$rem)
        left 50%
        margin-left (-245/$rem)
        background-color #efca7d
</style>
