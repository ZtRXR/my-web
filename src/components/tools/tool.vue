<template>
    <el-text class="mx-1" type="danger">类型介绍：</el-text>
    <el-button type="success">直接打开</el-button>
    <el-button type="warning">链接跳转</el-button>
    <el-divider></el-divider>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="工具名" width="auto" />
        <el-table-column prop="" label="链接">
            <template #default="{ row }">
                <a :href="row.address" target="_blank" v-if="!row.isRt"><el-button type="warning" plain >点击跳转</el-button></a>
                <router-link v-else :to="row.address"><el-button type="success" plain>点击跳转</el-button></router-link>
            </template>
        </el-table-column>
        <el-table-column prop="about" label="简介" width="180" />
    </el-table>
</template>

<script setup>
const tableData = [
    {
        name: '英文转小写',
        about: '用于AI绘画时转换大小写',
        address: 'toLowerCase',
        isRt: true,
    },
    {
        name: '笔顺码字典',
        about: '一个运用新的方法来查询汉字的工具',
        address: 'https://qqa.zziyu.top',
    },
    {
        name: '博客',
        about: '我的技术分享博客',
        address: 'https://blog.zziyu.top'
    },
    {
        name: '文件管理系统',
        about: '我的私人文件管理系统，一般不对外开放',
        address: 'https://file.zziyu.top:81'
    },
];
</script>

<style scoped>

</style>