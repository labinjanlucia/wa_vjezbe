import { createRouter, createWebHistory } from 'vue-router';
import Proizvodi from '@/views/Proizvodi.vue';
import ProizvodDetalji from '@/views/ProizvodDetalji.vue';

const routes = [
  {
    path: '/proizvodi',
    name: 'Proizvodi',
    component: Proizvodi, 
  },
  {
    path: '/proizvodi/:id',
    name: 'ProizvodDetalji',
    component: ProizvodDetalji, 
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
