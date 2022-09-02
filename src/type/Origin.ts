// 这是起源的描述配置

export default class Origin {
  // 目标IP地址
  ip!: string;
  // 目标域名
  domainName?: string;
  // 目标端口
  port!: number;
  // 通信安全性（None/AES/DES/3DES）
  security?: string;
  // 上行限速
  upstreamLimit?: string;
  // 下行限速
  downstreamLimit?: string;
  // 起源类型（下行服务（通用服务）/全等服务）
  type!: string;
}
