export default {
  GET_OPENID(state,{result}){
    console.log(result)
    state.openID = result
  },
  POST_SENDMSG(state,{result}){
    console.log(result)
    state.verification = result
  },

  POST_PHONE(state,{result}){
    console.log(result)
    state.phoneNote = result
  },
}
