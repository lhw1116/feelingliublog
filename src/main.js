import Vue from 'vue'
import routers from './router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')