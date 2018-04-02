<template>
  <div>
    <header class="creditHistoryHeader">
      <div :class="{active:headerDatasIndex === index}"
           v-for="(headerData, index) in headerDatas" :key="index" @touchstart="changeColor(index)">
        {{headerData.title}}
      </div>
    </header>
    <section class="listBox">
        <ul v-if="conceal">
            <li v-for="(userInfo, index) in userInfos" :key="index">
                <div class="pic">
                    <img :src="userInfo.url" alt="">
                </div>
                <div class="content">
                    <p>
                        <span class="fl">{{userInfo.applyTime}}</span>
                        <span class="fr">{{userInfo.continuous}}</span>
                    </p>
                    <p>
                        <span>有房</span>
                        <span>有车</span>
                        <span>有信用卡</span>
                        <span>有公积金</span>
                        <span>有保单</span>
                    </p>
                    <p>
                        <span class="fl">{{userInfo.userName}}</span>
                        <span class="fr">（{{userInfo.state}}）{{userInfo.money}}元</span>
                    </p>
                </div>
            </li>
        </ul>
        <ul v-if="!conceal">
            <h1>123123123123123123123</h1>
        </ul>
    </section>
      
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerDatas: [
        {
            title: "未结单（8888）"
        },
        {
            title: "已结单（9999）"
        }
      ],
      userInfos: [
        { 
            url:'/static/img/2.3f2986e.jpg',
            applyTime:'20XX-XX-XX XX:XX:XX申请1',
            continuous: '12个月',
            userName: '程建',
            state: '已提交',
            money: '10000.00元'
        },
        {
            url:'/static/img/2.3f2986e.jpg',
            applyTime:'20XX-XX-XX XX:XX:XX申请1',
            continuous: '12个月',
            userName: '程建',
            state: '已提交',
            money: '10000.00元'
        }
      ],
      headerDatasIndex: 0,
      conceal: true
    };
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    changeColor(index) {
      this.headerDatasIndex = index;
      if (index === 1) {
        this.conceal = false;
      } else {
        this.conceal = true;
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.creditHistoryHeader 
    border-bottom 1px solid #f2f2f2
    width (1080 / $rem)
    height (110 / $rem)
    div 
        box-sizing border-box
        float left
        width (540 / $rem)
        height (110 / $rem)
        background-color #fff
        font-size (46 / $rem)
        color #333
        text-align center
        line-height (110 / $rem)
        transition all 0.5s
        border-bottom 1px solid #333
        &.active 
            color #efca7d
.listBox
    li
        padding (40/$rem)
        height (270/$rem)
        display flex
        border-bottom 1px solid #333
        .pic
            flex 1.2
            height 100%
            img
                width 100%
                height 100%
        .content    
            flex 3
            height 100%
            font-size (36 / $rem)
            p
                height (90 / $rem)
                line-height (90 / $rem)
                margin-left (20 / $rem)
                .fl
                    float left
                .fr
                    float right
</style>
