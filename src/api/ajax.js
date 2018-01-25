import axios from 'axios'

export default async function ajax (url = '', data = {}, type = 'post') {
  return new Promise(function (resolve, reject) {

    let promise
    // if (type === 'GET') {
    // 准备url query参数数据
    // 发送get请求
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
      // axios.get(url)
    } else {
      // 发送post请求
      axios.post(url, data)
    }
    promise.then(response => {
     resolve(response.data)
     })
     .catch(error => {
     reject(error)
     })
  })
}
