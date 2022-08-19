<template>
    <div>
        <!-- 单一窗格 -->
        <HorizontalCard v-for="(item, index) in list" :key="index" :name="item.name"></HorizontalCard>
    </div>
</template>

<script lang="ts" setup>
import HorizontalCard from '@/components/store/HorizontalCard.vue'
import Application from '@/type/Application';
import { defineProps } from "vue";
// const list  = defineProps(Array<boolean>);
defineProps<{
    list?: Array<Application>,
}>()
// defineProps<Application[]>()
</script>
<style>
.card {
    background: #000;
}
</style>