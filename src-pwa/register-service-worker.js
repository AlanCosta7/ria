import { register } from 'register-service-worker'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready () {
    if (process.env.DEV) {
     // ('O aplicativo está sendo veiculado no cache por um trabalhador do serviço. ready')
    }
  },

  registered (/* registration */) {
    if (process.env.DEV) {

     // ('O trabalhador do serviço foi registrado. registered')
    }
  },

  cached (/* registration */) {

    if (process.env.DEV) {

      // ('O conteúdo foi armazenado em cache para uso offline. cached')
    }
  },

  updatefound (/* registration */) {
    if (process.env.DEV) {
     //('O novo conteúdo está sendo baixado. updatefound')
    }
  },

  updated (registration) {
    location.reload()
  },

  offline () {
    if (process.env.DEV) {
      console.log('modo offline')
    }
  },

  error (err) {
    if (process.env.DEV) {
    }
  }
})
