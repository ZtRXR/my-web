<template>
    <div class="titleP">
        <el-text tag="b" size="large" class="title">笔顺码字典</el-text>
        <div class="mb-2 flex items-center text-sm" @keyup.enter="search">
            <el-radio-group v-model="fTS" class="ml-4">
                <el-radio label="bsm" size="large">查询笔顺码</el-radio>
                <el-radio label="hz" size="large">查询汉字</el-radio>
            </el-radio-group>
            <div class="input-container">
                <el-input
                    v-model="iText"
                    maxlength="51"
                    placeholder="请输入"
                    show-word-limit
                    type="text"
                    size="large"
                ></el-input>
                <el-button type="primary" size="large" @click="search">确认查询</el-button>
            </div>
        </div>

    </div>
</template>

<script setup>
import {ref} from "vue";
import router from "../../../router.js";
import {ElMessage} from "element-plus";
let iText=ref('');
let fTS = ref('bsm');

function search(){
    const w = iText.value
    const fuc = fTS.value

    // 正则表达式，匹配只包含小写字母的字符串
    const pattern = /^[a-z]+$/;
    const hzp = /^[\u4e00-\u9fa5]+$/;

    if (pattern.test(w)&&fTS.value==='bsm'||hzp.test(w)&& fTS.value==='hz') {
        // 如果输入的文本只包含小写字母，则执行以下逻辑
        router.push({ name: 'bsmzdSearch', params: { w, fuc }});
    } else {
        // 如果输入的文本包含其他字符，则执行以下逻辑
        ElMessage({
            message: '输入的文本必须只包含小写字母 或者 只包含汉字 并且选择正确的模式',
            type: 'warning',
        })
    }
}

</script>

<style scoped>
.input-container {
    display: flex;
    align-items: center;
}
.input-container *{
    margin-left: 10px;
}

.titleP {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.titleP *{
    margin-bottom: 10px;
    /*width: 100%;*/
}
.titleP div {
    width: 100%;
}
el-input{
    height: 30px;
}
.title{
    font-size: 50px;
}
</style>