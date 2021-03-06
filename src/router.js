import Vue from 'vue';
import Router from 'vue-router';
import Menu from './Views/Menu.vue';
import Play from './Views/Play.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: Menu,
    },
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/play',
      name: 'play',
      component: Play,
    },
  ],
});
