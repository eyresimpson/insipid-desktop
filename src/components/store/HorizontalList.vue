<template>
    <div class="list-group">
        <!-- 单一窗格 -->
        <HorizontalCard v-for="(item, index) in list" :key="index" :app="item"></HorizontalCard>
    </div>
</template>

<script lang="ts" setup>
import HorizontalCard from '@/components/store/HorizontalCard.vue'
import Application from '@/type/Application';
import { defineProps } from "vue";


defineProps<{
    list: Array<Application>,
}>()



</script>
<style>
.card {
    background: #000;
}

.list-group {
    /* background: rgb(197, 245, 247); */
}
</style>
