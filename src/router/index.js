import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue';
import UserLogin from '../components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TaskList,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: UserLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
