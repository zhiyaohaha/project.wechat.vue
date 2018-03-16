<template>
  <div>
    <div class="privilegeContent">
      <ul class="privilegeList">
        <li v-for="(privilegeModData, index) in privilegeModDatas" :key="index">
          <span class="privilegeLog" :style="{'backgroundImage':'url(' + privilegeModData.bgUrl + ')'}"></span>
          <span class="describe">{{privilegeModData.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:["privilegeModDatas"],
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
  .privilegeContent
    box-sizing border-box
    height (276/$rem)
    padding (40/$rem) (30/$rem)
    li:not(:first-child)
      margin-top (30/$rem)
    li
      overflow hidden
      span
        float left
        &.privilegeLog
          width (49/$rem)
          height (49/$rem)
          background-repeat no-repeat
          background-size 100%
        &.describe
          margin-left (30/$rem)
          font-size (42/$rem)
          color #333
</style>
