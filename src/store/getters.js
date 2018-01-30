export default {
  verification(){
    let url = "http://192.168.6.66:8001/api/OfficialAccounts/ValidateCode?time="
    let time = new Date().getTime()
    let src = url+ time
    return src
  }
}
