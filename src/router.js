import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Network from './pages/network'
import Docker from './pages/docker'
import Leetcode from './pages/leetcode'
import Datastrut from './pages/datastrut'
import Linux from './pages/linux'
import K8S from './pages/k8s'
import Nginx from './pages/nginx'
import Admin from './pages/admin'
import About from './pages/about'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/docker',
            name: 'docker',
            component: Docker,
        },
        {
            path: '/network',
            name: 'network',
            component: Network,
        },
        {
            path: '/leetcode',
            name: 'leetcode',
            component: Leetcode,
        },
        {
            path: '/datastrut',
            name: 'datastrut',
            component: Datastrut,
        },
        {
            path: '/nginx',
            name: 'nginx',
            component: Nginx,
        },
        {
            path: '/k8s',
            name: 'k8s',
            component: K8S,
        },
        {
            path: '/linux',
            name: 'linux',
            component: Linux,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        }
    ]
});