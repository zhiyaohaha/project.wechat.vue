import axios from 'axios'
import {postAuth} from '../../static/js/viewportWidth'

export default async function ajax (url = '', data = {}, type = 'GET') {

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
    axios.get(url)
      .then(response => {
        console.log(response)
        //如果成功调用成功的函数 返回data数据 mock  data对象
        // resolve(response.data)
      })
      .catch(error => {
        console.log(error)
        // reject(error)
      })
    // axios.get(url)
  } else {
    // 发送post请求
    // debugger
    axios({
      method: 'post',
      url: url,
      data: postAuth(JSON.stringify(data))
    })
      .then(response => {
        console.log(response)
        //如果成功调用成功的函数 返回data数据 mock  data对象
        // resolve(response)
      })
      .catch(error => {
        console.log(error)
        // reject(error)
      })
  }

}

