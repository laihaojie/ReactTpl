import axios, { AxiosInstance, Method } from 'axios'
import { Toast } from 'antd-mobile'
import store from '@/store'
import Config from "../../package.json"
import { localGet, isWechat } from './index'


interface RespData {
  code: number
  data?: any
  message?: string
}

const service: AxiosInstance = axios.create({
  baseURL: Config.baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// 拦截请求
service.interceptors.request.use(
  config => {
    config.headers = { ...config.headers }
    config.headers["token"] = localGet("token") || ""
    return config
  },
  error => {
    // console.log(error);
    return Promise.reject(error)
  }
)

// 拦截响应
service.interceptors.response.use(res => {
  const data: RespData = res.data as any
  if (data.code == 1) return data.data
  if (data.code == 1000) return data
  if (!data.code) return data
  if (data.code == 401) {
    // 清除token
    // store.dispatch(getClearTokenAction())
    window.location.href = `/login?url=${encodeURIComponent(window.location.href)}`
    return new Promise(() => { })
  }
  return Promise.reject(data.message)
},
  async error => {
    Toast.show({ content: error.message })
    return new Promise(() => { })
  }
)

async function request<T>(url: string, method: Method, data = {}): Promise<T> {
  return await service({ url, method, [method.toLocaleLowerCase() === 'get' ? 'params' : 'data']: data }).catch((error) => {
    console.log(error);
    Toast.show({ content: error instanceof Error ? "服务器繁忙" : error })
    return new Promise(() => { })
  }) as T
}

export default service
export const Get = <T>(url: string, data?: Object | {}): Promise<T> => request<T>(url, "get", data)
export const Post = <T>(url: string, data?: Object | {}): Promise<T> => request<T>(url, "post", data)

