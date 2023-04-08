<template>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="工具名" width="180" />
        <el-table-column prop="about" label="简介" width="180" />
        <el-table-column prop="address" label="链接"></el-table-column>

    </el-table>
</template>

<script setup>
const tableData = [
    {
        name: '笔顺码字典',
        about: '一个新的查询汉字的工具',
        address: 'https://qqa.zziyu.top',
    },
];
</script>

<style scoped>

</style>