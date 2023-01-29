import { createRouter, createWebHistory } from 'vue-router'

import Home from '$views/+page.vue'
import Conversations from '$views/conversations/+page.vue'
import BroadcastTemplates from '$views/broadcast-templates/+page.vue'
import Notifications from '$views/notifications/+page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/conversations',
      name: 'Conversations',
      component: Conversations
    },
    {
      path: '/broadcast-templates',
      name: 'BroadcastTemplates',
      component: BroadcastTemplates
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    }
  ]
})

export default router
