export default function () {
  return {
    currentUser: null,
    token: null,
    selectViagem: null,
    listPoints: [],
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
    listPackages: [],
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
