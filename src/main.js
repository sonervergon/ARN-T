// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueResource from 'vue-resource'
import * as firebase from 'firebase'
import VueFire from 'vuefire'
import {store} from './store'

Vue.use(VueFire)
Vue.use(VueResource)
Vue.use(Buefy)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCmwPm5-wvHziHo-Y1ZfNYa7rqLCPYyZNw',
      authDomain: 'arn-t-f8898.firebaseapp.com',
      databaseURL: 'https://arn-t-f8898.firebaseio.com',
      projectId: 'arn-t-f8898',
      storageBucket: 'arn-t-f8898.appspot.com'
    })
  }
})
