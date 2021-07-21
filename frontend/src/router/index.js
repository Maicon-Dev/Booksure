import { createRouter, createWebHashHistory } from 'vue-router'
import LivrosALugar from '@/components/LivrosAlugar'

const routes = [
  {
    path: '/',
    name: 'LivrosAlugar',
    component: LivrosALugar
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
