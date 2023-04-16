<template>
    <router-link to="/tools/bsmzd/main"><el-button type="info" plain>主页</el-button></router-link>
    <router-link to="/tools/bsmzd/about"><el-button type="info" plain>介绍</el-button></router-link>
    <el-button type="info" plain @click="gotoBuy">购买字典</el-button>
    <el-divider />
    <router-view></router-view>
</template>

<script setup>
function gotoBuy(){
    window.open('https://item.jd.com/13552241.html');
}
</script>

<style scoped>
.el-button{
    margin-right: 3px;
}
.el-divider{
    margin: 2px 0px;
}
</style>