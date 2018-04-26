<template>
  <div v-if="orderFormListDatas">
    <div class="orderFormListConttent">
      <ul class="orderFormList">
        <li v-for="(orderFormListData, index) in orderFormListDatas.data" :key="index">
          <img :src="orderFormListData.head||'../../../static/img/myImg/touxiang.gif'">
          <div class="orderFormListDescribe">
            <div class="up">
              <span class="userName">{{orderFormListData.name}}</span>
            </div>
            <div class="down">
              <span class="applyForTime">{{orderFormListData._createdDate}}</span>
              <span class="applyFor">申请</span>
            </div>
          </div>
          <div class="state">
            <span class="form">{{orderFormListData._product.name}}</span>
            <span class="stateDescribe" v-if="orderFormListData._rakeBack !== '已返佣'">({{orderFormListData._rakeBack}}){{orderFormListData._status}}</span>
            <span class="stateDescribe" v-if="orderFormListData._rakeBack === '已返佣'">{{orderFormListData._rakeBack}}</span>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    props:["orderFormListDatas"],
    data () {
      return {

      }
    },

    components: {
    },

    computed: {},

    mounted(){},

    methods: {
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .orderFormListConttent
    width (1080 /$rem)
    .orderFormList
      box-sizing border-box
      background-color #ffffff
      li
        box-sizing border-box
        overflow hidden
        position relative
        height (200 /$rem)
        border-bottom 1px solid #f2f2f2
        padding (35/$rem) (30/$rem)
        img
          float left
          width (130 /$rem)
        .orderFormListDescribe
          float left
          height (126 /$rem)
          margin (10/$rem) 0 0 (20/$rem)
          span
            display block
          .up
            .userName
              font-size (42/$rem)
              color #333
          .down
            margin-top (42/$rem)
            height (34/$rem)
            color #bbbbbb
            span
              float left
            .applyForTime
              font-size (34/$rem)
            .applyFor
              margin-left (5/$rem)
              font-size (34/$rem)
        .state
          position absolute
          top (45/$rem)
          right (30/$rem)
          font-size (34/$rem)
          text-align right
          .form
            display block
            color #bbbbbb
          .stateDescribe
            display block
            margin-top (50/$rem)
            color #333333
</style>
