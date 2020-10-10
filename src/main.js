import Vue from 'vue'
import routers from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import { message } from 'ant-design-vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(Antd)

message.config({
  duration: 2,// 持续时间
  top: `100px`, // 到页面顶部距离
  maxCount: 3 // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

routers.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

routers.afterEach(() => {
  NProgress.done()
})

new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')