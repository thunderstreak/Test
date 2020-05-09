import axios from 'axios'
import Router from '../router'
import baseUrl from './baseUrl'

axios.interceptors.request.use(
  config => {
    config.headers.proxy = baseUrl
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.defaults.timeout = 36000000 // 设置超时时间

axios.interceptors.response.use(
  response => {
    // 检测某种状态进行重定向
    if (response.data.code === 403) {
      Router.push({
        name: 'login'
      })
    }
    return response
  },
  error => {
    return Promise.resolve(error.response)
  }
)

axios.defaults.withCredentials = true
axios.defaults.baseURL = baseUrl

export default axios
