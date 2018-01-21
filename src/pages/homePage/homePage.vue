<template>
  <div>
    <div>
      <header class="homePageHeader">
        <img src="./img/banner.png">
      </header>
      <split/>
      <div class="homePageContent">
        <headline headlineTitle="贷款"/>
      </div>
      <split/>
    </div>
  </div>
</template>
<script>
  import split from "../../components/split/split.vue"
  import headline from "../../components/headline/headline.vue"
  export default {
    data () {
      return {

      }
    },

    components: {
        split,headline
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .homePageHeader
    img
      width 100%
      height (500/$rem)
</style>
