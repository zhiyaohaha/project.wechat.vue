import axios from 'axios'
import md5 from 'js-md5'
import { postAuth } from '../../static/js/viewportWidth'
axios.defaults.withCredentials = true
export default async function ajax (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // if (type === 'GET') {
    // 准备url query参数数据
    // 发送get请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串

      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })

      if (dataStr !== '') {
        let timestamp = (new Date().getTime()).toString().substr(0, 10)
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        let sign = md5(dataStr + timestamp + '84qudMIhOkX5JMQXVd0f4jneqfP2Lp')
        url = url + '?' + dataStr + '&timestamp=' + timestamp + '&sign=' + sign
      }
      promise = axios.get(url)
      // axios.get(url)
    } else {
      // 发送post请求
      // debugger
      promise = axios({
        method: 'post',
        url: url,
        data: postAuth(JSON.stringify(data)),
      })
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

