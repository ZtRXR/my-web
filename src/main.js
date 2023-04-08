import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//导入bootstrap
// import  './assets/js/bootstrap.min.css'
// import './assets/js/bootstrap.bundle.min.js'

// import bootstrap from 'bootstrap'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from "./router.js";
const app = createApp(App);

app.use(router)
app.use(ElementPlus)

app.mount('#app');

function gotoMain(){
    this.$router.push('/')
}