import Vue from 'vue'
import App from './App.vue'

import {store} from './store/'; // подключение const store
import {router} from './routes.js';

new Vue({
  el: '#app',
  store, // ES6. equals store: store
  router,
  render: h => h(App)
})
