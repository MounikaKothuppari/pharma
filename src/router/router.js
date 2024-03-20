import Vue from 'vue';
import Router from 'vue-router';
import pLogin from '../views/auth/login.vue';
import pDashboard from '../views/dashboard/p-dashboard.vue';
import pDashboardCards from '../views/dashboard/p-dashboard-cards.vue';
import pSampleTable from '../views/dashboard/p-sample-table.vue';

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
    children: [
      {
        path: '/',
        name: 'p-d-cards',
        component: pDashboardCards,
      },
      {
        path: 'sample',
        name: 'p-d-sample-table',
        component: pSampleTable,
      },
      {
        path: '/',
        redirect: {
          name: 'p-d-cards',
        },
      },
    ],
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
