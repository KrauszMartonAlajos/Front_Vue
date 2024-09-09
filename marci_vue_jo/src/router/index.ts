import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserListView from '@/views/UserListView.vue'
import UserCreateView from '@/views/UserCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: UserListView
    },
    {
      path: '/users/:id/create',
      name: 'users_create',
      component: UserCreateView
    },
    {
      path: '/users/:id/edit',
      name: 'users_edit',
      component: UserCreateView
    }
  ]
})

export default router
