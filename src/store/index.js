
import { createStore } from 'vuex'
import userApp from './user'

export default function (/* { ssrContext } */) {
  const Store = new createStore({
    state: userApp.state,
    actions: userApp.actions,
    getters: userApp.getters,
    mutations: userApp.mutations,
    strict: false
  })

  return Store
}
