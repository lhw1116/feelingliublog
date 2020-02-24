import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Articles from './pages/articles'
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.use(Router);
locale.use(lang)

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
       }
    ]
});