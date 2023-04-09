<template>
    <el-card class="box-card" v-loading="loading">
        <template #header>
            <div class="card-header">
                <span>{{ret.hz}}</span>
            </div>
        </template>
        <div class="text item">
            <div>笔顺码：{{ret.bsm}}</div>
            <div>解释：</div>
            <div v-for="item in ret.pyJs">{{item}}</div>
        </div>
    </el-card>
</template>

<script setup>
import {useRoute} from 'vue-router'
import axios from "axios";
import {ElMessage} from "element-plus";
import {ref} from "vue";

const route = useRoute()
const params = route.params;


let loading=ref(true)
let ret =ref({});
async function load(){
    try {
        ret.value = await axios.get('/bsmzd/id/', {
            params: {
                id: params.id,
            },
            timeout: 5000, // 设置5秒超时
        });
        // console.log(ret.value)
        // 处理响应数据
        loading.value=false;
    } catch (error) {
        ElMessage({
            message: '服务器超时响应，网络错误！',
            type: "error",
        })
    }
    ret.value=ret.value.data;
}
load()
</script>

<style scoped>
.card-header{
    font-size: 50px;
}
</style>