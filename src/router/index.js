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
      path: '/podcast/:id/details',
      name: 'details',
      component: () => import('../views/PodcastDetails.vue'),
      props: route => ({ id: parseInt(route.params.id) })
    },
    {
      path: '/episode',
      name: 'episode',
      component: () => import('../views/EpisodeDetails.vue')
    }
  ]
})

export default router
