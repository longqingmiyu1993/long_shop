import {createRouter,createWebHashHistory} from "vue-router"

import Index from "../pages/shop/Index.vue"
import Sort from "../pages/shop/Sort.vue"
import News from "../pages/shop/News.vue"
import Car from "../pages/shop/Car.vue"
import Me from "../pages/shop/Me.vue"

const routes = [
    {
        path:"/",
        redirect:"/index",

    },
    {
        path:"/index",
        name:"index",
        component:Index,
    },
    {
        path:"/sort",
        name:"sort",
        component:Sort,
    },
    {
        path:"/news",
        name:"news",
        component:News,
    },
    {
        path:"/car",
        name:"car",
        component:Car,
    },
    {
        path:"/me",
        name:"Me",
        component:Me,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;