import axios from 'axios'
import { LocalStorage } from 'quasar'
import { Notify } from 'quasar'

export function signInWithEmailAndPassword ({ commit }, payload) {
    var path = 'https://ria-back.herokuapp.com/auth/users/login'

    return axios({
      url: path,
      method: 'POST',
      data: {
        email: payload.email,
        password: payload.password
      },
    }).then(function (response) {

      if (response.status == "200") {
        commit('setCurrentUser', response.data.user)
        commit('setToken', response.data.token)

        var data = response.data.user

        LocalStorage.set('user', data)
        LocalStorage.set('token', response.data.token)
        return true
      }
    }).catch( error => {
      console.log('error user', error)
      Notify.create({
        position: 'top',
        message: 'Senha inválida ou usuário não existe',
        timeout: 3000,
        color: 'negative'
      })
      return false

    })

}

export function createUserWithEmailAndPassword ({ commit, state }, payload) {
  console.log('createUserWithEmailAndPassword', payload)

  var path = 'https://ria-back.herokuapp.com/auth/users/register'

  var data = {
    email: payload.email,
    password: payload.password
  }

  return axios({
    method: 'POST',
    url: path,
    data: data,
    headers: {
      "Content-Type": "application/json",
    }
  }).then(function (response) {
    if (response.status == "201") {
      commit('setCurrentUser', response.data.user)
      commit('setToken', response.data.token)

      var data = response.data.user

      LocalStorage.set('user', data)
      LocalStorage.set('token', response.data.token)
      return true
    }
  }).catch( error => {
    console.log(error)
    Notify.create({
      position: 'top',
      message: 'Usuário já existe',
      timeout: 3000,
      color: 'negative'
    })
    return error
  })

}


export function signInWithEmailAndPasswordProviders ({ commit }, payload) {
  var path = 'https://ria-back.herokuapp.com/auth/providers/login'

  return axios({
    url: path,
    method: 'POST',
    data: {
      email: payload.email,
      password: payload.password
    },
  }).then(function (response) {

    if (response.status == "200") {
      commit('setCurrentUser', response.data.user)
      commit('setToken', response.data.token)

      var data = response.data.user

      LocalStorage.set('user', data)
      LocalStorage.set('token', response.data.token)
      return true
    }
  }).catch( error => {
    console.log('error user', error)
    Notify.create({
      position: 'top',
      message: 'Senha inválida ou usuário não existe',
      timeout: 3000,
      color: 'negative'
    })
    return false

  })

}

export function createUserWithEmailAndPasswordProviders ({ commit, state }, payload) {
console.log('createUserWithEmailAndPassword', payload)

var path = 'https://ria-back.herokuapp.com/auth/providers/register'

var data = {
  email: payload.email,
  password: payload.password
}

return axios({
  method: 'POST',
  url: path,
  data: data,
  headers: {
    "Content-Type": "application/json",
  }
}).then(function (response) {
  if (response.status == "201") {
    commit('setCurrentUser', response.data.user)
    commit('setToken', response.data.token)

    var data = response.data.user

    LocalStorage.set('user', data)
    LocalStorage.set('token', response.data.token)
    return true
  }
}).catch( error => {
  console.log(error)
  Notify.create({
    position: 'top',
    message: 'Usuário já existe',
    timeout: 3000,
    color: 'negative'
  })
  return error
})

}


export function salvarInteresses({ commit, state }, payload) {
  console.log(state.token)
  var token = state.token
  var path = 'https://ria-back.herokuapp.com/users'
  return axios({
    method: 'PUT',
    url: path,
    data: payload,
    headers: {
      "Authorization": token,
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    console.log(response)
    Notify.create({
      position: 'top',
      message: 'Dados salvos com sucesso',
      timeout: 3000,
      color: 'positive'
    })
    return true

  }).catch( error => {
    console.log(error)
    Notify.create({
      position: 'top',
      message: 'Erro ao salvar dados',
      timeout: 3000,
      color: 'negative'
    })
    return false
  })

}

export function getPackagesAuth ({ commit, state }) {
  // axios
  if (!state.currentUser) {
    return null
  } else {
    var token = state.token

    var path = "https://ria-back.herokuapp.com/users/packages/matched"

    return axios({
      method: 'GET',
      url: path,
      headers: {
        "Authorization": token,
        "Content-Type": "application/json",
      }
    }).then(function (response) {
      console.log(response)
      if (response.status == "200") {
        commit('setListPackages', response.data)
      }
    }).catch( error => {
      console.log(error)
      Notify.create({
        position: 'top',
        message: 'Erro ao carregar viagens',
        timeout: 3000,
        color: 'negative'
      })
      return false
    })
  }
}

export function getPackages ({ commit, state }, payload) {
  // axios

    var path = "https://ria-back.herokuapp.com/packages"

    return axios({
      method: 'GET',
      url: path,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      }
    }).then(function (response) {
      console.log(response)
      if (response.status == "200") {
        commit('setListPackages', response.data)
      }
    }).catch( error => {
      console.log(error)
      Notify.create({
        position: 'top',
        message: 'Erro ao carregar viagens',
        timeout: 3000,
        color: 'negative'
      })
      return false
    })
}


export function getPoints ({ commit, state }, payload) {
  // axios
    console.log('getPoints', payload)

    var path = `https://ria-back.herokuapp.com/packages/${payload}`

    return axios({
      method: 'GET',
      url: path,
      headers: {
        "Content-Type": "application/json",
      }
    }).then(function (response) {
      console.log(response)
      if (response.status == "200") {
        commit('setListPoints', response.data)
      }
    }).catch( error => {
      console.log(error)
      Notify.create({
        position: 'top',
        message: 'Erro ao carregar dados da viagem',
        timeout: 3000,
        color: 'negative'
      })
      return false
    })
}


export function saveProfile ({ commit, state }, payload) {
  // axios
  var token = state.currentUser.token
  var path
  var student = "https://reset-back-end.herokuapp.com/student"
  var mentor = "https://reset-back-end.herokuapp.com/mentor"

  if(payload.type === 'student') {
    path = student
  } else if (payload.type === 'mentor') {
    path = mentor
  } else {
    return
  }

  return axios({
    method: 'PUT',
    url: path,
    data: state.currentUser,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  }).then(function (response) {
    //console.log('saveProfile', response)
    //commit('setCurrentUser', state.currentUser)
    return response

  }).catch( error => {
    console.log(error)

    Notify.create({
      // only required parameter is the message:
      position: 'top',
      message: 'Erro ao tentar atualizar dados',
      timeout: 3000,
      color: 'negative'
    })
    return error
  })

}

export function loadUser ({ commit }, payload) {
  var token = payload.token
  var type = payload.type
  var student = "https://reset-back-end.herokuapp.com/student"
  var mentor = "https://reset-back-end.herokuapp.com/mentor"
  var path

  if(type === 'student') {
    path = student
  } else if (type === 'mentor') {
    path = mentor
  } else {
    return
  }

  return axios({
    method: 'GET',
    url: path,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  }).then(function (response) {
    console.log('saveProfile', response.data)
    response.data.token = token
    commit('setCurrentUser', response.data)
    return response

  }).catch( error => {
    console.log(error)

    Notify.create({
      // only required parameter is the message:
      position: 'top',
      message: 'Erro ao tentar carregar dados',
      timeout: 3000,
      color: 'negative'
    })
    return error
  })
}

export function logout ({ commit, state }) {
  // axios
  commit('setCurrentUser', null)
  LocalStorage.set('user', null)
  return true
}
