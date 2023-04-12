<template>
    <el-row v-loading="loading">
        <el-card class="box-card" v-for="(item,index) in ans">
            <!--            <template #header>-->
            <div class="card-header">
                <span>{{ item.hz }}</span>
                <el-button class="button" @click="aboutId(item.id)" plain>详情</el-button>
            </div>
            <!--            </template>-->
        </el-card>
    </el-row>
    <div class="demo-pagination-block">
        <el-pagination
            v-model:current-page="currentPage3"
            v-model:page-size="pageSize3"
            :small="true"
            :disabled="false"
            :background="true"
            layout="prev, pager, next, jumper"
            :total="total"
            @current-change="newAns"
        />
    </div>
<!--    @size-change="handleSizeChange"-->

</template>

<script setup>
import {reactive, ref} from 'vue'
import {useRoute} from 'vue-router'
import axios from "axios";
import {ElMessage} from "element-plus";
import router from "../../../router.js";

const route = useRoute()
const params = reactive(route.params)

const w = params.w;
const fuc = params.fuc;
let ans=ref([]);

let loading = ref(true);
let currentPage3 = ref(1);
let pageSize3 = ref(30);
let total = ref(0);
let tans=[];

function aboutId(id){
    // console.log(id)
    window.open('/#/tools/bsmzd/id/'+id);
    // router.push({
    //     name: 'bsmzdId',
    //     params:{
    //         id: id,
    //     }
    // });
}

async function flushans(){
    let ret;
    try {
        ret = await axios.get('/bsmzd/search', {
            params: {
                w: w,
                fuc: fuc,
            },
            timeout: 5000, // 设置5秒超时
        });
        // 处理响应数据
    } catch (error) {
        ElMessage({
            message: '服务器超时响应，网络错误！',
            type: "error",
        })
    }
    ret=ret.data;
    if(ret.err){
        ElMessage({
            message: '请求参数缺失',
            type: "error",
        })
    }
    ret = ret.arr;
    tans=ret;
    // console.log(ans.value,ret);
    // console.log(ans.value)
    total.value=tans.length;
    newAns(currentPage3.value)
    loading.value=false;
}
flushans()
function newAns(num){
    // console.log(total.value,tans,num,tans.length/10)
    let a=[];
    for(let i=0;i<=pageSize3.value&&(num-1)*pageSize3.value+i<tans.length;i++){
        a.push(tans[(num-1)*pageSize3.value+i])
    }
    ans.value=a;
    // ans.value=tans;
}


// console.log(w);
</script>

<style scoped>
.demo-pagination-block{
    display: flex;
    justify-content: center;
}
.parCard{
    display: flex;
    flex-wrap: wrap;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 90px;
    margin: 2px 2px;
}
.card-header {
    font-size: 30px;
}
</style>