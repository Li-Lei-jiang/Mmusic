import Vue from 'vue'
import App from './App'


import apiReq from './static/http/index.js';
Vue.prototype.$apiReq = apiReq;
// Vue.prototype.$apiReq.BaseUrl = 'http://49.233.66.125:3000';
// Vue.prototype.adminToken = "akjhdfhkl";
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()