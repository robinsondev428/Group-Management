import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';
import DrinkSaltWater from '../components/DrinkSaltWater.vue';
import Layout from "../components/Layout.vue";

const routes = [
  {
    path:"/",
    name:'Home',
    component: Home,
    children: [
      {
        path: "drink-salt-water",
        component: DrinkSaltWater,
      },
      {
        path: "landing-page",
        name:"Layout",
        component: Layout,
      }
    ]
  },
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
