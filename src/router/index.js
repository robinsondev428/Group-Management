import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const routes = [
  {
    path:'/register',
    name:'Register',
    component:Register,
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
