import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import UsersList from '@/views/UsersList.vue';
import PageNotFound from '@/views/PageNotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/sign_in',
    name: 'sign_in',
    component: SignIn,
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: SignUp,
  },
  {
    path: '/user_list',
    name: 'user_list',
    component: UsersList,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
