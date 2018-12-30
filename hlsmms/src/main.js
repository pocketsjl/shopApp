import Vue from 'vue'
import App from './App.vue'
import router from './router'
//饿了么ui
import './plugins/element.js'

//引入公共样式
import './assets/style/public.css'

//引入axios
import axios from 'axios'

//把axios挂载到vue的原型上，以后vue实例中就可以无限使用(页面组件中使用)
Vue.prototype.axios = axios;
//引入qs处理axios的post参数
import qs from 'qs'
//挂载到原型上
Vue.prototype.qs = qs;



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
