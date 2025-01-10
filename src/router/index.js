import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import('../views/CertificatesView.vue')
    },
    {
      path: '/writeups',
      name: 'writeups',
      component: () => import('../views/WriteUpsView.vue')
    },
    {
      path: '/writeup/:id',
      name: 'writeup',
      component: () => import('../views/SingleWriteUpView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
