import axios, { Get, Post } from '@/utils/request'
import { UserInfo } from '../typings/api'


// 登录接口
//export const Login = (data) => axios({ url: '/api/Account/login', method: 'post', data:{...data,apiType:config.apiType}})
export const Login = (data) => Post<string>('/api/Account/login', data)


// 获取登录用户信息
export const GetUserinfo = () => Get<UserInfo>(`/api/Account/info`)


// 发送验证码
export const SendMsCode = (data) => Post(`/api/Public/send_sms`, data)


// 发送验证码
export const GetQrCode = (data) => Post(`/api/public/qrcode`, data)