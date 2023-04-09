<template>
    <router-link to="/tools/bsmzd/main"><el-button type="info" plain>主页</el-button></router-link>
    <router-link to="/tools/bsmzd/about"><el-button type="info" plain>介绍</el-button></router-link>
    <el-divider />
    <router-view></router-view>
</template>

<script setup>

</script>

<style scoped>
.el-divider{
    margin: 2px 0px;
}
</style>