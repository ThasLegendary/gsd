// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import GithubAuth from './store/AuthStore'
Vue.use(GithubAuth);

// this make the auth available in all component
// is this the right way
Vue.prototype.$githubAuth = GithubAuth;

/*
import AuthStorage from './AuthStorage.js'
Vue.use(AuthStorage)
*/
Vue.config.productionTip = false
/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!AuthStorage.getToken()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

axios.defaults.headers.common = {
  'Authorization': `Bearer ${AuthStorage.getToken()}`
}

axios.interceptors.response.use(function (response) {
  if (response.status === 401) {
    AuthStorage.destroyToken()
  }
  return response
}, function (error) {
  return Promise.reject(error)
})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
