import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.use(Router);
Vue.use(ElementUI);
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
        }
    ]
});