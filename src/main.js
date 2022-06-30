import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$urlServiceUser = 'http://127.0.0.1:8080/api/';
Vue.prototype.$urlServiceMonthlyPay = 'http://127.0.0.1:8000/api/system-admin';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
