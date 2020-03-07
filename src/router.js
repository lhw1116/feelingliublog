import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Articles from './pages/articles'
import Admin from './pages/admin'

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