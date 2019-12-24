import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import { routes } from './router.js'
import 'buefy/dist/buefy.css'


Vue.use(Router);
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router: routes,
  render: h => h(App),
}).$mount('#app')
