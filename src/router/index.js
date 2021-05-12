import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../pages/login_page.vue';
import RegisterPage from '../pages/register_page.vue';
import UserInfoPage from '../pages/user_info_page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  {
    path: '/user_info',
    name: 'UserInfoPage',
    component: UserInfoPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
