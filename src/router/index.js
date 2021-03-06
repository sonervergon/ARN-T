import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/start'
import plainText from '@/components/simple/plainText'
import simple from '@/components/simple/simple'
import overview from '@/components/overview'
import login from '@/components/login'
import AuthGuard from './auth-guard'
import advanced from '@/components/advanced/advanced'
import traffic from '@/components/advanced/traffic'
import admin from '@/components/admin/admin'
import createUser from '@/components/admin/createUser'

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
      path: '/admin',
      name: 'admin',
      component: admin,
      beforeEnter: AuthGuard,
      children: [
        {
          path: 'create-user',
          component: createUser
        }
      ]
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview,
      beforeEnter: AuthGuard
    },
    {
      path: '/advanced',
      name: 'advanced',
      component: advanced,
      beforeEnter: AuthGuard,
      children: [
        {
          path: 'SL',
          component: traffic
        }
      ]
    }
  ]
})
