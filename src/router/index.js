import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import('@/views/HomePage/'),
    meta: {
      pageTitle: 'page.homePage',
      requiresLogin: false,
      permissions: null,
    },
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('@/views/ContactUs'),
    meta: {
      pageTitle: 'page.contactUs',
      requiresLogin: false,
      permissions: null,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
