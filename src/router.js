import {createRouter,createWebHashHistory} from "vue-router";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Main from "./components/Main.vue";
import introduce from "./components/Introduce.vue";
import future from "./components/future.vue";
import tool from "./components/tools/tool.vue";
import toolsMain from './components/tools-main.vue'
import toLowerCase from './components/tools/toLowerCase.vue'
import bsmzd from "./components/tools/bsmzd.vue";
import bsmzdMain from './components/tools/bsmzd/main.vue'

const router = createRouter({
    history:createWebHashHistory(),

    routes:[
        {
            path:'/',
            component: Main,
            redirect: '/introduce',
            name: 'rootPage',
            children:[
                {
                    path:'HelloWorld',
                    component: HelloWorld,
                    name: 'HelloWorld',
                },
                {
                    path: 'introduce',
                    component: introduce,
                    name: 'introduce',
                },
                {
                    path: 'future',
                    component: future,
                    name: 'future',
                },
                {
                    path: '/tools',
                    component: toolsMain,
                    name: 'tools-main',
                    redirect: '/tools/main',
                    children:[
                        {
                            path: 'main',
                            component: tool,
                            name: 'tools'
                        },
                        {
                            path: 'toLowerCase',
                            component: toLowerCase,
                            name: 'toLowerCase'
                        },
                        {
                            path: 'bsmzd',
                            component: bsmzd,
                            name: 'bsmzd',
                            redirect: '/tools/bsmzd/main',
                            children: [
                                {
                                    path: 'main',
                                    component: bsmzdMain,
                                    name: bsmzdMain,
                                }
                            ]
                        },
                    ],
                },
            ]
        },

    ]
});

export default router;