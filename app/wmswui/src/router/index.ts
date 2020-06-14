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
        component: () => import('@/views/dashboard/DashBoard.vue'),
        meta: {title: '首页'},
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
        component: () => import(/* webpackChunkName: "about" */ '../views/warehouse/WareHouseList.vue'),
        meta: { hidden: false, requireAuth: true, title: '仓库列表' },
      },
      {
        path: 'wareDetails',
        name: 'wareDetails',
        component: () => import('../views/warehouse/WareHouseDetails.vue'),
        meta: { hidden: false, requireAuth: true, title: '仓库详情' },
      },
      {
        path: 'reservoirArea',
        name: 'reservoirArea',
        component: () => import('../views/warehouse/ReservoirArea.vue'),
        meta: { hidden: false, requireAuth: true, title: '库区' },
      },
      {
        path: 'wareLocation',
        name: 'wareLocation',
        component: () => import('../views/warehouse/WareHouseLocation.vue'),
        meta: { hidden: false, requireAuth: true, title: '仓库库位管理' },
      },
      {
        path: 'reservoirLocation',
        name: 'reservoirLocation',
        component: () => import('../views/warehouse/ReservoirLocation.vue'),
        meta: { hidden: false, requireAuth: true, title: '库区库位管理' },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `wmsui/${to.meta.title}`;
  next();
});
export default router;
