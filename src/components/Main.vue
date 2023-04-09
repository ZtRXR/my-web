<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row class="mb-auto ztop">
                    <router-link to="/introduce"><el-button :type='topBarType' plain>网站介绍</el-button></router-link>
                    <router-link to="/tools"><el-button :type='topBarType' plain>工具集</el-button> </router-link>
                    <router-link to="/future"><el-button :type='topBarType' plain>敬请期待</el-button></router-link>
                </el-row>
            </el-header>
            <el-divider />
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-divider />
            <el-footer>
                <el-space direction="vertical">
                    <el-text>
                        <el-icon>
                            <ElementPlus />
                        </el-icon>
                        网站制作者：曾子愚   |   技术使用：Vite 、Vue 、 Element-Plus ... 模板参考开发
                    </el-text>
                </el-space>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
import {ElementPlus} from "@element-plus/icons-vue";
let topBarType='primary'
</script>

<style scoped>
.el-divider {
    margin: 5px 0;
}
.ztop *{
    margin-left: 2px;
}
.el-header {
    display: flex;
    align-items: center; /* 垂直居中 */
}
.el-row {
    padding: 0;
}

</style>