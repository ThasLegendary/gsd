import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/auth/callback',
      name: 'AuthCallbak',
      component: LoginPage
    }
  ]
})
