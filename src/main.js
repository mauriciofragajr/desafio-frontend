import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import routes from './routes';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm');
  }
});

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  store,
});
