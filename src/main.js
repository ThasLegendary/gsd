// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import { VueAuthenticate } from 'vue-authenticate'
import axios from 'axios';

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

export const auth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: 'http://localhost:8081',
  providers: {
    github: {
      clientId: '1c9dc7cfc0721f2751e6',
      redirectUri: 'http://localhost:8081/auth/callback'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
