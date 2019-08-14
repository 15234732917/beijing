// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router/index'
import store from './store/index'

import axios from "axios";
axios.defaults.withCredentials=false;
Vue.prototype.axios=axios;


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app')
