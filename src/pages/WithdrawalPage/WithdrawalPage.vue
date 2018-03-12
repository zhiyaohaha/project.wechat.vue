<template>
  <div>
    <header class="WithdrawalHeader">
      <img src="">
    </header>
    <div class="WithdrawalContent">
      <ul class="mform">
        <li v-for="(mformData, index) in mformDatas" :key="index">
          <span class="description">{{mformData.description}}</span>
          <input type="number" v-model="mformData.model"
                 :placeholder="mformData.placeholder"
                 :maxlength="mformData.maxlength" :readonly="mformData.readonly"
                 :name="mformData.name">
          <span :class="{purposeList:mformData.purposeList}" v-if="mformData.purposeList">
                {{mformData.units}}
              </span>
        </li>
      </ul>
      <div class="cost">
        提现费用 ：<span>100</span>元
      </div>
      <a href="javascript:;" class="affirm">
        确认
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mformDatas:[
          {
            description: '可提现金额：',
            placeholder: 'XXXXXX.XX',
            name: 'money',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '元',
            reg: /[\s\S]*/,
            errorColor: false,
            readonly:true
          },
          {
            description: '提现金额：',
            placeholder: '请输入提现金额',
            name: 'sum',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /^[0-9]$/,
            errorColor: false,
          },
        ]
      }
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .WithdrawalHeader
    height (442/$rem)
    width (1080/$rem)
  .WithdrawalContent
    .mform
      margin: 0 (30 /$rem)
      li
        box-sizing border-box
        position relative
        line-height (120 /$rem)
        width (1020 /$rem)
        height (121 /$rem)
        font-size (42 /$rem)
        border-bottom 1px solid #f2f2f2
        text-align right
        span
          color #333333
        .description
          float left
        input
          font-size (42 /$rem)
          outline: none
          border: none
          text-align right
          width (540 /$rem)
          caret-color #000
          color #333
        input:
        :-moz-placeholder
          text-align right
          color #bbbbbb
        input:
        :-webkit-input-placeholder
          text-align right
          color #bbbbbb
        input:-ms-input-placeholder
          text-align right
          color #bbbbbb
        .purposeList
          font-size (42/$rem)
          color #bbb

    .cost
      margin-left (30/$rem)
      height (116/$rem)
      font-size (36/$rem)
      color #bbbbbb
      line-height (116/$rem)
    .affirm
      width (1020/$rem)
      height (146/$rem)
      background-color: #efca7d
      font-size (48/$rem)
      color #fff
      border-radius (10/$rem)
      margin 0 auto
      line-height (146/$rem)
      text-align center
</style>
