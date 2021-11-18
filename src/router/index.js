import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import App from '../App.vue';

// Modulo de dashboard: 
import DashBoard from '@/views/DashBoard.vue';
import MonthlyPayment from '@/views/MonthlyPayment.vue';

// import { component } from 'vue/types/umd';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'App',
    component: App, children: [
      {
        path: 'dashboard',
        component: DashBoard
      }
    ],
    props: true
  }, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //() => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard, children: [
      {
        path: 'mensualidades',
        component: MonthlyPayment
      }
    ],
    props: true
  },
  // {
  //   path: '/dashboard/mensualidades',
  //   name: 'MonthlyPayment',
  //   component: () => import('../views/MonthlyPayment.vue'),
  //   props: true
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
