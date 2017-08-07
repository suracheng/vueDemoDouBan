import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyLoad from 'vue-lazyload';
import './assets/reset.less';
import './assets/list.less';

Vue.use(VueLazyLoad, {
  loading : 'http://img3.imgtn.bdimg.com/it/u=4122560844,1470181994&fm=214&gp=0.jpg'
});

new Vue({
  el: '#app',
  router,
  store,
  ...App
});


