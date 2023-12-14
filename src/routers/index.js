import { createRouter, createWebHistory } from "vue-router";


let routes = [
    {
        path: '/',
        name: 'home',
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('../view/home/index.vue')
    },
    {
        path: '/about',
        name: 'about',
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('../view/about/index.vue')
    },
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 