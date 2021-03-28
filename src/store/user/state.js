export default function () {
  return {
    currentUser: null,
    token: null,
    user: {
      email: '',
      cpf: '',
      name: '',
      budget: '',
      tags: [],
      savedPackages: []
    },
    err: null,
    geoLocation: null,
    tags: [
      'Historia',
      'Museu',
      'Livros',
      'Cultura',
      'Restaurante',
      'Regional',
      'Bebida',
      'Comida',
      'Aventura',
      'Trilha',
      'Cachoeira',
      'Natureza'
    ]
  }
}
