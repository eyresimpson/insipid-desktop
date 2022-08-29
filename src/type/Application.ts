import ShortComment from "@/type/ShortComment";
export default class Application {
  // 名称
  name!: string;
  // 类型(程序/脚本/主题/插件)
  type!: "app"|"script"|"theme"|"plugin";
  // 描述
  description!: string;
  // 作者
  author!: string;
  // 图标
  icon?: string;
  // 更新时间（最后上传时间）
  updateTime!: Date;
  // 下载计数
  downloadCount!: number;
  // 评分
  grade!: number;
  // 截图
  picture!: Array<string>;
  // 大小(下载大小)
  size!: string;
  // 语言（中文/英文/德文/韩文/日文...）
  language!: string;
  // 评论(最高/最低/最新各3条，共计9条评论)
  comment?: ShortComment;
  // 费用
  cost!: string;
  // 应用状态(已安装/未安装/保持旧版本/自动更新)
  state?: "installed"|"uninstalled"|"old-version"|"auto-update";
}
