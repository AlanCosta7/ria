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
      'Icecream',
      'Eclair',
      'Cupcake',
      'Gingerbread'
    ]
  }
}
