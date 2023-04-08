<template>
    <div class="common-layout">
        <el-container>
            <el-header><el-row>
                <el-col :span="24">
                    <el-button type="success" plain @click="">Zengtudor</el-button>
                    <el-button type="primary">Primary</el-button>
                </el-col>
            </el-row></el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>

</style>