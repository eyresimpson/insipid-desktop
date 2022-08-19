<template>
    <div>
        <!-- 软件卡片 -->
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>{{name}}</span>
                    <el-button class="button" text>Operation button</el-button>
                </div>
            </template>
            <div class="text item">默认</div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
    // 名称
    name: String,
    // 类型(程序/脚本/主题/插件)
    type: String,
    // 描述
    description: String,
    // 作者
    author: String,
    // 更新时间（最后上传时间）
    updateTime: Date,
    // 下载计数
    downloadCount: Number,
    // 评分
    grade: Number,
    // 截图
    picture: Array,
    // 大小(下载大小)
    size: String,
    // 语言（中文/英文/德文/韩文/日文...）
    language: String,
    // 评论(最高/最低/最新各3条，共计9条评论)
    comment: Object,
    // 费用
    cost: String
});
</script>
<style>
.card {
    background: #000;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
    /* background-color: rgb(41, 41, 41); */
}
</style>