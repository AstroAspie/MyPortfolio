import { createRouter, createWebHistory } from 'vue-router'

const appRoutes = [
  {
    path: '/',
    name: 'home',
    meta: { breadcrumb: 'Home' },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { breadcrumb: 'About' },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    meta: { breadcrumb: 'Projects' },
    component: () => import('../views/ProjectsPageView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: { breadcrumb: 'Blog' },
    component: () => import('../views/BlogPageView.vue')
  },
  {
    path: '/project/:id',
    name: 'project-detail',
    meta: { breadcrumb: 'Project Details' },
    component: () => import('../views/ProjectDetailView.vue')
  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    meta: { breadcrumb: 'Post' },
    component: () => import('../views/BlogPostView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: { breadcrumb: 'Not Found' },
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: appRoutes
})

export default router
