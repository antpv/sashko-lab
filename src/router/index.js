import Vue from 'vue';
import VueRouter from 'vue-router';
import loginPage from '../pages/login_page.vue';
import registerPage from '../pages/register_page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: loginPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: registerPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
