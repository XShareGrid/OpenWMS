import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/components/layout/WMSView.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Index.vue'),
      },
    ],
  },
  {
    path: '/wareManage',
    name: 'wareManage',
    component: Layout,
    children: [
      {
        path: 'wareList',
        name: 'wareList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/warehouse/WareList.vue'),
        meta: { hidden: false, requireAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
