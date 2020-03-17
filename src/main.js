import Vue from 'vue'
import routers from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(ElementUI);


axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// axios.interceptors.response.use(function(response){
//   let res = response.data;
//   if (res.status == 0){
//     return res.data
//   }else if (res.status == 10){
//     window.location.href = '/#/login';
//   } else{
//     alert(res.msg)
//   }
// });



new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')