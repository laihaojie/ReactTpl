import { Sms, SmsModel } from "../typings/api";
import { Get } from "../utils/request";


// 获取百度网盘验证码
export const GetSmsBaiduPan = () => Get<SmsModel>(`/api/app/smsupload/GetBaiduPanLogin`)

// 获取百度网盘验证码
export const GetAllSms = () => Get<SmsModel>(`/api/app/smsupload/GetAllSms`)