<template>
    <div>
        <HorizontalList :list="appList"></HorizontalList>
    </div>
</template>

<script lang="ts" setup>
import HorizontalList from '@/components/store/HorizontalList.vue';
import Application from '@/type/Application';
import { onMounted } from 'vue';
let appList: Array<Application> = [];
onMounted(() => {
    console.log("---");
    // 请求所有程序的数据
    appList.push({
        name: "数据清理",
        size: "100"
    })
    console.log("---", appList);

})
</script>
