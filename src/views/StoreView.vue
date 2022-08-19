<template>
    <div>
        <HorizontalList :list="appList"></HorizontalList>
    </div>
</template>

<script lang="ts" setup>
import HorizontalList from '@/components/store/HorizontalList.vue';
import Application from '@/type/Application';
import { onMounted } from 'vue';
const appList:Array<Application> = [];
onMounted(() => {
  console.log("---");
  // 请求所有程序的数据

})
</script>
