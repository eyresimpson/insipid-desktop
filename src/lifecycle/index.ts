// 软件生命周期

import { requestSoftwareStatus } from "@/request";
import installFunc from "./install";

const install = installFunc;

// 配置软件
const config = (name: string) => {
    console.log(name);
}
// 运行时
const runtime = (name: string) => {
    // 启动
    // 停止
    // 强停
    // 重启
    // 状态
    console.log(name);
}
// 检查软件状态（本地状态）
const status = (name: string) => {
    const status = requestSoftwareStatus(name);
    console.log(status);
}
// 更新软件
const update = (name: string) => {
    console.log(name);
}
// 卸载软件
const uninstall = (name: string) => {
    console.log(name);
}

export {
    install, status, update, uninstall, config, runtime
}
