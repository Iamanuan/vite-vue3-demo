import axios from 'axios'
import { ElMessage } from "element-plus";

declare module 'axios' {
  interface AxiosResponse<T = any> {
    data: T;
    code: number;
    message: string
  }
}

//创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_APIHOST,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
})

// 请求拦截
service.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token') || ''
  }
  return config
})

// 响应拦截
service.interceptors.response.use((res) => {
  if (res.data.code !== 1000) {
    ElMessage.error(res.data.message)
    // return Promise.reject(res.data)
  }
  return res.data
}, (err) => {
  console.log(err);
})

export default service