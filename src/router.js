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
                    hidden: true,
                    component: () => import("./pages/home"),
                    meta: { title: "有心人驿站" }
                },
                {
                    path: "/golang",
                    hidden: true,
                    component: () => import("./pages/golang"),
                    meta: { title: "有心人驿站" }
                },
                {
                    path: "/docker",
                    hidden: true,
                    component: () => import("./pages/docker"),
                    meta: { title: "有心人驿站" }
                },
                {
                    path: "k8s",
                    hidden: true,
                    component: () => import("./pages/k8s"),
                    meta: { title: "有心人驿站" }
                },
                {
                    path: "count",
                    hidden: true,
                    component: () => import("./pages/count"),
                    meta: { title: "有心人驿站" }
                },
                {
                    path: "pc",
                    hidden: true,
                    component: () => import("./pages/pc"),
                    meta: { title: "有心人驿站" }
                },
            ]
        },
        {
            path: '/articles',
            name: 'articles',
            component: Layout,
            children: [
                {
                    path: "",
                    name: "Articles",
                    hidden: true,
                    component: () => import("./pages/type"),
                    meta: { title: "有心人驿站" }
                },
            ]
        },
        {
            path: '/home',
            name: 'home',
            component: Layout,
            children: [
                {
                    path: "",
                    hidden: true,
                    redirect: '/',
                    component: () => import("./pages/type"),
                    meta: { title: "有心人驿站" }
                },
            ]
        },
        {
            path: '/about',
            name: 'home',
            component: Layout,
            meta: { title: "有心人驿站-关于" }
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