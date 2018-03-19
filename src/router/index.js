import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/start'
import plainText from '@/components/plainText'
import simple from '@/components/simple'
import overview from '@/components/overview'
import login from '@/components/login'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'start',
      component: start,
      beforeEnter: AuthGuard
    },
    {
      path: '/simple',
      name: 'simple',
      component: simple,
      beforeEnter: AuthGuard,
      children: [
        {
          path: 'plain-text',
          component: plainText
        }
      ]
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview,
      beforeEnter: AuthGuard
    }
  ]
})
