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
        var data = response.data.user

        LocalStorage.set('user', data)
        return true
      }
    }).catch( error => {
      console.log('error user', error)
      Notify.create({
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
      commit('setCurrentUser', response.data)
      var data = {
        token: response.data.token,
        type: response.data.type
      }
      LocalStorage.set('user', data)
      return response.data
    }
  }).catch( error => {
    console.log(error)
    Notify.create({
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
      var data = response.data.user

      LocalStorage.set('user', data)
      return true
    }
  }).catch( error => {
    console.log('error user', error)
    Notify.create({
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
    commit('setCurrentUser', response.data)
    var data = {
      token: response.data.token,
      type: response.data.type
    }
    LocalStorage.set('user', data)
    return response.data
  }
}).catch( error => {
  console.log(error)
  Notify.create({
    message: 'Usuário já existe',
    timeout: 3000,
    color: 'negative'
  })
  return error
})

}


export function salvarInteresses({ commit, state }, payload) {

  var path = 'https://ria-back.herokuapp.com/users'

  return axios({
    method: 'PUT',
    url: path,
    data: payload,
    headers: {
      "Content-Type": "application/json",
    }
  }).then(function (response) {
    Notify.create({
      message: 'Dados salvos com sucesso',
      timeout: 3000,
      color: 'positive'
    })

  }).catch( error => {
    console.log(error)
    Notify.create({
      message: 'Erro ao salvar dados',
      timeout: 3000,
      color: 'negative'
    })
    return error
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

// Precisa ser implementado
export function saveInstitution ({ commit, state }, payload) {
  // axios
 console.log('saveInstitution', payload)
 commit('setInstitution', payload)

 return payload
}

export function getListStudent ({ commit, state }) {
  // axios
  if (!state.currentUser && state.currentUser.token) {
    return null
  } else {
    var path = "https://reset-back-end.herokuapp.com/mentor/students"
    var token = state.currentUser.token


    return axios({
      method: 'GET',
      url: path,
      headers: {
        "Content-Type": "application/json",
        token: token
      }
    }).then(function (response) {

      if (response.status == "200") {
        commit('setListStudent', response.data)
      //  console.log('signInWithCpfAndPassword', response.data)
      }
    })
  }
}

export function getInstituicao ({ commit, state }, payload) {
  // axios
  var path = `https://reset-back-end.herokuapp.com/institution/${payload}`

  return axios({
    method: 'GET',
    url: path
  }).then(function (response) {

    if (response.status == "200") {
      return response.data
      //console.log('setInstituicao', response.data)
    }
  })
}

export function getInstituicaoAll ({ commit, state }) {
  // axios
  var path = `https://reset-back-end.herokuapp.com/institution`

  return axios({
    method: 'GET',
    url: path
  }).then(function (response) {

    if (response.status == "200") {
      commit('setInstituicaoAll', response.data)

      return response.data
      //console.log('setInstituicao', response.data)
    }
  })
}

export function setMentoriar ({ commit, state }, payload) {
  // axios
  var path = "https://reset-back-end.herokuapp.com/mentor/students"
  var token = state.currentUser.token
  //console.log('setMentoriar', token, payload)

  var data = {
    student: payload
  }

  return axios({
    method: 'POST',
    url: path,
    headers: {
      "Content-Type": "application/json",
      token: token
    },
    data: data,
  }).then(function (response) {
   // console.log('setMentoriar', response)
    if (response.status == "200") {
      return response.data
      //console.log('setInstituicao', response.data)
    }
  }).catch(error => {
    console.log('setMentoriar', error)

  })
}

export function getTrilha ({ commit, state }, payload) {
  // axios
  var path = `https://reset-back-end.herokuapp.com/journey/${payload}`

  return axios({
    method: 'GET',
    url: path,
  }).then(function (response) {

    if (response.status == "200") {
       commit('setTrilha', response.data)
      //console.log('setTrilha', response)
    }
  })
}

export function getAllJornada ({ commit, state }) {
  // axios
  var path = "https://reset-back-end.herokuapp.com/journey"

  return axios({
    method: 'GET',
    url: path,
  }).then(function (response) {

    if (response.status == "200") {
      commit('setListaTrilha', response.data)
      //console.log('setListaTrilha', response)
    }
  })
}

export function getListMentoriados ({ commit, state }) {
  // axios
  var path = "https://reset-back-end.herokuapp.com/mentor/students"
  var token = state.currentUser.token

  return axios({
    method: 'GET',
    url: path,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  }).then(function (response) {
    if (response.status == "200") {
      commit('setlistMentoriados', response.data)
      //console.log('signInWithCpfAndPassword', response.data)
    }
  }).catch(error => {
    console.log('error', error)

  })
}
