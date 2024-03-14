import Vue from 'vue';
import Router from 'vue-router';
import pLogin from '../views/auth/login.vue';
import pDashboard from '../views/dashboard/p-dashboard.vue';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: pLogin,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: pDashboard,
  },

  {
    path: '/',
    redirect: {
      name: 'dashboard',
    },
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
