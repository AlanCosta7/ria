
const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: 'auth', name: 'login', component: () => import('pages/auth/Auth.vue') },
      { path: 'empresas', name: 'empresas', component: () => import('pages/auth/AuthAgencia.vue') }
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'interesses', component: () => import('pages/Index.vue') },
      { path: 'orcamento', name: 'orcamento', component: () => import('pages/Orcamento.vue') },
      { path: 'viagens', name: 'viagens', component: () => import('pages/Viagens.vue') },
      { path: 'rotas', name: 'rotas', component: () => import('pages/Rotas.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
