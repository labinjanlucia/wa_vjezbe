import { createRouter, createWebHistory } from 'vue-router';
import Proizvodi from "../components/Proizvodi.vue";
import Proizvod from "../components/Proizvod.vue";

const routes = [
  {
    path: '/proizvodi',
    name: 'Proizvodi',
    component: Proizvodi, 
  },
  {
    path: '/proizvod/:id',
    name: 'proizvod',
    component: Proizvod, 
    props: true,
    
  },
  {
    path: '/',
    redirect: '/proizvodi',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
