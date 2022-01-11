
import { App, UserInfo } from './index';


export type AccountStore = {
  userinfo: UserInfo
  apps: App[],
  token: string
}
