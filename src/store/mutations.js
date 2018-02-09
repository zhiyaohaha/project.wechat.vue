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
  }
}
