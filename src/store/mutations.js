export default {
  POST_SENDMSG(state,{result}){
    console.log(result)
    state.verification = result
  },
  GET_OPENID(state,{result}){
    console.log(result)
    state.openID = result
  },
}
