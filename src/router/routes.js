
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'interesses', name: 'interesses', component: () => import('pages/Interesses.vue') },
      { path: 'orcamento', name: 'orcamento', component: () => import('pages/Orcamento.vue') },
      { path: '', name: 'viagens', component: () => import('pages/Viagens.vue') },
      { path: 'viagem/:id', name: 'rotas', component: () => import('pages/Rotas.vue') },
      { path: 'auth', name: 'login', component: () => import('pages/auth/Auth.vue') },
      { path: 'empresas', name: 'empresas', component: () => import('pages/auth/AuthAgencia.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
