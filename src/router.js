import {createRouter,createWebHashHistory} from "vue-router";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Main from "./components/Main.vue";

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

                },
            ]
        },

    ]
});

export default router;