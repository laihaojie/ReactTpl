// Ctrl + Alt + V


export type App = {
  id: string;
  name: string;
  webPosition: Number;
  h5Position: Number;
};

export type UserInfo = {
  id: string;
  avatar: string;
  mobile: string;
  nickName: string;
  apps: App[];
};


export interface Policy {
  accessid: string,
  policy: string,
  signature: string,
  host: string,
  expire: string,
  dir: string
}

export type SmsModel = {
  data: Sms[],
  time: string
}

export type Sms = {
  id: number;
  thread_id: string;
  body: string;
  type: string;
  date: string;
  address: string;
  name: string;
  createTime: string;
  sub_id: string;
};

export type PushModel = {
  id: string;
  content: string;
  createTime: string;
  title: string;
  summary: string;
  categoryId: string;
};

export type PushRootModel = {
  pushModel: PushModel;
  detailData: any;
  userData: any;
};
