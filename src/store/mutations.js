export default {
  GET_OPENID(state,{result}){
    console.log(result)
    state.openID = result.success
  },
  POST_SENDMSG(state,{result}){
    console.log(result)
    state.verification = result
  },
  POST_PHONE(state,{result}){
    console.log(result)
    state.phoneNote = result
  },
  SAVE_POSITION(state,{result}){
    console.log(result)
    state.scroll = result
  },
  GET_USERINFO(state,{result}){
    result = JSON.stringify(result)
    console.log(result)
    state.userinfo = result
  },
  GET_LISTFORAPP(state,{result}){
    console.log(result)
    state.recommendModDatas = result.data
  },
  GET_LISTFORAPPLONG(state,{result}){
    console.log(result)
    state.recommendDatas = result.data
  },
  GET_DETAILEDFOR(state,{result}){
    console.log(result)
    state.productDetailsPageData = result.data
  },
  GET_LISTBANKS(state,{result}){
    console.log(result)
    state.listBanks = result
  },
  GET_HOMELISTBANKCARD(state,{result}){
    console.log(result)
    state.homeListBankCard = result.data
  },
  GET_CREDITLISTBANKCARD(state,{result}){
    console.log(result)
    state.creditListBankCard = result.data
  },
}
