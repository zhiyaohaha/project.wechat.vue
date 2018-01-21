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
          scs.push(CLASS_ON)
        }
        // 向数组中添加CLASS_HALF
        // 向数组中添加CLASS_OFF
        while(scs.length<5) {
          scs.push(CLASS_OFF)
        }

        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .stars
    display inline
    .star
      display inline-block
      background-repeat no-repeat
      background-size 100% 100%
      width (39/$rem)
      height (36/$rem)
      margin-right (7/$rem)
      &:last-child
        margin-right 0
      &.on
        background-image url("./img/hongwuxaing.png")
      &.off
        background-image url("./img/huiwuxing.png")
</style>
