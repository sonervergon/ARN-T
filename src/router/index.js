import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/start'
import plainText from '@/components/plainText'
import simple from '@/components/simple'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/simple',
      name: 'simple',
      component: simple,
      children: [
        {
          path: 'plain-text',
          component: plainText
        }
      ]
    }
  ]
})
