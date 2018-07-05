// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import custom from './menu'
import http from './server'
import store from './store'
import 'font-awesome/css/font-awesome.css'
Vue.use(custom)
Vue.config.productionTip = false
Vue.prototype.$get=http.get
Vue.prototype.$post=http.post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
