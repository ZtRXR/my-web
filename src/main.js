import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router.js";
import axios from "axios";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
// axios.defaults.baseURL='https://xjp.zziyu.top';
axios.defaults.baseURL='http://127.0.0.1:2009';
app.config.globalProperties.$http = axios;

app.mount('#app');

function gotoMain(){
    this.$router.push('/')
}