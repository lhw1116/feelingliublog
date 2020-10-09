import Vue from 'vue'
import routers from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import router from './router'

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(Antd)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})



axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.code == 200) {
    return res.data
  }
});



new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')