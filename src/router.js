import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Articles from './pages/articles'
import Admin from './pages/admin'

Vue.use(Router);



export default new Router({
    routes:[
       {
           path:'/',
           name:'home',
           component:Home,
       },
       {
            path:'/login',
            name:'login',
            component:Login,
       },
       {
           path:'/articles',
           name:'articles',
           component:Articles,
       },
        {
            path:'/admin',
            name:'admin',
            component:Admin,
        }
    ]
});