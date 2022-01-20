import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import PageNotFound from '@/views/PageNotFound.vue';

const routes: RouteRecordRaw[] = [
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
