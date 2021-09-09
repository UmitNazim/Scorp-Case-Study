
// import * as VueRouter from 'vue-router';
// import Deneme from '@/views/deneme.vue'
// import DenemeSecond from '@/views/deneme2.vue'

// const routes = [
//   {
//     name: 'deneme',
//     path: '/deneme',
//     component: Deneme
//   },
//   {
//     name: 'deneme-second',
//     path: '/deneme-second',
//     component: DenemeSecond,
//   },
// ];
// export default VueRouter.createRouter({
//   history: VueRouter.createWebHistory(),
//   routes,
// });


import { createWebHistory, createRouter } from "vue-router";
import Deneme from '@/views/deneme.vue'
import DenemeSecond from '@/views/deneme2.vue'

const routes = [
  {
    name: 'deneme',
    path: '/deneme',
    component: Deneme
  },
  {
    name: 'deneme-second',
    path: '/deneme-second',
    component: DenemeSecond,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;