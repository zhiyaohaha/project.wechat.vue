<template>
  <div class="quickenLoansHistoryPage" v-if="demandList">
    <router-view/>
    <scroll class="wrapper"
            :data="demandList"
            :pullup="true"
            @scrollToEnd="loadData"
            v-if="$route.meta.isTop"
    >
      <section class="quickenLoansHistoryPageContent">
        <quickenLoansHistoryList :userInfos="demandList"/>
      </section>
      <footline :title="footlineData"/>
    </scroll>
  </div>
</template>
<script>
  import quickenLoansHistoryList from "../../components/quickenLoansHistoryList/quickenLoansHistoryList"
  import {mapState} from "vuex"

  export default {
    data() {
      return {
        footlineData: "查看更多",
      };
    },
    components: {
      quickenLoansHistoryList
    },

    computed: {
      ...mapState(["demandList"])
    },
    created() {
      if (!this.demandList) {
        this.$store.dispatch("getDemandList", {
          status: 0,
          id: "",
          size: 10
        })
      }

    },
    mounted() {
      if (this.demandList && this.demandList.length < 0) {
        this.footlineData = "暂无数据"
      }
    },

    updated() {
    },
    methods: {
      loadData() {
        let that = this, time
        if (this.footlineData === "查看更多") {
          this.footlineData = "加载中"
          this.$store.dispatch("getDemandList", {
            status: 0,
            id: that.demandList[that.demandList.length - 1].id,
            size: 10
          }).then((res) => {
            if (res.length > 0) {
              time = setTimeout(() => {
                console.log(1);
                this.demandList.push(...res)
                this.footlineData = "查看更多"
                clearTimeout(time)
              }, 500)
            } else {
              console.log(2);
              time = setTimeout(() => {
                this.footlineData = "没有更多数据拉"
                clearTimeout(time)
              }, 500)
            }
          })
        }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
