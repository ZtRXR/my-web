<template>
    <el-card class="box-card" v-loading="loading">
        <template #header>
            <div class="card-header">
                <span>{{ret.hz}}</span>
            </div>
        </template>
        <div class="text item">
            <div>笔顺码：{{ret.bsm}}</div>
            <div>笔画：{{ret.fy}}</div>
            <div v-for="(item,index) in ret.pyJs">
                <el-divider v-if="index%2===0"/>
                {{item}}
            </div>
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
    ret.value.fy=Fy(ret.value.bsm)
}
load()

const fy={
    "a": "横",
    "b": "横竖",
    "c": "横竖横乙形",
    "d": "横竖横竖",
    "e": "横竖左勾",
    "f": "横竖右勾",
    "g": "横勾",
    "h": "横撇",
    "i": "横撇横撇",
    "j": "横撇左弯勾",
    "k": "竖",
    "l": "竖横",
    "m": "竖横竖，撇横撇",
    "n": "竖横上勾",
    "o": "竖左勾",
    "p": "竖右勾|竖提",
    "q": "撇",
    "r": "横撇",
    "s": "撇长点",
    "t": "捺",
    "u": "左弯勾",
    "v": "右弯勾",
    "w": "提",
    "x": "提，捺",
    "y": "左点",
    "z": "右点"
}

function Fy(str){
    let fyRet = "";
    for(let i=0;i<str.length;i++){
        fyRet = fyRet+fy[str[i]]+" | ";
    }
    return fyRet;
}
</script>

<style scoped>
.card-header{
    font-size: 50px;
}

</style>