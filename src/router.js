import {createRouter,createWebHashHistory} from "vue-router";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Main from "./components/Main.vue";
import introduce from "./components/Introduce.vue";
import future from "./components/future.vue";

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
                }
            ]
        },

    ]
});

export default router;