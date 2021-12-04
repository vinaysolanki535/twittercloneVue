import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

const firebaseConfig = {
  apiKey: 'AIzaSyDNbgNPlTLtxX1qkDXYrbBE_BKYwFECTGk',
  authDomain: 'twitterclone-4724f.firebaseapp.com',
  projectId: 'twitterclone-4724f',
  storageBucket: 'twitterclone-4724f.appspot.com',
  messagingSenderId: '392938957016',
  appId: '1:392938957016:web:75fa73b3ce6c9f9b8e0fad',
  measurementId: 'G-GN8BL3SRNW',
}

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged((user) => {
  console.log('user', user)
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
