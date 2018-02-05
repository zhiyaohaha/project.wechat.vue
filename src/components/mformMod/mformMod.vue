<template>
  <div>
    <ul class="mform">
      <li v-for="(mformData, index) in mformDatas" :key="index">
        <span class="description">{{mformData.description}}</span>
        <input type="text" v-model="mformData.model" :class="{errorColor:mformData.errorColor}"
               @touchstart="pullDown(true,index)"
               @blur="loseFocus(mformData.reg,mformData.model,index)"
               @input="goodInput(mformData.reg,mformData.model,index)"
               @focus="isFooter"
               :placeholder="mformData.placeholder"
               :maxlength="mformData.maxlength"
               :name="mformData.name">
        <span :class="{purposeList:mformData.purposeList}" v-if="!mformData.sendMsg && !mformData.units"
              @touchstart="pullDown(true,index)">
                {{mformData.units}}
              </span>
        <a href="javascript:;" :class="{sendMsg:mformData.sendMsg}" v-if="mformData.sendMsg && mformData.units"
           @touchstart="sendMsg()">
          {{mformData.units}}
        </a>
      </li>
    </ul>
    <mt-popup v-model="shadeIsShow" position="bottom" @change="onValuesChange" class="maskLayer"
              showToolbar="true">
      <div class="shadeIsShowHeader">
          <span @touchstart="pullDown(false)" class="cancel">
            取消
          </span>
        <span @touchstart="pullDown(false)" class="ascertain">
            确定
          </span>
      </div>
      <mt-picker :itemHeight="70" :slots="slots" @change="onValuesChange"
                 class="shadeIsShowContent"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
  import
  export default {
    props: ["mformDatas","onValuesChange","sendMsg","isFooter"],
    data () {
      return {
        slots: [
          {
            defaultIndex: 1,
            flex: 1,
            className: "slots1",
            values: [],
            textAlign: 'center'
          }
        ],
        moneyArr: ["1000元", "1万元", "10万元", "60万元"],
        consumeArr: ["买车", "买房", "消费", "娱乐"],
        deadlineArr: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
        shadeIsShow: false,
      }
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
      //      错误变色
      loseFocus(reg, flag, index){
        this.simulationSubmitIsShow = true
        if (!reg.test(flag)) {
          for (let i = 0; i < this.mformDatas.length; i++) {
            this.mformDatas[index].errorColor = true
          }
        } else {
          for (let i = 0; i < this.mformDatas.length; i++) {
            this.mformDatas[index].errorColor = false
          }
        }
      },
      //      输入正确变色
      goodInput(reg, flag, index){
//        this.mformDatas[0].model >= 20000000 ? this.mformDatas[0].model = 20000000 : this.mformDatas[0].model
        if (reg.test(flag)) {
          for (let i = 0; i < this.mformDatas.length; i++) {
            this.mformDatas[index].errorColor = false
          }
        }
      },
      //      三角点击
      pullDown(flag, index){
        this.mformDatasInd = index
        switch (index) {
          case 0:
            this.slots[0].values = this.moneyArr
            this.shadeIsShow = flag
            break
          case 1:
            this.slots[0].values = this.consumeArr
            this.shadeIsShow = flag
            break
          case 2:
            this.slots[0].values = this.deadlineArr
            this.shadeIsShow = flag
            break
          default:
        }
      },

    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
