import axios from 'axios'
import { Message } from 'element-ui'
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000
})
console.log(instance)
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开发环境下，如果请求是 post,put,patch,则打印数据体，方便调试
  if (process.env.NODE_ENV === 'development') {
    const { method } = config
    if (method === 'post' || method === 'put' || method === 'patch') {
      console.log(config.data)
    }
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  if (error && error.response) {
    switch (error.response.status) {
      case 401:
        Message.error({
          message: 'token失效'
        })
        break
      case 403:
        Message.error({
          message: '服务器拒接访问'
        })
        break
      case 404:
        Message.error({
          message: '未找到资源'
        })
        break
      case 500:
        Message.error({
          message: '服务器错误'
        })
        break
    }
  } else {
    Message.error({
      message: '网络问题'
    })
  }
  return Promise.reject(error)
})
export default instance
