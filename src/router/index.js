import { createRouter, createWebHistory } from 'vue-router'
import componenteHome from '../components/componenteHome.vue'
import componenteListaAnuncio from '../components/componenteListaAnuncios.vue'
import saveComponent from '../components/saveComponent.vue'
import componenteVerReserva from '../components/componenteVerReserva.vue'
import componenteVerAnuncio from '../components/componenteVerAnuncio.vue'
import componenteListaReservas from '../components/componenteListaReservas.vue'
import verUsuario from '../components/verUsuario.vue'
import componenteExamen1 from '../components/componenteExamen1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: componenteHome
    },
    {
      path: '/listaViviendas',
      name: 'ListaViviendas',
      component: componenteListaAnuncio
    },
    {
      path: '/listaViviendas/:localidad',
      name: 'ListaViviendasLocalidad',
      component: componenteListaAnuncio
    },
    {
      path: '/crearAnuncio',
      name: 'CrearAnuncio',
      component: saveComponent
    },
    {
      path: '/verAnuncio/:id',
      name: 'VerAnuncio',
      component: componenteVerAnuncio
    }
    ,
    {
      path: '/listaReservas',
      name: 'ListaReservas',
      component: componenteListaReservas
    },
    {
      path: '/verReserva/:id',
      name: 'VerReservas',
      component: componenteVerReserva
    },
    {
      path: '/verUsuario',
      name: 'VerUsuario',
      component: verUsuario
    },
    {
      path: '/verComponente',
      name: 'verComponente',
      component: componenteExamen1
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
