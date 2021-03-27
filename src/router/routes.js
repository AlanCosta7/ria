
const routes = [
  {
    path: '/auth',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/auth/Auth.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'orcamento', name: 'orcamento', component: () => import('pages/Orcamento.vue') },
      { path: 'viagens', name: 'viagens', component: () => import('pages/Viagens.vue') },
      { path: 'rotas', name: 'rotas', component: () => import('pages/Rotas.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
