import { createRouter, createWebHistory } from 'vue-router'
import componenteHome from '../components/componenteHome.vue'
import verUsuario from '../components/verUsuario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: componenteHome
    },
    {
      path: '/verUsuario',
      name: 'VerUsuario',
      component: verUsuario
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
  ]
})

export default router
