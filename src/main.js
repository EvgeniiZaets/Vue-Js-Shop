import Vue from 'vue'
import App from './App.vue'

import {store} from './store/'; // подключение const store

new Vue({
  el: '#app',
  store, // ES6. equals store: store
  render: h => h(App)
})
