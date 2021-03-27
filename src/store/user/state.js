export default function () {
  return {
    currentUser: null,
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
