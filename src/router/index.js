import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import AuthForm from '../components/AuthForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },

  {
    path: '/login',
    name: 'Login',
    component: AuthForm,
    props: { type: 'login' }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: AuthForm,
    props: { type: 'signup' }
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;
