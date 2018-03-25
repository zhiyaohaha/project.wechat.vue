export default {
  GET_OPENID(state,{result}){
    console.log(result)
    //用户是否登陆
    state.openID = result.success
  },
  POST_SENDMSG(state,{result}){
    console.log(result)
    //验证码
    state.verification = result
  },
  POST_PHONE(state,{result}){
    console.log(result)
    //手机认证
    state.phoneNote = result
  },
  GET_USERINFO(state,{result}){
    result = JSON.stringify(result)
    console.log(result)
    //用户基本信息
    state.userinfo = result
  },
  GET_LISTFORAPP(state,{result}){
    console.log(result)
    //首页产品列表
    state.recommendModDatas = result.data
  },
  GET_LISTFORAPPLONG(state,{result}){
    console.log(result)
    //产品列表
    state.recommendDatas = result.data
  },
  GET_DETAILEDFOR(state,{result}){
    console.log(result)
    //产品详情
    state.productDetailsPageData = result.data
  },
  GET_LISTBANKS(state,{result}){
    console.log(result)
    //11大银行列表
    state.listBanks = result
  },
  GET_HOMELISTBANKCARD(state,{result}){
    console.log(result)
    //首页热门银行卡列表
    state.homeListBankCard = result.data
  },
  GET_CREDITLISTBANKCARD(state,{result}){
    console.log(result)
    //银行卡列表
    state.creditListBankCard = result.data
  },
  GET_ALLLISTBANKCARD(state,{result}){
    console.log(result)
    //赛选银行列表
    state.ALLListBankCard = result.data
  },
  GET_LISTBANKCARDDETAIL(state,{result}){
    console.log(result)
    //银行卡详情
    state.bankCardDetail = result.data
  },
  GET_INVITEURL(state,{result}){
    console.log(result)
    //二维码
    state.inviteurl = result.message
  },
  GET_NEWSLISTFOR(state,{result}){
    console.log(result)
    //推广素材列表
    state.newsListFor = result.data
  },
  GET_NEWSLIST(state,{result}){
    console.log(result)
    //赛选列表
    state.newsList = result.data
  },
  GET_DETAILFORAPP(state,{result}){
    console.log(result)
    //文章详情
    state.detailForApp = result.data
  },
  GET_ORDERLISTFOR1(state,{result}){
    console.log(result)
    //我的订单列表
    state.orderListFor1 = result
  },
  GET_USERRELATED(state,{result}){
    // console.log(result)
    //我的订单列表
    let data
    result.data.forEach((item,index,input)=>{
      item.imgShow = false
      data = input
    })
    state.userrelated = data
  },
  /*GET_ORDERLISTFOR2(state,{result}){
    console.log(result)
    //我的订单列表
    state.orderListFor2 = result
  },
  GET_ORDERLISTFOR3(state,{result}){
    console.log(result)
    //我的订单列表
    state.orderListFor3 = result
  },*/
}
