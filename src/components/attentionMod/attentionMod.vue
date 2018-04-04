<template>
  <div class="attentionContent" @click.self="vanish" :class="{active:erShow}">
    <div class="box" @click.stop>
      <div class="boxTitle">长按关注掌金超，及时知晓义务进度</div>
      <img src="./img/guanzuerweima.jpg" class="boxImg">
    </div>
  </div>
</template>

<script>
  export default {
    props: ["vanish", "erShow"],
    data() {
      return {}
    },

    components: {},

    computed: {},

    mounted() {
    },

    methods: {
      a() {
        console.log(2)
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .attentionContent
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 3000
    background-color rgba(0, 0, 0, 0.3)
    transition all 0.5s 0.3s
    transform scale(0)
    &.active
      transform scale3d(1, 1, 1)
      transform-origin top left
    .box
      width (1020 /$rem)
      height (666 /$rem)
      background-color #ffffff
      position absolute
      top (510 /$rem)
      left (30 /$rem)
      border-radius (20 /$rem)
      .boxTitle
        margin-top (60 /$rem)
        font-size (36 /$rem)
        color #333
        text-align center
      .boxImg
        width (480 /$rem)
        height (480 /$rem)
        margin (30 /$rem) auto

</style>
