import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  store,
});
