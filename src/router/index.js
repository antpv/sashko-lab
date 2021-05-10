import Vue from 'vue';
import VueRouter from 'vue-router';
import loginPage from '../pages/login_page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: loginPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
