import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/TaskView.vue'),
      children: [
        {
          path: 'taskAll',
          name: 'taskAll',
          component: () => import('../views/taskAll.vue')
        },
        {
          path: 'taskYet',
          name: 'taskYet',
          component: () => import('../views/taskYet.vue')
        },
        {
          path: 'taskDone',
          name: 'taskDone',
          component: () => import('../views/taskDone.vue')
        }
      ]
    }
  ]
})

export default router
