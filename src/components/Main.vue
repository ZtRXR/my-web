<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row class="mb-4 ztop">
                    <router-link to="introduce"><el-button type="success" plain>网站介绍</el-button></router-link>
                    <router-link to="future"><el-button type="success" plain>待开发</el-button></router-link>
                </el-row>
            </el-header>
            <el-divider />
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-divider />
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script setup>

</script>

<style scoped>
.ztop router-link{
    margin-left: 10px;
}
</style>