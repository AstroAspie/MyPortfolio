import { createRouter, createWebHistory } from 'vue-router'

const appRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsPageView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogPageView.vue')
  },
  {
    path: '/project/:id',
    name: 'project-detail',
    component: () => import('../views/ProjectDetailView.vue')
  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: () => import('../views/BlogPostView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: appRoutes
})

export default router
