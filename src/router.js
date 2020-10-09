import Vue from 'vue'
import Layout from './layout/index'
import Router from 'vue-router'
import Admin from './pages/admin'


Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Layout,
            children: [
                {
                    path: "",
                    name: "Home",
                    hidden: true,
                    component: () => import("./pages/home"),
                    meta: { title: "有心人驿站-首页" }
                },
                {
                    path: "/golang",
                    name: "Golang",
                    hidden: true,
                    component: () => import("./pages/golang"),
                    meta: { title: "有心人驿站-Golang" }
                },
                {
                    path: "/docker",
                    name: "Docker",
                    hidden: true,
                    component: () => import("./pages/docker"),
                    meta: { title: "有心人驿站-Docker" }
                },
                {
                    path: "/k8s",
                    name: "K8S",
                    hidden: true,
                    component: () => import("./pages/k8s"),
                    meta: { title: "有心人驿站-K8S" }
                },
                {
                    path: "/count",
                    name: "Count",
                    hidden: true,
                    component: () => import("./pages/count"),
                    meta: { title: "有心人驿站-算法" }
                },
                {
                    path: "/pc",
                    name: "PC",
                    hidden: true,
                    component: () => import("./pages/pc"),
                    meta: { title: "有心人驿站-操作系统" }
                },
                {
                    path: "/about",
                    name: "About",
                    hidden: true,
                    component: () => import("./pages/about"),
                    meta: { title: "有心人驿站-关于" }
                }

            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Layout,
            meta: { title: "有心人驿站-登录" }
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: { title: "有心人驿站" }
        },
    ]
});