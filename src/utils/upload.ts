import axios from "axios";
import { compressAccurately } from "image-conversion";
import { Toast } from "antd-mobile";
import { Policy } from "../typings/api";
import { Get } from "./request";

export function random_string(len?: number) {
  len = len || 32;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

export function get_suffix(filename: string) {
  const pos = filename.lastIndexOf('.')
  var suffix = ''
  if (pos != -1) {
    suffix = filename.substring(pos)
  }
  return suffix;
}

export async function uploadFile(file: File) {

  const resp = await Get<Policy>("/api/Public/oss/policy");
  var key = random_string() + get_suffix(file.name)
  // var key = file.name

  var filename = resp.dir + key;

  var formData = new FormData();
  formData.append('key', filename);
  formData.append('policy', resp.policy);
  formData.append('OSSAccessKeyId', resp.accessid);
  formData.append('success_action_status', '200');
  formData.append('signature', resp.signature);
  formData.append('file', file);
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  await axios.post(resp.host, formData, config).catch(error => { Toast.show({ content: "上传失败" }) });
  return `${resp.host}${resp.host.substr(-1) == "/" ? "" : "/"}${filename}`
}

export async function uploadImgFile(file: File) {
  if (file.size / 1024 / 1024 <= 1) return uploadFile(file)

  const res = await compressAccurately(file, 100)

  return uploadFile(new File([res], file.name))
}