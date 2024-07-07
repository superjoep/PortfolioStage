import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/projectsView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/skillsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contactView.vue')
    },
    {
      path: '/singleProject/:id',
      name: 'singleProject',
      component: () => import('../views/singleProjectView.vue')
    },
    {
      path: '/contact/chat',
      name: 'chatbot',
      component: () => import('../views/Chatbot/chatPage.vue')
    },
    
  ]
})

export default router
