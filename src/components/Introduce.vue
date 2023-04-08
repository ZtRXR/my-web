<template>
    <el-row>
        <el-text class="mx-1" size="large">我 与 网站的介绍 | 我的邮箱 </el-text>
        <el-button type="warning" :icon="Message" circle @click="open" />
    </el-row>
    <el-timeline>
        <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
        >
            {{ activity.content }}
        </el-timeline-item>
    </el-timeline>
    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
        <span>This is a message</span>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
        </template>
    </el-dialog>

</template>

<script setup>
import {
    Message,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import {ElMessage, ElMessageBox} from "element-plus";

function open(){
  ElMessageBox.alert('Zengtudor@163.com','如果想要联系我合作请联系下面的邮箱：')
}



let activities = [
    {
        content: '未来将整合为大型功能网站',
        timestamp: 'Future'
    },
    {
        content: '开始用新技术重新构建新网站',
        timestamp: '2023-04-08',
    },
    {
      content: '学习python flask框架',
      timestamp: '2023-02-xx'
    },
    {
        content: '学习前后端分离',
        timestamp: '2022-xx-xx',
    },
    {
        content: '第一版网站',
        timestamp: '2021-xx-xx',
    },
]
</script>

<style scoped>

</style>