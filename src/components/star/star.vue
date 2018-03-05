<template>
  <div class="stars">
    <span class="star" v-for="c in starClasses" :class="c"></span>
  </div>
</template>

<script>
  const CLASS_ON = 'on'
  const CLASS_OFF = 'off'

  export default {
    props: {
      score: Number,
    },

    // 3.5: 3 + 1 + 1
    // 3.4: 3 + 0 + 2
    computed: {
      starClasses () {
        const scs = []

        const score = this.score
        const integerScore = Math.floor(score)

        // 向数组中添加CLASS_ON
        for (let i = 0; i < integerScore; i++) {
          scs.unshift(CLASS_ON)
        }
        // 向数组中添加CLASS_HALF
        // 向数组中添加CLASS_OFF
        while(scs.length<5) {
          scs.unshift(CLASS_OFF)
        }

        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .stars
    display inline
    position relative
    top -1
    .star
      float right
      background-repeat no-repeat
      background-size 100% 100%
      width (35/$rem)
      height (30/$rem)
      margin-right (7/$rem)
      &.on
        background-image url("./img/content_icon_chenggonlv_normal.png")
      &.off
        background-image url("./img/content_icon_chenggonglv_disabled.png")
</style>
