import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDetailes from '@/views/EventDetailes.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'EventDetailes',
      props:true,
      component: EventDetailes
    },
    {
      path: '/about',
      name: 'about',    
      component: About
    }
  ],
  linkActiveClass:'active'
})

export default router
