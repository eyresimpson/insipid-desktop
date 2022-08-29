// 此文件记录所有请求

import { get } from "@/tools/net";
import Application from "@/type/Application";

const baseurl = "http://localhost:2998/insipid/";

// 后缀路径列表
const RequestSoftware = {
  // 请求软件列表
  requestSoftwareList: baseurl + "app/list",
  // 请求指定软件的状态
  requestSoftwareStatus: baseurl + "request/software/status",
  // 请求指定软件的下载地址
  requestSoftwareDownload: baseurl + "request/software/download",
  // 请求指定软件的安装脚本
  requestScriptInstall: baseurl + "request/script/install",
  // 请求指定软件的升级脚本
  requestScriptUpdate: baseurl + "request/script/update",
  // 请求指定软件的卸载脚本
  requestScriptUninstall: baseurl + "request/script/uninstall",
};
const requestSoftwareList = async (filter: string): Promise<Application[]> => {
  console.log(
    "Request Path--->",
    RequestSoftware.requestSoftwareList + "?type=" + filter
  );
  return (await get(RequestSoftware.requestSoftwareList + "?type=" + filter))
    .data;
};

// 请求软件的状态
const requestSoftwareStatus = async (name: string) => {
  const status = await get(
    RequestSoftware.requestSoftwareStatus + "?name=" + name
  );
  console.log(status);
};

export { requestSoftwareStatus, requestSoftwareList };
