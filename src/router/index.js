import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import User from '@/views/system/user/User.vue'
import Role from '@/views/system/role/Role.vue'
import Position from '@/views/system/position/Position.vue'
import Menu from '@/views/system/menu/Menu.vue'
import Diction from '@/views/system/diction/Diction.vue'
import Department from '@/views/system/department/Department.vue'
import Customer from '@/views/crm-pool/Customer.vue'
import Main from '@/components/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/", 
    component: Home,
    children: [
      {
        path: '/',
        name: 'main',
        component: Main
      },
      {
        path: '/system/user/index',
        name: 'user',
        component: User
      },
      {
        path: '/system/role/index',
        name: 'role',
        component: Role
      },
      {
        path: '/system/post/index',
        name: 'position',
        component: Position
      },
      {
        path: '/system/menu/index',
        name: 'menu',
        component: Menu
      },
      {
        path: '/system/dict/index',
        name: 'diction',
        component: Diction
      },
      {
        path: '/system/dept/index',
        name: 'department',
        component: Department
      },
      {
        path: '/crm/pool/list',
        name: 'customer',
        component: Customer
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
