// 此文件记录所有请求

import { get } from '@/tools/net'

const baseurl = "http://127.0.0.1:8886/insipid/";

// 后缀路径列表
const RequestSoftware = {
    // 请求所有软件列表（相当于请求所有软件的状态）
    requestSoftwareList: "request/software/list",
    // 请求指定软件的状态
    requestSoftwareStatus: "request/software/status",
    // 请求指定软件的下载地址
    requestSoftwareDownload: "request/software/download",
    // 请求指定软件的安装脚本
    requestScriptInstall: "request/script/install",
    // 请求指定软件的升级脚本
    requestScriptUpdate: "request/script/update",
    // 请求指定软件的卸载脚本
    requestScriptUninstall: "request/script/uninstall",
}

const requestSoftwareStatus = () => {
    get(baseurl + RequestSoftware.requestSoftwareStatus,
        () => {
            console.log();

        })
}

export {
    requestSoftwareStatus
}