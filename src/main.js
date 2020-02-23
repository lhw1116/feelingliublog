import Vue from 'vue'
import routers from './router'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';
import VueCookie from 'vue-cookie'

Vue.use(VueAxios,axios);
Vue.use(ElementUI);
Vue.use(VueCookie);

axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.status == 0){
    return res.data
  }else if (res.status == 10){
    window.location.href = '/#/login';
  } else{
    alert(res.msg)
  }
});


new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')