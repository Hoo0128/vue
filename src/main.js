import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3006';
Vue.prototype.$axios = axios;

import "./assets/styles/base.css";
import "./assets/styles/index.css";

import "bootstrap/dist/css/bootstrap.css"

import Pannel1 from './components/Panne1G.vue'
// 在main.js
// 在全局注册 过滤器
// Vue.filter('过滤器名称', '对应的处理函数')
Vue.filter('toDown', (val) => {
  return val.toLowerCase()
})

Vue.filter('toReverse', (val,split) => {// val 字符串
  return val.split('').reverse().join(split || '')
})

Vue.component("PannelG", Pannel1)

new Vue({
  render: h => h(App),
}).$mount('#app')


