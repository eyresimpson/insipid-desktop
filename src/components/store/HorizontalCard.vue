<template>
    <div>
        <!-- 软件卡片 -->
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>{{ (app as Application).name }}</span>
                    <el-button type="success" class="button" text>安装</el-button>
                </div>
            </template>
            <div class="text item">默认</div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import Application from "@/type/Application";
import { defineProps } from "vue";

defineProps({
    app: Application
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