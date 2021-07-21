import { createRouter, createWebHashHistory } from 'vue-router'
import LivrosALugar from '@/views/Livros'

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
