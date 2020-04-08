import Vue from 'vue'
import routers from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(ElementUI);
Vue.use(ViewUI);

// 设置title
// routers.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })


axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.code == 200){
    return res.data
  } else {
    alert(res.msg)
    window.location.href = '/login';
  }
});



new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')