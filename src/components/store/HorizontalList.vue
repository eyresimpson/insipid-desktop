<template>
    <div>
        <!-- 单一窗格 -->
        <HorizontalCard v-for="(item, index) in list" :key="index" :name="item.name"></HorizontalCard>
    </div>
</template>

<script lang="ts" setup>
import HorizontalCard from '@/components/store/HorizontalCard.vue'
import Application from '@/type/Application';
import { defineProps, onMounted } from "vue";


const props = defineProps<{
    list: Array<Application>,
}>()


console.log("steup ---> List", props.list.length);
onMounted(() => {
    console.log("---> List", props.list);

})

</script>
<style>
.card {
    background: #000;
}
</style>