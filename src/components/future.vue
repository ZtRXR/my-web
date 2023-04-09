<template>
    <el-text class="mx-1" type="warning">本网站的内容正在使用新技术重新构建，敬请期待！</el-text>
    <el-calendar v-model="value" />
</template>

<script setup>
import {ref} from 'vue'

let value=ref(new Date);

</script>

<style scoped>

</style>