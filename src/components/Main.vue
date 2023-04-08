<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row class="mb-4">
                    <el-button type="success" plain><router-link to="introduce">网站介绍</router-link></el-button>
                    <el-button type="success" plain>待开发</el-button>
                </el-row>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>