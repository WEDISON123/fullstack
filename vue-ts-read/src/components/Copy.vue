<template>
    <div>
        <div class="flex items-center cursor-pointer" @click="copyToCliboard">
            <span class="text-xs ml-0 5 text-gary-500 leading-none">
                {{ btnTips[btnStatus] }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const props = defineProps<{ content: string }>()
const btnStatus = ref<"copy" | "loading" | "success" | "err">("copy")
const btnTips = {
    copy: "复制",
    loading: "正在复制",
    success: "成功复制到剪贴板",
    err: "复制失败"
}
const copyToCliboard = () => {

}
</script>

<style scoped>

</style>