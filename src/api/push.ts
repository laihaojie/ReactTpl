import { PushRootModel } from "../typings/api";
import { Get } from "../utils/request";


// 获取推送信息
export const getPushData = (category, id) => Get<PushRootModel>(`/api/app/push/pushinfo`, { id, category, })
