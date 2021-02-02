import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
import Home from '@/views/Home.vue'

import textRouter from './modules/text.module'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        name: 'Home',
        path: '',
        component: Home
      }
    ]
  },

  textRouter,

  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
