<template>
  <div class="pickerMod">
    <div class="pickerWrap" ref="pickerWrap" v-if="pickerModDatas">
      <ul class="pickerModList">
        <li v-for="(pickerModData, index) in pickerModDatas" :key="index"
            :class="{select:index===select}" ref="pickerSingle">
          {{pickerModData.name||pickerModData.text}}
        </li>
      </ul>
    </div>
    <div class="pickerModListStamp"></div>
  </div>
</template>

<script>
  export default {
    props: ['pickerModDatas', 'shadeIsShow', "onValuesChange"],
    data() {
      return {
        select: 0,
      }
    },

    components: {},

    computed: {},
    watch: {
      shadeIsShow(val) {
        if (val === 3) {
          this.pickerWrap = new this.BScroll(this.$refs.pickerWrap, {
            momentum: false,
            stopPropagation:true,
            probeType: 1
          })
          this.pickerWrap.refresh()
          this.pickerWrap.on("touchEnd", (pos) => {
            let a = this.$refs.pickerSingle[0].clientHeight
            let b = Math.round(pos.y / a)
            this.pickerWrap.scrollTo(0, a * b, 100)
            if (-b > this.pickerModDatas.length - 1) {
              this.select = this.pickerModDatas.length - 1
            } else if (-b < 0) {
              this.select = 0
            } else {
              this.select = -b
            }
            this.onValuesChange(this.select)
          })
          this.onValuesChange(this.select)
        } else {
          this.pickerWrap && this.pickerWrap.destroy()
          this.select = 0
        }
      }
    },
    mounted() {
      this.pickerModData&&this.onValuesChange(this.select)
    },
    updated() {
    },
    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .pickerMod
    position relative
    width (1080 /$rem)
    .pickerWrap
      overflow hidden
      height (554 /$rem)
      .pickerModList
        padding-top (184 /$rem)
        padding-bottom (276 /$rem)
        li
          font-size (42 /$rem)
          width (1080 /$rem)
          height (92 /$rem)
          text-align center
          line-height (92 /$rem)
          color #ddd
          transition color 0.2s
          &.select
            color #333
    .pickerModListStamp
      position absolute
      top (185 /$rem)
      left (0)
      z-index -1
      width (1080 /$rem)
      height (92 /$rem)
      text-align center
      border-top (1 /$rem) solid #dddd
      border-bottom (1 /$rem) solid #ddd
</style>
