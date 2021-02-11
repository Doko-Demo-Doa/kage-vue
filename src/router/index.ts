import {
  createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw,
} from 'vue-router';
import Editor from '@/views/editor.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
];

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
