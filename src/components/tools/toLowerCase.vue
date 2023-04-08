<template>
    <el-input
            class="lc h-100"
            v-model="textarea"
            :autosize="{
                minRows: 10,

            }"
            :rows="2"
            type="textarea"
            placeholder="请输入大写字母"
    />
    <el-button class="btOK" type="success" @click="tolo()">转换为小写</el-button>
    <el-button class="btOK" type="success" @click="toup()">转换为大写</el-button>
</template>

<script setup>
import { ref } from 'vue'
const textarea = ref('')

function tolo(){
    textarea.value=textarea.value.toLowerCase()
}
function toup(){
    textarea.value=textarea.value.toUpperCase()
}

</script>

<style scoped>
.btOK{
    margin-top: 10px;
}
/*.lc{*/
/*    height: 300px;*/
/*}*/
</style>