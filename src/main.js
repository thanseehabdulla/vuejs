import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
