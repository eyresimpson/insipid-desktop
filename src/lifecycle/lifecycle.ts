// 软件生命周期，后续会拆分
// 安装软件
const install = (name: string) => {
    // 检查本地缓存是否有安装包
    // 执行预检操作
    // 请求远程软件状态
    // 请求远程软件下载
    // 运行安装脚本
    // 安装后清理
    console.log(name);
}
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
    console.log(name);
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
