import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Network from './pages/network'
import Docker from './pages/docker'
import Leetcode from './pages/leetcode'
import Admin from './pages/admin'
import About from './pages/about'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
       {
           path:'/',
           name:'home',
           component:Home,
       },
       {
            path:'/docker',
            name:'docker',
            component:Docker,
       },
        {
            path:'/network',
            name:'network',
            component:Network,
        },
        {
            path:'/leetcode',
            name:'leetcode',
            component:Leetcode,
        },
       {
            path:'/login',
            name:'login',
            component:Login,
       },
       {
            path:'/admin',
            name:'admin',
            component:Admin,
       },
       {
            path:'/about',
            name:'about',
            component:About,
       }
    ]
});