import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store'

Vue.config.productionTip = false

/* Vue.prototype.$store = store  通过$store 访问 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
